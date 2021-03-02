import React, { useState } from "react";
import axios from "axios"

export const UserAuthContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export const UserAuthProvider = (props) => {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: "",
  };

  // const initAllUsers = {
  //   allUsers: []
  // }
  const [userState, setUserState] = useState(initState);
  // const [allUsersState, setAllUsersState] = useState(initAllUsers)

 // -------------------------------------------- Authorization -----------------------------------------------------

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token  } = res.data;
        console.log(res.data)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

   // ------------------------------------- Profile Change Updates ------------------------------------------------------

   function editUserProfile(inputs, _id){
    console.log("Auth provider _id", _id)
    console.log("Auth provider inputs", inputs)
    userAxios
    .put(`/api/profile/${_id}`, inputs)
      .then((res) => {
        setUserState((prevUserState) => ({
          ...prevUserState,
          user: res.data
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg)); 
      console.log("userState", userState)
  }

  
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: ""
    });
  }

// ----------------------------------------- Err Handlers ------------------------------------------------------

  function handleAuthError(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function authErrorReset() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  return (
    <UserAuthContext.Provider
      value={{
        ...userState,
        // ...allUsersState,
        signup,
        login,
        logout,
        authErrorReset,
        handleAuthError,
        editUserProfile,
        // getAllUsers
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
};
