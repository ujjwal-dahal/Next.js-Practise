"use client";

import "./Signup.scss";
import HandleSignupSubmit from "./handleSignupSubmit";
import { useRouter } from "next/navigation"; // Import useRouter for redirection

export default function Signup() {
  const router = useRouter(); // Hook for client-side navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Call HandleSignupSubmit and handle any potential errors
    try {
      await HandleSignupSubmit(formData);
      router.push("/login"); // Redirect to login page after successful signup
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup is clicked");
    // Add your Google signup logic here, possibly with NextAuth
  };

  return (
    <div className="signup-form">
      <h1 className="title">Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" name="name" required />
        <input type="email" placeholder="Enter your email" name="email" required />
        <input type="password" placeholder="Enter your password" name="password" required />
        <input type="password" placeholder="Confirm your password" name="confirmPassword" required />
        <button type="submit" className="signup-btn">Signup</button>
      </form>
      <button className="google-btn" onClick={handleGoogleSignup}>
        Signup with Google
      </button>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}
