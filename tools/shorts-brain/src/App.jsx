import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  Globe, RefreshCcw, Brain, MapPin, Sparkles, Download,
  Layers, Zap, Play, TrendingUp, Users,
  Target, ZapOff,
  UploadCloud, ClipboardCheck, Flag,
  Wand2, Palette, Component as ComponentIcon,
  ChevronDown, ChevronUp, FolderKanban, Lightbulb, Copy, Edit2, Save, Plus,
  RotateCcw, Binary, Power, Settings2, Trash2,
  Target as TargetIcon, Database, Clock, CheckCircle2, AlertCircle, Loader2,
  Calendar, ChevronLeft, ChevronRight,
  Menu, X, Filter, BarChart3, ListTree
} from 'lucide-react';
import { saveSnapshot, loadSnapshotIndex, loadSnapshotFiles, deleteSnapshot, getWeekId, logUsageEvent } from './firebase.js';

/**
 * SHORTS BRAIN 2.0 - APAC Marketing Incrementality Hub
 */

// --- 1. CONFIGURATION & CONSTANTS ---
const DRIVE_RESOURCE_LINK = "https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw";
const DATA_INGESTION_ADMINS = ['ivanho.wz@gmail.com', 'ivho@google.com', 'kanishak@google.com'];

const M_TYPES = ['DAU-SCT', 'DAC-SCT', 'GenAI DAU-SCT', 'Impressions', 'CTR'];
const MARKET_SEGMENTS = ['India', 'Indonesia', 'Japan', 'South Korea', 'AUNZ'];
const MARKET_KEYS = { 'India': 'IN', 'Indonesia': 'ID', 'Japan': 'JP', 'South Korea': 'KR', 'AUNZ': 'AUNZ' };
const MARKET_KEYS_REV = { 'IN': 'India', 'ID': 'Indonesia', 'JP': 'Japan', 'KR': 'South Korea', 'AUNZ': 'AUNZ' };
// 'JP Proactive Container' is treated as an Always-On category in PR 1 for parser/data shape
// purposes only. The dedicated landing-page tile and routing override land in PR 2.
const AO_CATEGORIES = ['SSC', 'Shelf', 'UTS', 'MVR', 'UTS SFV', 'JP Proactive Container'];

const GENDERS_KEYS = ['female', 'male', 'total'];
const GENDERS_DISPLAY_MAP = { 'female': 'FEMALE', 'male': 'MALE', 'total': 'GenPop' };
const AGE_BUCKETS = ['18-24', '25-34', '18-34', '35+', 'total'];
const AGE_BUCKETS_DISPLAY_MAP = {
  '18-24': '18-24',
  '25-34': '25-34',
  '18-34': '18-34',
  '35+': '35-44',
  'total': 'GenPop'
};

const OKR_TARGETS = {
  'APAC': 0.15, 'INDIA': 0.16, 'INDONESIA': 0.29, 'JAPAN': 1.2, 'SOUTH KOREA': 1.08, 'AUNZ': 1.56,
  'IN': 0.16, 'ID': 0.29, 'JP': 1.2, 'KR': 1.08
};

const NAV_ITEMS = [
  { id: 'Upload', label: 'Data Ingestion', icon: UploadCloud },
  { id: 'OKR', label: 'Shorts OKR Performance', icon: TargetIcon },
  { id: 'Global Hub', label: 'Global Holdback', icon: Globe },
  { id: 'Market Hub', label: 'Campaign Holdback', icon: Layers },
];

const CAMPAIGN_CHILDREN = [
  { id: 'AlwaysOn', label: 'Always-On', icon: Zap },
  { id: 'ScaledCreation', label: 'Scaled Creation', icon: Sparkles },
  { id: 'Trends', label: 'Trends', icon: TrendingUp },
  { id: 'CultMo', label: 'CultMo', icon: ComponentIcon },
  { id: 'ArtMo', label: 'ArtMo', icon: Palette },
  { id: 'GenAI Hub', label: 'GenAI Hub', icon: Wand2 }
];

// --- 2. GLOBAL UTILITIES ---

const cleanStr = (s) => (s || '').toString().replace(/['"]/g, '').replace(/\u00A0/g, ' ').trim();

// Unicode-aware: keeps non-Latin characters (CJK, etc.) so JP/KR campaign names
// remain identifiable in the keyed lookup. Falls back to ASCII if the runtime
// doesn't support \p{L}/\p{N} (very old engines).
const superClean = (s) => {
  try {
    return cleanStr(s).toUpperCase().replace(/[^\p{L}\p{N}]/gu, '');
  } catch (e) {
    return cleanStr(s).toUpperCase().replace(/[\s\-_&!?,.()'"\uFF01]/g, '');
  }
};

const eq = (a, b) => superClean(a) === superClean(b);

// Strips trailing market suffix tokens so the same campaign uploaded under
// different markets can resolve to one metaLookup entry.
const normalizeCampaignKey = (s) => {
  return superClean(s)
    .replace(/INDIA$|INDONESIA$|JAPAN$|SOUTHKOREA$|AUNZ$|IN$|ID$|JP$|KR$/g, '')
    .trim();
};

const formatCompactNumber = (val) => {
  if (val === 0) return '0.00';
  if (val === 'NA' || val === null || val === undefined || isNaN(val)) return '-';
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(val);
};

const robustParseDate = (dateStr) => {
  const d = cleanStr(dateStr);
  if (!d || d === '-' || d === 'Unknown') return null;
  try {
    if (d.includes('-') && d.split('-')[0].length === 4) return d;
    const parts = d.split(/[-/]/);
    if (parts.length === 3) {
      let v1 = parseInt(parts[0], 10), v2 = parseInt(parts[1], 10), y = parseInt(parts[2], 10);
      if (y < 100) y += 2000;
      let month, day;
      if (v1 > 12) { day = v1; month = v2; }
      else if (v2 > 12) { month = v1; day = v2; }
      else { day = v1; month = v2; }
      if (month > 12) return null;
      return `${y}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
    const date = new Date(d);
    return isNaN(date.getTime()) ? null : date.toISOString().split('T')[0];
  } catch { return null; }
};

const calcDaysLive = (startStr, optEndStr) => {
  const start = robustParseDate(startStr);
  const end = robustParseDate(optEndStr) || new Date().toISOString().split('T')[0];
  if (!start) return 0;
  try {
    const s = new Date(start), e = new Date(end);
    const diffDays = Math.floor((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays + 1 : 1;
  } catch { return 0; }
};

const isCampaignEnded = (optEndDateStr, campaignEndDateStr) => {
  const optDate = robustParseDate(optEndDateStr);
  const campDate = robustParseDate(campaignEndDateStr);
  if (!optDate || !campDate) return false;
  try { return new Date(optDate) >= new Date(campDate); } catch { return false; }
};

const splitCSVLine = (line) => {
  const columns = [];
  let current = "", inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') inQuotes = !inQuotes;
    else if (char === ',' && !inQuotes) { columns.push(current.trim()); current = ""; }
    else { current += char; }
  }
  columns.push(current.trim());
  return columns;
};

const findHeader = (headers, targets) => {
  const upperHeaders = headers.map(h => (h || '').toUpperCase().replace(/[^A-Z0-9]/g, ''));
  const targetUpper = targets.map(t => t.toUpperCase().replace(/[^A-Z0-9]/g, ''));
  for (const target of targetUpper) {
    const idx = upperHeaders.indexOf(target);
    if (idx !== -1) return idx;
  }
  return upperHeaders.findIndex(h => targetUpper.some(t => h.includes(t)));
};

// Two-level lookup: metaMap is keyed { [marketKey]: { [campaignKey]: meta } }.
// marketContext is consulted first (avoids cross-market collisions) then falls
// through to a global scan. normalizeCampaignKey lets a campaign uploaded
// with the market suffixed in its name still resolve.
const findMetadata = (rowKey, metaMap, marketContext = null) => {
  const campKey = superClean(rowKey);
  const normalizedCampKey = normalizeCampaignKey(rowKey);
  if (!campKey) return {};

  if (marketContext) {
    const mktKey = superClean(marketContext);
    if (metaMap[mktKey]?.[campKey]) return metaMap[mktKey][campKey];
    if (metaMap[mktKey]?.[normalizedCampKey]) return metaMap[mktKey][normalizedCampKey];
  }
  for (const m in metaMap) {
    if (metaMap[m][campKey]) return metaMap[m][campKey];
    if (metaMap[m][normalizedCampKey]) return metaMap[m][normalizedCampKey];
  }
  return {};
};

// Reads a CSV stream into an accumulator keyed by `${market}_${campaign}` so
// the same campaign uploaded under different markets doesn't collide.
//
// Args:
//   marketContext   — used when the CSV has no Country/Market column (e.g. a
//                     market-hub upload), to seed the row's market.
//   isGlobalFile    — every row on this file is the global anchor.
//   isAlwaysOnData  — bypass the meta.targeting gate (Always-On rows ship
//                     without per-demo targeting metadata).
//
// Each row also tracks dataMinDate/dataMaxDate plus any explicit Trend Start/
// Trend End columns, so MasterTableView can render per-row date pills without
// re-scanning the source CSV.
const parseCSVData = (text, existingAcc = {}, metaMap = {}, searchPriority = ['Campaign', 'Campaign Name', 'Country', 'Market'], forceAbs = false, marketContext = null, isGlobalFile = false, isAlwaysOnData = false) => {
  try {
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
    if (lines.length < 2) return existingAcc;
    const headers = splitCSVLine(lines[0]);
    const identifierIdx = findHeader(headers, searchPriority);
    const countryIdx = findHeader(headers, ['Country', 'Market', 'Market Name']);
    const valTypeIdx = findHeader(headers, ['Value Type', 'Metric Type']);
    const sliceIdx = findHeader(headers, ['Slice', 'Segment']);
    const dateIdx = findHeader(headers, ['Date', 'Reporting Date', 'Day', 'Latest Date']);

    const explicitTrendStartIdx = findHeader(headers, ['Trend Start Date', 'Trend Start']);
    const explicitTrendEndIdx = findHeader(headers, ['Trend End Date', 'Trend End']);

    if (identifierIdx === -1) return existingAcc;
    const acc = { ...existingAcc };

    lines.slice(1).forEach(line => {
      const columns = splitCSVLine(line);
      const rowValTypeRaw = valTypeIdx !== -1 ? (columns[valTypeIdx] || '').replace(/['"]/g, '').trim().toUpperCase() : '';
      const rowSlice = sliceIdx !== -1 ? (columns[sliceIdx] || '').replace(/['"]/g, '').trim().toUpperCase() : '';
      const rowDate = dateIdx !== -1 ? robustParseDate(columns[dateIdx]) : null;

      const isRatioRow = !forceAbs && (rowValTypeRaw === 'RATIO (%)' || rowValTypeRaw === 'RATIO' || rowValTypeRaw.includes('LIFT') || rowValTypeRaw === '') && (rowSlice === 'CONTROL' || rowSlice === '' || rowSlice === 'TOTAL');

      // Impressions/CTR rows often ship with arbitrary slice values like
      // 'Sub-Total' or 'Aggregate' since they're whole-population reach
      // metrics, not test-vs-control deltas. Skip the slice gate for these
      // value types so legitimate Impressions/CTR data isn't dropped.
      const isImpsCtrRow = rowValTypeRaw.includes('IMPRESSIONS') || rowValTypeRaw.includes('CTR');

      const isAbsRow = forceAbs && (
        rowValTypeRaw.includes('DELTA') ||
        rowValTypeRaw === '' ||
        rowValTypeRaw === 'TOTAL' ||
        rowValTypeRaw.includes('IMPRESSIONS') ||
        rowValTypeRaw.includes('ABSOLUTE') ||
        rowValTypeRaw.includes('VOLUME') ||
        rowValTypeRaw.includes('CTR')
      ) && (
        isImpsCtrRow ||
        rowSlice === 'CONTROL' ||
        rowSlice === 'TEST' ||
        rowSlice === 'TREATMENT' ||
        rowSlice === '' ||
        rowSlice === 'TOTAL'
      );

      const isSigRow = rowValTypeRaw.includes('TREND FAVORABILITY') && (rowSlice === 'CONTROL' || rowSlice === '' || rowSlice === 'TOTAL');

      if (!isRatioRow && !isSigRow && !isAbsRow) return;

      const campaignName = cleanStr(columns[identifierIdx]) || 'Unknown';
      let rowMarketRaw = countryIdx !== -1 ? cleanStr(columns[countryIdx]) : (marketContext || 'APAC');
      let marketNameResolved = MARKET_KEYS_REV[rowMarketRaw.toUpperCase()] || rowMarketRaw;

      const meta = findMetadata(campaignName, metaMap, marketNameResolved === 'APAC' ? null : marketNameResolved);
      if (marketNameResolved === 'APAC' && meta && meta.market) {
        marketNameResolved = meta.market;
      }
      if (marketNameResolved === 'APAC') marketNameResolved = 'India';

      const compositeKey = `${marketNameResolved}_${campaignName}`;

      let gender = null;
      // 'declared_gender' is the attribution (Impressions/CTR) CSV's column name.
      const gIdx = findHeader(headers, ['Gender', 'Sex', 'declared_gender']);
      if (gIdx !== -1) {
        const rawG = (columns[gIdx] || '').toLowerCase().trim();
        if (rawG === 'female' || rawG === 'f') gender = 'female';
        else if (rawG === 'male' || rawG === 'm') gender = 'male';
        else if (rawG === 'total' || rawG === 'all' || rawG === 'genpop' || rawG === 'gen pop') gender = 'total';
      } else {
        gender = 'total';
      }
      if (!gender) return;

      let age = 'total';
      // 'declared_age_bucket' is the attribution (Impressions/CTR) CSV's column name.
      const aIdx = findHeader(headers, ['Age', 'Age Group', 'declared_age_bucket']);
      if (aIdx !== -1) {
        const rawA = (columns[aIdx] || '').toLowerCase().trim();
        if (rawA.includes('18-24')) age = '18-24';
        else if (rawA.includes('25-34')) age = '25-34';
        else if (rawA.includes('18-34')) age = '18-34';
        else if (rawA.includes('35')) age = '35+';
      }

      const isAnchorRow = isGlobalFile || superClean(campaignName).includes('GLOBALHOLDBACK');

      if (!acc[compositeKey]) {
        const expStart = explicitTrendStartIdx !== -1 ? robustParseDate(columns[explicitTrendStartIdx]) : null;
        const expEnd = explicitTrendEndIdx !== -1 ? robustParseDate(columns[explicitTrendEndIdx]) : null;

        acc[compositeKey] = {
          country: campaignName,
          market: marketNameResolved,
          metrics: {},
          isAnchor: isAnchorRow,
          campaignStartDate: expStart || meta.campaignStartDate || null,
          campaignEndDate: expEnd || meta.campaignEndDate || null,
          optimisationEndDate: meta.optimisationEndDate || rowDate,
          segmentTag: meta.subTab || 'Campaign Hub',
          meta: meta,
          dataMinDate: rowDate,
          dataMaxDate: rowDate,
          explicitTrendStart: expStart,
          explicitTrendEnd: expEnd
        };
        M_TYPES.forEach(m => {
          acc[compositeKey].metrics[m] = { female: {}, male: {}, total: {} };
          GENDERS_KEYS.forEach(g => {
            AGE_BUCKETS.forEach(a => acc[compositeKey].metrics[m][g][a] = { v: 0, sig: 0, abs: 0, isPaused: false, launchDate: null });
          });
        });
      }

      // Track date range as more rows arrive for the same campaign.
      if (rowDate) {
        if (!acc[compositeKey].dataMinDate || rowDate < acc[compositeKey].dataMinDate) acc[compositeKey].dataMinDate = rowDate;
        if (!acc[compositeKey].dataMaxDate || rowDate > acc[compositeKey].dataMaxDate) acc[compositeKey].dataMaxDate = rowDate;
      }

      M_TYPES.forEach(m => {
        const aliases = {
          'DAU-SCT': ['DAU-SCT', 'DAILY SHORTS CREATION TOOL ACTIVE USERS'],
          'DAC-SCT': ['DAC-SCT', 'DAILY SHORTS CONVERTERS'],
          'GenAI DAU-SCT': ['GENAI DAU', 'GENAI DAILY ACTIVE USERS'],
          'Impressions': ['IMPRESSIONS', 'TOTAL IMPRESSIONS', 'REACH', 'IMPS'],
          'CTR': ['CTR', 'CLICK THROUGH RATE', 'CLICK-THROUGH RATE']
        };
        const targetCol = headers.findIndex(h => {
          const hUpper = h.toUpperCase();
          const matchAlias = (aliases[m] || []).some(alias => hUpper.includes(alias));
          const isCI = hUpper.includes('CONFIDENCE') || hUpper.includes('BOUND');
          // DAU-SCT must not match GenAI columns.
          return matchAlias && !isCI && (m !== 'DAU-SCT' || !hUpper.includes('GENAI'));
        });

        if (targetCol === -1) return;
        const rawCell = (columns[targetCol] || '').replace(/['"]/g, '').trim();
        const numericVal = parseFloat(rawCell.replace(/[^\d.-]/g, '')) || 0;

        // Targeting gate: if the campaign metadata declares specific ages/genders,
        // any demo outside that targeting renders as 'NA' rather than 0 (so the
        // table doesn't lie about untargeted demos).
        const targeting = acc[compositeKey].meta.targeting;
        let isTargeted = false;
        if (isAnchorRow || isAlwaysOnData) {
          isTargeted = true;
        } else if (targeting) {
          const ageAllowed = targeting.ages.length === 0 || targeting.ages.includes(age);
          const genderAllowed = targeting.genders.length === 0 || targeting.genders.includes(gender);
          isTargeted = ageAllowed && genderAllowed;
        } else {
          // No targeting metadata yet — be permissive.
          isTargeted = true;
        }

        const isGenAIMetric = m === 'GenAI DAU-SCT';
        const isGenAICampaign = (acc[compositeKey].meta.tab || '').toLowerCase() === 'genai hub';
        const isValid = isTargeted && (!isGenAIMetric || isGenAICampaign || isAnchorRow);
        const finalVal = isValid ? numericVal : 'NA';

        if (isRatioRow) {
          if (finalVal !== 'NA' && finalVal !== 0) {
            acc[compositeKey].metrics[m][gender][age].v = finalVal;
          } else if (acc[compositeKey].metrics[m][gender][age].v === 0 || acc[compositeKey].metrics[m][gender][age].v === 'NA') {
            acc[compositeKey].metrics[m][gender][age].v = finalVal;
          }
        } else if (isAbsRow) {
          // Impressions / CTR ride the .v slot (they're not "deltas"); other
          // absolute metrics ride .abs alongside the ratio in .v.
          if (m === 'Impressions' || m === 'CTR') {
            if (finalVal !== 'NA' && finalVal !== 0) {
              acc[compositeKey].metrics[m][gender][age].v = finalVal;
            } else if (acc[compositeKey].metrics[m][gender][age].v === 0 || acc[compositeKey].metrics[m][gender][age].v === 'NA') {
              acc[compositeKey].metrics[m][gender][age].v = finalVal;
            }
          } else {
            if (finalVal !== 'NA' && finalVal !== 0) {
              acc[compositeKey].metrics[m][gender][age].abs = finalVal;
            } else if (acc[compositeKey].metrics[m][gender][age].abs === 0 || acc[compositeKey].metrics[m][gender][age].abs === 'NA') {
              acc[compositeKey].metrics[m][gender][age].abs = finalVal;
            }
          }
        } else if (isSigRow) {
          if (isValid) {
            const sigText = rawCell.toUpperCase();
            const newSig = (sigText.includes('POSITIVE') || sigText.includes('SSP')) ? 1 : (sigText.includes('NEGATIVE') || sigText.includes('SSN') ? -1 : 0);
            if (newSig !== 0) acc[compositeKey].metrics[m][gender][age].sig = newSig;
          }
        }
      });
    });
    return acc;
  } catch (err) {
    console.error("CSV Parse Error:", err);
    return existingAcc;
  }
};

const DriveIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 1443 1250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z" />
    <path d="M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z" opacity="0.8" />
    <path d="M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z" opacity="0.6" />
  </svg>
);

const getStatusConfig = (pi, off) => off
  ? { cardBg: 'bg-[#1a1a1a]', color: 'text-[#808080]', accent: 'bg-[#3a3a3a]' }
  : (pi >= 100
    ? { cardBg: 'bg-[#0a1f0a]', color: 'text-emerald-400', accent: 'bg-emerald-500' }
    : (pi >= 70
      ? { cardBg: 'bg-[#1a1a1a]', color: 'text-amber-400', accent: 'bg-amber-500' }
      : { cardBg: 'bg-[#1a0a0a]', color: 'text-red-400', accent: 'bg-red-500' }));

// --- 3. UI VIEW COMPONENTS ---

// `allowedMetrics` lets callers narrow the toggle set (e.g. Global Hub /
// Always-On hide Impressions/CTR which only ship via the attribution stream).
// Default falls through to the full `M_TYPES` list for back-compat.
const MetricControlHub = ({ activeMetrics, toggleMetric, handleAllToggle, allowedMetrics = M_TYPES }) => (
  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
    <div className="flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]">
      {allowedMetrics.map(m => (
        <button key={m} onClick={() => toggleMetric(m)} className={`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${activeMetrics.includes(m) ? 'bg-[#FF0000] text-white' : 'text-[#808080] hover:text-white'}`}>
          {m}
        </button>
      ))}
    </div>
    <button onClick={handleAllToggle} className={`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${activeMetrics.length === allowedMetrics.length ? 'bg-white text-black border-white' : 'bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]'}`}>
      {activeMetrics.length === allowedMetrics.length ? 'Selective View' : 'Sync All Metrics'}
    </button>
  </div>
);

// `latestGlobalDate` caps non-Always-On end dates so a campaign's "Days Live"
// doesn't overshoot the reporting window. `isAlwaysOn` swaps the date pill
// labels to "Trend Start/End/Days Live". `hideDates` suppresses the pill
// entirely (used for campaign-hub aggregate views where every row shares
// the same dates).
const MasterTableView = ({ data, activeMetrics, latestGlobalDate, isCampaignView = false, hideDates = false, isAlwaysOn = false }) => {
  const scrollRef = useRef(null);

  const themes = {
    female: { 1: 'bg-blue-900/40 text-blue-100', 2: 'bg-blue-900/20', 3: 'bg-blue-950/40 text-blue-400' },
    male: { 1: 'bg-purple-900/40 text-purple-100', 2: 'bg-purple-900/20', 3: 'bg-purple-950/40 text-purple-400' },
    total: { 1: 'bg-amber-900/80 text-amber-50', 2: 'bg-amber-800/20', 3: 'bg-amber-950 text-amber-400 font-bold' }
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  if (!data || data.length === 0) return (
    <div className="py-40 text-center flex flex-col items-center justify-center gap-6">
      <div className="p-6 rounded-full bg-[#1a1a1a] border border-[#3a3a3a]"><ZapOff className="w-12 h-12 text-[#3a3a3a] animate-pulse" /></div>
      <p className="text-[#808080] font-bold text-sm uppercase tracking-widest">No Data Available</p>
    </div>
  );

  return (
    <div className="relative group/table">
      <button
        onClick={() => handleScroll('left')}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => handleScroll('right')}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-red-600 text-white shadow-xl opacity-0 group-hover/table:opacity-100 transition-opacity flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div ref={scrollRef} className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto scroll-smooth">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-[11px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]">
              <th rowSpan={3} className="px-8 py-8 text-left border-r border-[#3a3a3a] bg-[#1a1a1a] sticky left-0 z-40 text-white min-w-[300px]">
                {isAlwaysOn ? 'Trend Identifier' : (isCampaignView ? 'Campaign Entity' : 'Country / Market')}
              </th>
              {GENDERS_KEYS.map((g, gi) => (
                <th key={g} colSpan={AGE_BUCKETS.length * activeMetrics.length} className={`py-6 border-white/10 ${themes[g][1]} ${gi < GENDERS_KEYS.length - 1 ? 'border-r-2 border-white/20' : ''}`}>
                  <div className="flex items-center justify-center gap-3"><Users className="w-4 h-4 opacity-50" />{GENDERS_DISPLAY_MAP[g]}</div>
                </th>
              ))}
            </tr>
            <tr className="text-[10px] font-bold uppercase tracking-widest border-b border-[#3a3a3a]">
              {GENDERS_KEYS.map((g) => (
                <React.Fragment key={g}>
                  {AGE_BUCKETS.map((a, ai) => (
                    <th key={a} colSpan={activeMetrics.length} className={`py-4 transition-colors ${themes[g][2]} ${ai === AGE_BUCKETS.length - 1 && GENDERS_KEYS.indexOf(g) < GENDERS_KEYS.length - 1 ? 'border-r-2 border-white/20' : 'border-r border-white/5'}`}>{AGE_BUCKETS_DISPLAY_MAP[a]}</th>
                  ))}
                </React.Fragment>
              ))}
            </tr>
            <tr className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-[#3a3a3a]">
              {GENDERS_KEYS.map((g) => (
                <React.Fragment key={g}>
                  {AGE_BUCKETS.map((a, ai) => (
                    <React.Fragment key={a}>
                      {activeMetrics.map((m, mi) => (
                        <th key={m} className={`py-3 px-3 font-mono ${themes[g][3]} ${ai === AGE_BUCKETS.length - 1 && mi === activeMetrics.length - 1 && GENDERS_KEYS.indexOf(g) < GENDERS_KEYS.length - 1 ? 'border-r-2 border-white/20' : 'border-r border-white/5'}`}>{m.includes('GenAI') ? 'GenAI' : (m === 'Impressions' ? 'Imprs' : m.split('-')[0])}</th>
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {data.map((row, ri) => {
              const isAnchorRow = !!row.isAnchor;
              const genPopNode = row.metrics?.[activeMetrics[0] || 'DAU-SCT']?.total?.total;
              const capDate = (genPopNode?.isPaused && genPopNode?.launchDate && genPopNode.launchDate !== 'Ended')
                ? genPopNode.launchDate
                : null;

              const effectiveStart = isAlwaysOn
                ? (row.explicitTrendStart || row.dataMinDate || row.campaignStartDate)
                : (row.campaignStartDate || row.explicitTrendStart || row.dataMinDate);

              const metaEnd = row.campaignEndDate || capDate || row.optimisationEndDate;
              const effectiveEndBase = isAlwaysOn
                ? (row.explicitTrendEnd || row.dataMaxDate || metaEnd)
                : (row.campaignEndDate || row.explicitTrendEnd || row.dataMaxDate || row.optimisationEndDate);

              let endDateBoundary = effectiveEndBase;
              if (!isAlwaysOn && latestGlobalDate && endDateBoundary) {
                if (new Date(endDateBoundary) > new Date(latestGlobalDate)) {
                  endDateBoundary = latestGlobalDate;
                }
              }
              const daysLive = calcDaysLive(effectiveStart, endDateBoundary);

              return (
                <tr key={`${ri}-${row.country}`} className={`transition-all duration-200 ${isAnchorRow ? 'bg-white/[0.05]' : 'hover:bg-white/[0.03]'}`}>
                  <td className={`px-8 py-5 text-left border-r border-[#3a3a3a] sticky left-0 z-10 bg-[#111] ${isAnchorRow ? 'text-blue-400 font-bold' : 'text-[#e0e0e0]'}`}>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-bold text-[12px] uppercase tracking-tight">{isAnchorRow ? `${row.country} (Reference)` : String(row.country || 'Unknown')}</span>
                      {!hideDates && !isAnchorRow && (effectiveStart || isAlwaysOn) && (
                        <div className="flex flex-col gap-1.5 mt-2 p-2 rounded bg-black/40 border border-white/5 shadow-inner">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-blue-400" />
                            <span className="text-[9px] font-mono tracking-tighter text-[#888]">
                              <span className="font-bold uppercase text-[8px] mr-1">{isAlwaysOn ? 'Trend Start:' : 'Start:'}</span>
                              {String(effectiveStart || 'N/A')}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-amber-400" />
                            <span className="text-[9px] font-mono tracking-tighter text-[#888]">
                              <span className="font-bold uppercase text-[8px] mr-1">{isAlwaysOn ? 'Trend End:' : 'End:'}</span>
                              {String((isCampaignView && row.campaignEndDate) ? row.campaignEndDate : (endDateBoundary || 'Active'))}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-3 h-3 text-emerald-400" />
                            <span className="text-[9px] font-bold tracking-tighter uppercase text-emerald-400">
                              {isAlwaysOn ? 'Trend Days Live:' : 'Days Live:'} {daysLive}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  {GENDERS_KEYS.map((g) => (
                    <React.Fragment key={g}>
                      {AGE_BUCKETS.map((a, ai) => (
                        <React.Fragment key={a}>
                          {activeMetrics.map((m) => {
                            const node = row.metrics[m][g][a];
                            const isEnd = ai === AGE_BUCKETS.length - 1 && activeMetrics.indexOf(m) === activeMetrics.length - 1;
                            let style = "text-slate-500 font-medium", bg = "";
                            // Don't paint the global anchor row as paused — it's a reference row.
                            const showPaused = node.isPaused && !isAnchorRow;

                            if (showPaused) {
                              style = "text-[#808080] font-bold";
                              bg = "bg-[#1a1a1a]";
                            }
                            else if (node.v !== 'NA' && node.sig === -1) { style = "text-red-500 font-bold"; bg = "bg-red-500/10"; }
                            else if (node.v !== 'NA' && node.sig === 1) { style = "text-emerald-500 font-bold"; bg = "bg-emerald-500/10"; }
                            else if (node.v !== 0 && node.v !== 'NA') { style = "text-slate-100 font-bold"; }

                            return (
                              <td key={`${ri}-${m}-${g}-${a}`} className={`py-5 px-3 font-mono text-[13px] tabular-nums ${style} ${bg} ${isEnd && GENDERS_KEYS.indexOf(g) < GENDERS_KEYS.length - 1 ? 'border-r-2 border-white/20' : 'border-r border-white/5'}`}>
                                <div className="flex flex-col items-center text-center">
                                  {showPaused ? (
                                    <>
                                      <span className="leading-none uppercase">Paused</span>
                                      <span className="text-[7px] opacity-60 font-sans tracking-tight block mt-0.5 font-normal leading-none uppercase italic">
                                        {String(node.launchDate || 'No Data')}
                                      </span>
                                    </>
                                  ) : node.v === 'NA' ? (
                                    <span className="text-gray-500 opacity-50 font-bold">NA</span>
                                  ) : (
                                    <>
                                      <span>
                                        {/* Trust parser output: 'NA' string already handled above; here numeric 0
                                            renders as a real zero rather than masquerading as missing data. */}
                                        {m === 'Impressions' ? formatCompactNumber(node.v) :
                                          m === 'CTR' ? `${(node.v || 0).toFixed(2)}%` :
                                            (node.v === 0 ? '0.00' : (node.v > 0 ? `+${node.v.toFixed(2)}` : `${node.v.toFixed(2)}`))}
                                      </span>
                                      {node.abs !== 0 && node.abs !== 'NA' && m !== 'Impressions' && m !== 'CTR' && (
                                        <span className="text-[9px] opacity-50 font-sans tracking-tighter block mt-0.5 font-normal leading-none">
                                          ({node.abs > 0 ? `+${Math.round(node.abs).toLocaleString()}` : Math.round(node.abs).toLocaleString()})
                                        </span>
                                      )}
                                    </>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
};

// Recommendation engine — hybrid (PR 2 rewrite, see Ivan's choice B).
// - PAUSE/MAINTAIN trigger:  v < -0.0001  (sig only flavours the copy: "stat sig negative" vs "neutral negative")
// - SCALE trigger:           sig === 1 && v > 0.001  AND GenPop AND not scaling-restricted
// - Maturity gate applies to ALL pauses → swaps PAUSE → MAINTAIN with learning-phase justification when <14d
// - GenPop consolidation done source-side: ages where both genders are negative emit a single "G{age}" row
// - Restricted categories (SHELF/SSC/UTS/MVR/UTS-SFV) get a 5-7d "wait & decide" copy and SCALE is blocked
// - MARKET HEALTH audit rows removed (they were redundant with the OKR cards above)
const OKRAndRecsView = ({ globalData, regionalData, latestDate, quarterStart }) => {
  const [editingId, setEditingId] = useState(null);
  const [editedRows, setEditedRows] = useState({});
  const [manualPointers, setManualPointers] = useState([]);
  const [isAddingManual, setIsAddingManual] = useState(false);
  const [deletedRowIds, setDeletedRowIds] = useState(new Set());
  const [copyFeedback, setCopyFeedback] = useState(null);
  const [newManualForm, setNewManualForm] = useState({ country: 'APAC', campaign: '', age: 'GenPop', gender: 'GenPop', recommendation: 'MAINTAIN', justification: '' });

  const showFeedback = (msg) => {
    setCopyFeedback(msg);
    setTimeout(() => setCopyFeedback(null), 2000);
  };

  const daysLeft = useMemo(() => {
    if (!latestDate) return "TBD";
    const endQ = new Date("2026-03-31");
    const current = new Date(latestDate);
    const diffTime = Math.ceil((endQ - current) / (1000 * 60 * 60 * 24));
    return diffTime > 0 ? diffTime : 0;
  }, [latestDate]);

  const okrStats = useMemo(() => {
    return ['APAC', 'India', 'Indonesia', 'Japan', 'South Korea', 'AUNZ'].map(mName => {
      const record = globalData.find(d => eq(d.country, mName) || eq(d.country, MARKET_KEYS[mName]));
      const rawActual = record?.metrics?.['DAU-SCT']?.total?.total?.v;
      // Tolerate the parser's NA gating result.
      const actual = (rawActual === 'NA' || rawActual === undefined || isNaN(rawActual)) ? 0 : rawActual;
      const target = OKR_TARGETS[mName.toUpperCase()] || 1.00;
      const isOffline = !record || rawActual === 'NA';
      return { market: mName.toUpperCase(), actual, target, perfIndex: target > 0 ? (actual / target) * 100 : 0, isOffline };
    });
  }, [globalData]);

  const recommendationRows = useMemo(() => {
    const tableData = [];
    const scalingRestricted = ['SHELF', 'SSC', 'UTS', 'MVR', 'UTSSFV'];

    MARKET_SEGMENTS.forEach(market => {
      const allCampsInMarket = regionalData[market] || [];
      allCampsInMarket.forEach((camp, ci) => {
        if (isCampaignEnded(camp.optimisationEndDate, camp.campaignEndDate)) return;
        const metrics = camp.metrics?.['DAU-SCT'] || {};

        // Skip on the actual demo's pause status — we don't propagate
        // male+female → total here (incoming did; we explicitly opted out
        // because that propagation has rec-engine side effects).
        if (metrics.total?.total?.isPaused) return;

        const daysLiveCount = calcDaysLive(camp.campaignStartDate, camp.optimisationEndDate);
        const isMature = daysLiveCount >= 14;
        const mKey = MARKET_KEYS[market] || market.toUpperCase();

        const currentCampaignNameSuper = superClean(camp.country);
        const isScalingRestricted = scalingRestricted.some(cat => currentCampaignNameSuper.includes(cat));

        const addPauseOrMaintain = (gK, aK, tag) => {
          const node = metrics[gK]?.[aK];
          if (!node || node.v === 'NA' || node.isPaused) return;

          const v = node.v || 0;
          const isSigNeg = node.sig === -1;
          const rec = isMature ? "PAUSE" : "MAINTAIN";
          const liftLabel = isSigNeg ? "stat sig negative" : "neutral negative";

          let justification = "";
          // Source-side GenPop consolidation: when tag is 'G', emit a single
          // total/age row using both gender lifts in the copy.
          if (tag === 'G' && aK !== 'total' && v >= 0) {
            const mNode = metrics['male']?.[aK];
            const fNode = metrics['female']?.[aK];
            if (mNode?.v !== 'NA' && fNode?.v !== 'NA' && (mNode?.v || 0) < -0.0001 && (fNode?.v || 0) < -0.0001) {
              const actionWord = isMature ? "Pause" : "Maintain (Learning Phase)";
              const maturitySuffix = isMature ? "" : ` observed but hasn't reached maturity (Current: ${daysLiveCount}d / Required: 14d)`;

              if (isMature && isScalingRestricted) {
                justification = `${mKey} ${camp.country} - Pause G${aK} given negative lift across both males (${mNode.v.toFixed(2)}%) and females (${fNode.v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`;
              } else {
                justification = `${mKey} ${camp.country} - ${actionWord} G${aK} given negative lift across both males (${mNode.v.toFixed(2)}%) and females (${fNode.v.toFixed(2)}%)${maturitySuffix}`;
              }
            }
          }

          if (!justification) {
            if (isMature) {
              if (isScalingRestricted) {
                justification = `${mKey} ${camp.country} - Pause ${tag}${aK} given ${liftLabel} (${v.toFixed(2)}%) - pause the current trend and wait for 5-7d and decide to rollout next trend or not`;
              } else {
                justification = `${mKey} ${camp.country} - Pause ${tag}${aK} given ${liftLabel} (${v.toFixed(2)}%)`;
              }
            } else {
              justification = `${mKey} ${camp.country} - Maintain ${tag}${aK} (Learning Phase): Negative lift (${v.toFixed(2)}%) observed but hasn't reached maturity (Current: ${daysLiveCount}d / Required: 14d).`;
            }
          }

          tableData.push({
            id: `CAMP_${market}_${ci}_P_${gK}_${aK}`,
            country: mKey,
            campaign: camp.country,
            age: aK === 'total' ? 'GenPop' : aK,
            gender: gK === 'total' ? 'GenPop' : gK.toUpperCase(),
            recommendation: rec,
            justification,
          });
        };

        // SCALE: GenPop total/total only, requires sig confirmation, blocked for restricted categories.
        const gpNode = metrics.total?.total || { v: 0, sig: 0 };
        if (!isScalingRestricted && gpNode.v !== 'NA' && gpNode.sig === 1 && gpNode.v > 0.001) {
          tableData.push({
            id: `CAMP_${market}_${ci}_SC`,
            country: mKey,
            campaign: camp.country,
            age: "GenPop",
            gender: "GenPop",
            recommendation: "SCALE",
            justification: `${mKey} ${camp.country} - Scale GenPop: Stat-sig positive lift (+${gpNode.v.toFixed(2)}%) observed.`,
          });
        }

        // GenPop consolidation source-side: find ages where BOTH male and
        // female show meaningful negatives. Common ages collapse into one
        // "G{age}" row; uncommon stay gender-specific.
        const getAgesToTrack = (gK) => {
          const dirs = [];
          ['18-24', '25-34', '35+'].forEach(a => {
            if (metrics[gK]?.[a]?.v !== 'NA' && (metrics[gK]?.[a]?.v || 0) < -0.0001) dirs.push(a);
          });
          return dirs;
        };

        const mNeg = getAgesToTrack('male');
        const fNeg = getAgesToTrack('female');
        const common = mNeg.filter(a => fNeg.includes(a));

        common.forEach(a => addPauseOrMaintain('total', a, 'G'));
        mNeg.filter(a => !common.includes(a)).forEach(a => addPauseOrMaintain('male', a, 'M'));
        fNeg.filter(a => !common.includes(a)).forEach(a => addPauseOrMaintain('female', a, 'F'));
      });
    });

    const merged = [...tableData, ...manualPointers].filter(r => !deletedRowIds.has(r.id));
    return merged.map(r => editedRows[r.id] ? { ...r, ...editedRows[r.id] } : r);
  }, [regionalData, manualPointers, deletedRowIds, editedRows]);

  const handleCopyRow = async (row) => {
    const text = `${row.country}\t${row.campaign}\t${row.age}\t${row.gender}\t${row.recommendation}\t${row.justification}`;
    await copyToClipboard(text);
    showFeedback("Row Copied to Clipboard");
  };

  const handleCopyAll = async () => {
    if (recommendationRows.length === 0) return;
    const headers = "Market\tEntity\tAge\tGender\tDirective\tJustification";
    const body = recommendationRows.map(r => `${r.country}\t${r.campaign}\t${r.age}\t${r.gender}\t${r.recommendation}\t${r.justification}`).join('\n');
    await copyToClipboard(`${headers}\n${body}`);
    showFeedback("Full Matrix Copied for Sheets");
  };

  const handleRestore = () => {
    setDeletedRowIds(new Set()); setEditedRows({}); setManualPointers([]);
    showFeedback("Matrix Restored to Baseline");
  };

  const handleAddNewManual = () => {
    if (!newManualForm.campaign) return;
    const id = `MANUAL_${Date.now()}`;
    setManualPointers(p => [...p, { ...newManualForm, id, statusType: newManualForm.recommendation === 'PAUSE' ? 'danger' : (newManualForm.recommendation === 'SCALE' ? 'success' : 'warning') }]);
    setIsAddingManual(false);
    setNewManualForm({ country: 'APAC', campaign: '', age: 'GenPop', gender: 'GenPop', recommendation: 'MAINTAIN', justification: '' });
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto pb-32">
      {copyFeedback && <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase">{copyFeedback}</div>}

      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase">Shorts OKR Performance</h1>

          <div className="flex flex-wrap gap-10 pt-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Quarter Start</p>
              <p className="text-lg font-bold text-white">{quarterStart || "2026-02-01"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Reporting Date (Latest)</p>
              <p className="text-lg font-bold text-emerald-400">{latestDate || "Awaiting Data..."}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Days Left in Q1</p>
              <p className="text-lg font-bold text-amber-400">
                {daysLeft} <span className="text-[10px] text-[#808080] ml-1 font-normal">days remaining</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {okrStats.map((stat, idx) => {
          const cfg = getStatusConfig(stat.perfIndex, stat.isOffline);
          return (
            <div key={idx} className={`relative ${cfg.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555]`}>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-white uppercase">{stat.market}</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-white">{stat.perfIndex.toFixed(1)}%</span>
                <span className="text-[9px] font-bold text-[#808080] uppercase">INDEX</span>
              </div>
              <div className="relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4"><div className={`h-full ${cfg.accent}`} style={{ width: `${Math.min(stat.perfIndex, 100)}%` }} /></div>
              <div className="flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]">
                <div className="text-[#808080] uppercase">Actual: <span className="text-white">+{stat.actual.toFixed(2)}%</span></div>
                <div className="text-[#808080] uppercase">Target: <span className="text-[#b0b0b0]">{stat.target.toFixed(2)}%</span></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]"><Lightbulb className="w-6 h-6 text-amber-400" /></div>
            <div><h2 className="text-2xl font-bold text-white uppercase">Strategic Guidance</h2><p className="text-[#808080] text-xs uppercase tracking-widest mt-1">Manual Overrides</p></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setIsAddingManual(true)} className="flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all"><Plus className="w-4 h-4" /> Add Pointer</button>
            <button onClick={handleCopyAll} className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all"><Copy className="w-4 h-4" /> Copy All for Sheets</button>
            <button onClick={handleRestore} className="flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a]"><RotateCcw className="w-4 h-4" /> Restore Defaults</button>
          </div>
        </div>

        {isAddingManual && (
          <div className="bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Market</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase outline-none focus:border-[#FF0000] text-white" value={newManualForm.country} onChange={e => setNewManualForm(p => ({...p, country: e.target.value.toUpperCase()}))} /></div>
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Entity</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white" placeholder="e.g. Veo Effects" value={newManualForm.campaign} onChange={e => setNewManualForm(p => ({...p, campaign: e.target.value}))} /></div>
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Age</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white" value={newManualForm.age} onChange={e => setNewManualForm(p => ({...p, age: e.target.value}))} /></div>
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Gender</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none focus:border-[#FF0000] text-white" value={newManualForm.gender} onChange={e => setNewManualForm(p => ({...p, gender: e.target.value}))} /></div>
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Directive</label>
                <select className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold outline-none text-white" value={newManualForm.recommendation} onChange={e => setNewManualForm(p => ({...p, recommendation: e.target.value}))}>
                  <option value="MAINTAIN">MAINTAIN</option><option value="SCALE">SCALE</option><option value="PAUSE">PAUSE</option>
                </select>
              </div>
            </div>
            <textarea className="w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] outline-none focus:border-[#FF0000] mb-4" placeholder="Strategic justification context..." value={newManualForm.justification} onChange={e => setNewManualForm(p => ({...p, justification: e.target.value}))} />
            <div className="flex justify-end gap-3">
              <button onClick={() => setIsAddingManual(false)} className="bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg hover:text-white font-bold text-[10px] uppercase transition-all border border-[#3a3a3a]">Cancel</button>
              <button onClick={handleAddNewManual} className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-500 font-bold text-[10px] uppercase transition-all">Confirm Pointer</button>
            </div>
          </div>
        )}

        <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto">
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr className="bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold">
                <th className="px-8 py-6 text-left">Market</th><th className="px-8 py-6 text-left">Entity</th><th className="px-8 py-6 text-center">Age</th><th className="px-8 py-6 text-center">Gender</th><th className="px-8 py-6 text-left">Directive</th><th className="px-8 py-6 text-left">Justification</th><th className="px-8 py-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recommendationRows.map(row => (
                <tr key={row.id} className={`hover:bg-white/[0.02] group/row transition-colors ${row.recommendation === 'PAUSE' ? 'bg-red-500/[0.03]' : ''}`}>
                  <td className={`px-8 py-4 font-bold uppercase ${row.isMarketAudit ? 'text-emerald-400' : 'text-blue-400'}`}>{row.country}</td>
                  <td className="px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]">{row.campaign}</td>
                  <td className="px-8 py-4 text-center text-[#b0b0b0] uppercase">{row.age}</td>
                  <td className="px-8 py-4 text-center text-[#b0b0b0] uppercase">{row.gender}</td>

                  <td className="px-8 py-4 font-bold">
                    {editingId === row.id ? (
                      <select className="bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none" value={editedRows[row.id]?.recommendation || row.recommendation} onChange={e => setEditedRows(p => ({...p, [row.id]: {...(p[row.id] || row), recommendation: e.target.value}}))}>
                        <option value="MAINTAIN">MAINTAIN</option><option value="SCALE">SCALE</option><option value="PAUSE">PAUSE</option>
                      </select>
                    ) : (
                      <span className={`${row.recommendation === 'PAUSE' ? 'text-red-400' : (row.recommendation === 'SCALE' ? 'text-emerald-400' : 'text-amber-400')}`}>{row.recommendation}</span>
                    )}
                  </td>

                  <td className="px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed">
                    {editingId === row.id ? (
                      <textarea className="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] outline-none min-h-[60px]" value={editedRows[row.id]?.justification || row.justification} onChange={e => setEditedRows(p => ({...p, [row.id]: {...(p[row.id] || row), justification: e.target.value}}))} />
                    ) : row.justification}
                  </td>

                  <td className="px-8 py-5 text-center">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity">
                      {editingId === row.id ? (
                        <button onClick={() => setEditingId(null)} className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg"><Save className="w-4 h-4" /></button>
                      ) : (
                        <button onClick={() => setEditingId(row.id)} title="Edit Row" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Edit2 className="w-4 h-4" /></button>
                      )}
                      <button onClick={() => handleCopyRow(row)} title="Copy Row" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400 hover:bg-white/10 transition-all"><Copy className="w-4 h-4" /></button>
                      <button onClick={() => setDeletedRowIds(p => new Set(p).add(row.id))} title="Delete Pointer" className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500 hover:bg-white/10 transition-all"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// 4-tile upload row: Global / Market / Always-On (sans JP Proactive) / JP Proactive Container.
// JP Proactive ships in its own slot because the parser flow tags it
// distinctly (`marketContext='Japan'`, isAlwaysOnData=true), and the dropdown
// flow strictly isolates it from other AO categories.
const HubRowV2 = ({ type, title, icon: Icon, tag, uploadedFiles, handleFileUpload }) => {
  const isPct = type === 'pct';
  const borderColor = isPct ? 'border-amber-500/30' : 'border-blue-500/30';
  const bgColor = isPct ? 'bg-[#1a1500]' : 'bg-[#0a0a1a]';
  const iconColor = isPct ? 'text-amber-500' : 'text-blue-500';
  const iconBg = isPct ? 'bg-amber-500/20' : 'bg-blue-500/20';

  return (
    <div className={`p-6 rounded-lg border ${borderColor} ${bgColor} mb-6 transition-all`}>
      <div className="flex items-center gap-4 mb-6 px-4">
        <div className={`p-2 rounded-lg flex items-center justify-center ${iconBg} ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-left">
          <h2 className={`text-lg font-bold uppercase tracking-tight ${iconColor}`}>{title}</h2>
          <p className="text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]">{tag}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left items-stretch">
        {/* 1. Global Hub */}
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center">
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload(type, 'global', e.target.files[0])} />
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${uploadedFiles[type].global ? (isPct ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400') : 'bg-[#1a1a1a] text-[#555]'}`}>
            <Globe className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]">Global Hub</h3>
          <div className="text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center">
            {uploadedFiles[type].global ? uploadedFiles[type].global.name : 'PUSH_MASTER_FILE'}
          </div>
        </div>

        {/* 2. Market Hub */}
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center">
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(uploadedFiles[type].countryHB).length > 0 ? (isPct ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400') : 'bg-[#1a1a1a] text-[#555]'}`}>
            <Flag className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]">Market Hub</h3>
          <div className="w-full grid grid-cols-5 gap-1 px-1">
            {MARKET_SEGMENTS.map(m => (
              <div key={m} className="relative aspect-square group/item">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload(type, 'countryHB', e.target.files[0], m)} />
                <div className={`w-full h-full rounded-lg border flex items-center justify-center transition-all ${uploadedFiles[type].countryHB[m] ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]'}`}>
                  <span className="text-[7px] font-black uppercase">{MARKET_KEYS[m]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Always-On (excludes JP Proactive Container — has its own tile) */}
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center">
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(uploadedFiles[type].alwaysOn).length > 0 ? (isPct ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400') : 'bg-[#1a1a1a] text-[#555]'}`}>
            <Zap className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]">Always-On</h3>
          <div className="w-full grid grid-cols-2 gap-1.5 px-2">
            {AO_CATEGORIES.filter(cat => cat !== 'JP Proactive Container').map(cat => (
              <div key={cat} className="relative h-7 group/item">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload(type, 'alwaysOn', e.target.files[0], cat)} />
                <div className={`w-full h-full rounded-lg border flex items-center justify-center transition-all ${uploadedFiles[type].alwaysOn[cat] ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-black border-[#3a3a3a] text-[#555] hover:border-[#808080]'}`}>
                  <span className="text-[7px] font-black uppercase">{cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. JP Proactive Container — dedicated slot, parsed with marketContext='Japan' */}
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center">
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload(type, 'jpProactive', e.target.files[0])} />
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${uploadedFiles[type].jpProactive ? 'bg-red-500/10 text-red-500' : 'bg-[#1a1a1a] text-[#555]'}`}>
            <Zap className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]">JP Proactive Container</h3>
          <div className="text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center">
            {uploadedFiles[type].jpProactive ? uploadedFiles[type].jpProactive.name : 'PUSH_JP_PROACTIVE_CSV'}
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = ({ uploadedFiles, handleFileUpload, startAnalysis, isAnalyzing, memoryIndex, loadHistoricalWeek, isLoadingMemory, historicalSnapshots }) => {
  return (
    <div className="min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0]">
      <div className="max-w-[1500px] w-full z-10 text-center">
        <div className="mb-8">
          <div className="inline-block mb-4">
            <div className="bg-[#FF0000] w-14 h-14 rounded-xl flex items-center justify-center mx-auto"><Brain className="text-white w-7 h-7" /></div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-1 uppercase flex items-center justify-center gap-4">
            Shorts Brain <span className="text-[#FF0000]">2.0</span>
            <a href={DRIVE_RESOURCE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all" title="Open Resource Drive">
              <DriveIcon className="w-5 h-5" />
            </a>
          </h1>
          <p className="text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase">APAC Marketing Hub</p>
        </div>

        <div className="p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all">
          <div className="flex items-center gap-4 mb-6 px-4">
            <div className="p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500">
              <Settings2 className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-500">Campaign Shared Meta</h2>
              <p className="text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]">Structural Definitions & Instructions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.shared.campaignInfo ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}>
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">Structural Meta</h4>
                <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">
                  {uploadedFiles.shared.campaignInfo ? uploadedFiles.shared.campaignInfo.name : 'PUSH_STRUCTURAL_CSV'}
                </div>
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('shared', 'campaignInfo', e.target.files[0])} />
            </div>
            <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.shared.pauseRelive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}>
                <Power className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">Pause/Relive Instructions</h4>
                <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">
                  {uploadedFiles.shared.pauseRelive ? uploadedFiles.shared.pauseRelive.name : 'PUSH_INSTRUCTIONS_CSV'}
                </div>
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('shared', 'pauseRelive', e.target.files[0])} />
            </div>
          </div>
        </div>

        <HubRowV2 type="pct" title="Percentage Input Hub" tag="Relative Lift Streams" icon={TrendingUp} uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />
        <HubRowV2 type="abs" title="Absolute Input Hub" tag="Discrete Volume Streams" icon={Binary} uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />

        {/* Attribution Analysis — Impressions/CTR ship at campaign granularity */}
        <div className="p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all">
          <div className="flex items-center gap-4 mb-6 px-4">
            <div className="p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold uppercase tracking-tight text-purple-500">Attribution Analysis</h2>
              <p className="text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]">Marketing Pressure & Reach Metrics</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.attribution?.impressions ? 'bg-purple-500/10 text-purple-400' : 'bg-[#1a1a1a] text-[#555]'}`}>
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">Impressions/CTR CSV</h4>
                <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">
                  {uploadedFiles.attribution?.impressions ? uploadedFiles.attribution.impressions.name : 'PUSH_IMPRESSIONS_CTR_CSV'}
                </div>
              </div>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('attribution', 'impressions', e.target.files[0])} />
            </div>
          </div>
        </div>

        <button onClick={startAnalysis} disabled={isAnalyzing} className="px-10 py-4 rounded-lg font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-3 mx-auto uppercase mt-4 border border-[#3a3a3a]">
          {isAnalyzing ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
          {isAnalyzing ? 'INITIALIZING...' : 'EXECUTE ANALYSIS'}
        </button>

        {/* Stored Memory Snapshots */}
        {memoryIndex.length > 0 && (
          <div className="mt-10 p-6 rounded-lg border border-[#3a3a3a] bg-[#1a1a1a]">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-[#808080]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#808080]">Stored Snapshots</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {memoryIndex.map(snap => (
                <button
                  key={snap.weekId}
                  onClick={() => loadHistoricalWeek(snap.weekId)}
                  disabled={isLoadingMemory}
                  className="border border-[#3a3a3a] bg-black rounded-lg p-4 text-center hover:border-[#FF0000]/50 hover:bg-[#FF0000]/5 transition-all cursor-pointer group"
                >
                  <Clock className="w-4 h-4 text-[#808080] mx-auto mb-2 group-hover:text-[#FF0000]" />
                  <span className="text-xs font-bold block text-white">{snap.weekId}</span>
                  <span className="text-[8px] text-[#808080] block mt-1">{snap.reportingDate || 'No date'}</span>
                  <span className="text-[8px] text-[#555] block">{snap.globalCount || 0} campaigns</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const App = ({ userEmail }) => {
  const normalizedEmail = userEmail?.trim().toLowerCase() || '';
  const isDataIngestionAdmin = DATA_INGESTION_ADMINS.includes(normalizedEmail);
  const [accessRequestShown, setAccessRequestShown] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('OKR');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMetrics, setActiveMetrics] = useState(['DAU-SCT']);
  const [isCampaignTypeExpanded, setIsCampaignTypeExpanded] = useState(false);
  const [activeMarketSubTab, setActiveMarketSubTab] = useState('India');
  // Campaign Holdback (Market Hub) — Campaign Type filter. Empty string = ALL.
  // Maps onto each row's meta.tab (the same axis as the CAMPAIGN_CHILDREN nav).
  const [campaignTypeFilter, setCampaignTypeFilter] = useState('');
  const [latestGlobalDate, setLatestGlobalDate] = useState(null);

  const [tabMarketFilter, setTabMarketFilter] = useState({ 'ScaledCreation': 'India', 'Trends': 'India', 'CultMo': 'India', 'ArtMo': 'India', 'GenAI Hub': 'India', 'AlwaysOn': 'India' });
  const [subTabFilter, setSubTabFilter] = useState({ 'ScaledCreation': '', 'Trends': '', 'CultMo': '', 'ArtMo': '', 'GenAI Hub': '', 'AlwaysOn': '' });
  const [subSubTabFilter, setSubSubTabFilter] = useState({ 'ScaledCreation': '', 'Trends': '', 'CultMo': '', 'ArtMo': '', 'GenAI Hub': '', 'AlwaysOn': '' });

  const [globalData, setGlobalData] = useState([]);
  const [regionalData, setRegionalData] = useState({});
  const [campaignHubData, setCampaignHubData] = useState({});
  // quarterStart drives OKR header copy; defaults to current Q1.
  const [quarterStart, setQuarterStart] = useState("2026-02-01");

  const [uploadedFiles, setUploadedFiles] = useState({
    pct: { global: null, countryHB: {}, alwaysOn: {}, jpProactive: null },
    abs: { global: null, countryHB: {}, alwaysOn: {}, jpProactive: null },
    shared: { campaignInfo: null, pauseRelive: null },
    attribution: { impressions: null }
  });

  // Memory system state
  const [memoryIndex, setMemoryIndex] = useState([]);
  const [memoryStatus, setMemoryStatus] = useState('idle'); // idle | saving | saved | error
  const [isLoadingMemory, setIsLoadingMemory] = useState(false);
  const [historicalSnapshots, setHistoricalSnapshots] = useState([]);

  // All pages expose the same toggleable metric set so cross-page comparison is
  // predictable. Impressions/CTR ship via the Attribution stream and may render
  // as NA on pages where attribution wasn't uploaded — that's a data-state
  // signal rather than a reason to hide the toggle.
  const allowedMetrics = useMemo(() => M_TYPES, []);

  // Dropdown-driven subtab filters with implicit "ALL" (empty-string sentinel)
  // — replaces the pill-row UX so users can flatten across all sub-sub buckets.
  // For AlwaysOn we union across markets: AO categories are market-agnostic
  // and JP Proactive Container lives only under 'Japan' so picking market=India
  // would otherwise hide it from the dropdown. The render-layer isolation
  // branch (search "STRICT ISOLATE JP") routes the lookup correctly when picked.
  const dynamicSubTabs = useMemo(() => {
    const tabAll = campaignHubData[activeTab];
    if (!tabAll) return [];
    if (activeTab === 'AlwaysOn') {
      const acc = new Set();
      Object.values(tabAll).forEach(mktBucket => {
        Object.keys(mktBucket || {}).forEach(k => acc.add(k));
      });
      return [...acc].sort();
    }
    const market = tabMarketFilter[activeTab];
    const tabData = tabAll[market];
    if (!tabData) return [];
    return Object.keys(tabData).sort();
  }, [activeTab, tabMarketFilter, campaignHubData]);

  const dynamicSubSubTabs = useMemo(() => {
    const market = tabMarketFilter[activeTab];
    const subTab = subTabFilter[activeTab];
    const subTabData = campaignHubData[activeTab]?.[market]?.[subTab];
    if (!subTabData) return [];
    return Object.keys(subTabData).sort();
  }, [activeTab, tabMarketFilter, subTabFilter, campaignHubData]);

  const startAnalysis = async () => {
    setIsAnalyzing(true);
    try {
      const readFile = (f) => new Promise(res => { if (!f) res(""); const r = new FileReader(); r.onload = e => res(e.target.result); r.readAsText(f); });

      // Two-level metaLookup: { [marketKey]: { [campaignKey]: meta } }.
      // Adds optional targeting (ages/genders) so parseCSVData can flag
      // out-of-targeting demos as 'NA' rather than 0.
      let metaLookup = {};
      const metaSource = uploadedFiles.shared.campaignInfo;
      if (metaSource) {
        const text = await readFile(metaSource);
        const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length > 1) {
          const hdrs = splitCSVLine(lines[0]);
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']),
                mktIdx = findHeader(hdrs, ['Market', 'Country']),
                tabIdx = findHeader(hdrs, ['Campaign Tabs', 'Tabs', 'Tab']),
                subTabIdx = findHeader(hdrs, ['Campaign Sub tabs', 'Sub tabs', 'Sub tab', 'Sub-tabs', 'Subtab', 'Sub category']),
                subSubTabIdx = findHeader(hdrs, ['Campaign Sub Sub tabs', 'Sub sub tabs', 'Sub-sub-tabs', 'Subsubtab']),
                startIdx = findHeader(hdrs, ['Campaign Start Date', 'Start Date']),
                endIdx = findHeader(hdrs, ['Campaign End Date', 'End Date']),
                optIdx = findHeader(hdrs, ['Optimisation End Date', 'Optimization Date']),
                ageColIdx = findHeader(hdrs, ['Age']),
                genderColIdx = findHeader(hdrs, ['Gender']);

          lines.slice(1).forEach(line => {
            const cols = splitCSVLine(line);
            const name = cleanStr(cols[cIdx]);
            if (!name) return;
            const rawMkt = cleanStr(cols[mktIdx]).toUpperCase();
            const resolvedMkt = MARKET_KEYS_REV[rawMkt] || MARKET_SEGMENTS.find(s => eq(s, rawMkt)) || 'India';
            const mktKey = superClean(resolvedMkt);
            const campKey = superClean(name);
            if (!metaLookup[mktKey]) metaLookup[mktKey] = {};

            if (!metaLookup[mktKey][campKey]) {
              metaLookup[mktKey][campKey] = {
                market: resolvedMkt,
                tab: cleanStr(cols[tabIdx]),
                subTab: cleanStr(cols[subTabIdx]),
                subSubTab: cleanStr(cols[subSubTabIdx]),
                campaignStartDate: cleanStr(cols[startIdx]),
                campaignEndDate: cleanStr(cols[endIdx]),
                optimisationEndDate: cleanStr(cols[optIdx]),
                targeting: { ages: [], genders: [] }
              };
            }

            if (ageColIdx !== -1 && cols[ageColIdx]) {
              const rawAges = cleanStr(cols[ageColIdx]).toLowerCase().split(',').map(s => s.trim());
              const parsedAges = [];
              rawAges.forEach(a => {
                if (a.includes('18-24')) parsedAges.push('18-24');
                if (a.includes('25-34')) parsedAges.push('25-34');
                if (a.includes('18-34')) parsedAges.push('18-34');
                if (a.includes('35-44') || a.includes('35+')) parsedAges.push('35+');
              });
              if (parsedAges.includes('18-24') && parsedAges.includes('25-34')) parsedAges.push('18-34');
              parsedAges.push('total');
              metaLookup[mktKey][campKey].targeting.ages = [...new Set([...metaLookup[mktKey][campKey].targeting.ages, ...parsedAges])];
            }

            if (genderColIdx !== -1 && cols[genderColIdx]) {
              const rawGenders = cleanStr(cols[genderColIdx]).toLowerCase().split(',').map(s => s.trim());
              const parsedGenders = [];
              rawGenders.forEach(g => {
                if (g === 'male' || g === 'm') parsedGenders.push('male');
                if (g === 'female' || g === 'f') parsedGenders.push('female');
              });
              parsedGenders.push('total');
              metaLookup[mktKey][campKey].targeting.genders = [...new Set([...metaLookup[mktKey][campKey].targeting.genders, ...parsedGenders])];
            }
          });
        }
      }

      let instructionMap = {};
      const instrSource = uploadedFiles.shared.pauseRelive;
      if (instrSource) {
        const text = await readFile(instrSource);
        const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length > 1) {
          const hdrs = splitCSVLine(lines[0]);
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']);
          const aIdx = findHeader(hdrs, ['Age', 'Age Group']);
          const gIdx = findHeader(hdrs, ['Gender']);
          const iIdx = findHeader(hdrs, ['Instruction', 'Action']);
          const dIdx = findHeader(hdrs, ['Launch Date', 'Date']);

          lines.slice(1).forEach(l => {
            const cols = splitCSVLine(l);
            const campaign = superClean(cols[cIdx]);
            if (!campaign) return;
            const age = (cols[aIdx] || 'total').toLowerCase().trim().replace(/[^a-z0-9+]/g, '');
            const gender = (cols[gIdx] || 'total').toLowerCase().trim();
            const instr = (cols[iIdx] || '').toUpperCase().trim();
            const date = cleanStr(cols[dIdx]);

            if (!instructionMap[campaign]) instructionMap[campaign] = {};
            if (!instructionMap[campaign][gender]) instructionMap[campaign][gender] = {};
            instructionMap[campaign][gender][age] = { instruction: instr, launchDate: date };
          });
        }
      }

      const structDataTemp = {};
      const routeData = (parsedMap, defaultMarket, forceTab = null, forceSub = null) => {
        Object.values(parsedMap).forEach(row => {
          const meta = row.meta || {};
          let rawTab = forceTab || cleanStr(meta.tab) || 'Uncategorized';
          const matchedChild = CAMPAIGN_CHILDREN.find(child => eq(child.id, rawTab) || eq(child.label, rawTab));
          const tabKey = matchedChild ? matchedChild.id : rawTab;

          const sub = forceSub || cleanStr(meta.subTab) || 'Generic';
          const ssVal = cleanStr(meta.subSubTab) || 'Default';
          const mk = meta.market || defaultMarket;
          const campKey = superClean(row.country);

          const campInstr = instructionMap[superClean(row.country)];
          if (campInstr) {
            M_TYPES.forEach(m => {
              GENDERS_KEYS.forEach(g => {
                AGE_BUCKETS.forEach(a => {
                  const sanA = a.replace(/[^a-z0-9+]/g, '');
                  const parentA = (sanA === '1824' || sanA === '2534') ? '1834' : null;

                  const checkKeys = [
                    [g, sanA],
                    parentA ? [g, parentA] : null,
                    [g, 'total'],
                    ['total', sanA],
                    parentA ? ['total', parentA] : null,
                    ['total', 'total']
                  ].filter(Boolean);

                  let activeDemInstr = null;
                  for (const [tg, ta] of checkKeys) {
                    const found = campInstr[tg]?.[ta];
                    if (found && found.instruction === 'PAUSE' && found.launchDate && found.launchDate.trim() !== '') {
                      activeDemInstr = found;
                      break;
                    }
                  }

                  if (activeDemInstr) {
                    row.metrics[m][g][a].isPaused = true;
                    row.metrics[m][g][a].launchDate = activeDemInstr.launchDate;
                  }
                });
              });
            });
          }

          if (!structDataTemp[tabKey]) structDataTemp[tabKey] = {};
          if (!structDataTemp[tabKey][mk]) structDataTemp[tabKey][mk] = {};
          if (!structDataTemp[tabKey][mk][sub]) structDataTemp[tabKey][mk][sub] = {};
          if (!structDataTemp[tabKey][mk][sub][ssVal]) structDataTemp[tabKey][mk][sub][ssVal] = {};
          structDataTemp[tabKey][mk][sub][ssVal][campKey] = row;
        });
      };

      let detectedGlobalDate = null;
      const processStream = async (streamType, isAbs = false) => {
        const stream = uploadedFiles[streamType];
        let streamGData = {};
        if (stream.global) {
          const text = await readFile(stream.global);
          if (streamType === 'pct') {
            const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');
            const hdrs = splitCSVLine(lines[0]);
            const dateIdx = findHeader(hdrs, ['Date', 'Reporting Date', 'Day']);
            if (dateIdx !== -1) {
              let maxDate = null;
              lines.slice(1).forEach(l => { const cols = splitCSVLine(l); const d = robustParseDate(cols[dateIdx]); if (d && (!maxDate || d > maxDate)) maxDate = d; });
              detectedGlobalDate = maxDate;
              setLatestGlobalDate(maxDate);
            }
          }
          // Global file: every parsed row is the global anchor.
          streamGData = parseCSVData(text, {}, metaLookup, ['Country', 'Market', 'Campaign'], isAbs, null, true, false);
        }
        const mHubParsed = {};
        for (const m of MARKET_SEGMENTS) {
          if (stream.countryHB[m]) {
            const text = await readFile(stream.countryHB[m]);
            // Market HB: parse rows under the named market when no Country col present.
            mHubParsed[m] = parseCSVData(text, {}, metaLookup, undefined, isAbs, m, false, false);
          }
        }
        const alwaysOnParsed = {};
        // JP Proactive Container is parsed separately via the dedicated jpProactive
        // upload slot (different searchPriority + marketContext='Japan').
        for (const cat of AO_CATEGORIES) {
          if (cat === 'JP Proactive Container') continue;
          if (stream.alwaysOn[cat]) {
            const text = await readFile(stream.alwaysOn[cat]);
            // Always-On: bypass targeting gate (per-demo targeting metadata isn't shipped here).
            alwaysOnParsed[cat] = parseCSVData(text, {}, metaLookup, undefined, isAbs, null, false, true);
          }
        }
        let jpProactiveParsed = {};
        if (stream.jpProactive) {
          const text = await readFile(stream.jpProactive);
          jpProactiveParsed = parseCSVData(
            text,
            {},
            metaLookup,
            ['Campaign', 'Campaign Name', 'Entity', 'Trend Identifier', 'Trend', 'Name'],
            isAbs,
            'Japan',
            false,
            true
          );
        }
        return { streamGData, mHubParsed, alwaysOnParsed, jpProactiveParsed };
      };

      const pctResults = await processStream('pct', false);
      const absResults = await processStream('abs', true);

      // Attribution stream — Impressions/CTR ship at campaign granularity here,
      // and we overlay them onto matching campaigns from the regular streams.
      let attrData = {};
      if (uploadedFiles.attribution?.impressions) {
        const text = await readFile(uploadedFiles.attribution.impressions);
        attrData = parseCSVData(
          text,
          {},
          metaLookup,
          ['Campaign', 'Campaign Name', 'Entity'],
          true,
          null,
          false,
          false
        );
      }

      // For DAU/DAC/GenAI: pct stream supplies .v (lift %), abs stream supplies .abs.
      // For Impressions/CTR: only the abs stream supplies values, and they ride .v.
      // When `attribution` is given, overlay its Impressions/CTR onto rows whose
      // campaign name (case- and suffix-insensitive) matches.
      const getCampName = (key) => key.includes('_') ? key.substring(key.indexOf('_') + 1) : key;

      const mergeResults = (pctMap, absMap, attribution = {}) => {
        const merged = { ...pctMap };
        Object.keys(absMap).forEach(key => {
          if (!merged[key]) {
            merged[key] = absMap[key];
            return;
          }
          M_TYPES.forEach(m => {
            GENDERS_KEYS.forEach(g => {
              AGE_BUCKETS.forEach(a => {
                const absNode = absMap[key].metrics[m][g][a];
                merged[key].metrics[m][g][a].abs = absNode.abs;
                if ((m === 'Impressions' || m === 'CTR') && absNode.v !== 0 && absNode.v !== 'NA') {
                  merged[key].metrics[m][g][a].v = absNode.v;
                }
              });
            });
          });
        });

        // Attribution overlay: write Impressions/CTR .v onto matching rows.
        // Anchor rows match by market; standard campaigns by name (with normalisation).
        Object.keys(merged).forEach(rk => {
          const matchingAttrKey = Object.keys(attribution).find(ak => {
            const rkCamp = getCampName(rk);
            const akCamp = getCampName(ak);
            if (merged[rk].isAnchor && attribution[ak].isAnchor) {
              const resMarket = merged[rk].market;
              const attrMarket = attribution[ak].market;
              return eq(resMarket, attrMarket) || eq(merged[rk].country, attribution[ak].country);
            }
            return eq(rk, ak) || rk.includes(ak) || ak.includes(rk) || eq(rkCamp, akCamp);
          });
          if (!matchingAttrKey) return;
          GENDERS_KEYS.forEach(g => {
            AGE_BUCKETS.forEach(a => {
              const impVal = attribution[matchingAttrKey].metrics['Impressions']?.[g]?.[a]?.v || 0;
              if (impVal > 0 && impVal !== 'NA') merged[rk].metrics['Impressions'][g][a].v = impVal;
              const ctrVal = attribution[matchingAttrKey].metrics['CTR']?.[g]?.[a]?.v || 0;
              if (ctrVal > 0 && ctrVal !== 'NA') merged[rk].metrics['CTR'][g][a].v = ctrVal;
            });
          });
        });

        return merged;
      };

      const mergedGlobal = mergeResults(pctResults.streamGData, absResults.streamGData, attrData);
      routeData(mergedGlobal, 'APAC');

      const regionalMerged = {};
      MARKET_SEGMENTS.forEach(m => {
        const mMerged = mergeResults(pctResults.mHubParsed[m] || {}, absResults.mHubParsed[m] || {}, attrData);
        regionalMerged[m] = Object.values(mMerged);
        routeData(mMerged, m);
      });

      // Regular AO categories — JP Proactive handled separately below.
      AO_CATEGORIES.forEach((cat) => {
        if (cat === 'JP Proactive Container') return;
        const mergedAO = mergeResults(pctResults.alwaysOnParsed[cat] || {}, absResults.alwaysOnParsed[cat] || {}, attrData);
        routeData(mergedAO, 'India', 'AlwaysOn', cat);
      });

      // JP Proactive Container: routed into AlwaysOn → Japan → JP Proactive Container.
      // The dedicated lane keeps it visible in the AlwaysOn tab without colliding with
      // the standard categories that ship without trend dates.
      const mergedJp = mergeResults(pctResults.jpProactiveParsed || {}, absResults.jpProactiveParsed || {}, attrData);
      Object.values(mergedJp).forEach(row => {
        if (!row.market) row.market = 'Japan';
      });
      routeData(mergedJp, 'Japan', 'AlwaysOn', 'JP Proactive Container');

      const finalStructData = {};
      Object.keys(structDataTemp).forEach(tab => {
        finalStructData[tab] = {};
        Object.keys(structDataTemp[tab]).forEach(mk => {
          finalStructData[tab][mk] = {};
          Object.keys(structDataTemp[tab][mk]).forEach(sub => {
            finalStructData[tab][mk][sub] = {};
            Object.keys(structDataTemp[tab][mk][sub]).forEach(ss => { finalStructData[tab][mk][sub][ss] = Object.values(structDataTemp[tab][mk][sub][ss]); });
          });
        });
      });

      const globalDataArr = Object.values(mergedGlobal);
      setGlobalData(globalDataArr);
      setRegionalData(regionalMerged);
      setCampaignHubData(finalStructData);
      setIsAnalyzed(true);

      // Auto-save snapshot to memory
      const weekId = getWeekId(detectedGlobalDate || undefined);
      setMemoryStatus('saving');
      try {
        // Collect raw files for storage
        const rawFiles = {};
        const uFiles = uploadedFiles;
        if (uFiles.pct.global) rawFiles['pct-global'] = uFiles.pct.global;
        for (const [m, f] of Object.entries(uFiles.pct.countryHB)) { if (f) rawFiles[`pct-market-${m}`] = f; }
        for (const [c, f] of Object.entries(uFiles.pct.alwaysOn)) { if (f) rawFiles[`pct-ao-${c}`] = f; }
        if (uFiles.pct.jpProactive) rawFiles['pct-jp-proactive'] = uFiles.pct.jpProactive;
        if (uFiles.abs.global) rawFiles['abs-global'] = uFiles.abs.global;
        for (const [m, f] of Object.entries(uFiles.abs.countryHB)) { if (f) rawFiles[`abs-market-${m}`] = f; }
        for (const [c, f] of Object.entries(uFiles.abs.alwaysOn)) { if (f) rawFiles[`abs-ao-${c}`] = f; }
        if (uFiles.abs.jpProactive) rawFiles['abs-jp-proactive'] = uFiles.abs.jpProactive;
        if (uFiles.shared.campaignInfo) rawFiles['shared-meta'] = uFiles.shared.campaignInfo;
        if (uFiles.shared.pauseRelive) rawFiles['shared-instructions'] = uFiles.shared.pauseRelive;
        if (uFiles.attribution?.impressions) rawFiles['attribution-impressions'] = uFiles.attribution.impressions;

        await saveSnapshot({
          weekId,
          reportingDate: detectedGlobalDate,
          rawFiles
        });
        setMemoryStatus('saved');

        // Refresh memory index
        const idx = await loadSnapshotIndex(new Date().getFullYear());
        setMemoryIndex(idx.snapshots || []);
      } catch (memErr) {
        console.error('Memory save failed:', memErr);
        setMemoryStatus('error');
      }
    } catch (e) { console.error(e); } finally { setIsAnalyzing(false); }
  };

  // Load a historical snapshot: download raw CSVs and re-parse them
  const loadHistoricalWeek = useCallback(async (weekId) => {
    setIsLoadingMemory(true);
    try {
      const csvFiles = await loadSnapshotFiles(weekId);
      if (!csvFiles || Object.keys(csvFiles).length === 0) {
        console.error('No CSV files found for', weekId);
        return;
      }

      // Build metadata lookup from shared-meta CSV (two-level shape).
      // Targeting is intentionally absent here — historical snapshots predate the
      // targeting metadata column. parseCSVData treats a row without targeting
      // as fully permissive (no NA gating).
      let metaLookup = {};
      if (csvFiles['shared-meta']) {
        const lines = csvFiles['shared-meta'].split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length > 1) {
          const hdrs = splitCSVLine(lines[0]);
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']);
          const mktIdx = findHeader(hdrs, ['Market', 'Country']);
          const tabIdx = findHeader(hdrs, ['Campaign Tabs', 'Tabs', 'Tab']);
          const subIdx = findHeader(hdrs, ['Sub Tab', 'SubTab', 'Sub-Tab']);
          const ssIdx = findHeader(hdrs, ['Sub Sub Tab', 'SubSubTab', 'Sub-Sub-Tab']);
          const startIdx = findHeader(hdrs, ['Campaign Start Date', 'Start Date']);
          const endIdx = findHeader(hdrs, ['Campaign End Date', 'End Date']);
          const optIdx = findHeader(hdrs, ['Optimisation End Date', 'Opt End Date']);

          lines.slice(1).forEach(l => {
            const cols = splitCSVLine(l);
            const name = cleanStr(cols[cIdx]);
            if (!name) return;
            const rawMkt = cleanStr(cols[mktIdx]).toUpperCase();
            const resolvedMkt = MARKET_KEYS_REV[rawMkt] || MARKET_SEGMENTS.find(s => eq(s, rawMkt)) || 'India';
            const mktKey = superClean(resolvedMkt);
            const campKey = superClean(name);
            if (!metaLookup[mktKey]) metaLookup[mktKey] = {};
            metaLookup[mktKey][campKey] = {
              market: resolvedMkt,
              tab: cleanStr(cols[tabIdx]),
              subTab: cleanStr(cols[subIdx]),
              subSubTab: cleanStr(cols[ssIdx]),
              campaignStartDate: robustParseDate(cols[startIdx]),
              campaignEndDate: robustParseDate(cols[endIdx]),
              optimisationEndDate: robustParseDate(cols[optIdx])
            };
          });
        }
      }

      // Build instruction map from shared-instructions CSV
      const instructionMap = {};
      if (csvFiles['shared-instructions']) {
        const lines = csvFiles['shared-instructions'].split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length > 1) {
          const hdrs = splitCSVLine(lines[0]);
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']);
          const aIdx = findHeader(hdrs, ['Age', 'Age Group']);
          const gIdx = findHeader(hdrs, ['Gender']);
          const iIdx = findHeader(hdrs, ['Instruction', 'Action']);
          const dIdx = findHeader(hdrs, ['Launch Date', 'Date']);

          lines.slice(1).forEach(l => {
            const cols = splitCSVLine(l);
            const campaign = superClean(cols[cIdx]);
            if (!campaign) return;
            const age = (cols[aIdx] || 'total').toLowerCase().trim().replace(/[^a-z0-9+]/g, '');
            const gender = (cols[gIdx] || 'total').toLowerCase().trim();
            const instr = (cols[iIdx] || '').toUpperCase().trim();
            const date = cleanStr(cols[dIdx]);

            if (!instructionMap[campaign]) instructionMap[campaign] = {};
            if (!instructionMap[campaign][gender]) instructionMap[campaign][gender] = {};
            instructionMap[campaign][gender][age] = { instruction: instr, launchDate: date };
          });
        }
      }

      // Route data into campaign hub structure
      const structDataTemp = {};
      const routeData = (parsedMap, defaultMarket, forceTab = null, forceSub = null) => {
        Object.values(parsedMap).forEach(row => {
          const meta = row.meta || {};
          let rawTab = forceTab || cleanStr(meta.tab) || 'Uncategorized';
          const matchedChild = CAMPAIGN_CHILDREN.find(child => eq(child.id, rawTab) || eq(child.label, rawTab));
          const tabKey = matchedChild ? matchedChild.id : rawTab;
          const sub = forceSub || cleanStr(meta.subTab) || 'Generic';
          const ssVal = cleanStr(meta.subSubTab) || 'Default';
          const mk = meta.market || defaultMarket;
          const campKey = superClean(row.country);

          // Apply pause/relive instructions
          const campInstr = instructionMap[superClean(row.country)];
          if (campInstr) {
            M_TYPES.forEach(m => {
              GENDERS_KEYS.forEach(g => {
                AGE_BUCKETS.forEach(a => {
                  const sanA = a.replace(/[^a-z0-9+]/g, '');
                  const parentA = (sanA === '1824' || sanA === '2534') ? '1834' : null;
                  const checkKeys = [
                    [g, sanA], parentA ? [g, parentA] : null, [g, 'total'],
                    ['total', sanA], parentA ? ['total', parentA] : null, ['total', 'total']
                  ].filter(Boolean);
                  let activeDemInstr = null;
                  for (const [tg, ta] of checkKeys) {
                    const found = campInstr[tg]?.[ta];
                    if (found && found.instruction === 'PAUSE' && found.launchDate && found.launchDate.trim() !== '') {
                      activeDemInstr = found;
                      break;
                    }
                  }
                  if (activeDemInstr) {
                    row.metrics[m][g][a].isPaused = true;
                    row.metrics[m][g][a].launchDate = activeDemInstr.launchDate;
                  }
                });
              });
            });
          }

          if (!structDataTemp[tabKey]) structDataTemp[tabKey] = {};
          if (!structDataTemp[tabKey][mk]) structDataTemp[tabKey][mk] = {};
          if (!structDataTemp[tabKey][mk][sub]) structDataTemp[tabKey][mk][sub] = {};
          if (!structDataTemp[tabKey][mk][sub][ssVal]) structDataTemp[tabKey][mk][sub][ssVal] = {};
          structDataTemp[tabKey][mk][sub][ssVal][campKey] = row;
        });
      };

      // Parse percentage and absolute streams
      // For DAU/DAC/GenAI: pct stream supplies .v (lift %), abs stream supplies .abs.
      // For Impressions/CTR: only the abs stream supplies values, and they ride .v
      // (parseCSVData routes them there explicitly).
      const mergeResults = (pctMap, absMap) => {
        const merged = { ...pctMap };
        Object.keys(absMap).forEach(key => {
          if (!merged[key]) {
            merged[key] = absMap[key];
            return;
          }
          M_TYPES.forEach(m => {
            GENDERS_KEYS.forEach(g => {
              AGE_BUCKETS.forEach(a => {
                const absNode = absMap[key].metrics[m][g][a];
                merged[key].metrics[m][g][a].abs = absNode.abs;
                if ((m === 'Impressions' || m === 'CTR') && absNode.v !== 0 && absNode.v !== 'NA') {
                  merged[key].metrics[m][g][a].v = absNode.v;
                }
              });
            });
          });
        });
        return merged;
      };

      // Attribution stream — overlays Impressions/CTR onto matching campaigns.
      const attrData = csvFiles['attribution-impressions']
        ? parseCSVData(csvFiles['attribution-impressions'], {}, metaLookup, ['Campaign', 'Campaign Name', 'Entity'], true, null, false, false)
        : {};

      // Parse global streams
      const pctGlobal = csvFiles['pct-global'] ? parseCSVData(csvFiles['pct-global'], {}, metaLookup, ['Country', 'Market', 'Campaign'], false, null, true, false) : {};
      const absGlobal = csvFiles['abs-global'] ? parseCSVData(csvFiles['abs-global'], {}, metaLookup, ['Country', 'Market', 'Campaign'], true, null, true, false) : {};
      const mergedGlobal = mergeResults(pctGlobal, absGlobal, attrData);
      routeData(mergedGlobal, 'APAC');

      // Detect reporting date from pct-global
      let loadedDate = null;
      if (csvFiles['pct-global']) {
        const lines = csvFiles['pct-global'].split(/\r?\n/).filter(l => l.trim() !== '');
        if (lines.length > 1) {
          const hdrs = splitCSVLine(lines[0]);
          const dateIdx = findHeader(hdrs, ['Date', 'Reporting Date', 'Day']);
          if (dateIdx !== -1) {
            lines.slice(1).forEach(l => { const cols = splitCSVLine(l); const d = robustParseDate(cols[dateIdx]); if (d && (!loadedDate || d > loadedDate)) loadedDate = d; });
          }
        }
      }

      // Parse market streams
      const regionalMerged = {};
      MARKET_SEGMENTS.forEach(m => {
        const pctMarket = csvFiles[`pct-market-${m}`] ? parseCSVData(csvFiles[`pct-market-${m}`], {}, metaLookup, undefined, false, m, false, false) : {};
        const absMarket = csvFiles[`abs-market-${m}`] ? parseCSVData(csvFiles[`abs-market-${m}`], {}, metaLookup, undefined, true, m, false, false) : {};
        const mMerged = mergeResults(pctMarket, absMarket, attrData);
        regionalMerged[m] = Object.values(mMerged);
        routeData(mMerged, m);
      });

      // Parse always-on streams (skip JP Proactive — it's loaded via dedicated keys)
      AO_CATEGORIES.forEach(cat => {
        if (cat === 'JP Proactive Container') return;
        const pctAO = csvFiles[`pct-ao-${cat}`] ? parseCSVData(csvFiles[`pct-ao-${cat}`], {}, metaLookup, undefined, false, null, false, true) : {};
        const absAO = csvFiles[`abs-ao-${cat}`] ? parseCSVData(csvFiles[`abs-ao-${cat}`], {}, metaLookup, undefined, true, null, false, true) : {};
        const mergedAO = mergeResults(pctAO, absAO, attrData);
        routeData(mergedAO, 'India', 'AlwaysOn', cat);
      });

      // JP Proactive Container (own searchPriority + Japan marketContext, isAlwaysOnData)
      const pctJp = csvFiles['pct-jp-proactive']
        ? parseCSVData(csvFiles['pct-jp-proactive'], {}, metaLookup, ['Campaign', 'Campaign Name', 'Entity', 'Trend Identifier', 'Trend', 'Name'], false, 'Japan', false, true)
        : {};
      const absJp = csvFiles['abs-jp-proactive']
        ? parseCSVData(csvFiles['abs-jp-proactive'], {}, metaLookup, ['Campaign', 'Campaign Name', 'Entity', 'Trend Identifier', 'Trend', 'Name'], true, 'Japan', false, true)
        : {};
      const mergedJp = mergeResults(pctJp, absJp, attrData);
      Object.values(mergedJp).forEach(row => { if (!row.market) row.market = 'Japan'; });
      routeData(mergedJp, 'Japan', 'AlwaysOn', 'JP Proactive Container');

      // Build final campaign hub structure
      const finalStructData = {};
      Object.keys(structDataTemp).forEach(tab => {
        finalStructData[tab] = {};
        Object.keys(structDataTemp[tab]).forEach(mk => {
          finalStructData[tab][mk] = {};
          Object.keys(structDataTemp[tab][mk]).forEach(sub => {
            finalStructData[tab][mk][sub] = {};
            Object.keys(structDataTemp[tab][mk][sub]).forEach(ss => { finalStructData[tab][mk][sub][ss] = Object.values(structDataTemp[tab][mk][sub][ss]); });
          });
        });
      });

      // Set all state
      setGlobalData(Object.values(mergedGlobal));
      setRegionalData(regionalMerged);
      setCampaignHubData(finalStructData);
      setLatestGlobalDate(loadedDate);
      setIsAnalyzed(true);
      setActiveTab('OKR');

      setHistoricalSnapshots(prev => {
        if (prev.find(s => s.weekId === weekId)) return prev;
        return [...prev, { weekId }];
      });
    } catch (err) {
      console.error('Failed to load snapshot:', err);
    } finally {
      setIsLoadingMemory(false);
    }
  }, []);

  // Load memory index on mount and auto-load the most recent snapshot
  useEffect(() => {
    loadSnapshotIndex(new Date().getFullYear())
      .then(async (idx) => {
        const snaps = idx.snapshots || [];
        setMemoryIndex(snaps);
        if (snaps.length > 0) {
          const latest = snaps[snaps.length - 1];
          await loadHistoricalWeek(latest.weekId);
        }
      })
      .catch(() => {})
      .finally(() => setInitialLoading(false));
  }, [loadHistoricalWeek]);

  // Reset subtab filters back to "ALL" when the user switches markets — old
  // selections from a different market won't have matching buckets.
  useEffect(() => {
    setSubTabFilter(p => ({ ...p, [activeTab]: '' }));
    setSubSubTabFilter(p => ({ ...p, [activeTab]: '' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, tabMarketFilter[activeTab]]);

  const handleFileUpload = (stream, type, f, k) => {
    setUploadedFiles(prev => {
      const isMulti = type === 'countryHB' || type === 'alwaysOn';
      const updatedStream = { ...prev[stream] };
      if (isMulti) updatedStream[type] = { ...updatedStream[type], [k]: f };
      else updatedStream[type] = f;
      return { ...prev, [stream]: updatedStream };
    });
  };

  if (initialLoading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#e5e5e5', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>BRAIN <span style={{ color: '#FF0000' }}>2.0</span></div>
        <p style={{ color: '#737373', fontSize: 13, marginTop: 8 }}>Loading latest data…</p>
      </div>
    </div>
  );

  if (!isAnalyzed) return <LandingPage uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} startAnalysis={startAnalysis} isAnalyzing={isAnalyzing} memoryIndex={memoryIndex} loadHistoricalWeek={loadHistoricalWeek} isLoadingMemory={isLoadingMemory} historicalSnapshots={historicalSnapshots} />;

  return (
    <div className="flex h-screen bg-black text-[#e0e0e0] overflow-hidden">
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 bg-[#1a1a1a] border-r border-[#3a3a3a] flex flex-col z-50`}>
        <div className="p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#3a3a3a]">
          <div className="bg-[#FF0000] p-2 rounded-lg flex items-center justify-center"><Brain className="w-5 h-5 text-white" /></div>
          {isSidebarOpen && (
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold tracking-tight">BRAIN <span className="text-[#FF0000]">2.0</span></h2>
                <a href={DRIVE_RESOURCE_LINK} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors" title="Source Drive"><DriveIcon className="w-4 h-4" /></a>
              </div>
              <p className="text-[8px] font-bold uppercase text-[#808080] tracking-widest">APAC Shorts</p>
            </div>
          )}
        </div>
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(item => {
            const restricted = item.id === 'Upload' && !isDataIngestionAdmin;
            const handleClick = () => {
              if (item.id === 'Upload') {
                if (restricted) {
                  setAccessRequestShown(true);
                } else {
                  setAccessRequestShown(false);
                  setIsAnalyzed(false);
                }
              } else {
                setAccessRequestShown(false);
                setActiveTab(item.id);
                logUsageEvent('tab_viewed', { tab_id: item.id });
              }
            };
            const isActive = item.id === 'Upload' ? accessRequestShown : (activeTab === item.id && !accessRequestShown);
            return (
              <button key={item.id} onClick={handleClick} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all group relative cursor-pointer ${isActive ? 'bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20' : 'text-[#808080] hover:bg-white/5 hover:text-white border border-transparent'}`} title={restricted ? 'Admin access required — click for details' : item.label}>
                <item.icon className="w-5 h-5 shrink-0" />{isSidebarOpen && <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}{restricted ? ' 🔒' : ''}</span>}
              </button>
            );
          })}
          <button onClick={() => setIsCampaignTypeExpanded(!isCampaignTypeExpanded)} className="w-full flex items-center justify-between p-3 rounded-lg text-[#808080] hover:text-white cursor-pointer border border-transparent">
            <div className="flex items-center gap-3"><FolderKanban className="w-5 h-5 shrink-0" />{isSidebarOpen && <span className="text-[11px] font-bold uppercase tracking-wider">Campaign Deepdive</span>}</div>
            {isSidebarOpen && (isCampaignTypeExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}
          </button>
          {isCampaignTypeExpanded && isSidebarOpen && (
            <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
              {CAMPAIGN_CHILDREN.map(child => (
                <button key={child.id} onClick={() => { setActiveTab(child.id); logUsageEvent('tab_viewed', { tab_id: 'Market Hub', sub_view: child.id }); }} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${activeTab === child.id ? 'bg-[#FF0000]/10 text-[#FF0000]' : 'text-[#555] hover:bg-white/5 hover:text-white'}`}>
                  <child.icon className="w-4 h-4 shrink-0" /><span className="text-[10px] font-bold uppercase">{child.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Memory Panel */}
          {isSidebarOpen && (
            <div className="mt-6 pt-4 border-t border-[#3a3a3a]">
              <div className="flex items-center gap-2 px-3 mb-3">
                <Database className="w-4 h-4 text-[#808080]" />
                <span className="text-[10px] font-bold uppercase text-[#808080] tracking-wider">Memory</span>
                {memoryStatus === 'saving' && <Loader2 className="w-3 h-3 text-amber-400 animate-spin ml-auto" />}
                {memoryStatus === 'saved' && <CheckCircle2 className="w-3 h-3 text-emerald-400 ml-auto" />}
                {memoryStatus === 'error' && <AlertCircle className="w-3 h-3 text-red-400 ml-auto" />}
              </div>
              <div className="space-y-1 max-h-[200px] overflow-y-auto px-1">
                {memoryIndex.length === 0 ? (
                  <p className="text-[9px] text-[#555] px-3 py-2">No snapshots stored yet</p>
                ) : (
                  memoryIndex.map(snap => (
                    <button
                      key={snap.weekId}
                      onClick={() => loadHistoricalWeek(snap.weekId)}
                      disabled={isLoadingMemory}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-all cursor-pointer ${
                        historicalSnapshots.some(h => h.weekId === snap.weekId)
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'text-[#808080] hover:bg-white/5 hover:text-white border border-transparent'
                      }`}
                    >
                      <Clock className="w-3 h-3 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold block">{snap.weekId}</span>
                        <span className="text-[8px] opacity-60">{snap.reportingDate || 'No date'}</span>
                      </div>
                      <span className="text-[8px] opacity-50">{snap.globalCount || 0}</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </nav>
        {/* Signed-in identity strip — helps diagnose access issues at a glance */}
        {isSidebarOpen && (
          <div className="px-6 py-3 border-t border-[#3a3a3a] text-[#808080]">
            <div className="text-[8px] font-bold uppercase tracking-widest text-[#555] mb-1">Signed in</div>
            <div className="text-[10px] truncate" title={normalizedEmail}>{normalizedEmail || '—'}</div>
            <div className="text-[8px] mt-1 uppercase tracking-wider">{isDataIngestionAdmin ? <span className="text-emerald-400">Ingestion admin</span> : <span className="text-[#555]">Read-only</span>}</div>
          </div>
        )}
        {/* Sidebar collapse toggle — at the bottom so it's always reachable */}
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-6 border-t border-[#3a3a3a] text-[#555] hover:text-white flex items-center justify-center transition-colors"
          title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <header className="px-8 py-5 border-b border-[#3a3a3a] flex items-center justify-between bg-[#1a1a1a]">
          <div className="flex items-center gap-4">
            <h4 className="text-sm font-bold text-white uppercase">{accessRequestShown ? 'Data Ingestion' : activeTab}</h4>
          </div>
          <button className="bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] transition-all"><Download className="w-4 h-4 mr-2 inline" /> Export Hub</button>
        </header>

        <main className="flex-1 overflow-auto p-10 relative">
          {accessRequestShown && (
            <div className="max-w-2xl mx-auto mt-12 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF0000]/10 p-2 rounded-lg"><UploadCloud className="w-5 h-5 text-[#FF0000]" /></div>
                <h2 className="text-lg font-bold text-white">Data Ingestion — Access Required</h2>
              </div>
              <p className="text-[13px] text-[#a0a0a0] leading-relaxed mb-6">
                Data Ingestion is restricted to a small admin allowlist because it overwrites the saved snapshot for everyone on EXECUTE.
              </p>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1">You are signed in as</div>
                  <div className="text-[14px] text-white font-mono">{normalizedEmail || '(no email reported)'}</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#808080] mb-1">Allowlisted admins</div>
                  <ul className="text-[12px] text-[#e0e0e0] font-mono space-y-1">
                    {DATA_INGESTION_ADMINS.map(addr => <li key={addr}>{addr}</li>)}
                  </ul>
                </div>
              </div>
              <div className="text-[12px] text-[#808080] border-t border-[#3a3a3a] pt-5">
                To request access, contact one of the admins above. If you believe you should already be on this list, your sign-in email above may not match exactly — check casing or alias.
              </div>
              <button onClick={() => setAccessRequestShown(false)} className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#808080] hover:text-white transition-colors">← Back to {activeTab}</button>
            </div>
          )}
          {!accessRequestShown && activeTab === 'OKR' && <OKRAndRecsView globalData={globalData} regionalData={regionalData} latestDate={latestGlobalDate} quarterStart={quarterStart} />}
          {!accessRequestShown && (activeTab === 'Global Hub' || activeTab === 'Market Hub') && (
            <div className="space-y-8 animate-in fade-in">
              <MetricControlHub
                activeMetrics={activeMetrics.filter(m => allowedMetrics.includes(m))}
                allowedMetrics={allowedMetrics}
                toggleMetric={m => setActiveMetrics(p => p.includes(m) ? (p.length > 1 ? p.filter(x => x !== m) : p) : [...p, m])}
                handleAllToggle={() => setActiveMetrics(p => p.length === allowedMetrics.length ? ['DAU-SCT'] : [...allowedMetrics])}
              />
              {activeTab === 'Market Hub' && (
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <select value={activeMarketSubTab} onChange={e => setActiveMarketSubTab(e.target.value)} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4">
                      {MARKET_SEGMENTS.map(m => <option key={m} value={m} className="bg-neutral-900">{m}</option>)}
                    </select>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit">
                    <Filter className="w-6 h-6 text-amber-500" />
                    <select value={campaignTypeFilter} onChange={e => setCampaignTypeFilter(e.target.value)} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4">
                      <option value="" className="bg-neutral-900">ALL CAMPAIGN TYPES</option>
                      {CAMPAIGN_CHILDREN.map(c => <option key={c.id} value={c.id} className="bg-neutral-900">{c.label}</option>)}
                    </select>
                  </div>
                </div>
              )}
              <MasterTableView
                data={activeTab === 'Global Hub' ? globalData : (() => {
                  // Anchor-row injection: prepend the global anchor for the selected
                  // market so users can see Market Hub campaigns alongside their reference.
                  let campaigns = (regionalData[activeMarketSubTab] || []).filter(c =>
                    c.country && c.country.toUpperCase() !== 'UNKNOWN'
                  );
                  if (campaignTypeFilter) {
                    campaigns = campaigns.filter(c => eq(c.meta?.tab, campaignTypeFilter));
                  }
                  const globalRef = globalData.find(d =>
                    eq(d.country, activeMarketSubTab) || eq(d.country, MARKET_KEYS[activeMarketSubTab])
                  );
                  return globalRef ? [{ ...globalRef, isAnchor: true }, ...campaigns] : campaigns;
                })()}
                activeMetrics={activeMetrics.filter(m => allowedMetrics.includes(m))}
                isCampaignView={activeTab === 'Market Hub'}
                hideDates={activeTab === 'Global Hub'}
                latestGlobalDate={latestGlobalDate}
              />
            </div>
          )}

          {!accessRequestShown && (CAMPAIGN_CHILDREN.some(c => c.id === activeTab) || campaignHubData[activeTab]) && activeTab !== 'OKR' && (
            <div className="space-y-8 animate-in fade-in">
              <MetricControlHub
                activeMetrics={activeMetrics.filter(m => allowedMetrics.includes(m))}
                allowedMetrics={allowedMetrics}
                toggleMetric={m => setActiveMetrics(p => p.includes(m) ? (p.length > 1 ? p.filter(x => x !== m) : p) : [...p, m])}
                handleAllToggle={() => setActiveMetrics(p => p.length === allowedMetrics.length ? ['DAU-SCT'] : [...allowedMetrics])}
              />
              {/* Pill rows replaced with dropdowns; empty value = "ALL" (flatten across buckets) */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <select value={tabMarketFilter[activeTab]} onChange={e => setTabMarketFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4">
                    {MARKET_SEGMENTS.map(m => <option key={m} value={m} className="bg-neutral-900">{m}</option>)}
                  </select>
                </div>
                {dynamicSubTabs.length > 0 && (
                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit">
                    <Filter className="w-6 h-6 text-amber-500" />
                    <select value={subTabFilter[activeTab]} onChange={e => setSubTabFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4">
                      <option value="" className="bg-neutral-900">ALL SUB TABS</option>
                      {dynamicSubTabs.map(cat => <option key={cat} value={cat} className="bg-neutral-900">{cat}</option>)}
                    </select>
                  </div>
                )}
                {activeTab !== 'AlwaysOn' && dynamicSubSubTabs.length > 0 && subTabFilter[activeTab] !== "" && (
                  <div className="flex items-center gap-4 p-4 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] w-fit">
                    <ListTree className="w-6 h-6 text-purple-500" />
                    <select value={subSubTabFilter[activeTab]} onChange={e => setSubSubTabFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-4">
                      <option value="" className="bg-neutral-900">ALL SUB SUB TABS</option>
                      {dynamicSubSubTabs.map(cat => <option key={cat} value={cat} className="bg-neutral-900">{cat}</option>)}
                    </select>
                  </div>
                )}
              </div>
              <MasterTableView
                data={(() => {
                  const mkt = tabMarketFilter[activeTab];
                  const sub = subTabFilter[activeTab];
                  const ss = subSubTabFilter[activeTab];

                  // Strict isolation for JP Proactive Container — the routing override
                  // dumps everything tagged with this subtab into the Japan/AlwaysOn lane;
                  // the flatten walk handles the slightly different nested shape it produces.
                  if (activeTab === 'AlwaysOn' && sub === 'JP Proactive Container') {
                    const jpData = campaignHubData['AlwaysOn']?.['Japan']?.['JP Proactive Container'];
                    if (!jpData) return [];
                    return Object.values(jpData).flatMap(x => Array.isArray(x) ? x : Object.values(x).flat());
                  }

                  // ALL SUB TABS: flatten across every sub/sub-sub bucket for the market.
                  if (!sub) {
                    const allForMarket = campaignHubData[activeTab]?.[mkt];
                    if (!allForMarket) return [];
                    return Object.values(allForMarket).flatMap(st => Object.values(st).flat());
                  }

                  // ALL SUB SUB TABS (or AlwaysOn — flat trend list): flatten the subtab.
                  if (!ss || activeTab === 'AlwaysOn') {
                    const allForSub = campaignHubData[activeTab]?.[mkt]?.[sub];
                    if (!allForSub) return [];
                    const rows = Object.values(allForSub).flat();
                    // Sort AlwaysOn trends by start date so the table reads chronologically.
                    return activeTab === 'AlwaysOn'
                      ? [...rows].sort((a, b) => (a.explicitTrendStart || a.dataMinDate || '').localeCompare(b.explicitTrendStart || b.dataMinDate || ''))
                      : rows;
                  }

                  return campaignHubData[activeTab]?.[mkt]?.[sub]?.[ss] || [];
                })()}
                activeMetrics={activeMetrics.filter(m => allowedMetrics.includes(m))}
                isCampaignView
                isAlwaysOn={activeTab === 'AlwaysOn'}
                latestGlobalDate={latestGlobalDate}
              />
            </div>
          )}
        </main>
      </div>
      <style>{`
        body { background-color: #000000; color: #e0e0e0; margin: 0; -webkit-font-smoothing: antialiased; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: #3a3a3a; border-radius: 10px; }
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; padding-right: 2rem; }
      `}</style>
    </div>
  );
};

export default App;
