import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserAuthContext } from "./context/UserAuthProvider";
// import { Nav } from "./components/nav/Nav";
import { Auth } from "./components/auth/Auth";
import { Profile } from "./components/profile/Profile";
import { Feed } from "./components/feed/Feed";
import { Explore } from "./components/explore/Explore";
import { PostForm } from "./components/posts/PostForm";
import { SearchUsers } from "./components/searchUsers/SearchUsers";
import "./App.css";

export const App = () => {
  const { token, logout } = useContext(UserAuthContext);

  // useEffect(() => {
  //        getUserProfile("userProfile from App", _id)
  // }, []);

  return (
    <>
      {/* {token && <Nav logout={logout} />} */}
      <Switch>
        <Route exact path="/Explore">
          {token ? <Explore /> : <Auth />}
        </Route>
        <Route exact path="/Feed">
          {token ? <Feed /> : <Auth />}
        </Route>
        <Route exact path="/Explore">
          {token ? <Explore /> : <Auth />}
        </Route>
        <Route exact path="/SearchUsers">
          <SearchUsers />
        </Route>
        <Route path="/Profile">{token ? <Profile /> : <Auth />}</Route>
        <Route exact path="/">
          {token ? <Profile /> : <Auth />}
        </Route>
        <Route exact path="/AddPost">
          {token ? <PostForm /> : <Auth />}
        </Route>
      </Switch>
    </>
  );
};

/* <Route path="/Profile">
    {token ? <Redirect to="/Profile" /> : <Auth />}
  </Route> */

/* <ProtectedRoute
    path="/Profile"
    component={ Profile } 
    redirectTo="/Auth"
    token={token} 
    />  */

/* <ProtectedRoute 
    path="/IssuePage"
    component={ Feed }
    redirectTo="/Auth"
    token={token}
    />  */

/* <ProtectedRoute 
    path="/Search"
    component={ Search } 
    redirectTo="/Auth"
    token={token} 
 /> */