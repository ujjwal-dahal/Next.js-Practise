"use client";

import Link from "next/link"
import { loginHandler } from "../loginHandler"
import { toast } from "react-toastify";


const LoginForm = ()=>{


  return <>
  <form
      className="login-form"
      action={ async (formData : FormData)=>{

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        if(!email || !password){
          toast.error("Please fill Email and Password")
        }
        


        let error = await loginHandler(formData)

        if(!error){
          toast.success("Login successfull")
        }
      }}
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
  </>
}

export {LoginForm};