import React, { useState } from 'react'

export const IssueForm = (props) => {
   
    const initInputs = {
        title: "",
        description: "",
        added: ""
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
          <input type="date" name="added" placeholder="Date"/>
        </label>
        <br></br>
        <button >Add Issue</button>

      </form>
        </div>
    )
}
