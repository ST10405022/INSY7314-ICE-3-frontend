import { useState } from "react"; // React hook for managing state
import axios from "axios"; // HTTP client for making requests

// Register component for user registration
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission for user registration
  const handleRegister = async (e) => {
    e.preventDefault();
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
