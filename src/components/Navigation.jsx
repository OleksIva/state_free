import React from 'react'
import { Link } from 'react-router-dom';

function Navigation({ user }) {

    if (!user) {
        return (null)
    } else {
        return (
            <div>
                <Link to={"/profile"}><button>Profile Page</button></Link>
                <Link to={"/resources"}><button>Resources Page</button></Link>
                <Link to={"/overview"}><button>Overview Page</button></Link>
            </div>
        )
    }


}

export default Navigation