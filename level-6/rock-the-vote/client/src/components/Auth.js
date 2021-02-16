 import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { SignupForm } from "./SignupForm.js"
import { LoginForm } from "./LoginForm.js"

export const Auth = () => {

const { signup, login, errMsg, authErrorReset } = useContext(UserAuthContext)
const [toggle, setToggle] = useState(false)


function handleSignup(credentials){
    signup(credentials)
}

function handleLogin(credentials){
    login(credentials)
}

function toggleForm(){
    setToggle(prev => !prev)
    authErrorReset()
}

return (
    <div className="authPage">
{
    !toggle ? 
        <div className="signupForm">
            <SignupForm handleSubmit={handleSignup} errMsg={errMsg} />
            <br></br>
        <button onClick={ toggleForm }>Already a member? </button>
        </div>
:
        <div className="loginForm">
        <LoginForm handleSubmit={handleLogin}  errMsg={errMsg} />
        <br></br>
        <button onClick={ toggleForm }>Not a Member? </button>
        </div>
}
    </div>
)
}