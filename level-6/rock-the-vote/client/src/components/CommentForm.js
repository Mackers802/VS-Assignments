import React, { useState, useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider'

export const CommentForm = (props) => {

    const { id } = props
    console.log(id)
    const initInputs = {
            description: ""
        }

    
    
        const [inputs, setInputs] = useState(initInputs)
    
        const { addComment} = useContext(UserAuthContext)
    
    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(inputs, id)
        setInputs(initInputs)
        }
    
    return (
        <div>
            <form onSubmit={ handleSubmit } onChange={ handleChange } >
        <label>
          <input type="text" name="description" placeholder="Comment here"/>
        </label>
        <button >Add Comment</button>

      </form>
        </div>
    )
}
