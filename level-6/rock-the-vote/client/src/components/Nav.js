import React from 'react'
import { Link } from "react-router-dom"
export default function Nav (props) {
    const { logout } = props
    return (
    <>
        <div className="navBar">
            <Link to="/Profile">Profile</Link>
            <Link to="/IssuePage">Issues</Link>
            <Link to="/Auth" >Member Login</Link>
            <button onClick={logout}>Logout</button>

            <br></br>
        </div>
    </>
    )
}
