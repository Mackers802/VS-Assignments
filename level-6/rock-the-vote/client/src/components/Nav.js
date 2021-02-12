import React, { useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { Link } from "react-router-dom"


export const Nav = () => {

    const { getIssuesPage, getUserIssues, logout } = useContext(UserAuthContext)

    return (
    <>
        <div className="navBar">
            <Link to="/Profile" onClick={getUserIssues}>Profile</Link>
            <Link to="/IssuePage" onClick={getIssuesPage}>Issues</Link>
            <Link to="/Auth" >Member Login</Link>
            <button onClick={logout} > logout </button>

            <br></br>
        </div>
    </>
    )
}
