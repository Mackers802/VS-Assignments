import React, { useState } from "react";

export const Signup = (props) => {
  const initInputs = {
    username: "",
    password: "",
  };

  const { errMsg } = props;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
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
          Create Username <input type="text" name="username" placeholder="username" className="input2"/>
          <br></br>
          Create Password <input type="text" name="password" placeholder="password" className="input2"/>
          <br></br>
          Email<input type="text" name="email" placeholder="Email" className="input2"/>
        </label>
        <br></br>
        <button className="button">Signup</button>
        <p style={{ color: "red" }}>{errMsg}</p>
      </form>
    </>
  );
};
