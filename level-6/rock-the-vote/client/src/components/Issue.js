import React, { useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { Comment } from "./Comment.js"

export const Issue = (props) => {

    const { comments } = useContext(UserAuthContext)
    const { title, description, votes } = props

    return (
        <div>
            <h1>{ title }</h1>
            <p>{ description }</p>
            <p>Number of votes: {votes} </p>
            {comments.map(comment => 
            <Comment 
            {...comment} 
            key={comment._id } 
            /> )}
        </div>
    )
}
