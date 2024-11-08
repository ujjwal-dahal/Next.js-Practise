"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import "./Login.scss";
import Link from "next/link";

interface InputData {
  email: string;
  password: string;
}

export default function Login() {
  const [inputData, setInputData] = useState <InputData> ({
    email: "",
    password: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    console.log(inputData);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="title">Login</div>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="email-box"
        value={inputData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        className="password-box"
        value={inputData.password}
        onChange={handleChange}
      />
      <button type="submit" className="login-btn">Login</button>
      <p>or</p>
      <button type="button" className="google-btn">Login with Google</button>
      <p>Don't have an account? <Link href="/signup">Signup</Link></p>
    </form>
  );
}
