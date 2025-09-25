import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <Router>
      {/* Layout wraps all pages for consistent navbar/menu */}
      <Layout>
        <Routes>
          {/* Public route: Home page */}
          <Route path="/" element={<HomePage />} />

          {/* Public routes: Login and Register */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected route: Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          {/* Logout page clears JWT and redirects */}
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
