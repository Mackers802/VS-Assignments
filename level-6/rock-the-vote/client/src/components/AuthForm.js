import React from "react";

export default function AuthForm(props) {
  
  return (
    <div>
      <form onSubmit={props.handleSubmit} >
        <label>
          <input handleChange={props.handleChange} type="text" name="username" placeholder="username"/>
          <input handleChange={props.handleChange} type="text" name="password" placeholder="password"/>
        </label>
        <button >Login</button>

      </form>
    </div>
  );
}
