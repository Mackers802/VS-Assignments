import React, { useContext, useState }  from 'react'
import { UserAuthContext } from "../context/UserAuthProvider";
import { EditPostForm } from "./EditPostForm"
 
export const ProfilePost = (props) => {

const { user: { username } } = useContext(UserAuthContext)
const { imgUrl , caption, _id }  = props

const [Toggle, setToggle ] = useState(false) 

function changeToggle(){
            setToggle(prevToggle => !prevToggle)
    }

// useEffect(() => {
//     console.log(_id)
// }, []);

    return (
        <>
        {!Toggle ?
        <div className="userPosts">
                <img src={ imgUrl } alt="post img" width="200" height="150" onClick={ changeToggle }></img>
                 {/* <button onClick={() => setToggle(prevToggle => !prevToggle) }>Edit Post</button> */}
                {/* <p>Settings: 𝑓 { fStop }, SS: { shutterSpeed }, ISO{ iso }</p>
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
                    {/* </p> */}
                {/* <button onClick={() => props.editPost(props._id) }>Edit Post</button> */}
                <hr></hr>
                <br></br>
        </div>
        :
        <div className="posts">
                <EditPostForm caption={caption} _id={_id}  />
                {/* <button onClick={ () => setToggle(prevToggle => !prevToggle)}>Close</button> */}
        </div>
    }
    </>
    )
}