#!/usr/bin/env python3
"""
ShopHub Analytics Data Processor
Advanced data processing and analytics engine for e-commerce insights
"""

import json
import datetime
import random
from typing import Dict, List, Any
import statistics

class EcommerceAnalytics:
    """
    Advanced analytics processor for e-commerce data
    Simulates real business intelligence operations
    """
    
    def __init__(self):
        self.data = self._generate_sample_data()
    
    def _generate_sample_data(self) -> Dict[str, Any]:
        """Generate realistic e-commerce sample data"""
        
        # Generate sales data for the last 12 months
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        
        sales_data = []
        base_sales = 3000
        
        for i, month in enumerate(months):
            # Simulate seasonal trends
            seasonal_factor = 1 + 0.3 * random.sin(i * 0.5)
            growth_factor = 1 + (i * 0.02)  # 2% monthly growth
            
            sales = int(base_sales * seasonal_factor * growth_factor)
            customers = int(sales * 0.15)  # Conversion factor
            revenue = sales * random.uniform(35, 65)  # Average order value
            
            sales_data.append({
                'month': month,
                'sales': sales + random.randint(-200, 200),
                'customers': customers + random.randint(-30, 30),
                'revenue': int(revenue + random.uniform(-500, 500)),
                'conversion_rate': round(random.uniform(2.5, 4.2), 2)
            })
        
        # Product categories performance
        categories = [
            {'name': 'Electronics', 'sales': 45, 'growth': 12.5},
            {'name': 'Fashion', 'sales': 30, 'growth': 8.3},
            {'name': 'Home & Garden', 'sales': 15, 'growth': 15.7},
            {'name': 'Sports', 'sales': 10, 'growth': 6.2}
        ]
        
        # Customer segments
        customer_segments = [
            {'segment': 'Premium', 'count': 1250, 'value': 450},
            {'segment': 'Regular', 'count': 3200, 'value': 180},
            {'segment': 'Occasional', 'count': 2100, 'value': 75}
        ]
        
        return {
            'sales_data': sales_data,
            'categories': categories,
            'customer_segments': customer_segments,
            'generated_at': datetime.datetime.now().isoformat()
        }
    
    def calculate_kpis(self) -> Dict[str, Any]:
        """Calculate key performance indicators"""
        
        latest_data = self.data['sales_data'][-1]
        previous_data = self.data['sales_data'][-2]
        
        total_revenue = sum(item['revenue'] for item in self.data['sales_data'])
        total_sales = sum(item['sales'] for item in self.data['sales_data'])
        avg_conversion = statistics.mean(item['conversion_rate'] for item in self.data['sales_data'])
        
        # Calculate growth rates
        revenue_growth = ((latest_data['revenue'] - previous_data['revenue']) / previous_data['revenue']) * 100
        sales_growth = ((latest_data['sales'] - previous_data['sales']) / previous_data['sales']) * 100
        
        return {
            'total_revenue': f"${total_revenue:,.0f}",
            'revenue_growth': f"{revenue_growth:+.1f}%",
            'total_sales': f"{total_sales:,}",
            'sales_growth': f"{sales_growth:+.1f}%",
            'avg_conversion': f"{avg_conversion:.2f}%",
            'active_customers': "8,750",
            'customer_growth': "+18.5%"
        }
    
    def generate_insights(self) -> List[str]:
        """Generate business insights using data analysis"""
        
        insights = [
            "Electronics category shows strongest growth at 12.5% month-over-month",
            "Premium customer segment contributes 65% of total revenue despite being 18% of customer base",
            "Conversion rates peak during months 3, 6, and 11 indicating seasonal patterns",
            "Customer acquisition cost decreased by 15% while lifetime value increased by 22%",
            "Mobile traffic accounts for 68% of sessions but only 45% of conversions",
            "Cart abandonment rate improved from 72% to 68% after UX optimizations"
        ]
        
        return random.sample(insights, 4)  # Return 4 random insights
    
    def export_data(self, format_type: str = 'json') -> str:
        """Export processed data for external BI tools"""
        
        export_data = {
            'kpis': self.calculate_kpis(),
            'sales_trends': self.data['sales_data'],
            'category_performance': self.data['categories'],
            'customer_analytics': self.data['customer_segments'],
            'business_insights': self.generate_insights(),
            'export_timestamp': datetime.datetime.now().isoformat(),
            'format': format_type
        }
        
        if format_type == 'json':
            return json.dumps(export_data, indent=2)
        else:
            # Could add CSV, Excel export here
            return json.dumps(export_data, indent=2)

def main():
    """Main analytics processing function"""
    
    print("🚀 ShopHub Analytics Engine Starting...")
    print("=" * 50)
    
    # Initialize analytics processor
    analytics = EcommerceAnalytics()
    
    # Generate and display KPIs
    kpis = analytics.calculate_kpis()
    print("📊 Key Performance Indicators:")
    for metric, value in kpis.items():
        print(f"   {metric.replace('_', ' ').title()}: {value}")
    
    print("\n💡 Business Insights:")
    insights = analytics.generate_insights()
    for i, insight in enumerate(insights, 1):
        print(f"   {i}. {insight}")
    
    print(f"\n✅ Analytics processing completed at {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("🔗 Data ready for PowerBI/Tableau integration")
    
    # Export data for BI tools
    exported_data = analytics.export_data()
    
    return {
        'status': 'success',
        'kpis': kpis,
        'insights': insights,
        'data_points': len(analytics.data['sales_data'])
    }

if __name__ == "__main__":
    result = main()