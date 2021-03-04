import React, { useContext }  from 'react'
import { UserAuthContext } from "../context/UserAuthProvider";

export const Post = (props) => {

const { user: { username } } = useContext(UserAuthContext)
const { imgUrl , style, cameraBrand, cameraModel, lensBrand, lensModel, caption, iso, shutterSpeed, fStop/* accessories */ } = props

    return (
        <>
        <div className="post">
                <h3>{ username }</h3>
                    <div className="settings">
                        <p>Settings: 𝑓 { fStop }, SS: { shutterSpeed }, ISO{ iso }</p>
                    </div>
                <img src={ imgUrl } alt="post img" width="250" height="175"></img>
                    <div className="caption">
                        <p>{caption}</p>
                    </div>
                    <div className="styleKit">
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
                    </div>
        </div>
        </>
    )
}
