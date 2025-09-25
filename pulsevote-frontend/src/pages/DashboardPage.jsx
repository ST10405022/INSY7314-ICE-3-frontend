import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [data, setData] = useState(""); // Store API response

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const token = localStorage.getItem("token"); // Get JWT from localStorage
        // Make GET request with Authorization header
        const res = await axios.get("https://localhost:5000/api/protected", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(res.data.message); // Display message from backend
      } catch (err) {
        setData("Error: Unauthorized"); // If token invalid or missing
      }
    };
    fetchProtected();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data}</p>
    </div>
  );
}
