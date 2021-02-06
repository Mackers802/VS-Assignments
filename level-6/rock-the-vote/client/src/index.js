import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserAuthProvider } from './context/UserAuthProvider.js'
// import { IssueProvider } from "./context/IssueProvider.js"

import { BrowserRouter as Router } from "react-router-dom"

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
