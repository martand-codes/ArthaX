// data.js
export const holdingsData = [
  {
    instrument: 'BHARTIARTL',
    qty: 2,
    avgCost: 538.05,
    ltp: 541.15,
    curVal: 1082.30,
    pnl: 6.20,
    netChg: '+0.58%',
    dayChg: '+2.99%',
    isProfit: true,
  },
  {
    instrument: 'HDFCBANK',
    qty: 2,
    avgCost: 1383.40,
    ltp: 1522.35,
    curVal: 3044.70,
    pnl: 277.90,
    netChg: '+10.04%',
    dayChg: '+0.11%',
    isProfit: true,
  },
  {
    instrument: 'HINDUNILVR',
    qty: 1,
    avgCost: 2335.85,
    ltp: 2417.40,
    curVal: 2417.40,
    pnl: 81.55,
    netChg: '+3.49%',
    dayChg: '+0.21%',
    isProfit: true,
  },
  {
    instrument: 'INFY',
    qty: 1,
    avgCost: 1350.50,
    ltp: 1555.45,
    curVal: 1555.45,
    pnl: 204.95,
    netChg: '+15.18%',
    dayChg: '-1.60%',
    isProfit: true,
  },
  {
    instrument: 'ITC',
    qty: 5,
    avgCost: 202.00,
    ltp: 207.90,
    curVal: 1039.50,
    pnl: 29.50,
    netChg: '+2.92%',
    dayChg: '+0.80%',
    isProfit: true,
  },
  {
    instrument: 'M&M',
    qty: 2,
    avgCost: 800.00,
    ltp: 770.00,
    curVal: 1540.00,
    pnl: -60.00,
    netChg: '-3.75%',
    dayChg: '-1.10%',
    isProfit: false,
  }
];


// Add this below your existing holdingsData export
export const positionsData = [
  {
    instrument: 'RELIANCE',
    product: 'MIS', // Margin Intraday Squareoff (Day Trading)
    qty: 250,
    avgPrice: 2900.50,
    ltp: 2932.40,
    m2m: 7975.00,
    isProfit: true,
  },
  {
    instrument: 'NIFTY 24MAY 22500 CE',
    product: 'NRML', // Normal (Options/Futures)
    qty: -100, // Negative quantity means short-selling
    avgPrice: 120.00,
    ltp: 145.50,
    m2m: -2550.00,
    isProfit: false,
  },
  {
    instrument: 'TCS',
    product: 'MIS',
    qty: 50,
    avgPrice: 4080.00,
    ltp: 4105.00,
    m2m: 1250.00,
    isProfit: true,
  },
  {
    instrument: 'BANKNIFTY 24MAY 48000 PE',
    product: 'NRML',
    qty: 60,
    avgPrice: 210.50,
    ltp: 180.20,
    m2m: -1818.00,
    isProfit: false,
  },
  
  {
    instrument: 'HDFCBANK',
    product: 'MIS',
    qty: 0, // 0 quantity means the position is CLOSED
    avgPrice: 1420.00,
    ltp: 1440.15,
    m2m: 2015.00, // Locked in profit
    isProfit: true,
  }
];


export const ordersData = [
  {
    time: '09:15:22',
    instrument: 'RELIANCE',
    type: 'BUY',
    product: 'MIS',
    qty: 250,
    reqPrice: '2900.50', 
    execPrice: '2900.50',
    status: 'COMPLETED',
  },
  {
    time: '10:05:41',
    instrument: 'HDFCBANK',
    type: 'SELL',
    product: 'MIS',
    qty: 100,
    reqPrice: '1450.00',
    execPrice: '-', // Hasn't executed yet
    status: 'OPEN',
  },
  {
    time: '11:22:10',
    instrument: 'TCS',
    type: 'BUY',
    product: 'NRML',
    qty: 10,
    reqPrice: '4000.00',
    execPrice: '-',
    status: 'CANCELLED',
  },
  {
    time: '14:30:05',
    instrument: 'INFY',
    type: 'SELL',
    product: 'MIS',
    qty: 50,
    reqPrice: 'MKT', // Market order
    execPrice: '1620.80',
    status: 'REJECTED',
    message: 'Insufficient margin'
  }
];




export const fundsSummary = {
  totalBalance: 145620.50,
  availableMargin: 98000.00,
  usedMargin: 47620.50,
  unclearedFunds: 12500.00, // NEW: Money waiting to settle
  linkedBank: "HDFC Bank",  // NEW
  bankEnding: "4098",       // NEW
};

export const transactionsData = [
  {
    id: 'TXN-998273',
    date: '21 Jun 2026',
    time: '10:30 AM',
    type: 'DEPOSIT',
    method: 'UPI',
    amount: 5620.50,
    status: 'SUCCESS',
  },
  {
    id: 'TXN-998102',
    date: '18 Jun 2026',
    time: '03:15 PM',
    type: 'WITHDRAWAL',
    method: 'Bank Transfer',
    amount: 12000.00,
    status: 'SUCCESS',
  },
  {
    id: 'TXN-997544',
    date: '15 Jun 2026',
    time: '09:00 AM',
    type: 'CHARGE',
    method: 'Brokerage',
    amount: 45.50,
    status: 'SUCCESS',
  },
  {
    id: 'TXN-997100',
    date: '10 Jun 2026',
    time: '08:45 AM',
    type: 'DEPOSIT',
    method: 'Net Banking',
    amount: 50000.00,
    status: 'FAILED',
  }
];


// --- REPORTS DATA ---
export const reportSummary = {
  grossPnL: 68500.50,
  chargesAndTaxes: 8120.25, // Brokerage, STT, Exchange Fees
  netPnL: 60380.25,
  winRate: 68.5,
  totalTrades: 142
};

export const reportData = [
  {
    id: 'TRD-1092',
    date: '20 Jun 2026',
    instrument: 'RELIANCE',
    qty: 250,
    buyValue: 712500.00, // 250 * 2850
    sellValue: 733100.00, // 250 * 2932.4
    pnl: 20600.00,
    isProfit: true
  },
  {
    id: 'TRD-1091',
    date: '18 Jun 2026',
    instrument: 'HDFCBANK',
    qty: 100,
    buyValue: 148000.00, 
    sellValue: 144015.00, 
    pnl: -3985.00,
    isProfit: false
  },
  {
    id: 'TRD-1088',
    date: '15 Jun 2026',
    instrument: 'TCS',
    qty: 50,
    buyValue: 200000.00, 
    sellValue: 205250.00, 
    pnl: 5250.00,
    isProfit: true
  },
  {
    id: 'TRD-1085',
    date: '12 Jun 2026',
    instrument: 'INFY',
    qty: 150,
    buyValue: 247500.00, 
    sellValue: 243120.00, 
    pnl: -4380.00,
    isProfit: false
  },
  {
    id: 'TRD-1080',
    date: '05 Jun 2026',
    instrument: 'ICICIBANK',
    qty: 300,
    buyValue: 315000.00, 
    sellValue: 325590.00, 
    pnl: 10590.00,
    isProfit: true
  }
];


// --- DASHBOARD CHART DATA ---

// 1. Data for the massive Equity Curve (Line Chart) WITH Benchmark
export const portfolioHistory = [
  { date: '1 Jan', value: 100000, benchmark: 100000 },
  { date: '1 Feb', value: 105000, benchmark: 102000 },
  { date: '1 Mar', value: 102000, benchmark: 99000 },
  { date: '1 Apr', value: 115000, benchmark: 104000 },
  { date: '1 May', value: 125000, benchmark: 108000 },
  { date: '1 Jun', value: 121000, benchmark: 106000 },
  { date: 'Current', value: 145620, benchmark: 110000 }, 
];

// 2. Data for the Asset Allocation (Donut Chart)
export const assetAllocation = [
  { name: 'Equity (Stocks)', value: 85000, color: '#10B981' }, 
  { name: 'Mutual Funds', value: 45000, color: '#3B82F6' }, 
  { name: 'Available Cash', value: 15620, color: '#8B5CF6' }, 
];

// 3. For the Monthly Performance Bar Chart
export const monthlyPnL = [
  { month: 'Jan', pnl: 12500, isProfit: true },
  { month: 'Feb', pnl: 8400, isProfit: true },
  { month: 'Mar', pnl: -3200, isProfit: false },
  { month: 'Apr', pnl: 15600, isProfit: true },
  { month: 'May', pnl: -1100, isProfit: false },
  { month: 'Jun', pnl: 24620, isProfit: true },
];

// 4. For the Sector Exposure Radar Chart
export const sectorExposure = [
  { sector: 'Technology', value: 85 },
  { sector: 'Banking', value: 65 },
  { sector: 'Energy', value: 40 },
  { sector: 'FMCG', value: 30 },
  { sector: 'Auto', value: 50 },
  { sector: 'Pharma', value: 20 },
];

// --- DEEP ANALYTICS DATA FOR DASHBOARD ---

// 1. Market Cap / Asset Type Distribution
export const capAllocation = [
  { name: 'Large Cap', value: 55000, color: '#2563EB' }, // Blue
  { name: 'Mid Cap', value: 20000, color: '#8B5CF6' }, // Purple
  { name: 'Small Cap', value: 10000, color: '#F59E0B' }, // Amber
];

// 2. Win/Loss P&L Breakdown by Instrument (Where are we making/losing money?)
export const pnlByInstrument = [
  { name: 'RELIANCE', pnl: 15400 },
  { name: 'TCS', pnl: 8200 },
  { name: 'ZOMATO', pnl: 5100 },
  { name: 'INFY', pnl: -2100 },
  { name: 'HDFCBANK', pnl: -4500 },
  { name: 'PAYTM', pnl: -8000 },
];

