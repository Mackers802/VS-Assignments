import React, { useContext } from 'react'
import { PostProviderContext } from '../context/PostProvider'
import { Post } from "./Post"

export const Feed = (props) => {

    const { posts } = useContext(PostProviderContext)

    return (
        <div className="postsFeed">
            { posts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
