import React, { useState } from "react";
import axios from "axios";

export const UserAuthContext = React.createContext();

const issueAxios = axios.create();
const commentsAxios = axios.create();

issueAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

commentsAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const UserAuthProvider = (props) => {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: "",
    issues: [],
    userIssues: [],
    comments: [],
    // voted: [],
    // notVoted: []
  };

  // const initVotes = {
  //   votes: 0
  // }

  const [userState, setUserState] = useState(initState);
  // const [votes, setVotes] = useState(initVotes)

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserIssues();
        // getIssueComments()
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthError(err.response.data.errMsg));
  }

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

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserState({
      user: {},
      token: "",
      issues: [],
      userIssues: [],
      comments: [],
    });
  }

  function getIssuesPage() {
    issueAxios
      .get("/api/issue")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          issues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addIssue(newIssue) {
    issueAxios
      .post("/api/issue", newIssue)
      .then((res) => {
        console.log(res.data);
        setUserState((prevState) => ({
          ...prevState,
          issues: [...prevState.issues, res.data],
        }));
        getUserIssues();
      })
      .catch((err) => console.log(err.responde.data.errMsg));
  }

  function getUserIssues() {
    issueAxios
      .get("/api/issue/user")
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          userIssues: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getComments() {
    commentsAxios
      .get("/api/comment")
      .then((res) => {
        // console.log(res.data)
        setUserState((prevState) => ({
          ...prevState,
          comments: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getCommentsById(issueId) {
    commentsAxios
      .get(`/api/comment/${issueId}`)
      .then((res) => {
        setUserState((prevState) => ({
          ...prevState,
          comments: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addComment(newComment, issueId) {
    commentsAxios
      .post(`/api/comment/${issueId}`, newComment)
      .then((res) => {
        console.log(res.data);
        setUserState((prevState) => ({
          ...prevState,
          comments: [...prevState.comments, res.data],
        }));
        getComments();
      })
      .catch((err) => console.log(err.responde.data.errMsg));
  }

  function issueUpVote(issueId) {
    issueAxios
      .put(`/api/issue/${issueId}/upvote`)
      .then((res) => {
        getIssuesPage();
        getUserIssues();
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function issueDownVote(issueId) {
    issueAxios
      .put(`/api/issue/${issueId}/downvote`)
      .then((res) => {
        console.log(res.data);
        getIssuesPage();
        getUserIssues();
      })
      .catch((err) => console.log(err.response.data.errMsg));
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
        getIssuesPage,
        addComment,
        getCommentsById,
        getComments,
        issueUpVote,
        issueDownVote,
        authErrorReset,
        // getIssueComments
      }}
    >
      {props.children}
    </UserAuthContext.Provider>
  );
};
