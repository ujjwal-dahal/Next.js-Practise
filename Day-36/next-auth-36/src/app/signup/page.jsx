"use client"

import { useState } from "react";
import "./Signup.scss";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name , setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Signup successful!");
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup is clicked");
  };

  return (
    <div className="signup-form">
      <h1 className="title">Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className="signup-btn">
          Signup
        </button>
      </form>
      <button className="google-btn" onClick={handleGoogleSignup}>
        Signup with Google
      </button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}
