"use client";

import Link from "next/link";
import { loginHandler } from "../loginHandler";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signIn } from "@/auth";
import LoginGoogle from "../server/loginGoogle";

const LoginForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Please fill Email and Password");
      return;
    }

    // Show a loading toast
    const toastId = toast.loading("Logging in...");

    // Attempt to log in the user
    const error = await loginHandler(email, password);

    if (error) {
      // Update toast to display error message if login failed
      toast.update(toastId, {
        render: String(error),
        type: "error",
        autoClose: 5000,
        isLoading: false,
      });
    } else {
      // Update toast to show success message if login succeeded
      toast.update(toastId, {
        render: "Login Successful",
        type: "success",
        autoClose: 5000,
        isLoading: false,
      });

      // Redirect to the home page
      router.refresh();
    }
  };

  return (
    <>
    <div className="login-form">
      <form  onSubmit={handleSubmit}>
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
        </form>
        <form action={LoginGoogle}>
        <button type="submit" className="google-btn">
          Login with Google
        </button>
        </form>
        <p>
          Don't have an account? <Link href="/signup">Signup</Link>
        </p>
        </div>
      
    </>
  );
};

export { LoginForm };
