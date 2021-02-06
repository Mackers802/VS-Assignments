import React from 'react'
import { Switch, Link, Route } from "react-router-dom"
import  { Auth } from "./Auth.js"

export default function Nav (props) {
    return (
        <div>
            <Link to="/Auth" >Auth Page</Link>
            
            <Switch>
                <Route path="/Auth" ><Auth /></Route>
            </Switch>
        </div>
    )
}
