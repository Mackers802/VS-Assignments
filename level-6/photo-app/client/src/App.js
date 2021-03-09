import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserAuthContext } from "./context/UserAuthProvider";
import { Nav } from "./components/Nav";
import { Auth } from "./components/Auth";
import { Profile } from "./components/Profile";
import { Feed } from "./components/Feed";
import { Explore } from "./components/Explore";
import { PostForm } from "./components/PostForm";
import { SearchUsers } from "./components/SearchUsers";
import "./App.css";

export const App = () => {
  const { token, logout } = useContext(UserAuthContext);

  // useEffect(() => {
  //        getUserProfile("userProfile from App", _id)
  // }, []);

  return (
    <div className="app">
      {token && <Nav logout={logout} />}
      <Switch>
        {/* <Route path="/Profile">
            {token ? <Redirect to="/Profile" /> : <Auth />}
          </Route> */}
        {/* <ProtectedRoute
            path="/Profile"
            component={ Profile } 
            redirectTo="/Auth"
            token={token} 
            />  */}
        <Route exact path="/Explore">
          {token ? <Explore /> : <Auth />}
        </Route>
        <Route exact path="/Feed">
          {token ? <Feed /> : <Auth />}
        </Route>
        {/* <ProtectedRoute 
            path="/IssuePage"
            component={ Feed }
            redirectTo="/Auth"
            token={token}
            />  */}
        <Route exact path="/Explore">
          {token ? <Explore /> : <Auth />}
        </Route>
        <Route exact path="/SearchUsers">
          <SearchUsers />
        </Route>
        {/* <ProtectedRoute 
            path="/Search"
            component={ Search } 
            redirectTo="/Auth"
            token={token} 
         /> */}
        <Route path="/Profile">{token ? <Profile /> : <Auth />}</Route>
        <Route exact path="/">
          {token ? <Profile /> : <Auth />}
        </Route>
        <Route exact path="/AddPost">
          {token ? <PostForm /> : <Auth />}
        </Route>
      </Switch>
    </div>
  );
};
