import React, { useContext } from 'react'
import { UserAuthContext} from '../context/UserAuthProvider.js'
// import { IssueContext } from "../context/IssueProvider.js"
import { IssueForm } from "../components/IssueForm.js"
import { IssueList } from "./IssueList.js"

export const Profile = () => {
    const {
        user:  { username }, 
        addIssue, 
        issues
    } = useContext(UserAuthContext)

    return (
        <div className="profileHeader"> 
            <h1>Welcome { username } </h1>
            <h3>Add Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <h3>Issue's</h3>
            <IssueList 
            issues={issues}
             />
        </div>
    )
}
