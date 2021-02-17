import React, { useContext, useState } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'
import { Comment } from "./Comment.js"
import { CommentForm } from "./CommentForm.js"

export const Issue = (props) => {

    const { comments, getCommentsById, issueUpVote, issueDownVote } = useContext(UserAuthContext)
    const { title, description, added, votes, _id } = props

    const commentFilter = comments.filter(comment => comment.issue === _id)

    const [ toggle, setToggle ] = useState(true)

    const addOne = () => {
        issueUpVote(_id)
        }
        
        function subOne(){
            issueDownVote(_id)
        }
        
        function commentGetter(){
            getCommentsById(_id)
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
                <h3>Comments: </h3>
                    {commentFilter.map(comment => <Comment {...comment} key={comment._id} /> )}

                <CommentForm id={ _id } />
            </div>
        
        :

            <div className="issuePage">
                <h1>{ title }</h1>
                <p>{ description }</p>
                <p>{added}</p>
                <p>Number of votes: {votes} </p>
                <button onClick={ commentGetter } >View Comments</button>
                <br></br>
                <h2>Do you enjoy this issue</h2>
                <button onClick={ addOne }> 👍 </button>
                <button onClick={ subOne }> 👎 </button>
            </div>
}
        </>
    )
}
