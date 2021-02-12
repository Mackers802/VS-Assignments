import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider'

export const CommentForm = () => {

    const initInputs = {
        title: "",
        description: ""
        }
    
        const [inputs, setInputs] = useState(initInputs)
    
        const { addComment } = useContext(UserAuthContext)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    
    
    return (
        <div>
            <form onSubmit={ addComment } onChange={handleChange} >
        <label>
          <input type="text" name={inputs.description} placeholder="Add Comment"/>
        </label>
        <button >Add Comment</button>

      </form>
        </div>
    )
}
