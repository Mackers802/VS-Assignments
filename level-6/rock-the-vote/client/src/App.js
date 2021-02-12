import React, { useContext }  from "react";
import { Switch, Route, Redirect} from "react-router-dom"
import { Nav } from "./components/Nav.js";
import  { Auth } from "./components/Auth.js"
import  { IssuePage } from "./components/IssuePage.js"
import { Profile } from "./components/Profile"
import { Header } from "./components/Header.js"
import { Footer } from "./components/Footer.js"
import { UserAuthContext } from './context/UserAuthProvider.js'
import "./App.css";

function App(props) {

  const { token, logout } = useContext(UserAuthContext)

  return (
    <>
    
      <Nav logout={logout} />
      <Header />
    
    <div>
        <Switch>
          <Route exact path="/Profile"> 
             { token ? <Profile /> : <Redirect to="/Auth" /> }
          </Route>
            <Route path="/IssuePage" >
                { token ? <IssuePage /> : <Redirect to="/Auth" /> }
          </Route>
            <Route path="/Auth" >
                 { token ? <Redirect to="/Profile" /> : <Auth /> }
            </Route>
        </Switch>
    </div>

      <Footer />
      
    </>
  );
}

export default App;
