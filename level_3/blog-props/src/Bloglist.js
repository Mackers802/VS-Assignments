import React from 'react'

import Blogpost from "./Blogpost"
import Olderpost from "./Olderpost"

import Datafile from "./Datafile"

function Bloglist(){

    const blogData = Datafile.map(posts => <Blogpost postData={posts}/>)

    return(
        <div>
            {blogData}
            <Olderpost />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Bloglist