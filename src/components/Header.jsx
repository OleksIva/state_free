import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assignment">Assignment</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    )
}

