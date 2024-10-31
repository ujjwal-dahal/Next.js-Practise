"use client"

import "../Navbar/Navbar.scss";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">MyWebsite</div>
      <ul className="navbar__menu">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/privacy">Privacy</Link>
      </ul>
      <div className="nav-btn">
     <a href="#login" className="btn login-btn">Login</a>
    <a href="#signup" className="btn signup-btn">Signup</a>
      </div>
    </nav>
  );
}
