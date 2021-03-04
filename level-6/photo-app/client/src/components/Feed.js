import React, { useContext, useState, useEffect } from 'react'
import { PostProviderContext } from '../context/PostProvider'
import { PostForm } from "./PostForm"
// import { UserAuthContext } from '../context/UserAuthProvider'
import { Post } from "./Post"

export const Feed = (props) => {

    const { posts, getAllPosts} = useContext(PostProviderContext)
    const [toggle, setToggle ] = useState(false)

    function handleToggle(){
        setToggle(prev => !prev)
    }

    // const { getAllPosts } = useContext(UserAuthContext)

    useEffect(() => {
           getAllPosts()
    },);

    return (
        <>
        {
            !toggle ?
            (
                <div className="feedCont">
                    <button onClick={handleToggle} className="button">New Post</button>
                    <br></br>
                        { posts.map(post => <Post { ...post} key={post._id}/> ) }
                </div>
        )
        :
        (
            <div className="postFormCont">
                <PostForm />
                <br></br>
                <hr></hr>
            <button onClick={handleToggle} className="button">Home</button>
            </div>
        )
        }
        </>
    )
}
