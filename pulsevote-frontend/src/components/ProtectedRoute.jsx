import { Navigate } from "react-router-dom";

// Protects a route from unauthenticated access
export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  // If token exists, allow access, else redirect to login
  return token ? children : <Navigate to="/login" />;
}
