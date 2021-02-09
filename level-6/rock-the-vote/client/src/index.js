import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import App from './App';
import { UserAuthProvider } from './context/UserAuthProvider.js'
// import { IssueProvider } from "./context/IssueProvider.js"


ReactDOM.render(
  <Router>
    <UserAuthProvider>
      {/* <IssueProvider> */}
        <App />
      {/* </IssueProvider> */}
    </UserAuthProvider>
  </Router>
  ,document.getElementById('root')
);
