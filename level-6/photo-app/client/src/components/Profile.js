import React, { useContext, useState } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"
import { PostProviderContext } from "../context/PostProvider"
import { EditProfile } from "./EditProfile"
import { Post } from "./Post"

export const Profile = (props) => {

    
    const { user: { username, bio, email, profilePicture }, logout } = useContext(UserAuthContext)
    const { userPosts } = useContext(PostProviderContext)
    
    const [toggle, setToggle ] = useState(false)
    function toggleForm(){
        setToggle (prev => !prev)
    }

    return (
        <div className="profilePage">
                {
                    !toggle ? 
                        <div className="profileBox">
                            <div className="profileContainer">
                            <br></br>
                            <img src={ profilePicture } alt="Profile" width="150" height="150"></img>
                                <div className="profileInfo">
                                    {/* <br></br> */}
                                        <h1>{ username }</h1>
                                        <h4>{ bio }</h4>
                                        <h4>{ email } </h4>
                                    {/* <br></br> */}
                                </div>
                            <div className="profilePagePosts">
                                { userPosts.map(post => <Post { ...post} key={post._id}/> ) }
                            </div>
                                <button onClick={ toggleForm }>Edit Profile</button>
                                <br></br>
                                <button onClick={ logout }> Signout </button>
                            </div>
                        </div>
            
                    :
            
                    <div className="profileEdit">
                            <EditProfile />
                            <button onClick={ toggleForm }>Discard Changes</button>
                    </div>
        
                }
        </div>
    )
}
