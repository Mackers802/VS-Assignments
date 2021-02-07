import React, { useState } from "react";
import axios from "axios";

export const UserAuthContext = React.createContext();

export const UserAuthProvider = (props) => {
  const initState = { user: {}, token: "" };
  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <UserAuthContext.Provider
      value={{
        ...userState,
        signup,
        login
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
}
