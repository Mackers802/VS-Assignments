import React, { useContext, useState } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"
import { EditProfile } from "./EditProfile"

export const Profile = (props) => {

    
    const { user: { username, bio, email }, logout } = useContext(UserAuthContext)
    
    const [toggle, setToggle ] = useState(false)
    function toggleForm(){
        setToggle (prev => !prev)
    }

    return (
        <div>
                {
                    !toggle ? 
                        <div className="profileInfo">
                            <h1>{ username }</h1>
                            <h4>{ bio }</h4>
                            <h4>{ email } </h4>
                                <button onClick={ toggleForm }>Edit Profile</button>
                        </div>
            
                    :
            
                    <div className="profileInfo">
                            <EditProfile />
                            <button onClick={ toggleForm }>Discard Changes</button>
                    </div>
        
                }
            <button onClick={ logout }> Logout </button>
        </div>
    )
}
