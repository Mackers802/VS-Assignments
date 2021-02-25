import React, { useContext,useState } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"

export const EditProfile = (props) => {
const { saveProfileChanges, user: {profilePicture} } = useContext(UserAuthContext)

const initInputs = {
    profilePicture: localStorage.getItem( "user.profilePicture" ) || "",
}


const [ inputs, setInputs ] = useState(initInputs)

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault()
    saveProfileChanges(inputs)
    setInputs(initInputs)
    window.location.reload(false)
    }

return ( 
        <div>
            <form onSubmit={ handleSubmit } onChange={ handleChange } >
                <label>
                    <input type="text" name={ profilePicture } placeholder={profilePicture} value={ profilePicture }/>
                </label>
            </form>
            <button> Save Changes</button>
        </div>
    )
}
