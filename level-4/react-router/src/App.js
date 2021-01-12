import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";

function App() {
  return (
    <div style={{ display: "grid", margin: "20px" }}>

      <div style={{ display: "flex", justifyContent: "left" }}>
    <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ width: "100px" }}
        />
          <nav>
              <Link to="/">Home</Link> 
              <br></br>
              <Link to="/About">About</Link>
              <br></br>
              <Link to="/Services">Services</Link>
            </nav>
    </div>
      <div>
      </div>
      <br></br>
      <div style={{ margin: "15px" }}>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
