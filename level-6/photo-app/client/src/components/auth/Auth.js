import React, { useContext, useState } from "react";
import { UserAuthContext } from "../../context/UserAuthProvider";
import { Signup } from "./Signup.js";
import { Login } from "./Login.js";

export const Auth = () => {
  const { signup, login, errMsg, authErrorReset } = useContext(UserAuthContext);
  const [toggle, setToggle] = useState(false);

  function handleSignup(credentials) {
    signup(credentials);
  }

  function handleLogin(credentials) {
    login(credentials);
  }

  function toggleForm() {
    setToggle((prev) => !prev);
    authErrorReset();
  }

  return (
    <div className="auth">
      {!toggle ? (
        <div className="signup">
          <img src="/images/gh-mtns-wideLarge.png" alt="GH-logo"></img>
          <Signup handleSubmit={handleSignup} errMsg={errMsg} />
          <button onClick={toggleForm} className="button">Already a User? </button>
        </div>
      ) : (
        <div className="login">
          <img src="/images/gh-mtns-wideLarge.png" alt="GH-logo"></img>
          <Login handleSubmit={handleLogin} errMsg={errMsg} />
          <button onClick={toggleForm} className="button">Not a User? </button>
        </div>
      )}
    </div>
  );
};
