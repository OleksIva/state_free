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
            <h2>State Free</h2>
            
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/ResourcesPage">Resources</Link></li> */}
                    <li><Link to="/assignment">Assignment</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li className='aboutUsButton'><Link to="/about">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link className='signUpButton' to="/register">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation