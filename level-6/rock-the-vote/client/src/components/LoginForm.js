import React, { useState } from "react";


export const LoginForm = (props) => {

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
      <form onSubmit={handleSubmit} onChange={handleChange} >
        <label>
          <input type="text" name="username" placeholder="username"/>
          <input type="text" name="password" placeholder="password"/>
        </label>
        <br></br>
        <button >Login</button>

      </form>
    </div>
  );
}

