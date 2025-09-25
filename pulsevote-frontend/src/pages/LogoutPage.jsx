import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove JWT token from localStorage to log out
    localStorage.removeItem("token");
    // Redirect to home page
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
      <p>You are being redirected to the home page.</p>
    </div>
  );
}
