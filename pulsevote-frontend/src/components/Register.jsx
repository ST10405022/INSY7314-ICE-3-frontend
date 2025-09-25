import { useState } from "react"; // React hook for managing state
import axios from "axios"; // HTTP client for making requests
import { isValidEmail, isStrongPassword } from "../utils/validation";

// Register component for user registration
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission for user registration
  const handleRegister = async (e) => {
    e.preventDefault();

    // Front-end checks
    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setMessage("Invalid email format.");
      return;
    }
    if (!isStrongPassword(password)) {
      setMessage(
        "Password must be at least 8 characters long and include letters and numbers."
      );
      return;
    }
    // If all checks pass, proceed with registration
    try {
      const res = await axios.post("https://localhost:5000/api/auth/register", {
        email, password
      }); // Send registration data to backend
      localStorage.setItem("token", res.data.token); // Store JWT token in local storage
      setMessage("Registration successful!"); // Update message state
    } catch (err) {
      setMessage("Registration failed: " + err.response.data.message); // Update message state with error
    }
  };

  // Render the registration form
  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}
