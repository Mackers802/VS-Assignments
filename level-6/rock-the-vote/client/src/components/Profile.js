import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { IssueForm } from "../components/IssueForm.js"
import { IssueList } from "./IssueList.js"

export const Profile = () => {

    const {
        user:  { username }, 
        addIssue, 
        userIssues
    } = useContext(UserAuthContext)

    const [toggle, setToggle] = useState(false)

    return (
        <>{
        !toggle ?
            <div className="profileHeader"> 
                <h1>Welcome { username } </h1>
                <button onClick={() => setToggle(prev => !prev)}>
                Hide Issues
                </button>
                <h3>Add Issue</h3>
                    <IssueForm addIssue={addIssue}/>
                <h3>{ username } Issue's</h3>
                    <IssueList issues={userIssues} />
            </div>
        : 
            <div className="profileHeader"> 
                <h1>Welcome { username } </h1>
                <button onClick={() => setToggle(prev => !prev)}>
                View Issues 
                </button>
                <button onClick={() => setToggle(prev => !prev)}>
                Create Issue
                </button>
             </div>
        }
        </>
    )
}
