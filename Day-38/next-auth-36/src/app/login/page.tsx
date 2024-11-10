// Login.tsx
"use client";

import "./Login.scss";
import Link from "next/link";
import { loginHandler } from "./loginHandler";
import { CredentialsSignin } from "next-auth";
import { toast } from "react-toastify";

export default function Login() {

  // Wrapper for form submission to handle errors
  const handleSubmit = async (formData: FormData) => {
    try {
      await loginHandler(formData); // Attempt to log in
    } catch (err) {
      // throw new CredentialsSignin("Error")
      toast.error("Error")
    }
  };


  return (
    <form
      className="login-form"
      action={handleSubmit}
    >
      <div className="title">Login</div>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="email-box"
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        className="password-box"
      />
      <button type="submit" className="login-btn">
        Login
      </button>
      <p>or</p>
      <button type="button" className="google-btn">
        Login with Google
      </button>
      <p>
        Don't have an account? <Link href="/signup">Signup</Link>
      </p>
    </form>
  );
}
