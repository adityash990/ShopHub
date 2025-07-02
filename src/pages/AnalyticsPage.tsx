import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar
} from 'recharts';
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Target,
  Download,
  RefreshCw,
  Database,
  Zap
} from 'lucide-react';
import { AnalyticsCard } from '../components/AnalyticsCard';
import { BusinessInsights } from '../components/BusinessInsights';

export const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  // Enhanced sample data for analytics
  const salesData = [
    { month: 'Jan', sales: 4200, customers: 280, revenue: 2800, conversion: 3.2 },
    { month: 'Feb', sales: 3800, customers: 250, revenue: 2500, conversion: 3.1 },
    { month: 'Mar', sales: 4600, customers: 320, revenue: 3200, conversion: 3.5 },
    { month: 'Apr', sales: 5200, customers: 390, revenue: 3800, conversion: 3.8 },
    { month: 'May', sales: 4900, customers: 360, revenue: 3500, conversion: 3.6 },
    { month: 'Jun', sales: 5800, customers: 420, revenue: 4200, conversion: 4.1 },
    { month: 'Jul', sales: 6200, customers: 480, revenue: 4800, conversion: 4.3 },
    { month: 'Aug', sales: 5900, customers: 450, revenue: 4500, conversion: 4.0 },
    { month: 'Sep', sales: 6800, customers: 520, revenue: 5200, conversion: 4.5 },
    { month: 'Oct', sales: 7200, customers: 580, revenue: 5800, conversion: 4.7 },
    { month: 'Nov', sales: 8100, customers: 650, revenue: 6500, conversion: 4.9 },
    { month: 'Dec', sales: 9200, customers: 720, revenue: 7200, conversion: 5.1 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 45, sales: 12500, growth: 12.5, color: '#3B82F6' },
    { name: 'Fashion', value: 30, sales: 8300, growth: 8.3, color: '#EF4444' },
    { name: 'Home & Garden', value: 15, sales: 4200, growth: 15.7, color: '#10B981' },
    { name: 'Sports', value: 10, sales: 2800, growth: 6.2, color: '#F59E0B' },
  ];

  const customerSegments = [
    { segment: 'Premium', customers: 1250, revenue: 562500, avgOrder: 450, color: '#8B5CF6' },
    { segment: 'Regular', customers: 3200, revenue: 576000, avgOrder: 180, color: '#3B82F6' },
    { segment: 'Occasional', customers: 2100, revenue: 157500, avgOrder: 75, color: '#10B981' },
  ];

  const performanceMetrics = [
    { name: 'Website Speed', value: 95, benchmark: 85, color: '#10B981' },
    { name: 'User Experience', value: 92, benchmark: 80, color: '#3B82F6' },
    { name: 'Mobile Performance', value: 88, benchmark: 75, color: '#8B5CF6' },
    { name: 'SEO Score', value: 94, benchmark: 85, color: '#F59E0B' },
    { name: 'Conversion Rate', value: 4.2, benchmark: 3.0, color: '#EF4444' },
  ];

  const kpiData = [
    { title: 'Total Revenue', value: '$847,500', change: '+18.2%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Total Orders', value: '12,450', change: '+15.8%', icon: ShoppingCart, color: 'text-blue-600' },
    { title: 'Active Users', value: '8,750', change: '+22.3%', icon: Users, color: 'text-purple-600' },
    { title: 'Conversion Rate', value: '4.52%', change: '+12.1%', icon: Target, color: 'text-orange-600' },
  ];

  const tabs = [
    { id: 'overview', label: 'Executive Dashboard', icon: BarChart3 },
    { id: 'sales', label: 'Sales Analytics', icon: TrendingUp },
    { id: 'customers', label: 'Customer Intelligence', icon: Users },
    { id: 'performance', label: 'Performance Metrics', icon: Activity },
  ];

  const handleDataRefresh = async () => {
    setIsLoading(true);
    // Simulate API call for data refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleExportData = () => {
    const exportData = {
      timestamp: new Date().toISOString(),
      kpis: kpiData,
      salesTrends: salesData,
      categories: categoryData,
      customerSegments: customerSegments,
      performanceMetrics: performanceMetrics
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `shophub-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Enhanced Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Business Intelligence Dashboard</h1>
            <p className="text-xl text-gray-600">
              Advanced analytics powered by Python & React • PowerBI & Tableau Ready
            </p>
          </div>
          <div className="flex space-x-3 mt-4 lg:mt-0">
            <button
              onClick={handleDataRefresh}
              disabled={isLoading}
              className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-gray-300 rounded-lg hover:bg-white transition-all duration-300"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportData}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              <span>Export Data</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Enhanced Tabs */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-1 mb-8 shadow-lg border border-white/20">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Enhanced KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
              <AnalyticsCard
                key={index}
                title={kpi.title}
                value={kpi.value}
                change={kpi.change}
                icon={kpi.icon}
                color={kpi.color}
                index={index}
              />
            ))}
          </div>

          {/* Main Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Revenue Trend - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Revenue & Sales Trend</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Database className="h-4 w-4" />
                  <span>Live Data</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                    }} 
                  />
                  <Legend />
                  <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($K)" />
                  <Area type="monotone" dataKey="sales" stroke="#10B981" fillOpacity={1} fill="url(#colorSales)" name="Sales Count" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Business Insights */}
            <div className="lg:col-span-1">
              <BusinessInsights />
            </div>
          </div>

          {/* Secondary Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Category Performance */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Category Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name} ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Customer Segments */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Segments</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={customerSegments} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="segment" type="category" />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3B82F6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      )}

      {activeTab === 'sales' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Sales Performance Analytics</h3>
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    backdropFilter: 'blur(10px)',
                    border: 'none',
                    borderRadius: '12px'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} name="Sales Volume" />
                <Line type="monotone" dataKey="conversion" stroke="#10B981" strokeWidth={3} name="Conversion Rate %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {activeTab === 'customers' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Intelligence Dashboard</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="customers" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" name="New Customers" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      )}

      {activeTab === 'performance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              <div className="space-y-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{metric.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">{metric.value}{typeof metric.value === 'number' && metric.value < 10 ? '%' : metric.value > 50 ? '' : '%'}</span>
                        <span className="text-xs text-gray-500">vs {metric.benchmark}</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r`}
                        style={{ 
                          width: `${typeof metric.value === 'number' ? (metric.value > 10 ? metric.value : metric.value * 20) : 0}%`,
                          background: `linear-gradient(90deg, ${metric.color}, ${metric.color}99)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="space-y-4">
                {[
                  { tech: 'React + TypeScript', usage: 'Frontend Framework', icon: '⚛️' },
                  { tech: 'Python Analytics', usage: 'Data Processing Engine', icon: '🐍' },
                  { tech: 'Tailwind CSS', usage: 'Styling System', icon: '🎨' },
                  { tech: 'Framer Motion', usage: 'Animation Library', icon: '✨' },
                  { tech: 'Recharts', usage: 'Data Visualization', icon: '📊' },
                  { tech: 'PowerBI Ready', usage: 'BI Integration', icon: '📈' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.tech}</span>
                    </div>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{item.usage}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Python Integration Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Zap className="h-6 w-6 text-green-600" />
            <div>
              <h4 className="font-bold text-gray-900">Python Analytics Engine</h4>
              <p className="text-gray-600">Advanced data processing pipeline active</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-medium">Live</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};