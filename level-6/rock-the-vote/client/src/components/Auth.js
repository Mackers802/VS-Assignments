 import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { SignupForm } from "./SignupForm.js"
import { LoginForm } from "./LoginForm.js"

export const Auth = () => {

const { signup, login } = useContext(UserAuthContext)
const [toggle, setToggle] = useState(false)


function handleSignup(credentials){
    signup(credentials)
}

function handleLogin(credentials){
    login(credentials)
}

return (
    <div className="authPage">
    <h1>Login or Signup</h1>
    <br></br>
{
    !toggle ? 
        <div className="signupForm">
            <SignupForm handleSubmit={handleSignup}/>
            <br></br>
        <button onClick={()=> setToggle(prev => !prev)}>Already a member? </button>
        </div>
:
        <div className="loginForm">
        <LoginForm handleSubmit={handleLogin}/>
        <br></br>
        <button onClick={()=> setToggle(prev => !prev)}>Not a Member? </button>
        </div>
}
    </div>
)
}