import React, { useContext }  from 'react'
import { UserAuthContext } from "../context/UserAuthProvider";

export const Post = (props) => {

const { user: { username } } = useContext(UserAuthContext)
const { imgUrl, style, lensBrand, caption, camera, accessories, iso, shutterSpeed, fStop } = props

    return (
        <div className="posts">
                <h3>{ username }</h3>
                <img src={imgUrl} alt="post img" width="200" height="150"></img>
                <p>{caption}</p>
                <p> 𝑓 { fStop }, SS: { shutterSpeed }, ISO{ iso }</p>
                <p> Style: { style } </p>
                    <p>
                    Kit: Cam: {camera}, Lens: {lensBrand}, Acc: { accessories }
                    </p>
                <hr></hr>
                <br></br>
        </div>
    )
}