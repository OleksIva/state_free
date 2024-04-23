import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <h1>Landing page</h1>
        <Link to={"/register"} ><button> <b>Register</b></button></Link>
        <Link to={"/login"} ><button><b>Login</b></button></Link>



    </div>
  )
}

export default Landing_page