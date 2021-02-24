import React, { useState } from 'react'
import axios from "axios"

export const PostProviderContext = React.createContext()

export const PostProvider = (props) => {

// ----------- Axios token interceptor ------------------------
    const postsAxios = axios.create();
    postsAxios.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });

//  ----------- State ------------------------------------------
    const initState = {
        allPosts: [],
        userPosts: [],
        comments: []
    }
    const [ postsState, setPostsState ] = useState(initState)

//  ----------- Functions --------------------------------------  


    function getAllPosts(){
        postsAxios
            .get("/api/posts")
            .then((res) => {
                console.log(res)
                setPostsState((prevState) => ({
                    ...prevState,
                    allPosts: res.data,
                }))

            })
            .catch((err) => console.log(err.response.data.errMsg))
        }

        function addPost(newPost){
            postsAxios
            .post("/api/posts", newPost)
            .then((res) => {
                setPostsState((prevState) => ({
                    ...prevState,
                    allPosts: [ ...prevState.allPosts, res.data]
                }))
            getUserPosts()
            })
            .catch((err) => console.log(err.response.data.errMsg))
        }

    function getUserPosts(_id){
        postsAxios
            .get(`/api/posts/${_id}`)
            .then((res) => {
                setPostsState((prevState) => ({
                    ...prevState,
                    userPosts: res.data,
                }))
            })
            .catch((err) => console.log(err.response.data.errMsg))
    }

    return (
       <PostProviderContext.Provider
        value={{
            ...postsState,
            getAllPosts,
            getUserPosts,
            addPost
        }}
       >
            { props.children }
       </PostProviderContext.Provider>
    )
}
