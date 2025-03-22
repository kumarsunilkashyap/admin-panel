import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [stats, setStats] = useState({ users: 0, active: 0, revenue: 0 });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Mock API call
        const data = await mockApiFetchDashboard();
        setStats(data);
      } catch (err) {
        setError("Failed to load dashboard data");
      }
    };
    fetchDashboardData();
  }, []);

  const chartData = {
    labels: ["Users", "Active Users", "Revenue"],
    datasets: [
      {
        label: "Dashboard Metrics",
        data: [stats.users, stats.active, stats.revenue],
        backgroundColor: ["#4CAF50", "#2196F3", "#FFC107"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dashboard Metrics Overview",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      {error && <div className="bg-red-100 p-4 mb-4 text-red-700">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-3xl mt-2">{stats.users}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-3xl mt-2">{stats.active}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl mt-2">${stats.revenue}</p>
        </div>
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Metrics Chart</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

// Mock API function
const mockApiFetchDashboard = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ users: 1500, active: 1200, revenue: 24500 });
    }, 1000);
  });
};

export default Dashboard;
