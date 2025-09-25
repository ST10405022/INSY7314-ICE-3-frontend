import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  // Track login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  // Optional: listen for changes to localStorage from other tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" "}
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>{" "}
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>{" "}
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}
