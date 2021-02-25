import React, { useContext } from 'react'
// import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from '../context/PostProvider'
import { Post } from "./Post"

export const Search = () => {


const { posts, getAllPosts, searchByCamera, searchByLens } = useContext(PostProviderContext)

function cameraFilter(e){
    if(e.target.value === "all"){
        getAllPosts()
    } else {
        searchByCamera(e.target.value)
    }
}

function lensFilter(e){
    if(e.target.value === "all"){
    } else {
        searchByLens(e.target.value)
    }
}

    return (
<div className="postsFeed">     
            <h3>Camera brand</h3>
                <select onChange={cameraFilter} className="filter">
                    <option value= "all">All Posts</option>
                    <option value="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                    <option value= "Nikon">Nikon</option>
                    <option value="Fujifilm">Fujifilm</option> 
                    <option value="Olympus">Olympus</option>
                    <option value= "Panasonic">Panasonic</option>
                    <option value="Leica">Leica</option> 
                    <option value="Hassleblad">Hassleblad</option>
                    <option value= "Iphone">Iphone</option>
                    <option value="Android">Android</option> 
                    <option value="Other">Other</option>
                </select>
            <h3>Camera lens</h3>
                <select onChange={lensFilter} className="filter">
                    <option value= "all">All Posts</option>
                    <option value="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                    <option value= "Nikon">Nikon</option>
                    <option value="Fujifilm">Fujifilm</option> 
                    <option value="Olympus">Olympus</option>
                    <option value= "Panasonic">Panasonic</option>
                    <option value="Leica">Leica</option> 
                    <option value="Hassleblad">Hassleblad</option>
                    <option value= "Iphone">Iphone</option>
                    <option value="Android">Android</option> 
                    <option value="Other">Other</option>
                </select>

                { posts.map(post => <Post { ...post} key={post._id}/> ) }
        </div>
    )
}
