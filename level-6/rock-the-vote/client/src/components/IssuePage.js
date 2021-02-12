import React, { useContext } from 'react';
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { IssueList } from "./IssueList.js"

export const IssuePage = () => {

    const {
        issues
    } = useContext(UserAuthContext)

    return (
        <div>
            <IssueList issues={issues} />
        </div>
    )
}