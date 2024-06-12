import React from 'react'
import { Link } from 'react-router-dom';
import './navigation.css'; 

function Navigation({ user }) {
    if (!user) {
        return null
    }

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ResourcesPage">Resources</Link></li>
                    <li><Link to="/assignment">Assignment</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation