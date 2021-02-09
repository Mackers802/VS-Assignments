import React, { useContext }  from "react";
import { Switch, Route, Redirect} from "react-router-dom"
import Nav from "./components/Nav.js";
import  { Auth } from "./components/Auth.js"
// import  { Home } from "./components/Home.js"
import { Profile } from "./components/Profile"
import { IssueList } from "./components/IssueList.js"
import { UserAuthContext } from './context/UserAuthProvider.js'
import "./App.css";

function App(props) {

  const { token, logout } = useContext(UserAuthContext)

  return (
    <div>
      <Nav logout={logout} />
        <Switch>
          <Route 
              exact path="/Auth"
                render={() => token ? <Redirect to="/Profile" /> : <Auth />}
              />
          {/* <Route
              path="/Profile"
                  render={() => token ? <Redirect to="/Auth" /> : <Profile /> }
              /> */}
            <Route
              path="/IssuePage" 
                render={() => <IssueList />} />
            <Route 
              path="/Profile" 
                render={() => <Profile />} />
        </Switch>
    </div>
  );
}

export default App;
