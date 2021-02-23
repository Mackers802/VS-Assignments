import React, { useContext, useState } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"
import { Signup } from "./Signup.js"
import { Login } from "./Login.js"

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
        <div className="signup">
            <Signup handleSubmit={handleSignup} errMsg={errMsg} />
            <br></br>
        <button onClick={ toggleForm }>Already a User? </button>
        </div>
:
        <div className="login">
        <Login handleSubmit={handleLogin}  errMsg={errMsg} />
        <br></br>
        <button onClick={ toggleForm }>Not a User? </button>
        </div>
}
    </div>
)
}