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