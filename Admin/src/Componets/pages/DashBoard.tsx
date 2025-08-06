import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiDollarSign,
  FiPackage,
  FiActivity,
  FiArrowRight,
  FiBarChart2,
} from "react-icons/fi";
import SalesProductionGraph from "./Sales";

interface SummaryCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface ActivityItem {    
  id: number;
  user: string;
  action: string;
  time: string;
}

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data with TypeScript interfaces
  const summaryData: SummaryCard[] = [
    {
      title: "Total Revenue",
      value: "$24,780",
      change: "+12%",
      icon: <FiDollarSign className="text-green-500" />,
      bgColor: "bg-green-100",
    },
    {
      title: "Total Users",
      value: "1,254",
      change: "+8%",
      icon: <FiUsers className="text-blue-500" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "Products Sold",
      value: "845",
      change: "+5%",
      icon: <FiPackage className="text-purple-500" />,
      bgColor: "bg-purple-100",
    },
    {
      title: "Active Projects",
      value: "12",
      change: "-2%",
      icon: <FiActivity className="text-orange-500" />,
      bgColor: "bg-orange-100",
    },
  ];

  const recentActivity: ActivityItem[] = [
    {
      id: 1,
      user: "John Doe",
      action: "placed a new order",
      time: "2 min ago",
    },
    {
      id: 2,
      user: "Sarah Smith",
      action: "updated profile",
      time: "10 min ago",
    },
    {
      id: 3,
      user: "Mike Johnson",
      action: "completed payment",
      time: "25 min ago",
    },
    {
      id: 4,
      user: "Emma Wilson",
      action: "requested support",
      time: "1 hour ago",
    },
  ];

  // Navigation handlers
  const handleViewAllActivity = () => navigate("/activity");
  const handleQuickAction = (action: string) => {
    switch (action) {
      case "users":
        navigate("/users");
        break;
      case "inventory":
        navigate("/inventory");
        break;
      case "payments":
        navigate("/payments");
        break;
      case "reports":
        navigate("/reports");
        break;
      default:
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back, Admin! Here's what's happening today.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() =>
              navigate(`/${item.title.toLowerCase().replace(" ", "-")}`)
            }
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>
                <h3 className="text-2xl font-bold mt-1 text-gray-800">
                  {item.value}
                </h3>
                <p
                  className={`text-sm mt-2 ${
                    item.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.change} from last month
                </p>
              </div>
              <div className={`p-3 rounded-lg ${item.bgColor}`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Sales & Production Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Sales & Production
            </h2>
            <div className="flex space-x-2">
              <button
                className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg flex items-center"
                onClick={() => navigate("/sales")}
              >
                <FiBarChart2 className="mr-1" />
                View Details
              </button>
            </div>
          </div>
          <div className="h-80">
            <SalesProductionGraph />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Activity
            </h2>
            <button
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              onClick={handleViewAllActivity}
            >
              View all <FiArrowRight className="ml-1" />
            </button>
          </div>
          <ul className="space-y-4">
            {recentActivity.map((activity) => (
              <li
                key={activity.id}
                className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0 hover:bg-gray-50 p-2 rounded-lg transition-colors cursor-pointer"
                onClick={() =>
                  navigate(
                    `/user/${activity.user.replace(" ", "-").toLowerCase()}`
                  )
                }
              >
                <div className="bg-blue-50 p-2 rounded-lg mr-3">
                  <FiActivity className="text-blue-500 text-lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-800">{activity.user}</p>
                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {activity.action}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              onClick={() => handleQuickAction("users")}
            >
              <FiUsers className="text-2xl mb-2 text-blue-500" />
              <span className="text-sm font-medium">Manage Users</span>
            </button>
            <button
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              onClick={() => handleQuickAction("inventory")}
            >
              <FiPackage className="text-2xl mb-2 text-purple-500" />
              <span className="text-sm font-medium">View Inventory</span>
            </button>
            <button
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              onClick={() => handleQuickAction("payments")}
            >
              <FiDollarSign className="text-2xl mb-2 text-green-500" />
              <span className="text-sm font-medium">Process Payments</span>
            </button>
            <button
              className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex flex-col items-center"
              onClick={() => handleQuickAction("reports")}
            >
              <FiActivity className="text-2xl mb-2 text-orange-500" />
              <span className="text-sm font-medium">View Reports</span>
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            System Status
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Storage Usage
                </span>
                <span className="text-sm text-gray-500">65% used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Memory Usage
                </span>
                <span className="text-sm text-gray-500">42% used</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "42%" }}
                ></div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <p className="text-sm font-medium text-green-600">
                  All systems operational
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Last updated: Just now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
