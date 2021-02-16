import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Nav } from "./components/Nav.js";
import { Auth } from "./components/Auth.js";
import { IssuePage } from "./components/IssuePage.js";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { ProtectedRoute } from "./components/ProtectedRoute.js"
import { UserAuthContext } from "./context/UserAuthProvider.js";
import "./App.css";

function App(props) {
  const { token, logout } = useContext(UserAuthContext);

  return (
      <div>
      { token && <Nav logout={logout} /> }
      <Header />
        <Switch>
          <ProtectedRoute 
            path="/Profile"
            component={ Profile } 
            redirectTo="/Auth"
            token={token} 
          />
          <ProtectedRoute 
            path="/IssuePage"
            component={ IssuePage }
            redirectTo="/Auth"
            token={token}
            />
            {/* <ProtectedRoute 
            path="/Auth"
            component={ Auth }
            redirectTo="/Profile"
            token={token}
            /> */}
          <Route exact path="/">
            {token ? <Redirect to="/Profile" /> : <Auth />}
          </Route>
        </Switch>
      <Footer />
    </div>

  );
}

export default App;
