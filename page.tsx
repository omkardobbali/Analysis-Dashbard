'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Mock data for initial rendering
const mockData = {
  revenue: [
    { month: 'Jan', value: 5000 },
    { month: 'Feb', value: 7500 },
    { month: 'Mar', value: 6800 },
    { month: 'Apr', value: 9000 },
    { month: 'May', value: 10200 },
    { month: 'Jun', value: 11500 },
  ],
  users: [
    { month: 'Jan', value: 120 },
    { month: 'Feb', value: 150 },
    
    { month: 'Mar', value: 200 },
    { month: 'Apr', value: 250 },
    { month: 'May', value: 300 },
    { month: 'Jun', value: 350 },
  ],
  conversion: {
    rate: 3.2,
    change: 0.4,
    positive: true
  },
  kpis: [
    { name: 'Revenue', value: '$45,200', change: '+12.3%', positive: true },
    { name: 'Users', value: '1,350', change: '+5.7%', positive: true },
    { name: 'Conversion', value: '3.2%', change: '+0.4%', positive: true },
    { name: 'Avg. Session', value: '2m 45s', change: '-0.5%', positive: false },
  ]
};

export default function Home() {
  const [data, setData] = useState(mockData);
  const [loading, setLoading] = useState(false);

  // This would be replaced with actual Google Sheets API integration
  useEffect(() => {
    // Simulating data loading
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // In a real implementation, we would fetch data from Google Sheets here
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Header with cyberpunk styling */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text">NEXUS ANALYTICS</h1>
          <p className="text-sm opacity-70">Real-time business intelligence dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass p-2 rounded-lg pulse">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
          </div>
          <p className="text-sm">Live Data</p>
        </div>
      </header>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.kpis.map((kpi, index) => (
          <div key={index} className="glass rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm opacity-70">{kpi.name}</h3>
              <div className={`text-xs px-2 py-1 rounded-full ${kpi.positive ? 'bg-primary/20 text-primary' : 'bg-red-500/20 text-red-500'}`}>
                {kpi.change}
              </div>
            </div>
            <p className="text-2xl font-bold neon-text">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="glass rounded-xl p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Revenue Trends</h2>
          <div className="h-64 flex items-end justify-between">
            {data.revenue.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-12 bg-gradient-to-t from-primary/50 to-secondary/50 rounded-t-md neon-border" 
                  style={{ height: `${(item.value / 12000) * 100}%` }}
                ></div>
                <p className="text-xs mt-2">{item.month}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Engagement */}
        <div className="glass rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
          <div className="h-64 flex flex-col justify-center items-center">
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 rounded-full border-4 border-muted"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-t-secondary border-r-secondary" 
                style={{ 
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <p className="text-3xl font-bold neon-text">350</p>
                <p className="text-xs opacity-70">Active Users</p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xl font-bold text-primary">24.5%</p>
                <p className="text-xs opacity-70">New Users</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">75.5%</p>
                <p className="text-xs opacity-70">Returning</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="glass rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Conversion Funnel</h2>
        <div className="flex justify-between items-center h-40">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-lg glass flex items-center justify-center">
              <p className="text-2xl font-bold neon-text">1,200</p>
            </div>
            <p className="text-sm mt-2">Visitors</p>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-primary to-secondary mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-lg glass flex items-center justify-center">
              <p className="text-xl font-bold neon-text">850</p>
            </div>
            <p className="text-sm mt-2">Engaged</p>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-secondary to-accent mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-lg glass flex items-center justify-center">
              <p className="text-lg font-bold neon-text">420</p>
            </div>
            <p className="text-sm mt-2">Interested</p>
          </div>
          <div className="h-0.5 flex-1 bg-gradient-to-r from-accent to-primary mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
              <p className="text-base font-bold neon-text">85</p>
            </div>
            <p className="text-sm mt-2">Converted</p>
          </div>
        </div>
      </div>

      {/* Footer with data source info */}
      <footer className="glass rounded-xl p-4 flex justify-between items-center">
        <p className="text-xs opacity-70">Data refreshed: {new Date().toLocaleTimeString()}</p>
        <p className="text-xs">Source: <span className="text-secondary">Google Sheets Integration</span></p>
      </footer>
    </div>
  );
}
