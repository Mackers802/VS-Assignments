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