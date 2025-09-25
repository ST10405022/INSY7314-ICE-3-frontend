import { useState } from "react"; // React hook for managing state
import axios from "axios"; // HTTP client for making requests
import { isValidEmail, isStrongPassword } from "../utils/validation";

// Login component for user authentication
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission for user login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Front-end checks
    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }
    // If all checks pass, proceed with login
    try {
      const res = await axios.post("https://localhost:5000/api/auth/login", {
        email, password
      }); // Send login data to backend
      localStorage.setItem("token", res.data.token); // Store JWT token in local storage
      setMessage("Login successful!"); // Update message state
    } catch (err) {
      setMessage("Login failed: " + err.response.data.message); // Update message state with error
    }
  };

  // Render the login form
  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}
