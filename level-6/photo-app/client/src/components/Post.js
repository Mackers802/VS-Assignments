import React, { useContext }  from 'react'
import { UserAuthContext } from "../context/UserAuthProvider";

export const Post = (props) => {

const { user: { username } } = useContext(UserAuthContext)
const { imgUrl, style, cameraBrand, cameraModel, lensBrand, lensModel, caption, iso, shutterSpeed, fStop, /* accessories */ } = props

    return (
        <div className="posts">
                <h3>{ username }</h3>
                <img src={imgUrl} alt="post img" width="200" height="150"></img>
                <p>Settings: 𝑓 { fStop }, SS: { shutterSpeed }, ISO{ iso }</p>
                <p>{caption}</p>
                <p> Style: { style } </p>
                    <p>
                    Kit: 
                    <br></br>
                    Camera: {cameraBrand}, {cameraModel}
                        <br></br>
                    Lens: {lensBrand}, {lensModel}
                        <br></br>
                        {/* accessories: { accessories } */}
                    </p>
                <hr></hr>
                <br></br>
        </div>
    )
}
