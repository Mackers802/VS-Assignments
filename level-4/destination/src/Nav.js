import React from "react";
import Home from "./Home";
import Movie from "./Movie";
import Reviews from "./Reviews";

import { Link, Switch, Route } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
        <div className="dropdown">
          <button class="dropbtn">🍿</button>
          <div class="dropdown-content">
            <Link to="/"> 🎞️ </Link>
            <hr></hr>
            <Link to="/Movie"> 📺  </Link>
            <hr></hr>
            <Link to="/Reviews"> ⭐⭐⭐ </Link>
          </div>
        </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Movie">
          <Movie />
        </Route>
        <Route path="/Reviews">
          <Reviews />
        </Route>
      </Switch>
    </div>
  );
}
