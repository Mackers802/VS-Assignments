import React, { useContext } from 'react'
// import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from '../context/PostProvider'
import { Post } from "./Post"

export const Search = () => {


const { posts, getAllPosts, searchByCamera } = useContext(PostProviderContext)

function handleFilter(e){
    if(e.target.value === "all"){
        // getAllPosts()
    } else {
        // searchByCamera(e.target.value)
    }
}

    return (
<div className="postsFeed">     
            <h3>Filter posts</h3>
                <select onChange={handleFilter} className="filter">
                    <option value= "all">All Posts</option>
                    <option value="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                </select>

                { posts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
