import React from 'react'
import {Link} from 'react-router-dom'
function HomePage() {

    const cssStyle = {
        margin:"15px"
    }
    return (
        <div>

            <Link to='/login' style={cssStyle}><button>Login</button></Link>
            <Link to="/register" style={cssStyle}><button>Register</button></Link>
            <Link to="/dashboard" style={cssStyle}><button>Dashboard</button></Link>
            <br />
            <br />
            <h2>Homepage</h2>

            <h1>Todo App</h1>
        </div>
    )
}

export default HomePage
