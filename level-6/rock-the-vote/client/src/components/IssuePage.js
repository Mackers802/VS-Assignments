import React, { useContext } from 'react';
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { IssueList } from "./IssueList.js"
import { IssueForm } from "./IssueForm"

export const IssuePage = () => {

    const { issues, addIssue } = useContext(UserAuthContext)

    return (
        <div>
        <h3>Add Issue</h3>
            <IssueForm addIssue={addIssue}/>
            <IssueList issues={issues} />
        </div>
    )
}