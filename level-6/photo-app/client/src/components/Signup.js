import React, { useState } from "react";


export const Signup = (props) => {

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
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
        <h4>Create Username</h4>
          <input type="text" name="username" placeholder="username"/>
        <h4>Create Password</h4>
          <input type="text" name="password" placeholder="password"/>
          <h4>Email</h4>
          <input type="text" name="email" placeholder="Email"/>
        </label>
        <br></br>
        <br></br>
        <button>Signup</button>

        <p style={{color: "red"}}>{errMsg}</p>
      </form>
    </div>
  );
}

