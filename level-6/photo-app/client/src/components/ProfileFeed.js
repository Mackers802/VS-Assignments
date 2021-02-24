import React, { useContext } from 'react'
import { PostProviderContext } from '../context/PostProvider'
import { Post } from "./Post"

export const ProfileFeed = (props) => {

    const { allPosts } = useContext(PostProviderContext)

    return (
        <div className="postsFeed">
            { allPosts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
