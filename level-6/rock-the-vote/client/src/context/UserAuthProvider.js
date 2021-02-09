import React, { useState } from "react";
import axios from "axios";

export const UserAuthContext = React.createContext();

const issueAxios = axios.create()
const commentsAxios = axios.create()

issueAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
  }
)

commentsAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export const UserAuthProvider = (props) => {

  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: localStorage.getItem("token") || "",
    issues: [],
    comments: []
  };

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserIssues()
        getIssueComments()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: [],
      comments: []
    })
  }


  function getUserIssues(){
    issueAxios.get("/api/issue/")
    .then(res => { 
      setUserState(prevState => ({
      ...prevState,
      issues: res.data
    }))
  })
    .catch(err => console.log(err.response.data.errMsg))
}

function addIssue(newIssue){
  issueAxios.post("/api/issue", newIssue) 
  .then(res => {
      setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
      }))
  })
  .catch(err => console.log(err.responde.data.errMsg))
}

function getIssueComments(){
  commentsAxios.get("/api/comment/IssueId")
  .then(res => {
    setUserState(prevState => ({
      ...prevState,
      comments: [...prevState.comments, res.data]
    }))
  })
  .catch(err => console.log(err.response.data.errMsg))
}

  return (
    <UserAuthContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        getUserIssues,
        getIssueComments
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
}
