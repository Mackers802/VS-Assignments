import React from 'react'


import Datafile from "./Datafile"

function Blogpost(props){
    return(
        <div classname="blogPostWrapper">
            <div className="blogPostContainer">
                <h1>{props.postData.title}</h1>
                <h2>{props.postData.subTitle}</h2>
            </div>
            <div className="blogPostDate">
                <p>Posted by {props.postData.author} on {props.postData.date}</p>
                <br></br>
                <hr></hr>
            </div>
        </div>
    )
}

export default Blogpost

