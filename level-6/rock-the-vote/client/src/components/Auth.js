import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import AuthForm from "./AuthForm.js"

const initInputs = { username: "", password: ""}

export const Auth = () => {

const { signup } = useContext(UserAuthContext)
const [inputs, setInputs] = useState(initInputs)
// const [toggle, setToggle] = useState(false)


function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handleSignup(e){
    e.preventDefault()
    signup(inputs)
    
}

return (
        <>

        <div>
    
            <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                inputs={inputs}

            />
        </div>
        </>
    )
}
