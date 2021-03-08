import React, { useState } from 'react'

export const Comment = (props) => {

    const { commentDescription, deleteComment, editComment, _id} = props

    const initInputs = {
        commentDescription: commentDescription
    }

    const [inputs, setInputs ] = useState(initInputs)

    function deleteCom(){
        deleteComment(_id)
    }

    function editCom(){
        setInputs(inputs)
        editComment(_id)
    }

    return (
        <div className="comment">
            <button onClick={deleteCom}>Delete</button>
            <button onClick={editCom}>Edit</button>
            <p>
                {commentDescription}
            </p>
        </div>
    )
}
