import { useState, useEffect } from "react";

// Home page component
export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    // Check if JWT token exists in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  return (
    <div>
      <h1>Welcome to PulseVote</h1>
      <p>
        {isLoggedIn
          ? "You are logged in! Access your dashboard from the navbar."
          : "This is the home page. Please register or login to access your dashboard."}
      </p>
    </div>
  );
}
