import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { SignupForm } from "./SignupForm.js"
// import { LoginForm } from "./LoginForm.js"

const initInputs = { 
    username: "", 
    password: ""
}

export const Auth = () => {

const { signup, login } = useContext(UserAuthContext)
const [ inputs, setInputs ] = useState(initInputs)
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

// function handleLogin(e){
//     e.preventDefault()
//     login(inputs)
// }

return (
    <>
        <div>
            <SignupForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                input={inputs}
            />
        </div>
        {/* <div>
        <LoginForm 
                handleChange={handleChange}
                handleSubmit={handleSignup}
                handlelogin={handleLogin}
                input={inputs}
            />
        </div> */}
    </>
    )
}