import React, { useState, useContext } from "react";
import { PostProviderContext } from "../../context/PostProvider";

export const Login = (props) => {
  const initInputs = {
    username: "",
    password: "",
  };
  const { getUserPosts } = useContext(PostProviderContext);

  const { errMsg } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleLogin() {
    getUserPosts();
  }

  const [inputs, setInputs] = useState(initInputs);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(inputs);
  };

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          <h1>Username:</h1>
          <input type="text" name="username" placeholder="username" className="input2"/>
          <h1>Password:</h1>
          <input type="text" name="password" placeholder="password" className="input2"/>
        </label>
        <br></br>
        <button onClick={handleLogin}> Login </button>
        <p style={{ color: "red" }}>{errMsg}</p>
      </form>
    </>
  );
};
