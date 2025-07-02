import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Target, Users, ShoppingCart, BarChart3 } from 'lucide-react';

export const BusinessInsights: React.FC = () => {
  const insights = [
    {
      icon: TrendingUp,
      title: "Sales Performance",
      insight: "Electronics category shows strongest growth at 12.5% month-over-month",
      impact: "High",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      insight: "Premium customers contribute 65% of revenue despite being 18% of customer base",
      impact: "Critical",
      color: "text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Conversion Optimization",
      insight: "Mobile traffic: 68% of sessions but only 45% of conversions",
      impact: "Medium",
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "ROI Improvement",
      insight: "Customer acquisition cost decreased 15% while LTV increased 22%",
      impact: "High",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Business Insights</h3>
      </div>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${
                item.color === 'text-green-600' ? 'from-green-100 to-emerald-100' :
                item.color === 'text-blue-600' ? 'from-blue-100 to-indigo-100' :
                item.color === 'text-orange-600' ? 'from-orange-100 to-red-100' :
                'from-purple-100 to-violet-100'
              }`}>
                <item.icon className={`h-5 w-5 ${item.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.impact === 'Critical' ? 'bg-red-100 text-red-700' :
                    item.impact === 'High' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{item.insight}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200"
      >
        <div className="flex items-center">
          <BarChart3 className="h-5 w-5 text-blue-600 mr-2" />
          <span className="font-medium text-blue-900">PowerBI Integration Ready</span>
        </div>
        <p className="text-blue-700 text-sm mt-1">
          All analytics data is structured for seamless import into PowerBI, Tableau, and other BI tools.
        </p>
      </motion.div>
    </div>
  );
};