"use client";

import "./Signup.scss";
import HandleSignupSubmit from "./handleSignupSubmit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Signup() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Show loading toast immediately
    const toastId = toast.loading("Registering...");

    try {
      // Call HandleSignupSubmit and wait for the process to complete
      await HandleSignupSubmit(formData);

      // Update the toast on successful registration
      toast.update(toastId, {
        render: "Registration Successful",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      // Redirect to the login page after successful signup
      router.push("/login");
    } catch (error) {
      // Display the error in a toast if registration fails
      toast.update(toastId, {
        render: String(error),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup is clicked");
    // Implement Google signup logic here if using NextAuth
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
