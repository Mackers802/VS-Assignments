import React from 'react'
import { Issue } from "./Issue"

export const IssueList = ( props ) => {

const { issues } = props

    return (
        <div>
            {issues.map(issue => 
            <Issue 
            {...issue} 
            key={issue._id }  
            /> )}
        </div>
    )
}
 