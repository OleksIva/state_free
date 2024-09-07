import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Content() {
  // const loggedIn = useSelector(state => state.user.loggedIn)
  return (
    <div className="content">
      <div className="content-top">
        <h2>We’re here to Help you</h2>
        <p>Let's support you in applying for changing the status of their current status into the more favorable one.</p>
        <button className="start-button"><Link className='registrieren-button' to="/assessment">Start Assessment</Link></button>
        <button><Link className='registrieren-button' to="/register">Registrieren</Link></button>
      </div>
    </div>
  );
}

export default Content;

