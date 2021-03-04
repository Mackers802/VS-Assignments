import React, { useContext } from 'react'
import { PostProviderContext } from '../context/PostProvider'
// import { UserAuthContext } from '../context/UserAuthProvider'
import { Post } from "./Post"

export const Feed = (props) => {

    const { posts } = useContext(PostProviderContext)

    // const { getAllPosts } = useContext(UserAuthContext)

    // useEffect(() => {
    //        getAllPosts()
    // }, []);

    return (
        <div className="feed">
            { posts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
