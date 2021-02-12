import React, { useState } from "react";


export const SignupForm = (props) => {

  const initInputs = {
    username: "",
    password: ""
  }

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
    <h1>Welcome to Politics for Dummys</h1>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
        <h2>Create a Username</h2>
          <input type="text" name="username" placeholder="username"/>
        <h3>Create Password</h3>
          <input type="text" name="password" placeholder="password"/>
        </label>
        <br></br>
        <br></br>
        <button>Signup</button>
      </form>
    </div>
  );
}

