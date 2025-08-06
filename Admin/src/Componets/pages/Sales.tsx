
import { useState } from "react";
import {
  FiTrendingUp,
  FiDollarSign,
  FiUsers,
  FiShoppingCart,
  FiRefreshCw,
  FiBarChart2,
  FiPieChart,
  FiArrowRight,
} from "react-icons/fi";

const SalesPage = () => {
  // Sales data state
  const [timeRange, setTimeRange] = useState("week");
  const [] = useState("overview");

  // Sample data

  const metrics = [
    {
      title: "Total Revenue",
      value: "$24,780",
      change: "+12%",
      icon: <FiDollarSign />,
      color: "text-green-500",
    },
    {
      title: "New Customers",
      value: "184",
      change: "+8%",
      icon: <FiUsers />,
      color: "text-blue-500",
    },
    {
      title: "Transactions",
      value: "1,254",
      change: "+5%",
      icon: <FiShoppingCart />,
      color: "text-purple-500",
    },
    {
      title: "Avg. Order Value",
      value: "$89.50",
      change: "+3%",
      icon: <FiTrendingUp />,
      color: "text-orange-500",
    },
  ];

  const topProducts = [
    { name: "Premium Widget", sales: 420, revenue: "$12,600" },
    { name: "Standard Widget", sales: 380, revenue: "$7,600" },
    { name: "Basic Widget", sales: 290, revenue: "$4,350" },
    { name: "Deluxe Bundle", sales: 150, revenue: "$9,000" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Sales Dashboard</h1>
          <p className="text-gray-600">
            Track and analyze your sales performance
          </p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center mt-4 md:mt-0">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {["day", "week", "month", "year"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  timeRange === range
                    ? "bg-white shadow text-indigo-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
          <button className="ml-2 p-2 text-gray-500 hover:text-gray-700">
            <FiRefreshCw />
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {metric.title}
                </p>
                <h3 className="text-2xl font-bold mt-1">{metric.value}</h3>
                <p
                  className={`text-sm mt-2 ${
                    metric.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {metric.change} from last {timeRange}
                </p>
              </div>
              <div
                className={`p-3 rounded-full bg-opacity-20 ${metric.color.replace(
                  "text-",
                  "bg-"
                )}`}
              >
                <div className={`text-2xl ${metric.color}`}>{metric.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Sales Performance</h2>
            <div className="flex space-x-2">
              <button className="p-2 text-indigo-600 bg-indigo-50 rounded-lg">
                <FiBarChart2 />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
                <FiPieChart />
              </button>
            </div>
          </div>

          {/* Chart Placeholder - Replace with actual chart component */}
          <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500">
                Sales chart for {timeRange} will appear here
              </p>
              <p className="text-sm text-gray-400 mt-1">
                (Integration with Chart.js or similar)
              </p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Top Products</h2>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-gray-500">
                    {product.sales} units sold
                  </p>
                </div>
                <p className="font-semibold">{product.revenue}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 text-indigo-600 text-sm font-medium hover:text-indigo-800 flex items-center">
            View all products <FiArrowRight className="ml-1" />
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <FiDollarSign className="text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Order #100{item}</p>
                    <p className="text-sm text-gray-500">Customer {item}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(150 + item * 25).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500">Today, 10:{item}0 AM</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Targets */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold mb-6">Sales Targets</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Monthly Target</span>
                <span className="text-sm text-gray-500">$18,000 / $25,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: `${(18000 / 25000) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Quarterly Target</span>
                <span className="text-sm text-gray-500">$52,000 / $75,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: `${(52000 / 75000) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="pt-4 border-t">
              <p className="text-green-500 text-sm font-medium">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                On track to meet targets
              </p>
              <p className="text-gray-500 text-sm mt-1">Updated: Today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
