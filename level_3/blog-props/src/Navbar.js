import React from 'react'

import Home from "./Home"
import About from "./About"
import Samplepost from "./Samplepost"
import Contact from "./Contact"
import Startbootstrap from "./Startbootstrap"


import Datafile from "./Datafile"

function Navbar(){
    return(
        <div className="navBar">
            <div className="navLeftside">
                <Startbootstrap />
            </div>
            <div className="navRightside">
                <Home />
                <About />
                <Samplepost />
                <Contact />
            </div>
        </div>
    )
}

export default Navbar