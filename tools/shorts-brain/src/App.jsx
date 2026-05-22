import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';  
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, logUsageEvent } from './firebase.js';
import {   
  getFirestore, doc, setDoc, getDoc, collection, onSnapshot,  
  deleteDoc, query  
} from 'firebase/firestore';  
import {  
  Globe, RefreshCcw, Brain, MapPin, Sparkles, Download,  
  Layers, Zap, Play, TrendingUp, Users,  
  Target, ZapOff,  
  UploadCloud, ClipboardCheck, Flag,  
  Wand2, Palette, Component as ComponentIcon,  
  ChevronDown, ChevronUp, FolderKanban, Lightbulb, Copy, Edit2, Save, Plus,  
  RotateCcw, Binary, Power, Settings2, Trash2,  
  Database, Clock, CheckCircle2, AlertCircle, Loader2,  
  Menu, X, Filter, BarChart3, Calendar,  
  ListTree, ChevronLeft, ChevronRight, ChevronRight as ListTreeIcon  
} from 'lucide-react';

// --- FIREBASE (shared v3-creative-engine app, see firebase.js) ---
const db = getFirestore(app);
const auth = getAuth(app);

// --- 1. CONFIGURATION & CONSTANTS ---  
const DRIVE_RESOURCE_LINK = "https://drive.google.com/corp/drive/folders/18GCtCrz-Bs1YdXKtQs-tjugb6xudULaX?resourcekey=0-gMJCegK7SZkhgJeT_YTjSw";

const M_TYPES = ['DAU-SCT', 'DAC-SCT', 'GenAI DAU-SCT', 'Impressions', 'CTR'];  
const MARKET_SEGMENTS = ['India', 'Indonesia', 'Japan', 'South Korea', 'AUNZ'];  
const MARKET_KEYS = { 'India': 'IN', 'Indonesia': 'ID', 'Japan': 'JP', 'South Korea': 'KR', 'AUNZ': 'AUNZ' };  
const MARKET_KEYS_REV = { 'IN': 'India', 'ID': 'Indonesia', 'JP': 'Japan', 'KR': 'South Korea', 'AUNZ': 'AUNZ' };

const AO_CATEGORIES = ['SSC', 'Shelf', 'UTS', 'MVR', 'UTS SFV', 'JP Proactive Container'];

const DATA_INGESTION_ADMINS = ['kanishak@google.com', 'danilpalma@google.com', 'ivanho.wz@gmail.com', 'ivho@google.com'];

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

const getOkrTarget = (startDate) => {
  if (startDate && startDate >= '2026-10-01') return 1.0;
  if (startDate && startDate >= '2026-07-01') return 0.65;
  return 0.4;
};

const NAV_ITEMS = [  
  { id: 'Upload', label: 'Data Ingestion', icon: UploadCloud },  
  { id: 'OKR', label: 'Shorts OKR Performance', icon: Target },  
  { id: 'Global Hub', label: 'Global Holdback', icon: Globe },  
  { id: 'Market Hub', label: 'Campaign Holdback', icon: Layers },  
];

const CAMPAIGN_CHILDREN = [  
  { id: 'AlwaysOn', label: 'Always-On', icon: Zap },  
  { id: 'ScaledCreation', label: 'Scaled Creation', icon: Sparkles },
  { id: 'Effects', label: 'Effects', icon: Lightbulb },
  { id: 'Trends', label: 'Trends', icon: TrendingUp },
  { id: 'CultMo', label: 'CultMo', icon: ComponentIcon },  
  { id: 'ArtMo', label: 'ArtMo', icon: Palette },  
  { id: 'GenAI Hub', label: 'GenAI Hub', icon: Wand2 }  
];

// --- 2. GLOBAL UTILITIES ---

const cleanStr = (s) => (s || '').toString().replace(/['"]/g, '').replace(/\u00A0/g, ' ').trim();

const superClean = (s) => {  
  try {  
    return cleanStr(s).toUpperCase().replace(/[^\p{L}\p{N}]/gu, '');  
  } catch (e) {  
    return cleanStr(s).toUpperCase().replace(/[\s\-_&!?,.()'"！]/g, '');  
  }  
};

const eq = (a, b) => superClean(a) === superClean(b);

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

const calcDaysLive = (startStr, endStr) => {  
  const start = robustParseDate(startStr);  
  const end = robustParseDate(endStr);  
  if (!start || !end) return 0;  
  try {  
    const s = new Date(start), e = new Date(end);  
    const diffTime = e.getTime() - s.getTime();  
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));  
    return diffDays >= 0 ? diffDays + 1 : 0;  
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

const findMetadata = (rowKey, metaMap, marketContext = null) => {  
  const campKey = superClean(rowKey);  
  const normalizedCampKey = normalizeCampaignKey(rowKey);

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

const getWeekId = (dateStr) => {  
  const d = dateStr ? new Date(dateStr) : new Date();  
  if (isNaN(d.getTime())) return `SNAPSHOT-${Date.now()}`;  
  const year = d.getFullYear();  
  const oneJan = new Date(year, 0, 1);  
  const numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));  
  const result = Math.ceil((d.getDay() + 1 + numberOfDays) / 7);  
  return `${year}-W${result.toString().padStart(2, '0')}`;  
};

const getStatusConfig = (pi, off) => {  
  if (off) return { cardBg: 'bg-[#111]', color: 'text-[#444]', accent: 'bg-[#444]' };  
  if (pi >= 100) return { cardBg: 'bg-emerald-950/20', color: 'text-emerald-400', accent: 'bg-emerald-500' };  
  if (pi >= 80) return { cardBg: 'bg-amber-950/20', color: 'text-amber-400', accent: 'bg-amber-500' };  
  return { cardBg: 'bg-red-950/20', color: 'text-red-400', accent: 'bg-red-500' };  
};

// --- COMPRESSION UTILS ---  
const compressRow = (row) => {  
  const cRow = { ...row, metrics: {} };  
  M_TYPES.forEach(m => {  
    if (row.metrics[m]) {  
      GENDERS_KEYS.forEach(g => {  
        AGE_BUCKETS.forEach(a => {  
          const n = row.metrics[m][g][a];  
          if (n && (n.v !== 0 || n.abs !== 0 || n.sig !== 0 || n.isPaused || n.v === 'NA')) {  
            if (!cRow.metrics[m]) cRow.metrics[m] = {};  
            if (!cRow.metrics[m][g]) cRow.metrics[m][g] = {};  
            cRow.metrics[m][g][a] = n;  
          }  
        });  
      });  
    }  
  });  
  return cRow;  
};

const decompressRow = (row) => {  
  const dRow = { ...row, metrics: {} };  
  M_TYPES.forEach(m => {  
    dRow.metrics[m] = { female: {}, male: {}, total: {} };  
    GENDERS_KEYS.forEach(g => {  
      AGE_BUCKETS.forEach(a => {  
        dRow.metrics[m][g][a] = row.metrics?.[m]?.[g]?.[a] || { v: 0, sig: 0, abs: 0, isPaused: false, launchDate: null };  
      });  
    });  
  });  
  return dRow;  
};

// --- DATA PARSING ENGINE ---  
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

      const isAbsRow = forceAbs && (  
        rowValTypeRaw.includes('DELTA') ||  
        rowValTypeRaw === '' ||  
        rowValTypeRaw === 'TOTAL' ||  
        rowValTypeRaw.includes('IMPRESSIONS') ||  
        rowValTypeRaw.includes('ABSOLUTE') ||  
        rowValTypeRaw.includes('VOLUME') ||  
        rowValTypeRaw.includes('CTR')  
      ) && (  
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
      const gIdx = findHeader(headers, ['Gender', 'Sex']);  
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
      const aIdx = findHeader(headers, ['Age', 'Age Group']);  
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
          return matchAlias && !(hUpper.includes('CONFIDENCE') || hUpper.includes('BOUND'));  
        });

        if (targetCol === -1) return;  
        const rawCell = (columns[targetCol] || '').replace(/['"]/g, '').trim();  
        const numericVal = parseFloat(rawCell.replace(/[^\d.-]/g, '')) || 0;

        const targeting = acc[compositeKey].meta.targeting;

        let isTargeted = false;  
        if (isAnchorRow || isAlwaysOnData) {  
          isTargeted = true;  
        } else if (targeting) {  
          const ageAllowed = targeting.ages.length === 0 || targeting.ages.includes(age);  
          const genderAllowed = targeting.genders.length === 0 || targeting.genders.includes(gender);  
          isTargeted = ageAllowed && genderAllowed;
        }
        // Impressions/CTR are volume metrics — not gated by demographic targeting.
        if (m === 'Impressions' || m === 'CTR') isTargeted = true;

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
        }  
        else if (isAbsRow) {  
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
        }  
        else if (isSigRow) {  
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

const copyToClipboardFunc = (text) => {  
  const textArea = document.createElement("textarea");  
  textArea.value = text;  
  document.body.appendChild(textArea);  
  textArea.select();  
  try { document.execCommand('copy'); } catch (err) { }  
  document.body.removeChild(textArea);  
};

const DriveIcon = ({ className }) => (  
  <svg className={className} viewBox="0 0 1443 1250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">  
    <path d="M485.29 0L0 839.25l242.42 410.74 485.29-839.25H485.29z" />  
    <path d="M957.66 0l-242.43 419.63 485.29 830.36 242.54-419.63L957.66 0z" opacity="0.8" />  
    <path d="M524.23 839.25l-242.42 410.74h960.54l242.42-410.74H524.23z" opacity="0.6" />  
  </svg>  
);

// --- 3. UI COMPONENTS ---

const MetricControlHub = ({ activeMetrics, toggleMetric, handleAllToggle, allowedMetrics = M_TYPES }) => (  
  <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">  
    <div className="flex flex-wrap gap-2 bg-black p-1 rounded-lg border border-[#3a3a3a]">  
      {allowedMetrics.map(m => (  
        <button key={m} type="button" onClick={() => toggleMetric(m)} className={`px-5 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${activeMetrics.includes(m) ? 'bg-[#FF0000] text-white' : 'text-[#808080] hover:text-white'}`}>  
          {m}  
        </button>  
      ))}  
    </div>  
    <button type="button" onClick={() => handleAllToggle()} className={`px-6 py-2.5 rounded-md text-[10px] font-bold tracking-widest uppercase border transition-all cursor-pointer ${activeMetrics.length === allowedMetrics.length ? 'bg-white text-black border-white' : 'bg-transparent text-[#808080] border-[#3a3a3a] hover:border-[#808080]'}`}>  
      {activeMetrics.length === allowedMetrics.length ? 'Selective View' : 'Sync All Metrics'}  
    </button>  
  </div>  
);

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

      <div ref={scrollRef} className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-x-auto no-scrollbar scroll-smooth">  
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
                      <span className="font-bold text-[12px] uppercase tracking-tight">{String(row.country || 'Unknown')}</span>  
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
                                        {(isAnchorRow && (m === 'Impressions' || m === 'CTR') && node.v === 0) ? 'NA' : (  
                                          m === 'Impressions' ? formatCompactNumber(node.v) :  
                                            m === 'CTR' ? `${node.v.toFixed(2)}%` :  
                                              (node.v === 0 ? '0.00' : (node.v > 0 ? `+${node.v.toFixed(2)}` : `${node.v.toFixed(2)}`))  
                                        )}  
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

const OKRAndRecsView = ({ globalData, regionalData, latestDate, quarterStart }) => {  
  const [editingId, setEditingId] = useState(null);  
  const [editedRows, setEditedRows] = useState({});  
  const [manualPointers, setManualPointers] = useState([]);  
  const [isAddingManual, setIsAddingManual] = useState(false);  
  const [deletedRowIds, setDeletedRowIds] = useState(new Set());  
  const [copyFeedback, setCopyFeedback] = useState(null);  
  const [newManualForm, setNewManualForm] = useState({ country: 'APAC', campaign: '', age: 'GenPop', gender: 'GenPop', recommendation: 'MAINTAIN', justification: '' });

  const showFeedback = (msg) => { setCopyFeedback(msg); setTimeout(() => setCopyFeedback(null), 2000); };

  const daysLeft = useMemo(() => {  
    if (!latestDate) return "TBD";  
    const endQ = new Date("2026-06-30");  
    const current = new Date(latestDate);  
    const diffTime = Math.ceil((endQ - current) / (1000 * 60 * 60 * 24));  
    return diffTime > 0 ? diffTime : 0;  
  }, [latestDate]);

  const okrStats = useMemo(() => {
    return ['APAC', 'India', 'Indonesia', 'Japan', 'South Korea', 'AUNZ'].map(mName => {
      const record = globalData.find(d => eq(d.country, mName) || eq(d.country, MARKET_KEYS[mName]));
      const actual = record?.metrics?.['DAU-SCT']?.total?.total?.v;
      const safeActual = (actual === 'NA' || isNaN(actual) || actual === undefined) ? 0 : actual;
      const target = getOkrTarget(quarterStart);
      const pi = target > 0 ? (safeActual / target) * 100 : 0;
      return { market: mName.toUpperCase(), actual: safeActual, target, perfIndex: pi, isOffline: !record || actual === 'NA' };
    });
  }, [globalData, quarterStart]);

  const recommendationRows = useMemo(() => {  
    const tableData = [];  
    const scalingRestricted = ['SHELF', 'SSC', 'UTS', 'MVR', 'UTSSFV'];

    MARKET_SEGMENTS.forEach(market => {  
      const allCampsInMarket = regionalData[market] || [];  
      allCampsInMarket.forEach((camp, ci) => {  
        if (isCampaignEnded(camp.optimisationEndDate, camp.campaignEndDate)) return;
        // Campaign Hub module rows are evaluated in their own tabs, not in pause/scale recs.
        const campTab = camp.meta?.tab ? cleanStr(camp.meta.tab) : null;
        if (campTab && CAMPAIGN_CHILDREN.some(child => eq(child.id, campTab) || eq(child.label, campTab))) return;
        const metrics = camp.metrics?.['DAU-SCT'] || {};

        if (metrics.total?.total?.isPaused) return;

        const daysLiveCount = calcDaysLive(camp.campaignStartDate, camp.optimisationEndDate);  
        const isMature = daysLiveCount >= 14;  
        const mKey = MARKET_KEYS[market] || market.toUpperCase();

        const currentCampaignNameSuper = superClean(camp.country);  
        const isScalingRestricted = scalingRestricted.some(cat => currentCampaignNameSuper.includes(cat));

        const addPauseOrMaintain = (gK, aK, tag) => {  
          if (metrics[gK]?.[aK]?.v === 'NA') return;  
          const node = metrics[gK]?.[aK];

          if (!node || node.isPaused) return;

          const v = node.v || 0;  
          const isSigNeg = node.sig === -1;  
          const rec = isMature ? "PAUSE" : "MAINTAIN";

          const liftLabel = isSigNeg ? "stat sig negative" : "neutral negative";

          let justification = "";  
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

          tableData.push({ id: `CAMP_${market}_${ci}_P_${gK}_${aK}`, country: mKey, campaign: camp.country, age: aK === 'total' ? 'GenPop' : aK, gender: gK === 'total' ? 'GenPop' : gK.toUpperCase(), recommendation: rec, justification });  
        };

        const gpNode = metrics.total?.total || { v: 0, sig: 0 };  
        if (!isScalingRestricted && gpNode.v !== 'NA' && gpNode.sig === 1 && gpNode.v > 0.001) {  
          tableData.push({ id: `CAMP_${market}_${ci}_SC`, country: mKey, campaign: camp.country, age: "GenPop", gender: "GenPop", recommendation: "SCALE", justification: `${mKey} ${camp.country} - Scale GenPop: Stat-sig positive lift (+${gpNode.v.toFixed(2)}%) observed.` });  
        }

        const getAgesToTrack = (gK) => {  
          let dirs = [];  
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

  const handleAddNewManual = () => { if (!newManualForm.campaign) return; setManualPointers(p => [...p, { ...newManualForm, id: `MANUAL_${Date.now()}` }]); setIsAddingManual(false); setNewManualForm({ country: 'APAC', campaign: '', age: 'GenPop', gender: 'GenPop', recommendation: 'MAINTAIN', justification: '' }); };

  return (  
    <div className="w-full max-w-[1600px] mx-auto pb-32">  
      {copyFeedback && <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-emerald-500 text-white px-6 py-3 rounded-lg font-bold text-xs uppercase shadow-xl">{copyFeedback}</div>}

      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-12 gap-8 border-b border-[#3a3a3a] pb-8">  
        <div className="space-y-4">  
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase">Shorts OKR Performance</h1>  
          <div className="flex flex-wrap gap-10 pt-4">  
            <div className="space-y-1"><p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Quarter Start</p><p className="text-lg font-bold text-white">{quarterStart || "TBD"}</p></div>  
            <div className="space-y-1"><p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Reporting Date</p><p className="text-lg font-bold text-emerald-400">{String(latestDate || "Awaiting Data...")}</p></div>  
            <div className="space-y-1"><p className="text-[10px] font-bold text-[#808080] uppercase tracking-widest">Days Left</p><p className="text-lg font-bold text-amber-400">{daysLeft} <span className="text-[10px] text-[#808080] ml-1 font-normal">remaining</span></p></div>  
          </div>  
        </div>  
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">  
        {okrStats.map((stat, idx) => {  
          const cfg = getStatusConfig(stat.perfIndex, stat.isOffline);  
          return (  
            <div key={idx} className={`relative ${cfg.cardBg} rounded-lg p-6 border border-[#3a3a3a] transition-all hover:border-[#555] shadow-sm`}>  
              <div className="flex justify-between items-start mb-6"><h3 className="text-xl font-bold text-white uppercase">{stat.market}</h3>{!stat.isOffline && <BarChart3 className={`w-5 h-5 ${cfg.color}`} />}</div>  
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-white">{stat.perfIndex.toFixed(1)}%</span>
                <span className="text-[9px] font-bold text-[#808080] uppercase tracking-tighter">INDEX</span>
              </div>  
              <div className="relative h-1.5 w-full bg-black rounded-full overflow-hidden mb-4"><div className={`h-full ${cfg.accent} transition-all duration-1000`} style={{ width: `${Math.min(stat.perfIndex, 100)}%` }} /></div>  
              <div className="flex justify-between pt-4 border-t border-[#3a3a3a] font-mono text-[10px]">  
                <div className="text-[#808080] uppercase">Actual: <span className="text-white">{stat.actual > 0 ? "+" : ""}{stat.actual.toFixed(2)}%</span></div>  
                <div className="text-[#808080] uppercase">Target: <span className="text-[#b0b0b0]">{stat.target.toFixed(2)}%</span></div>  
              </div>  
            </div>  
          );  
        })}  
      </div>

      <div className="space-y-8">  
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">  
          <div className="flex items-center gap-4"><div className="p-3 bg-[#1a1a1a] rounded-lg border border-[#3a3a3a]"><Lightbulb className="w-6 h-6 text-amber-400" /></div><div><h2 className="text-2xl font-bold text-white uppercase">Strategic Guidance</h2><p className="text-[#808080] text-xs uppercase tracking-widest mt-1 font-medium">Data-Driven Directives & Overrides</p></div></div>  
          <div className="flex flex-wrap gap-3">  
            <button onClick={() => setIsAddingManual(true)} className="flex items-center gap-2 bg-[#FF0000] text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-red-500 transition-all active:scale-95"><Plus className="w-4 h-4" /> Add Pointer</button>  
            <button onClick={() => { if (recommendationRows.length === 0) return; const headers = "Market\tEntity\tAge\tGender\tDirective\tJustification"; const body = recommendationRows.map(r => `${r.country}\t${r.campaign}\t${r.age}\t${r.gender}\t${r.recommendation}\t${r.justification}`).join('\n'); copyToClipboardFunc(`${headers}\n${body}`); showFeedback("Matrix Copied"); }} className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-lg transition-all active:scale-95"><Copy className="w-4 h-4" /> Copy All</button>  
            <button onClick={() => { setDeletedRowIds(new Set()); setEditedRows({}); setManualPointers([]); showFeedback("Matrix Restored"); }} className="flex items-center gap-2 bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:text-white transition-all border border-[#3a3a3a] active:scale-95"><RotateCcw className="w-4 h-4" /> Restore</button>  
          </div>  
        </div>

        {isAddingManual && (  
          <div className="bg-[#1a1a1a] border border-[#FF0000]/30 rounded-lg p-6 shadow-2xl animate-in fade-in zoom-in duration-200">  
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">  
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Market</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold uppercase text-white" value={newManualForm.country} onChange={e => setNewManualForm(p => ({ ...p, country: e.target.value.toUpperCase() }))} /></div>  
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Entity</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white" placeholder="e.g. Veo" value={newManualForm.campaign} onChange={e => setNewManualForm(p => ({ ...p, campaign: e.target.value }))} /></div>  
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Age</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white" value={newManualForm.age} onChange={e => setNewManualForm(p => ({ ...p, age: e.target.value }))} /></div>  
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Gender</label><input className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white" value={newManualForm.gender} onChange={e => setNewManualForm(p => ({ ...p, gender: e.target.value }))} /></div>  
              <div><label className="text-[9px] font-bold text-[#808080] uppercase block mb-2">Directive</label>  
                <select className="w-full bg-black border border-[#3a3a3a] rounded-md p-2.5 text-[11px] font-bold text-white" value={newManualForm.recommendation} onChange={e => setNewManualForm(p => ({ ...p, recommendation: e.target.value }))}>  
                  <option value="MAINTAIN">MAINTAIN</option><option value="SCALE">SCALE</option><option value="PAUSE">PAUSE</option>  
                </select>  
              </div>  
            </div>  
            <textarea className="w-full h-24 bg-black border border-[#3a3a3a] rounded-lg p-3 text-[11px] text-[#b0b0b0] mb-4 resize-none" value={newManualForm.justification} onChange={e => setNewManualForm(p => ({ ...p, justification: e.target.value }))} placeholder="Context..." />  
            <div className="flex justify-end gap-3">  
              <button type="button" onClick={() => setIsAddingManual(false)} className="bg-[#1a1a1a] text-[#808080] px-5 py-2.5 rounded-lg font-bold text-[10px] uppercase border border-[#3a3a3a]">Cancel</button>  
              <button onClick={handleAddNewManual} className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-[10px] uppercase shadow-lg">Confirm</button>  
            </div>  
          </div>  
        )}

        <div className="bg-[#1a1a1a] rounded-lg border border-[#3a3a3a] overflow-hidden overflow-x-auto shadow-sm">  
          <table className="w-full border-collapse text-[11px]">  
            <thead>  
              <tr className="bg-[#111] text-[#808080] uppercase tracking-widest border-b border-[#3a3a3a] font-bold">  
                <th className="px-8 py-6 text-left">Market</th><th className="px-8 py-6 text-left">Entity</th><th className="px-8 py-6 text-center">Age</th><th className="px-8 py-6 text-center">Gender</th><th className="px-8 py-6 text-left">Directive</th><th className="px-8 py-6 text-left">Justification</th><th className="px-8 py-6 text-center">Action</th>  
              </tr>  
            </thead>  
            <tbody className="divide-y divide-white/5">  
              {recommendationRows.map(row => (  
                <tr key={row.id} className={`hover:bg-white/[0.02] group/row transition-colors ${row.recommendation === 'PAUSE' ? 'bg-red-500/[0.03]' : ''}`}>  
                  <td className="px-8 py-4 font-bold uppercase text-blue-400">{row.country}</td>  
                  <td className="px-8 py-4 font-bold text-[#e0e0e0] truncate max-w-[200px]">{row.campaign}</td>  
                  <td className="px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono">{row.age}</td>  
                  <td className="px-8 py-4 text-center text-[#b0b0b0] uppercase font-mono">{row.gender}</td>  
                  <td className="px-8 py-4 font-bold">  
                    {editingId === row.id ? (  
                      <select className="bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] text-white" value={editedRows[row.id]?.recommendation || row.recommendation} onChange={e => setEditedRows(p => ({ ...p, [row.id]: { ...(p[row.id] || row), recommendation: e.target.value } }))}>  
                        <option value="MAINTAIN">MAINTAIN</option><option value="SCALE">SCALE</option><option value="PAUSE">PAUSE</option>  
                      </select>  
                    ) : (  
                      <span className={row.recommendation === 'PAUSE' ? 'text-red-400' : (row.recommendation === 'SCALE' ? 'text-emerald-400' : (row.justification.includes('Learning') ? 'text-blue-400' : 'text-amber-400'))}>{row.recommendation}</span>  
                    )}  
                  </td>  
                  <td className="px-8 py-4 text-[#808080] max-w-[300px] leading-relaxed">  
                    {editingId === row.id ? (  
                      <textarea className="w-full bg-black/60 border border-white/10 rounded-lg p-2 text-[10px] min-h-[60px] resize-none" value={editedRows[row.id]?.justification || row.justification} onChange={e => setEditedRows(p => ({ ...p, [row.id]: { ...(p[row.id] || row), justification: e.target.value } }))} />  
                    ) : row.justification}  
                  </td>  
                  <td className="px-8 py-5 text-center">  
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity">  
                      {editingId === row.id ? (  
                        <button onClick={() => setEditingId(null)} className="p-2.5 rounded-xl bg-emerald-600 text-white"><Save className="w-4 h-4" /></button>  
                      ) : (  
                        <button onClick={() => setEditingId(row.id)} className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-white"><Edit2 className="w-4 h-4" /></button>  
                      )}  
                      <button onClick={() => { copyToClipboardFunc(`${row.country}\t${row.campaign}\t${row.age}\t${row.gender}\t${row.recommendation}\t${row.justification}`); showFeedback("Row Copied"); }} className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-emerald-400"><Copy className="w-4 h-4" /></button>  
                      <button onClick={() => setDeletedRowIds(p => new Set([...p, row.id]))} className="p-2.5 rounded-xl bg-white/5 text-slate-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>  
                    </div>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
          </table>  
          {recommendationRows.length === 0 && <div className="p-20 text-center text-[#555] font-bold uppercase tracking-widest text-[10px]">Matrix Empty</div>}  
        </div>  
      </div>  
    </div>  
  );  
};

const HubRowV2 = ({ type, title, icon: Icon, tag, uploadedFiles, handleFileUpload }) => {  
  const isPct = type === 'pct';  
  const bgColor = isPct ? 'bg-[#1a1500]' : 'bg-[#0a0a0a]';  
  const borderColor = isPct ? 'border-amber-500/30' : 'border-blue-500/30';  
  const iconColor = isPct ? 'text-amber-500' : 'text-blue-500';  
  const iconBg = isPct ? 'bg-amber-500/20' : 'bg-blue-500/20';

  return (  
    <div className={`p-6 rounded-lg border ${borderColor} ${bgColor} mb-6 transition-all shadow-xl`}>  
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
        {/* 1. Global Hub Master Box */}  
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center text-center">  
          <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload(type, 'global', e.target.files[0])} />  
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${uploadedFiles[type].global ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}>  
            <Globe className="w-7 h-7" />  
          </div>  
          <h3 className="font-bold text-[10px] mb-1.5 uppercase tracking-wider text-[#e0e0e0]">Global Hub Master</h3>  
          <div className="text-[8px] font-mono truncate w-full px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080] mb-2 text-center">  
            {uploadedFiles[type].global ? uploadedFiles[type].global.name : 'PUSH_MASTER_FILE'}  
          </div>  
        </div>

        {/* 2. Market Hub Nodes Box */}  
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center">  
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(uploadedFiles[type].countryHB).length > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}>  
            <Flag className="w-7 h-7" />  
          </div>  
          <h3 className="font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]">Market Hub Nodes</h3>  
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

        {/* 3. Always-On Trends Box */}  
        <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex flex-col items-center hover:border-[#555] transition-all justify-center">  
          <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center transition-all ${Object.keys(uploadedFiles[type].alwaysOn).length > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}>  
            <Zap className="w-7 h-7" />  
          </div>  
          <h3 className="font-bold text-[10px] mb-3 uppercase tracking-wider text-[#e0e0e0]">Always-On Trends</h3>  
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

        {/* 4. JP Proactive Container Box (RESTORED) */}  
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

const LandingPage = ({ uploadedFiles, handleFileUpload, startAnalysis, isAnalyzing }) => (  
  <div className="min-h-screen bg-black relative flex flex-col items-center py-10 px-6 text-[#e0e0e0] overflow-y-auto no-scrollbar">  
    <div className="max-w-[1500px] w-full z-10 text-center">  
      <div className="mb-12">  
        <div className="inline-block mb-4">  
          <div className="bg-[#FF0000] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-red-500/20"><Brain className="text-white w-8 h-8" /></div>  
        </div>  
        <h1 className="text-4xl font-bold tracking-tighter mb-1 uppercase flex items-center justify-center gap-5">  
          Shorts Brain <span className="text-[#FF0000]">2.0</span>  
          <a href={DRIVE_RESOURCE_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[#555] hover:text-white hover:bg-white/10 transition-all hover:scale-105 group shadow-lg" title="Open Resource Drive"><DriveIcon className="w-6 h-6" /></a>  
        </h1>  
        <p className="text-[#808080] text-[10px] font-bold tracking-[0.4em] uppercase">APAC Marketing Incrementality Hub</p>  
      </div>

      <div className="p-6 rounded-lg border border-emerald-500/30 bg-[#0a1a0a] mb-6 transition-all shadow-xl">  
        <div className="flex items-center gap-4 mb-6 px-4">  
          <div className="p-2 rounded-lg flex items-center justify-center bg-emerald-500/20 text-emerald-500"><Settings2 className="w-5 h-5" /></div>  
          <div className="text-left">  
            <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-500">Structural Metadata Configuration</h2>  
            <p className="text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]">Campaign Definitions & State Instructions</p>  
          </div>  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">  
          <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">  
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.shared.campaignInfo ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}><ClipboardCheck className="w-6 h-6" /></div>  
            <div className="flex-1 text-left min-w-0">  
              <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">structural hierarchy</h4>  
              <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">{uploadedFiles.shared.campaignInfo ? uploadedFiles.shared.campaignInfo.name : 'PUSH_STRUCTURAL_CSV'}</div>  
            </div>  
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('shared', 'campaignInfo', e.target.files[0])} />  
          </div>  
          <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">  
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.shared.pauseRelive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-[#1a1a1a] text-[#555]'}`}><Power className="w-6 h-6" /></div>  
            <div className="flex-1 text-left min-w-0">  
              <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">State Instructions</h4>  
              <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">{uploadedFiles.shared.pauseRelive ? uploadedFiles.shared.pauseRelive.name : 'PUSH_INSTRUCTIONS_CSV'}</div>  
            </div>  
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('shared', 'pauseRelive', e.target.files[0])} />  
          </div>  
        </div>  
      </div>

      <HubRowV2 type="pct" title="Ratio-Based Analysis" tag="Relative Lift Streams (%)" icon={TrendingUp} uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />  
      <HubRowV2 type="abs" title="Volume-Based Analysis" tag="Discrete Delta Streams (Delta)" icon={Binary} uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />

      <div className="p-6 rounded-lg border border-purple-500/30 bg-[#0d0a1a] mb-6 transition-all shadow-xl">  
        <div className="flex items-center gap-4 mb-6 px-4">  
          <div className="p-2 rounded-lg flex items-center justify-center bg-purple-500/20 text-purple-500"><Target className="w-5 h-5" /></div>  
          <div className="text-left">  
            <h2 className="text-lg font-bold uppercase tracking-tight text-purple-500">Attribution Analysis</h2>  
            <p className="text-[8px] font-bold text-[#808080] uppercase tracking-[0.3em]">Marketing Pressure & Reach Metrics</p>  
          </div>  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">  
          <div className="group relative border border-[#3a3a3a] bg-black rounded-lg p-5 flex items-center gap-6 hover:border-[#555] transition-all">  
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${uploadedFiles.attribution.impressions ? 'bg-purple-500/10 text-purple-400' : 'bg-[#1a1a1a] text-[#555]'}`}><BarChart3 className="w-6 h-6" /></div>  
            <div className="flex-1 text-left min-w-0">  
              <h4 className="text-[10px] font-bold uppercase text-[#e0e0e0] mb-1">Impressions/CTR CSV</h4>  
              <div className="text-[8px] font-mono truncate px-2 py-1.5 rounded bg-black border border-[#3a3a3a] text-[#808080]">{uploadedFiles.attribution.impressions ? uploadedFiles.attribution.impressions.name : 'PUSH_IMPRESSIONS_CTR_CSV'}</div>  
            </div>  
            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-20" onChange={(e) => handleFileUpload('attribution', 'impressions', e.target.files[0])} />  
          </div>  
        </div>  
      </div>

      <button type="button" onClick={() => startAnalysis()} disabled={isAnalyzing} className="px-12 py-5 rounded-2xl font-bold text-base bg-[#FF0000] text-white transition-all hover:bg-red-500 flex items-center gap-4 mx-auto uppercase mt-8 border border-white/10 shadow-2xl shadow-red-500/30 active:scale-95 disabled:opacity-50">  
        {isAnalyzing ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}  
        {isAnalyzing ? 'Processing APAC Data Streams...' : 'Execute Intelligent Engine'}  
      </button>  
    </div>  
  </div>  
);

// --- MAIN APPLICATION COMPONENT ---

const App = ({ userEmail }) => {
  const [showIngestion, setShowIngestion] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);  
  const [activeTab, setActiveTab] = useState('OKR');  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  
  const [activeMetrics, setActiveMetrics] = useState(['DAU-SCT']);  
  const [isCampaignTypeExpanded, setIsCampaignTypeExpanded] = useState(false);  
  const [activeMarketSubTab, setActiveMarketSubTab] = useState('India');  
  const [latestGlobalDate, setLatestGlobalDate] = useState(null);  
  const [quarterStart, setQuarterStart] = useState("2026-02-01");  
  const [user, setUser] = useState(null);
  const [accessDenied, setAccessDenied] = useState(false);

  const isDataIngestionAdmin = DATA_INGESTION_ADMINS.includes((userEmail || '').toLowerCase());

  const initialLoadDone = useRef(false);

  const [tabMarketFilter, setTabMarketFilter] = useState({ 'AlwaysOn': 'India', 'ScaledCreation': 'India', 'Effects': 'India', 'Trends': 'India', 'CultMo': 'India', 'ArtMo': 'India', 'GenAI Hub': 'India' });
  const [subTabFilter, setSubTabFilter] = useState({ 'AlwaysOn': 'SSC', 'ScaledCreation': '', 'Effects': '', 'Trends': '', 'CultMo': '', 'ArtMo': '', 'GenAI Hub': '' });
  const [subSubTabFilter, setSubSubTabFilter] = useState({ 'AlwaysOn': '', 'ScaledCreation': '', 'Effects': '', 'Trends': '', 'CultMo': '', 'ArtMo': '', 'GenAI Hub': '' });

  const [globalData, setGlobalData] = useState([]);  
  const [regionalData, setRegionalData] = useState({});  
  const [campaignHubData, setCampaignHubData] = useState({});

  const [uploadedFiles, setUploadedFiles] = useState({  
    pct: { global: null, countryHB: {}, alwaysOn: {} },  
    abs: { global: null, countryHB: {}, alwaysOn: {} },  
    shared: { campaignInfo: null, pauseRelive: null },  
    attribution: { impressions: null }  
  });

  const [memoryIndex, setMemoryIndex] = useState([]);

  const rebuildState = useCallback((compressedMasterList) => {  
    const gData = [];  
    const rData = {};  
    MARKET_SEGMENTS.forEach(m => rData[m] = []);  
    const structTemp = {};

    const routeToStructure = (row, defaultMarket, forceTab = null, forceSub = null) => {  
      const meta = row.meta || {};  
      let tabRaw = forceTab || cleanStr(meta.tab);  
      let sub = forceSub || cleanStr(meta.subTab) || 'Generic';  
      let mkName = row.market || defaultMarket || 'India';  
      const cK = superClean(row.country);

      // BUG 2 FIX: JP Proactive explicitly mapped via Structural Meta  
      if (cleanStr(meta.subTab).toUpperCase() === 'JP PROACTIVE CONTAINER' || cleanStr(meta.subSubTab).toUpperCase() === 'JP PROACTIVE CONTAINER') {  
        tabRaw = 'AlwaysOn';  
        sub = 'JP Proactive Container';  
        mkName = 'Japan';  
      }

      const child = CAMPAIGN_CHILDREN.find(c => eq(c.id, tabRaw) || eq(c.label, tabRaw));

      if (child) {  
        const ss = cleanStr(meta.subSubTab) || 'Default';  
        if (!structTemp[child.id]) structTemp[child.id] = {};  
        if (!structTemp[child.id][mkName]) structTemp[child.id][mkName] = {};  
        if (!structTemp[child.id][mkName][sub]) structTemp[child.id][mkName][sub] = {};  
        if (!structTemp[child.id][mkName][sub][ss]) structTemp[child.id][mkName][sub][ss] = {};  
        structTemp[child.id][mkName][sub][ss][cK] = row;  
      }  
    };

    compressedMasterList.forEach(cRow => {  
      const row = decompressRow(cRow);  
      if (row._source === 'global') {  
        gData.push(row);  
        routeToStructure(row, 'APAC');  
      } else if (row._source === 'market') {  
        if (rData[row._market]) rData[row._market].push(row);  
        routeToStructure(row, row._market);  
      } else if (row._source === 'alwaysOn') {  
        routeToStructure(row, null, 'AlwaysOn', row._category);  
      } else if (row._source === 'jpProactive') {  
        routeToStructure(row, 'Japan', 'AlwaysOn', 'JP Proactive Container');  
      }  
    });

    const cHub = {};  
    Object.keys(structTemp).forEach(t => {  
      cHub[t] = {};  
      Object.keys(structTemp[t]).forEach(mk => {  
        cHub[t][mk] = {};  
        Object.keys(structTemp[t][mk]).forEach(sub => {  
          cHub[t][mk][sub] = {};  
          Object.keys(structTemp[t][mk][sub]).forEach(ss => {  
            cHub[t][mk][sub][ss] = Object.values(structTemp[t][mk][sub][ss]);  
          });  
        });  
      });  
    });

    return { gData, rData, cHub };  
  }, []);

  // --- PERSISTENT MEMORY LISTENER (ATOMIC RECONSTRUCTION) ---  
  useEffect(() => {  
    if (!user) return;  
    const unsub = onSnapshot(doc(db, "shortsbrain_data", "latest"), async (docSnap) => {  
      if (docSnap.exists()) {  
        const d = docSnap.data();  
        if (d.batchId && d.chunkCount !== undefined) {  
          let fullList = [];  
          const promises = [];  
          for (let i = 0; i < d.chunkCount; i++) {  
            promises.push(getDoc(doc(db, "shortsbrain_data", `chunk_${d.batchId}_${i}`)));  
          }  
          const snaps = await Promise.all(promises);  
          snaps.forEach(s => { if (s.exists() && s.data().data) fullList = fullList.concat(s.data().data); });

          if (fullList.length > 0) {  
            const { gData, rData, cHub } = rebuildState(fullList);  
            setGlobalData(gData);  
            setRegionalData(rData);  
            setCampaignHubData(cHub);  
            if (d.reportingDate) setLatestGlobalDate(d.reportingDate);  
            if (d.quarterStart) setQuarterStart(d.quarterStart);
            setActiveTab('OKR'); // FORCED SNAPSHOT LANDING
            initialLoadDone.current = true;
          }  
        } else if (d.chunkCount !== undefined && !d.batchId) {  
          let fullList = [];  
          for (let i = 0; i < d.chunkCount; i++) {  
            const chunkSnap = await getDoc(doc(db, "shortsbrain_data", `latest_chunk_${i}`));  
            if (chunkSnap.exists() && chunkSnap.data().data) {  
              fullList = fullList.concat(chunkSnap.data().data);  
            }  
          }  
          if (fullList.length > 0) {  
            const { gData, rData, cHub } = rebuildState(fullList);  
            setGlobalData(gData);  
            setRegionalData(rData);  
            setCampaignHubData(cHub);  
            if (d.reportingDate) setLatestGlobalDate(d.reportingDate);  
            if (d.quarterStart) setQuarterStart(d.quarterStart);  
            setActiveTab('OKR');
            initialLoadDone.current = true;
          }  
        } else if (d.masterList) {  
          const { gData, rData, cHub } = rebuildState(d.masterList);  
          setGlobalData(gData);  
          setRegionalData(rData);  
          setCampaignHubData(cHub);  
          if (d.reportingDate) setLatestGlobalDate(d.reportingDate);  
          if (d.quarterStart) setQuarterStart(d.quarterStart);  
          setActiveTab('OKR');
          initialLoadDone.current = true;
        }  
      }  
    });  
    return () => unsub();  
  }, [user, rebuildState]);

  const appId = typeof __app_id !== 'undefined' ? __app_id : 'shorts-brain-v2';

  const allowed = useMemo(() =>  
    (activeTab === 'Global Hub' || activeTab === 'AlwaysOn')  
      ? M_TYPES.filter(m => m !== 'Impressions' && m !== 'CTR')  
      : M_TYPES  
    , [activeTab]);

  const dynamicSubTabs = useMemo(() => {  
    const market = tabMarketFilter[activeTab];  
    const tabData = campaignHubData[activeTab]?.[market];  
    if (!tabData) return [];

    const tabs = Object.keys(tabData).sort();  
    return tabs;  
  }, [activeTab, tabMarketFilter, campaignHubData]);

  const dynamicSubSubTabs = useMemo(() => {  
    const market = tabMarketFilter[activeTab];  
    const subTab = subTabFilter[activeTab];  
    const subTabData = campaignHubData[activeTab]?.[market]?.[subTab];  
    if (!subTabData) return [];  
    return Object.keys(subTabData).sort();  
  }, [activeTab, tabMarketFilter, subTabFilter, campaignHubData]);

  useEffect(() => {
    // Auth is handled upstream by AuthGate (Google sign-in on the shared app).
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  useEffect(() => {  
    if (!user) return;  
    const snapshotsCol = collection(db, 'artifacts', appId, 'public', 'data', 'snapshots');  
    const unsubscribe = onSnapshot(snapshotsCol, (snap) => {  
      const data = snap.docs  
        .map(d => ({ ...d.data(), id: d.id }))  
        .filter(d => !d.id.includes('_chunk_'));  
      const sorted = [...data].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));  
      setMemoryIndex(sorted);  
    }, (err) => console.error("Firestore Error:", err));  
    return () => unsubscribe();  
  }, [user, appId]);

  useEffect(() => {  
    setActiveMetrics(current => {  
      const filtered = current.filter(m => allowed.includes(m));  
      return filtered.length > 0 ? filtered : [allowed[0]];  
    });  
  }, [allowed]);

  const saveSnapshotToCloud = async (snapshotData) => {  
    if (!user) return;  
    try {  
      const snapId = `snap_${Date.now()}`;  
      const compressedList = snapshotData.masterList;

      const batchId = snapshotData.batchId || Date.now().toString();  
      const CHUNK_SIZE = 100;  
      const chunks = [];  
      for (let i = 0; i < compressedList.length; i += CHUNK_SIZE) {  
        chunks.push(compressedList.slice(i, i + CHUNK_SIZE));  
      }

      const uploadPromises = chunks.map((chunkData, i) =>  
        setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'snapshots', `${snapId}_chunk_${batchId}_${i}`), { data: chunkData })  
      );  
      await Promise.all(uploadPromises);

      await setDoc(doc(db, 'artifacts', appId, 'public', 'data', 'snapshots', snapId), {  
        batchId: batchId,  
        chunkCount: chunks.length,  
        timestamp: Date.now(),  
        weekId: getWeekId(snapshotData.reportingDate),  
        quarterStart: quarterStart  
      });  
    } catch (err) { console.error("Cloud Save Error:", err); }  
  };

  const startAnalysis = async () => {  
    setIsAnalyzing(true);  
    try {  
      const readFile = (f) => new Promise(res => { if (!f) res(""); const r = new FileReader(); r.onload = e => res(e.target.result); r.readAsText(f); });  
      let metaLookup = {};

      if (uploadedFiles.shared.campaignInfo) {  
        const text = await readFile(uploadedFiles.shared.campaignInfo);  
        const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');  
        if (lines.length > 1) {  
          const hdrs = splitCSVLine(lines[0]);  
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']),  
            mktIdx = findHeader(hdrs, ['Market', 'Country']),  
            tabIdx = findHeader(hdrs, ['Campaign Tabs', 'Tabs', 'Tab']),  
            subTabIdx = findHeader(hdrs, ['Campaign Sub tabs', 'Sub tabs', 'Sub tab', 'Sub category']),  
            ssTabIdx = findHeader(hdrs, ['Campaign Hub Sub Sub tabs', 'Sub sub tabs', 'Sub sub tab']),  
            sIdx = findHeader(hdrs, ['Start Date']),  
            eIdx = findHeader(hdrs, ['End Date']),  
            oIdx = findHeader(hdrs, ['Optimisation End Date']),  
            aIdx = findHeader(hdrs, ['Age']),  
            gIdx = findHeader(hdrs, ['Gender']);

          lines.slice(1).forEach(line => {  
            const cols = splitCSVLine(line);  
            const name = cleanStr(cols[cIdx]);  
            if (name) {  
              const rawMkt = cleanStr(cols[mktIdx]).toUpperCase();  
              const resMkt = MARKET_KEYS_REV[rawMkt] || MARKET_SEGMENTS.find(s => eq(s, rawMkt)) || 'India';  
              if (!metaLookup[superClean(resMkt)]) metaLookup[superClean(resMkt)] = {};

              const campKey = superClean(name);  
              if (!metaLookup[superClean(resMkt)][campKey]) {  
                metaLookup[superClean(resMkt)][campKey] = {  
                  market: resMkt, tab: cleanStr(cols[tabIdx]), subTab: cleanStr(cols[subTabIdx]), subSubTab: cleanStr(cols[ssTabIdx]),  
                  campaignStartDate: cleanStr(cols[sIdx]), campaignEndDate: cleanStr(cols[eIdx]), optimisationEndDate: cleanStr(cols[oIdx]),  
                  targeting: { ages: [], genders: [] }  
                };  
              }

              if (aIdx !== -1 && cols[aIdx]) {  
                const rawAges = cleanStr(cols[aIdx]).toLowerCase().split(',').map(s => s.trim());  
                const parsedAges = [];  
                rawAges.forEach(a => {  
                  if (a.includes('18-24')) parsedAges.push('18-24');  
                  if (a.includes('25-34')) parsedAges.push('25-34');  
                  if (a.includes('18-34')) parsedAges.push('18-34');  
                  if (a.includes('35-44') || a.includes('35+')) parsedAges.push('35+');  
                });  
                if (parsedAges.includes('18-24') && parsedAges.includes('25-34')) parsedAges.push('18-34');  
                parsedAges.push('total');

                metaLookup[superClean(resMkt)][campKey].targeting.ages = [...new Set([...metaLookup[superClean(resMkt)][campKey].targeting.ages, ...parsedAges])];  
              }

              if (gIdx !== -1 && cols[gIdx]) {  
                const rawGenders = cleanStr(cols[gIdx]).toLowerCase().split(',').map(s => s.trim());  
                const parsedGenders = [];  
                rawGenders.forEach(g => {  
                  if (g === 'male' || g === 'm') parsedGenders.push('male');  
                  if (g === 'female' || g === 'f') parsedGenders.push('female');  
                });  
                parsedGenders.push('total');

                metaLookup[superClean(resMkt)][campKey].targeting.genders = [...new Set([...metaLookup[superClean(resMkt)][campKey].targeting.genders, ...parsedGenders])];  
              }  
            }  
          });  
        }  
      }

      let instructionMap = {};  
      if (uploadedFiles.shared.pauseRelive) {  
        const text = await readFile(uploadedFiles.shared.pauseRelive);  
        const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');  
        if (lines.length > 1) {  
          const hdrs = splitCSVLine(lines[0]);  
          const cIdx = findHeader(hdrs, ['Campaign', 'Campaign Name']),  
            mIdx = findHeader(hdrs, ['Market', 'Country']),  
            aIdx = findHeader(hdrs, ['Age']),  
            gIdx = findHeader(hdrs, ['Gender']),  
            iIdx = findHeader(hdrs, ['Instruction', 'Action']),  
            dIdx = findHeader(hdrs, ['Launch Date']);  
          lines.slice(1).forEach(l => {  
            const cols = splitCSVLine(l);  
            const cKey = superClean(cols[cIdx]);  
            const rawMkt = cleanStr(cols[mIdx]);  
            const mKey = superClean(MARKET_KEYS_REV[rawMkt.toUpperCase()] || rawMkt);  
            if (cKey && mKey) {  
              const aKRaw = (cleanStr(cols[aIdx]) || 'total').toLowerCase().replace(/[^a-z0-9+]/g, '');  
              const aK = aKRaw === 'genpop' ? 'total' : aKRaw;  
              const gKRaw = (cleanStr(cols[gIdx]) || 'total').toLowerCase();  
              const gK = gKRaw === 'genpop' ? 'total' : gKRaw;

              if (!instructionMap[mKey]) instructionMap[mKey] = {};  
              if (!instructionMap[mKey][cKey]) instructionMap[mKey][cKey] = {};  
              if (!instructionMap[mKey][cKey][gK]) instructionMap[mKey][cKey][gK] = {};  
              if (cleanStr(cols[iIdx]).toUpperCase() === 'PAUSE') instructionMap[mKey][cKey][gK][aK] = cleanStr(cols[dIdx]);  
            }  
          });  
        }  
      }

      let dGlobalD = null;  
      let dQuarterStart = quarterStart;

      const process = async (st, isAb = false) => {  
        const s = uploadedFiles[st];  
        let sgd = {};  
        if (s.global) {  
          const text = await readFile(s.global);  
          if (st === 'pct') {  
            const lines = text.split(/\r?\n/).filter(l => l.trim() !== '');  
            const h = splitCSVLine(lines[0]);  
            const di = findHeader(h, ['Latest Date', 'Date', 'Reporting Date']);  
            const qi = findHeader(h, ['Quarter Start Date', 'Quarter Start']);  
            if (lines.length > 1) {  
              const firstDataRow = splitCSVLine(lines[1]);  
              if (di !== -1) {  
                const d = robustParseDate(firstDataRow[di]);  
                if (d) { dGlobalD = d; setLatestGlobalDate(d); }  
              }  
              if (qi !== -1) {  
                const q = robustParseDate(firstDataRow[qi]);  
                if (q) { dQuarterStart = q; setQuarterStart(q); }  
              }  
            }  
          }  
          sgd = parseCSVData(text, {}, metaLookup, ['Country', 'Market', 'Campaign'], isAb, null, true, false);  
        }  
        const mh = {};  
        for (const m of MARKET_SEGMENTS) {  
          if (s.countryHB[m]) mh[m] = parseCSVData(await readFile(s.countryHB[m]), {}, metaLookup, undefined, isAb, m, false, false);  
        }

        const ao = {};  
        for (const c of AO_CATEGORIES) {  
          if (c !== 'JP Proactive Container' && s.alwaysOn[c]) {  
            ao[c] = parseCSVData(await readFile(s.alwaysOn[c]), {}, metaLookup, undefined, isAb, null, false, true);  
          }  
        }

        let jpProactive = {};
        if (s.jpProactive) {
          jpProactive = parseCSVData(await readFile(s.jpProactive), {}, metaLookup, undefined, isAb, 'Japan', false, true);
        }

        return { sgd, mh, ao, jpProactive };
      };

      const pct = await process('pct', false), abs = await process('abs', true);

      let attrData = {};  
      if (uploadedFiles.attribution.impressions) {  
        const text = await readFile(uploadedFiles.attribution.impressions);  
        attrData = parseCSVData(text, {}, metaLookup, ['Campaign', 'Campaign Name', 'Entity'], true, null, false, false);  
      }

      const getCampName = (key) => key.includes('_') ? key.substring(key.indexOf('_') + 1) : key;

      const merge = (pm, am, attribution = {}) => {  
        const res = { ...pm };

        Object.keys(am).forEach(ak => {  
          const matchingKey = Object.keys(res).find(rk => eq(rk, ak)) ||  
            Object.keys(res).find(rk => eq(getCampName(rk), getCampName(ak))) ||  
            ak;

          if (!res[matchingKey]) {  
            res[matchingKey] = am[ak];  
          } else {  
            M_TYPES.forEach(m => {  
              if (m !== 'Impressions' && m !== 'CTR') {  
                GENDERS_KEYS.forEach(g => {  
                  AGE_BUCKETS.forEach(a => {  
                    const absVal = am[ak].metrics[m][g][a].abs;  
                    if (absVal !== 0 && absVal !== 'NA') {  
                      res[matchingKey].metrics[m][g][a].abs = absVal;  
                    }  
                  });  
                });  
              }  
            });  
          }  
        });

        Object.keys(attribution).forEach(ak => {  
          const matchingKey = Object.keys(res).find(rk => {  
            const rkCamp = getCampName(rk);  
            const akCamp = getCampName(ak);  
              
            // Force strict match for Global Anchor Rows across all markets  
            if (res[rk].isAnchor && attribution[ak].isAnchor) {  
                // Explicitly handle "IN" vs "India" resolution  
                const resMarket = res[rk].market === 'IN' ? 'India' : res[rk].market;  
                const attrMarket = attribution[ak].market === 'IN' ? 'India' : attribution[ak].market;  
                const attrCountry = attribution[ak].country === 'IN' ? 'India' : attribution[ak].country;  
                  
                return eq(resMarket, attrMarket) || eq(res[rk].country, attrCountry) || eq(resMarket, attrCountry);  
            }  
            // Fallback for standard campaigns  
            return eq(rk, ak) || rk.includes(ak) || ak.includes(rk) || eq(rkCamp, akCamp);  
          });  
            
          if (matchingKey) {  
            GENDERS_KEYS.forEach(g => {  
              AGE_BUCKETS.forEach(a => {  
                const impVal = attribution[ak].metrics['Impressions']?.[g]?.[a]?.v || 0;  
                if (impVal > 0) res[matchingKey].metrics['Impressions'][g][a].v = impVal;  
                  
                const ctrVal = attribution[ak].metrics['CTR']?.[g]?.[a]?.v || 0;  
                if (ctrVal > 0) res[matchingKey].metrics['CTR'][g][a].v = ctrVal;  
              });  
            });  
          }  
        });

        Object.values(res).forEach(row => {  
          const mKey = superClean(row.market);  
          const cK = superClean(row.country);  
          const hasEnded = isCampaignEnded(row.optimisationEndDate, row.campaignEndDate);

          M_TYPES.forEach(m => {  
            GENDERS_KEYS.forEach(g => {  
              AGE_BUCKETS.forEach(a => {  
                if (hasEnded) {  
                  row.metrics[m][g][a].isPaused = true;  
                  row.metrics[m][g][a].launchDate = row.campaignEndDate || 'Ended';  
                  return;  
                }  
                const mInstr = instructionMap[mKey]?.[cK];  
                if (mInstr) {  
                  const sA = a.replace(/[^a-z0-9+]/g, ''), pA = (sA === '1824' || sA === '2534') ? '1834' : null;  
                  const ks = [[g, sA], pA ? [g, pA] : null, [g, 'total'], ['total', sA], pA ? ['total', pA] : null, ['total', 'total']].filter(Boolean);  
                  for (const [tg, ta] of ks) {  
                    if (mInstr[tg]?.[ta]) {  
                      row.metrics[m][g][a].isPaused = true;  
                      row.metrics[m][g][a].launchDate = mInstr[tg][ta];  
                      break;  
                    }  
                  }  
                }  
              });  
            });

            AGE_BUCKETS.forEach(a => {  
              const maleNode = row.metrics[m]['male'][a];  
              const femaleNode = row.metrics[m]['female'][a];  
              if (maleNode && femaleNode && maleNode.isPaused && femaleNode.isPaused) {  
                row.metrics[m]['total'][a].isPaused = true;  
                const d1 = new Date(maleNode.launchDate || 0);  
                const d2 = new Date(femaleNode.launchDate || 0);  
                row.metrics[m]['total'][a].launchDate = (d1 >= d2 ? maleNode.launchDate : femaleNode.launchDate) || 'Ended';  
              }  
            });  
          });  
        });

        return res;  
      };

      const masterList = [];

      const mG = merge(pct.sgd, abs.sgd, attrData);  
      Object.values(mG).forEach(r => { r._source = 'global'; masterList.push(compressRow(r)); });

      MARKET_SEGMENTS.forEach(m => {  
        const mm = merge(pct.mh[m] || {}, abs.mh[m] || {}, attrData);  
        Object.values(mm).forEach(r => { r._source = 'market'; r._market = m; masterList.push(compressRow(r)); });  
      });

      AO_CATEGORIES.forEach(c => {  
        if (c !== 'JP Proactive Container') {  
          const ao_m = merge(pct.ao[c] || {}, abs.ao[c] || {}, attrData);  
          Object.values(ao_m).forEach(r => { r._source = 'alwaysOn'; r._category = c; masterList.push(compressRow(r)); });  
        }  
      });

      const jpG = merge(pct.jpProactive || {}, abs.jpProactive || {}, attrData);  
      Object.values(jpG).forEach(r => {   
          r._source = 'jpProactive';   
          masterList.push(compressRow(r));   
      });

      const { gData, rData, cHub } = rebuildState(masterList);  
      setGlobalData(gData); setRegionalData(rData); setCampaignHubData(cHub);  
      initialLoadDone.current = true;
      setActiveTab('OKR'); // EXPLICIT ROUTING SNAP FOR UPLOADER
      setShowIngestion(false);

      // BUG FIX 1: ATOMIC WRITE SEQUENCE  
      const batchId = Date.now().toString();  
      const CHUNK_SIZE = 100;  
      const chunks = [];  
      for (let i = 0; i < masterList.length; i += CHUNK_SIZE) {  
        chunks.push(masterList.slice(i, i + CHUNK_SIZE));  
      }

      const uploadPromises = chunks.map((chunkData, i) =>  
        setDoc(doc(db, "shortsbrain_data", `chunk_${batchId}_${i}`), { data: chunkData })  
      );  
      await Promise.all(uploadPromises);

      await setDoc(doc(db, "shortsbrain_data", "latest"), {  
        batchId: batchId,  
        chunkCount: chunks.length,  
        reportingDate: dGlobalD,  
        quarterStart: dQuarterStart,  
        lastUpdated: new Date().toISOString()  
      });

      await saveSnapshotToCloud({ masterList, reportingDate: dGlobalD, quarterStart: dQuarterStart, batchId });
      logUsageEvent('snapshot_saved', { week_id: getWeekId(dGlobalD) });

    } catch (err) { console.error("Analysis failed:", err); } finally { setIsAnalyzing(false); }  
  };

  const handleFileUpload = (s, t, f, k) => setUploadedFiles(prev => {  
    const upd = { ...prev[s] };  
    if (t === 'countryHB' || t === 'alwaysOn') upd[t] = { ...upd[t], [k]: f };  
    else upd[t] = f;  
    return { ...prev, [s]: upd };  
  });

  if (showIngestion) return <LandingPage uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} startAnalysis={startAnalysis} isAnalyzing={isAnalyzing} />;

  return (  
    <div className="flex h-screen bg-black text-[#e0e0e0] overflow-hidden font-sans">  
      <aside className={`${isSidebarOpen ? 'w-72' : 'w-20'} transition-all duration-300 bg-[#111] border-r border-[#2a2a2a] flex flex-col z-50`}>  
        <div className="p-6 flex items-center gap-3 mb-6 shrink-0 border-b border-[#2a2a2a] relative group">  
          <div className="bg-[#FF0000] p-2 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/20"><Brain className="text-white w-5 h-5" /></div>  
          {isSidebarOpen && (  
            <div className="flex-1">  
              <div className="flex items-center justify-between">  
                <h2 className="text-lg font-bold tracking-tight">BRAIN <span className="text-[#FF0000]">2.0</span></h2>  
                <a href={DRIVE_RESOURCE_LINK} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors" title="Source Drive"><DriveIcon className="w-4 h-4" /></a>  
              </div>  
              <p className="text-[8px] font-bold uppercase text-[#555] tracking-widest">APAC Marketing Hub</p>  
            </div>  
          )}  
        </div>  
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto no-scrollbar">  
          {NAV_ITEMS.map(item => {  
            const Icon = item.icon;  
            return (  
              <button key={item.id} type="button"
                onClick={() => {
                  if (item.id === 'Upload') {
                    if (!isDataIngestionAdmin) { setAccessDenied(true); return; }
                    setAccessDenied(false);
                    initialLoadDone.current = true;
                    setShowIngestion(true);
                  } else {
                    setAccessDenied(false);
                    setActiveTab(item.id);
                    logUsageEvent('tab_viewed', { tab_id: item.id });
                  }
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer ${activeTab === item.id ? 'bg-[#FF0000]/10 text-[#FF0000]' : item.id === 'Upload' && !isDataIngestionAdmin ? 'text-[#444] cursor-not-allowed' : 'text-[#808080] hover:text-white'}`}>
                <Icon className="w-5 h-5 shrink-0" />{isSidebarOpen && <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>}
                {isSidebarOpen && item.id === 'Upload' && !isDataIngestionAdmin && <span className="ml-auto text-[7px] font-bold text-[#444] uppercase">Read-only</span>}
              </button>  
            );  
          })}  
          <div className="my-4 border-t border-[#222]"></div>  
          <button type="button" onClick={() => setIsCampaignTypeExpanded(!isCampaignTypeExpanded)} className="w-full flex items-center justify-between p-3 rounded-xl text-[#808080] hover:text-white cursor-pointer">  
            <div className="flex items-center gap-3"><FolderKanban className="w-5 h-5 shrink-0" />{isSidebarOpen && <span className="text-[11px] font-bold uppercase tracking-widest">Campaign Hub</span>}</div>  
            {isSidebarOpen && (isCampaignTypeExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />)}  
          </button>  
          {isCampaignTypeExpanded && isSidebarOpen && (  
            <div className="pl-4 space-y-1 animate-in slide-in-from-top-2 duration-300">  
              {CAMPAIGN_CHILDREN.map(child => {  
                const Icon = child.icon;  
                return (  
                  <button key={child.id} type="button" onClick={() => { setActiveTab(child.id); logUsageEvent('tab_viewed', { tab_id: 'Campaign Hub', sub_view: child.id }); }} className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all cursor-pointer ${activeTab === child.id ? 'bg-[#FF0000]/10 text-[#FF0000]' : 'text-[#555] hover:bg-white/5 hover:text-white'}`}>
                    <Icon className="w-4 h-4" />{child.label}  
                  </button>  
                );  
              })}  
            </div>  
          )}  
          {isSidebarOpen && memoryIndex.length > 0 && (  
            <div className="mt-8 pt-4 border-t border-[#222]">  
              <div className="flex items-center gap-2 px-3 mb-3"><Database className="w-4 h-4 text-[#444]" /><span className="text-[10px] font-bold uppercase text-[#444] tracking-widest">Memory</span></div>  
              <div className="space-y-1 max-h-[300px] overflow-y-auto no-scrollbar">  
                {memoryIndex.map(snap => (  
                  <div key={snap.id} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all hover:bg-white/5 group">  
                    <button type="button" onClick={async () => {  
                      if (snap.batchId && snap.chunkCount !== undefined) {  
                        let fullList = [];  
                        const promises = [];  
                        for (let i = 0; i < snap.chunkCount; i++) {  
                          promises.push(getDoc(doc(db, 'artifacts', appId, 'public', 'data', 'snapshots', `${snap.id}_chunk_${snap.batchId}_${i}`)));  
                        }  
                        const snaps = await Promise.all(promises);  
                        snaps.forEach(s => { if (s.exists() && s.data().data) fullList = fullList.concat(s.data().data); });

                        if (fullList.length > 0) {  
                          const { gData, rData, cHub } = rebuildState(fullList);  
                          setGlobalData(gData); setRegionalData(rData); setCampaignHubData(cHub);  
                        }  
                      } else if (snap.chunkCount !== undefined && !snap.batchId) {  
                        let fullList = [];  
                        for (let i = 0; i < snap.chunkCount; i++) {  
                          const chunkSnap = await getDoc(doc(db, 'artifacts', appId, 'public', 'data', 'snapshots', `${snap.id}_chunk_${i}`));  
                          if (chunkSnap.exists() && chunkSnap.data().data) {  
                            fullList = fullList.concat(chunkSnap.data().data);  
                          }  
                        }  
                        const { gData, rData, cHub } = rebuildState(fullList);  
                        setGlobalData(gData); setRegionalData(rData); setCampaignHubData(cHub);  
                      } else {  
                        setGlobalData(snap.globalData || []);  
                        setRegionalData(snap.regionalData || {});  
                        setCampaignHubData(snap.campaignHubData || {});  
                      }  
                      setLatestGlobalDate(snap.reportingDate);  
                      if (snap.quarterStart) setQuarterStart(snap.quarterStart);
                      setActiveTab('OKR'); // EXPLICIT ROUTING SNAP
                      setShowIngestion(false);
                    }} className="flex-1 text-[10px] font-bold text-[#666] group-hover:text-white">{String(snap.weekId || 'Snapshot')}</button>  
                    <button type="button" onClick={() => deleteDoc(doc(db, 'artifacts', appId, 'public', 'data', 'snapshots', snap.id))} className="opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-3 h-3 text-red-500" /></button>  
                  </div>  
                ))}  
              </div>  
            </div>  
          )}  
        </nav>  
        {isSidebarOpen && user?.email && (
          <div className="px-4 py-3 border-t border-[#2a2a2a]">
            <div className="text-[8px] font-mono text-[#555] truncate">{user.email}</div>
            <div className="text-[8px] mt-0.5 uppercase tracking-wider font-bold">{isDataIngestionAdmin ? <span className="text-emerald-400">Ingestion Admin</span> : <span className="text-[#555]">Read-only</span>}</div>
          </div>
        )}
        {accessDenied && isSidebarOpen && (
          <div className="mx-4 mb-2 px-3 py-2 rounded-lg bg-red-900/30 border border-red-500/30 text-[8px] text-red-400 font-bold uppercase tracking-wider">Access restricted</div>
        )}
        <button type="button" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-6 border-t border-[#2a2a2a] text-[#555] hover:text-white flex items-center justify-center">{isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>  
      </aside>  
      <div className="flex-1 flex flex-col overflow-hidden relative">  
        <header className="px-8 py-5 border-b border-[#2a2a2a] flex items-center justify-between bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40">  
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">{activeTab}</h4>  
          <button type="button" onClick={() => { const d = JSON.stringify({ globalData, regionalData, campaignHubData, latestGlobalDate, quarterStart }, null, 2); const b = new Blob([d], { type: 'application/json' }); const u = URL.createObjectURL(b); const a = document.createElement('a'); a.href = u; a.download = `ShortsBrain_${latestGlobalDate || 'Snapshot'}.json`; a.click(); }} className="bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase hover:bg-[#e0e0e0] shadow-xl flex items-center gap-2 transition-colors"><Download className="w-3.5 h-3.5" /> Export</button>  
        </header>  
        <main className="flex-1 overflow-auto p-10 relative no-scrollbar">  
          {activeTab === 'OKR' && <OKRAndRecsView globalData={globalData} regionalData={regionalData} latestDate={latestGlobalDate} quarterStart={quarterStart} />}  
          {(activeTab === 'Global Hub' || activeTab === 'Market Hub') && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <MetricControlHub activeMetrics={activeMetrics} allowedMetrics={allowed} toggleMetric={m => setActiveMetrics(p => p.includes(m) ? (p.length > 1 ? p.filter(x => x !== m) : p) : [...p, m])} handleAllToggle={() => setActiveMetrics(p => p.length === allowed.length ? ['DAU-SCT'] : [...allowed])} />
              {activeTab === 'Market Hub' && (
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg"><MapPin className="w-6 h-6 text-red-600" /><select value={activeMarketSubTab} onChange={e => setActiveMarketSubTab(e.target.value)} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8">{MARKET_SEGMENTS.map(m => <option key={m} value={m} className="bg-neutral-900">{m}</option>)}</select></div>
                </div>
              )}
              <MasterTableView
                data={activeTab === 'Global Hub' ? globalData : (() => {
                  const rawCampaigns = regionalData[activeMarketSubTab] || [];
                  const campaigns = rawCampaigns.filter(c =>
                    c.country &&
                    c.country.toUpperCase() !== 'UNKNOWN' &&
                    (eq(c.market, activeMarketSubTab) || eq(c.market, MARKET_KEYS[activeMarketSubTab]))
                  );
                  const globalRef = globalData.find(d => eq(d.country, activeMarketSubTab) || eq(d.country, MARKET_KEYS[activeMarketSubTab]));
                  return globalRef ? [{ ...globalRef, isAnchor: true }, ...campaigns] : campaigns;
                })()}
                activeMetrics={activeMetrics}
                latestGlobalDate={latestGlobalDate}
                isCampaignView={activeTab === 'Market Hub'}
                hideDates={activeTab === 'Global Hub'}
              />
            </div>
          )}  
          {CAMPAIGN_CHILDREN.some(c => c.id === activeTab) && (  
            <div className="space-y-8 animate-in fade-in duration-500">  
              <MetricControlHub activeMetrics={activeMetrics} allowedMetrics={allowed} toggleMetric={m => setActiveMetrics(p => p.includes(m) ? (p.length > 1 ? p.filter(x => x !== m) : p) : [...p, m])} handleAllToggle={() => setActiveMetrics(p => p.length === allowed.length ? ['DAU-SCT'] : [...allowed])} />  
              <div className="flex flex-wrap gap-4">  
                <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg">  
                  <MapPin className="w-6 h-6 text-red-600" />  
                  <select value={tabMarketFilter[activeTab]} onChange={e => setTabMarketFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8">  
                    {MARKET_SEGMENTS.map(m => <option key={m} value={m} className="bg-neutral-900">{m}</option>)}  
                  </select>  
                </div>

                {dynamicSubTabs.length > 0 && (  
                  <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg">  
                    <Filter className="w-6 h-6 text-amber-500" />  
                    <select value={subTabFilter[activeTab]} onChange={e => setSubTabFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8">  
                      <option value="">ALL SUB TABS</option>  
                      {dynamicSubTabs.map(cat => <option key={cat} value={cat} className="bg-neutral-900">{cat}</option>)}  
                    </select>  
                  </div>  
                )}

                {activeTab !== 'AlwaysOn' && dynamicSubSubTabs.length > 0 && subTabFilter[activeTab] !== "" && (  
                  <div className="flex items-center gap-4 p-4 bg-[#111] rounded-xl border border-[#2a2a2a] w-fit shadow-lg">  
                    <ListTree className="w-6 h-6 text-purple-500" />  
                    <select value={subSubTabFilter[activeTab]} onChange={e => setSubSubTabFilter(p => ({ ...p, [activeTab]: e.target.value }))} className="bg-transparent text-white font-bold uppercase outline-none cursor-pointer pr-8">  
                      <option value="">ALL SUB SUB TABS</option>  
                      {dynamicSubSubTabs.map(cat => <option key={cat} value={cat} className="bg-neutral-900">{cat}</option>)}  
                    </select>  
                  </div>  
                )}  
              </div>

              <MasterTableView data={(() => {   
                const mkt = tabMarketFilter[activeTab];   
                const sub = subTabFilter[activeTab];   
                const ss = subSubTabFilter[activeTab];   
                
                // STRICLY ISOLATE JP PROACTIVE  
                if (activeTab === 'AlwaysOn' && sub === 'JP Proactive Container') {  
                    const jpData = campaignHubData['AlwaysOn']?.['Japan']?.['JP Proactive Container'];  
                    if (!jpData) return [];  
                    return Object.values(jpData).flatMap(x => Array.isArray(x) ? x : Object.values(x).flat());  
                }  
                
                if (!sub) {  
                  const allForMarket = campaignHubData[activeTab]?.[mkt];  
                  if (!allForMarket) return [];  
                  return Object.values(allForMarket).flatMap(st => Object.values(st).flat());  
                }  
                
                if (!ss || activeTab === 'AlwaysOn') {  
                  const allForSub = campaignHubData[activeTab]?.[mkt]?.[sub];  
                  if (!allForSub) return [];  
                  const rows = Object.values(allForSub).flat();  
                  return activeTab === 'AlwaysOn' ? [...rows].sort((a,b) => (a.explicitTrendStart || a.dataMinDate || '').localeCompare(b.explicitTrendStart || b.dataMinDate || '')) : rows;   
                }  
                
                const specificRows = campaignHubData[activeTab]?.[mkt]?.[sub]?.[ss];  
                return specificRows || [];  
              })()} activeMetrics={activeMetrics} latestGlobalDate={latestGlobalDate} isCampaignView isAlwaysOn={activeTab === 'AlwaysOn'} />  
            </div>  
          )}  
        </main>  
      </div>  
      <style>{`  
        ::-webkit-scrollbar { width: 5px; height: 5px; }  
        ::-webkit-scrollbar-track { background: transparent; }  
        ::-webkit-scrollbar { display: none; }  
        ::-webkit-scrollbar-thumb { background: #2a2a2a; border-radius: 10px; }  
        ::-webkit-scrollbar-thumb:hover { background: #444; }  
        .no-scrollbar::-webkit-scrollbar { display: none; }  
        select { appearance: none; background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E") no-repeat right 0.5rem center; background-size: 1em; }  
        .animate-in { animation: fadeIn 0.4s ease-out; }  
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }  
      `}</style>  
    </div>  
  );  
};

export default App;

