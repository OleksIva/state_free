import React from 'react'
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation({ user }) {
    if (!user) {
        return null
    }

    return (
        <div className='pg-0'>
            <nav>
                <img src="https://ik.imagekit.io/lnmtrplsk/image%201.png?updatedAt=1721816809003" alt="logo" />

                <ul>
                    <li><Link to="/">Startseite</Link></li>
                    <li><Link to="/faqpage">FAQ</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link className='anmeldenButton' to="/login">Anmelden</Link></li>
                    <li><Link className='registrierenButton' to="/register">Registrieren</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation