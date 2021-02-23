import React, { useState } from "react";


export const Login = (props) => {

  const initInputs = {
    username: "",
    password: ""
  }

  const { errMsg } = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

const [inputs, setInputs] = useState(initInputs)

const handleSubmit = (e) => {
  e.preventDefault()
  props.handleSubmit(inputs)
}

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange} >
        <label>
        <h1>Username:</h1>
          <input type="text" name="username" placeholder="username"/>
          <h1>Password:</h1>
          <input type="text" name="password" placeholder="password"/>
        </label>
        <br></br>
        <button >Login</button>
        <p style={{color: "red"}}>{errMsg}</p>
      </form>
    </div>
  );
}

