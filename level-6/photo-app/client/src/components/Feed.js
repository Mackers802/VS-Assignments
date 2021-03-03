import React, { useContext } from 'react'
import { PostProviderContext } from '../context/PostProvider'
// import { UserAuthContext } from '../context/UserAuthProvider'
import { Post } from "./Post"

export const Feed = (props) => {

    const { posts, } = useContext(PostProviderContext)
    // const { getUserProfile } = useContext(UserAuthContext)

    // useEffect(() => {
    //        getUserProfile()
    //     }, []);

    return (
        <div className="postsFeed">
            { posts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
