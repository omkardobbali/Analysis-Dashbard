// Mock data service to simulate API calls

// Complete dataset for the dashboard
export const dashboardData = {
  revenue: [
    { month: 'Jan', value: 5000, target: 4800, previousYear: 4200 },
    { month: 'Feb', value: 7500, target: 7000, previousYear: 6500 },
    { month: 'Mar', value: 6800, target: 7200, previousYear: 6000 },
    { month: 'Apr', value: 9000, target: 8500, previousYear: 7800 },
    { month: 'May', value: 10200, target: 9500, previousYear: 8500 },
    { month: 'Jun', value: 11500, target: 10500, previousYear: 9200 },
  ],
  users: [
    { month: 'Jan', value: 120, newUsers: 30, returningUsers: 90, avgSession: 165 },
    { month: 'Feb', value: 150, newUsers: 45, returningUsers: 105, avgSession: 172 },
    { month: 'Mar', value: 200, newUsers: 60, returningUsers: 140, avgSession: 180 },
    { month: 'Apr', value: 250, newUsers: 75, returningUsers: 175, avgSession: 168 },
    { month: 'May', value: 300, newUsers: 90, returningUsers: 210, avgSession: 175 },
    { month: 'Jun', value: 350, newUsers: 85, returningUsers: 265, avgSession: 160 },
  ],
  kpis: [
    { name: 'Revenue', value: '$45,200', previousValue: '$40,250', change: '+12.3%', positive: true, target: '$48,000' },
    { name: 'Users', value: '1,350', previousValue: '1,277', change: '+5.7%', positive: true, target: '1,500' },
    { name: 'Conversion', value: '3.2%', previousValue: '2.8%', change: '+0.4%', positive: true, target: '3.5%' },
    { name: 'Avg. Session', value: '2m 45s', previousValue: '2m 46s', change: '-0.5%', positive: false, target: '3m 00s' },
    { name: 'Bounce Rate', value: '32.5%', previousValue: '35.2%', change: '-2.7%', positive: true, target: '30.0%' },
    { name: 'Page Views', value: '12,450', previousValue: '11,200', change: '+11.2%', positive: true, target: '13,000' },
  ],
  conversionFunnel: [
    { stage: 'Visitors', count: 1200, percentage: 100, previousCount: 1050, previousPercentage: 100 },
    { stage: 'Engaged', count: 850, percentage: 70.8, previousCount: 720, previousPercentage: 68.6 },
    { stage: 'Interested', count: 420, percentage: 35.0, previousCount: 350, previousPercentage: 33.3 },
    { stage: 'Converted', count: 85, percentage: 7.1, previousCount: 65, previousPercentage: 6.2 },
  ],
  regionalPerformance: [
    { region: 'North', revenue: 12500, users: 350, conversionRate: 3.5, avgOrderValue: 125 },
    { region: 'South', revenue: 10200, users: 320, conversionRate: 3.2, avgOrderValue: 110 },
    { region: 'East', revenue: 14800, users: 420, conversionRate: 3.8, avgOrderValue: 135 },
    { region: 'West', revenue: 7700, users: 260, conversionRate: 2.8, avgOrderValue: 105 },
  ]
};

// Function to simulate API call with delay
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(dashboardData);
    }, 1500);
  });
};

// Function to get specific data sections
export const fetchRevenueData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData.revenue);
    }, 800);
  });
};

export const fetchUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData.users);
    }, 600);
  });
};

export const fetchKPIData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData.kpis);
    }, 400);
  });
};

export const fetchConversionData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData.conversionFunnel);
    }, 700);
  });
};

export const fetchRegionalData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardData.regionalPerformance);
    }, 900);
  });
};