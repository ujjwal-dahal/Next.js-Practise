"use client";

import { useState } from "react";
import "./Signup.scss";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    try {
      const res = await fetch("/api/handleSignupSubmit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("Signup successful!");
      } else {
        const error = await res.text();
        alert(error);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
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
          name="name"
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name="confirmPassword"
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
