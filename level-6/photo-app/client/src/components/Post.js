import React from 'react'
// import { UserAuthContext } from "../context/UserAuthProvider";

export const Post = (props) => {

// const { user: { username, profilePicture } } = useContext(UserAuthContext)
const { user, imgUrl , style, cameraBrand, cameraModel, lensBrand, lensModel, caption, iso, shutterSpeed, fStop/* accessories */ } = props

    return (
        <>
        <div className="post">
                <h2>{ user }</h2>
                <img src={ imgUrl } alt="post img" 
                // width="250" height="175"
                ></img>
                        <p>Settings: 𝑓 { fStop }, SS: { shutterSpeed }, ISO{ iso }</p>
                        <p>{caption}</p>
                        <p> { style } </p>
                            <p>
                            Kit: 
                            <br></br>
                            Camera: {cameraBrand}, {cameraModel}
                                <br></br>
                            Lens: {lensBrand}, {lensModel}
                                <br></br>
                                {/* accessories: { accessories } */}
                            </p>
        </div>
        </>
    )
}
