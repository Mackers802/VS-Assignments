import React, { useState, useContext } from 'react'
import { UserAuthContext } from "../context/UserAuthProvider"

export const Comment = (props) => {

    const { user: _id } = useContext(UserAuthContext)
    const { commentDescription, deleteComment, editComment, commentId} = props

    const initInputs = {
        commentDescription: commentDescription
    }

    const [inputs, setInputs ] = useState(initInputs)

    function deleteCom(){
        deleteComment(commentId, _id)
    }

    function editCom(){
        setInputs(inputs)
        editComment(commentId, _id)
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
