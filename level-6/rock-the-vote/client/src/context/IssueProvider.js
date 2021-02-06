import React, { useState } from "react"

export const IssueContext = React.createContext()

export const IssueProvider = (props) => {

    const initState = {
        issues: []
    }
    const [issueState, setIssueState] = useState(initState)

    return(
        <IssueContext.Provider
        value={{
            ...issueState
        }}
        >
        {props.children}
        </IssueContext.Provider>
    )
}