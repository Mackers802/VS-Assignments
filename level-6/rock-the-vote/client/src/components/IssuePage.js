import React, {useContext} from 'react'
import { IssueContextProvider } from '../context/IssueContext'

export default function IssuePage() {
    const context = useContext(IssueContextProvider)
    return (
        <div>
            <h1>{context}</h1>
        </div>
    )
}