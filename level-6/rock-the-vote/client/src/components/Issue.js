import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { Comment } from "./Comment.js"
import { CommentForm } from "./CommentForm.js"

export const Issue = (props) => {

    const { comments, getCommentsById } = useContext(UserAuthContext)
    const { title, description, votes, added, _id } = props
    console.log("issue ", _id)

    const commentFilter = comments.filter(comment => comment.issue === _id)

    const [ toggle, setToggle ] = useState(true)

    function commentGetter(){
        getCommentsById(_id)
        // getComments()
        setToggle(prev => !prev)
    }

    return (
        <>
{
        !toggle ?

            <div className="issuePage">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>Number of votes: {votes} </p>

                <button onClick={() => setToggle(prev => !prev)}>Hide Comments</button>
                
                    {commentFilter.map(comment => <Comment {...comment} key={comment._id} /> )}
                {/* <Comment /> */}
                <CommentForm id={ _id } />
            </div>
        
        :

            <div className="issuePage">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>{added}</p>
                <p>Number of votes: {votes} </p>
                <button onClick={ commentGetter } >View Comments</button>
            </div>
}
        </>
    )
}
