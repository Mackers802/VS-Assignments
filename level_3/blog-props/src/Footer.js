import React from 'react'
import Datafile from "./Datafile"

import Ig from "./Ig"
import Fb from "./Fb"
import Git from "./Git"


function Footer(){

    return(
        <div>
            <div className="footerWrapper">
                <div className="footerContainer">
                    <ul className="circles">
                        <Ig />
                        <Fb />
                        <Git />

                        {/* <Icon iconImg={instagram.png} iconURL={"https://ig.com"} />
                        <Icon iconImg={Fb.png} iconURL={} />
                        <Icon iconImg={twitter.png} iconURL={} /> */}
                    </ul>
                </div>
                        <p>Copyright C Your Website 2020</p>

            </div>
        </div>
    )
}

export default Footer