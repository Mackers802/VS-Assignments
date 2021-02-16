import React from 'react'
import { Issue } from "./Issue"

export const IssueList = ( props ) => {

   const { issues }  = props

   const issueSort = issues.sort((a, b) => {
       return b.votes - a.votes
   })

    return (
        <div>
            {issueSort.map(issue => <Issue {...issue} key={issue._id} /> )}
        </div>
    )
}