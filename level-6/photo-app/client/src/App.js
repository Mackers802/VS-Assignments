import React, { useContext } from 'react'
import { Switch, Route } from "react-router-dom"
import { UserAuthContext } from "./context/UserAuthProvider"
// import { PostProviderContext } from "./context/PostProvider.js"
// import { ProtectedRoute } from "./components/ProtectedRoute"
import { Nav } from "./components/Nav"
import { Auth } from "./components/Auth"
import { Profile } from "./components/Profile"
import { Feed } from "./components/Feed"
import { Search } from "./components/Search"
import { NewPost } from "./components/NewPost"
import { PostForm } from "./components/PostForm"
import './App.css';

export const App = () => {
  const { token, logout } = useContext( UserAuthContext )
  // const {} = useContext( PostProviderContext )

  return (
    <div>
      { token && <Nav logout={logout} /> }
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
          <Route exact path="/Feed">
            {token ? <Feed /> : <Auth />}
          </Route>
          {/* <ProtectedRoute 
            path="/IssuePage"
            component={ Feed }
            redirectTo="/Auth"
            token={token}
            />  */}
            <Route exact path="/Search">
            {token ? <Search /> : <Auth />}
          </Route>
            {/* <ProtectedRoute 
            path="/Search"
            component={ Search } 
            redirectTo="/Auth"
            token={token} 
         /> */}
          <Route path="/Profile">
            {token ? <Profile/> : <Auth />}
          </Route> 
          <Route path="/NewPost">
            {token ? <NewPost/> : <Auth />}
          </Route> 
          <Route exact path="/">
            {token ? <Profile/> : <Auth />}
          </Route> 
          <Route exact path="/PostForm">
            {token ? <PostForm /> : <Auth />}
          </Route> 
        </Switch>
    </div>

  );
}

