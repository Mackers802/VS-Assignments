import React, { useState } from "react";
import axios from "axios";

export const PostProviderContext = React.createContext();

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
    posts: [],
    userPosts: [],
    comments: [],
  };
  const [postsState, setPostsState] = useState(initState);

  //  ----------- Functions --------------------------------------

  function getAllPosts() {
    postsAxios
      .get("/api/posts")
      .then((res) => {
        console.log(res);
        setPostsState((prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function newPost(newPost) {
    postsAxios
      .post("/api/posts", newPost)
      .then((res) => {
        console.log("res", res);
        setPostsState((prevState) => ({
          ...prevState,
          posts: [...prevState.posts, res.data],
        }));
        // getUserPosts()
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function getUserPosts(_id) {
    postsAxios
      .get(`/api/posts/${_id}`)
      .then((res) => {
        setPostsState((prevState) => ({
          ...prevState,
          userPosts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByCamera(camera) {
    // console.log("camera", camera)
      postsAxios
      .get(`/api/posts/search/type?type=${camera}`)
      .then((res) => {
          console.log(res)
          setPostsState((...prevState ) => ({
              ...prevState,
              posts: res.data
          }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByStyle(style) {
    postsAxios
    .get(`/api/posts/search/type?type=${style}`)
    .then((res) => {
          setPostsState(prevPosts => res.filter(post => post.style !== style))
    })
    .catch((err) => console.log(err.response.data.errMsg));
}

  return (
    <PostProviderContext.Provider
      value={{
        ...postsState,
        getAllPosts,
        getUserPosts,
        newPost,
        searchByCamera,
        searchByStyle
      }}
    >
      {props.children}
    </PostProviderContext.Provider>
  );
};
