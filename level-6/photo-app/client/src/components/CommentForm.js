import React, { useState, useContext } from 'react'
import { PostProviderContext } from "../context/PostProvider"

export const CommentForm = (props) => {

    const { _id } = props
    
    const initInputs = {
        commentDescription: ""
    }
    
    const [ inputs, setInputs] = useState(initInputs)
    const { addComment } = useContext(PostProviderContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
        // console.log("handleChange", inputs)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(_id, inputs)
        }
    
    return (
        <div>
            <form onSubmit={ handleSubmit } onChange={ handleChange } >
        <label>
          <input type="text" name="commentDescription" placeholder="add comment.."/>
        </label>
        <button >Add Comment</button>

      </form>
        </div>
    )
}
