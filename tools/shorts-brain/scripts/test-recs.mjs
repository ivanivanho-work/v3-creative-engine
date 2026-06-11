// Regression harness for the OKR Strategic Guidance engine.
// Bundles the real App.jsx and drives parseCSVData → buildRecommendationRows
// with fixtures shaped like the production CSV uploads.
//
// Run: node scripts/test-recs.mjs   (from tools/shorts-brain)

import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';
import path from 'path';

const here = path.dirname(fileURLToPath(import.meta.url));
const entry = path.join(here, '..', 'src', 'App.jsx');
// Keep the bundle inside the workspace so Node can resolve external packages.
const cacheDir = path.join(here, '..', 'node_modules', '.cache');
mkdirSync(cacheDir, { recursive: true });
const outfile = path.join(cacheDir, 'under-test.mjs');

await build({
  entryPoints: [entry],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  logLevel: 'silent',
  // Only bundle local sources; let Node resolve npm packages natively.
  external: ['react', 'react-dom', 'lucide-react', 'firebase', 'firebase/*'],
});

const { parseCSVData, buildRecommendationRows, superClean } = await import(outfile);

// ---------------------------------------------------------------------------
// Fixtures: a Market-Holdback (pct) CSV for India, reporting date 2026-06-10.
// Trend Start 2026-05-01 → 41 days live → mature (>=14d).
// ---------------------------------------------------------------------------
const CSV = [
  'Campaign,Market,Value Type,Slice,Gender,Age,Date,Trend Start Date,DAU-SCT Lift',
  // S1: campaign with NO entry in the structural metadata CSV, negative lift both genders
  'NoMetaCamp,India,Ratio (%),Control,Male,18-24,2026-06-10,2026-05-01,-0.50',
  'NoMetaCamp,India,Ratio (%),Control,Female,18-24,2026-06-10,2026-05-01,-0.60',
  // S2: campaign tagged to a Campaign Hub module — must STILL be evaluated
  //      (the previous hub-tab exclusion zeroed out the matrix when 100% of
  //       holdback campaigns carried a hub tag).
  'HubScaledCamp,India,Ratio (%),Control,Male,18-24,2026-06-10,2026-05-01,-0.70',
  'HubScaledCamp,India,Ratio (%),Control,Female,18-24,2026-06-10,2026-05-01,-0.80',
  // S3: campaign with stat-sig positive gen-pop lift, no metadata entry
  'WinnerCamp,India,Ratio (%),Control,Total,GenPop,2026-06-10,2026-05-01,0.50',
  'WinnerCamp,India,Trend Favorability,Control,Total,GenPop,2026-06-10,2026-05-01,SSP',
  // S4: campaign explicitly targeted Female-only — male cells must stay NA-gated
  'FemTargetCamp,India,Ratio (%),Control,Male,18-24,2026-06-10,2026-05-01,-0.50',
  'FemTargetCamp,India,Ratio (%),Control,Female,18-24,2026-06-10,2026-05-01,-0.40',
  // S6: campaign with positive but non-sig lift — evaluated, but no qualifying signal
  'QuietCamp,India,Ratio (%),Control,Total,GenPop,2026-06-10,2026-05-01,0.20',
].join('\n');

// metaMap shaped exactly like the app's metaLookup (campaignInfo CSV parse)
const metaMap = {
  [superClean('India')]: {
    [superClean('HubScaledCamp')]: {
      market: 'India', tab: 'ScaledCreation', subTab: '', subSubTab: '',
      campaignStartDate: '2026-05-01', campaignEndDate: '', optimisationEndDate: '',
      targeting: { ages: [], genders: [] },
    },
    [superClean('FemTargetCamp')]: {
      market: 'India', tab: '', subTab: '', subSubTab: '',
      campaignStartDate: '2026-05-01', campaignEndDate: '', optimisationEndDate: '',
      targeting: { ages: [], genders: ['female', 'total'] },
    },
  },
};

const acc = parseCSVData(CSV, {}, metaMap, undefined, false, 'India', false, false);
const rows = Object.values(acc);
const regionalData = { India: rows };
const stats = {};
const recs = buildRecommendationRows(regionalData, stats);

const byCamp = (name) => recs.filter(r => r.campaign === name);
const node = (name, m, g, a) => rows.find(r => r.country === name)?.metrics?.[m]?.[g]?.[a];

let failures = 0;
const check = (label, cond, detail) => {
  if (cond) { console.log(`  PASS  ${label}`); }
  else { failures++; console.log(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`); }
};

console.log('\n[S1] Campaign missing from metadata CSV must still be evaluated');
check('male 18-24 lift parsed (not NA)', node('NoMetaCamp', 'DAU-SCT', 'male', '18-24')?.v === -0.5,
  `got ${JSON.stringify(node('NoMetaCamp', 'DAU-SCT', 'male', '18-24')?.v)}`);
check('PAUSE recommendation emitted', byCamp('NoMetaCamp').some(r => r.recommendation === 'PAUSE' && r.age === '18-24'),
  `rows: ${JSON.stringify(byCamp('NoMetaCamp'))}`);

console.log('\n[S2] Campaign Hub module rows are NOW evaluated alongside others');
check('PAUSE rec emitted for hub-tagged campaign with negative lift',
  byCamp('HubScaledCamp').some(r => r.recommendation === 'PAUSE'),
  `rows: ${JSON.stringify(byCamp('HubScaledCamp'))}`);

console.log('\n[S3] Stat-sig positive gen-pop lift produces SCALE');
check('sig flag parsed', node('WinnerCamp', 'DAU-SCT', 'total', 'total')?.sig === 1,
  `got ${JSON.stringify(node('WinnerCamp', 'DAU-SCT', 'total', 'total'))}`);
check('SCALE recommendation emitted', byCamp('WinnerCamp').some(r => r.recommendation === 'SCALE'),
  `rows: ${JSON.stringify(byCamp('WinnerCamp'))}`);

console.log('\n[S4] Explicit targeting still NA-gates non-targeted demographics');
check('male cell NA for female-targeted campaign', node('FemTargetCamp', 'DAU-SCT', 'male', '18-24')?.v === 'NA',
  `got ${JSON.stringify(node('FemTargetCamp', 'DAU-SCT', 'male', '18-24')?.v)}`);
check('female-only PAUSE emitted (no male/common row)',
  byCamp('FemTargetCamp').length === 1 && byCamp('FemTargetCamp')[0].gender === 'FEMALE',
  `rows: ${JSON.stringify(byCamp('FemTargetCamp'))}`);

console.log('\n[S6] Guard-breakdown stats are reported correctly');
check('stats: 5 scanned, 5 evaluated, 1 no-signal, 0 ended',
  stats.total === 5 && stats.evaluated === 5 && stats.noSignal === 1 && stats.skippedEnded === 0,
  `got ${JSON.stringify(stats)}`);
check('no recs for non-sig positive campaign', byCamp('QuietCamp').length === 0,
  `rows: ${JSON.stringify(byCamp('QuietCamp'))}`);

console.log('\n[S5] Cells already paused via the instruction CSV are skipped from directives');
const pausedRows = JSON.parse(JSON.stringify(rows));
pausedRows.forEach(r => {
  Object.values(r.metrics).forEach(genders =>
    Object.values(genders).forEach(ages =>
      Object.values(ages).forEach(n => { n.isPaused = true; })));
});
const pausedRecs = buildRecommendationRows({ India: pausedRows });
check('no PAUSE rec emitted for fully-paused campaign (team already decided)',
  !pausedRecs.some(r => r.campaign === 'NoMetaCamp' && r.recommendation === 'PAUSE'),
  `rows: ${JSON.stringify(pausedRecs.filter(r => r.campaign === 'NoMetaCamp'))}`);
check('no SCALE rec emitted for paused stat-sig winner (team already decided)',
  !pausedRecs.some(r => r.campaign === 'WinnerCamp' && r.recommendation === 'SCALE'),
  `rows: ${JSON.stringify(pausedRecs.filter(r => r.campaign === 'WinnerCamp'))}`);

// Partial pause: male 18-24 paused, female 18-24 still active with negative lift.
// Only the female cell should fire; we should NOT emit a GenPop "both negative" row.
const partialRows = JSON.parse(JSON.stringify(rows));
const camp = partialRows.find(r => r.country === 'NoMetaCamp');
camp.metrics['DAU-SCT']['male']['18-24'].isPaused = true;
const partialRecs = buildRecommendationRows({ India: partialRows });
const noMetaPartial = partialRecs.filter(r => r.campaign === 'NoMetaCamp');
check('partial pause: only female 18-24 surfaces, no male or GenPop row',
  noMetaPartial.length === 1 && noMetaPartial[0].gender === 'FEMALE' && noMetaPartial[0].age === '18-24',
  `rows: ${JSON.stringify(noMetaPartial)}`);

console.log(failures === 0 ? '\nALL CHECKS PASSED' : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
