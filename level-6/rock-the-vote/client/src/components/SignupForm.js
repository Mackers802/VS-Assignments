import React, { useState} from "react";


export const SignupForm = (props) => {

  const initInputs = {
    username: "",
    password: ""
  }

const [inputs, setInputs] = useState(initInputs)

  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <label>
          <input handleChange={props.handleChange} type="text" name={inputs} placeholder="username"/>
          <input handleChange={props.handleChange} type="text" name={inputs} placeholder="password"/>
        </label>
        <button >Signup</button>

      </form>
    </div>
  );
}
