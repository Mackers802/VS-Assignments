import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { Comment } from "./Comment.js"
import { CommentForm } from "./CommentForm.js"

export const Issue = (props) => {

    const { comments } = useContext(UserAuthContext)
    const { title, description, votes, added } = props

    const [ toggle, setToggle ] = useState(true)

    return (
        <>
{
        !toggle ?

            <div className="issuePage">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>Number of votes: {votes} </p>

                <button onClick={() => setToggle(prev => !prev)}>Hide Comments</button>
                    {comments.map(comment => <Comment {...comment} key={comment._id } /> )}
                <CommentForm />
            </div>
        
        :

            <div className="issuePage">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>{added}</p>
                <p>Number of votes: {votes} </p>
                <button onClick={ () => setToggle(prev => !prev) } >View Comments</button>
            </div>
}
        </>
    )
}
