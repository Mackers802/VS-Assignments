import React from 'react'

import Navbar from "./Navbar"
import Datafile from "./Datafile"

function Header(){
    return(
        <div className="headerContainer">
            <div className="navBarHolder">
                <Navbar />
            </div>
                <br></br>
                <br></br>
                <br></br>
            <div className="headerTitle">
                <h1>Clean Blog</h1>
            </div>
            <div className="headerText">
                <h3>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}

export default Header