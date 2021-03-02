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
    console.log("getUserPosts", _id)
    postsAxios
      .get(`/api/posts/${_id}`)
      .then((res) => {
        // console.log("userPosts", res)
        setPostsState((prevState) => ({
          ...prevState,
          userPosts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  

  function searchByStyle(selected) {
      postsAxios
      .get(`/api/posts/search/style?style=${selected.style}`)
      .then((res) => {
        // console.log(res)
          setPostsState((...prevState ) => ({
              ...prevState,
              posts: res.data
          }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
    }

  function searchByCameraBrand(selected){
    postsAxios
    .get(`/api/posts/search/cameraBrand?cameraBrand=${selected.cameraBrand}`)
    .then((res) => {
      // console.log(res)
        setPostsState((...prevState ) => ({
            ...prevState,
            posts: res.data
        }))
    })
    .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByCameraModel(selected){
    postsAxios
    .get(`/api/posts/search/cameraModel?cameraModel=${selected.cameraModel}`)
    .then((res) => {
      // console.log(res)
        setPostsState((...prevState ) => ({
            ...prevState,
            posts: res.data
        }))
    })
    .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByLensBrand(selected){
    postsAxios
    .get(`/api/posts/search/lensBrand?lensBrand=${selected.lensBrand}`)
    .then((res) => {
      // console.log(res)
        setPostsState((...prevState ) => ({
            ...prevState,
            posts: res.data
        }))
    })
    .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByLensModel(selected){
    postsAxios
    .get(`/api/posts/search/lensModel?lensModel=${selected.lensModel}`)
    .then((res) => {
      // console.log(res)
        setPostsState((...prevState ) => ({
            ...prevState,
            posts: res.data
        }))
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
        searchByStyle,
        // search,
        searchByCameraBrand,
        searchByCameraModel,
        searchByLensBrand,
        searchByLensModel
      }}
    >
      {props.children}
    </PostProviderContext.Provider>
  );
};
