import React, { useContext, useState, useEffect }  from 'react'
// import { PostProviderContext } from '../context/PostProvider';
import { UserAuthContext } from "../context/UserAuthProvider";
import { EditPostForm } from "./EditPostForm"
 
export const ProfilePost = (props) => {

const { user: { username } } = useContext(UserAuthContext)
const { imgUrl , style, cameraBrand, cameraModel, lensBrand, lensModel, caption, iso, shutterSpeed, fStop , _id }  = props

const [Toggle, setToggle ] =useState(false) 

// useEffect(() => {
//     console.log(_id)
// }, []);

    return (
        <>
        {!Toggle ?
        <div className="posts">
                <h3>{ username }</h3>
                <img src={ imgUrl } alt="post img" width="200" height="150"></img>
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
                 <button onClick={() => setToggle(prevToggle => !prevToggle) }>Edit Post</button>
                {/* <button onClick={() => props.editPost(props._id) }>Edit Post</button> */}
                <hr></hr>
                <br></br>
        </div>
        :
        <div className="posts">
                <EditPostForm caption={caption} style={style} fStop={fStop} iso={iso} shutterSpeed={shutterSpeed} _id={_id} />
                <button onClick={ () => setToggle(prevToggle => !prevToggle)}>Close</button>
        </div>
    }
    </>
    )
}