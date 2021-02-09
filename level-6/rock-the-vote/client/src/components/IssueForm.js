import React, { useState } from 'react'
// import { UserAuthContext } from '../context/UserAuthProvider'

export const IssueForm = (props) => {
   
    const initInputs = {
    title: "",
    description: ""
    }

    const [inputs, setInputs] = useState(initInputs)

    const { addIssue } = props

function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

const handleSubmit = (e) => {
e.preventDefault()
addIssue(inputs)
setInputs(initInputs)
}


    return (
        <div>
            <form onSubmit={handleSubmit} onChange={handleChange} >
        <label>
          <input type="text" name="title" placeholder="title"/>
          <input type="text" name="description" placeholder="description"/>
        </label>
        <br></br>
        <button >Add Issue</button>

      </form>
        </div>
    )
}
