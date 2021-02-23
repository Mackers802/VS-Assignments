import React, { useContext } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"

export const EditProfile = (props) => {
const { saveProfileChanges } = useContext(UserAuthContext)

return ( 
        <div>
            
            <button onClick={ saveProfileChanges }> Save Changes</button>
        </div>
    )
}
