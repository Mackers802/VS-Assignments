// import React, { useState } from "react"
// import axios from "axios"

// export const IssueContext = React.createContext()

// const issueAxios = axios.create()

// issueAxios.interceptors.request.use(config => {
//     const token = localStorage.getItem("token")
//     config.headers.Authorization = `Bearer ${token}`
//     return config
//     }
// )

// export const IssueProvider = (props) => {

//     const initState = {
//         user: JSON.parse(localStorage.getItem("user")) || {}, 
//         token: localStorage.getItem("token") || "",
//         issues: []
//     }

//     const [issueState, setIssueState] = useState(initState)

//     function addIssue(newIssue){
//         issueAxios.post("/api/issue", newIssue)
//         .then(res => {
//             setIssueState(prevState => ({
//                 ...prevState,
//                 issues: [...prevState.issues, res.data]
//             }))
//         })
//         .catch(err => console.log(err.responde.data.errMsg))
//     }

//     return(
//         <IssueContext.Provider
//         value={{
//             ...issueState, 
//             addIssue
//         }}
//         >
//         {props.children}
//         </IssueContext.Provider>
//     )
// }