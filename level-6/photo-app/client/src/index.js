import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { UserAuthProvider } from "./context/UserAuthProvider";
import { PostProvider } from "./context/PostProvider";

ReactDOM.render(
  <Router>
    <UserAuthProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </UserAuthProvider>
  </Router>,

  document.getElementById("root")
);
