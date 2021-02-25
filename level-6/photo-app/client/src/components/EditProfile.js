import React, { useContext,useState } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"

export const EditProfile = (props) => {
const { saveProfileChanges } = useContext(UserAuthContext)

const initInputs = {
    user: JSON.parse(localStorage.getItem("user")) || {}
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
            <form onSubmit={ handleSubmit } onChange={handleChange} >
                <label>
                    <input type="text" name={"caption"} placeholder="Add Caption"/>
                </label>
            </form>
            <button> Save Changes</button>
        </div>
    )
}
