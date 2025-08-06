import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState, type JSX } from "react";
import SignIn from "./Componets/pages/Signin";
import SignUp from "./Componets/pages/SignUp";
import Dashboard from "./Componets/pages/DashBoard";
import Sidebar from "./Componets/pages/Sidebar";
import Footer from "./Componets/pages/Footer";
import "./App.css";

// Auth context or hook (simplified version)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check auth status on initial load
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
};

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

// Layout component for authenticated routes
const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route index element={<Dashboard />} />
          {/* Add more dashboard routes here */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected dashboard route */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* 404 fallback */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

export default App;
