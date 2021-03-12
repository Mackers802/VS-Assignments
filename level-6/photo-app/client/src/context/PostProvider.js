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
        // console.log(res);
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
    console.log("getUserPosts user ID", _id);
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
        setPostsState((...prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByCameraBrand(selected) {
    postsAxios
      .get(`/api/posts/search/cameraBrand?cameraBrand=${selected.cameraBrand}`)
      .then((res) => {
        // console.log(res)
        setPostsState((...prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByCameraModel(selected) {
    postsAxios
      .get(`/api/posts/search/cameraModel?cameraModel=${selected.cameraModel}`)
      .then((res) => {
        // console.log(res)
        setPostsState((...prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByLensBrand(selected) {
    postsAxios
      .get(`/api/posts/search/lensBrand?lensBrand=${selected.lensBrand}`)
      .then((res) => {
        // console.log(res)
        setPostsState((...prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function searchByLensModel(selected) {
    postsAxios
      .get(`/api/posts/search/lensModel?lensModel=${selected.lensModel}`)
      .then((res) => {
        // console.log(res)
        setPostsState((...prevState) => ({
          ...prevState,
          posts: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deletePost(_id) {
    console.log("delete Post", _id);
    postsAxios
      .delete(`/api/posts/${_id}`)
      .then((res) =>
        setPostsState((prevState) => ({
          ...prevState,
          userPosts: prevState.userPosts.filter((post) => post._id !== _id),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function editPost(inputs, _id) {
    console.log("edit Post Id", _id);
    console.log("edit Post Inputs", inputs);
    postsAxios
      .put(`/api/posts/${_id}`, inputs)
      .then((res) =>
        setPostsState((prevState) => ({
          ...prevState,
          userPosts: prevState.userPosts.filter((post) => post._id !== _id),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
    console.log("editPosts postsState", postsState);
  }

  function getCommentsById(postId) {
    // console.log("provider comment Id", postId)
    postsAxios
      .get(`/api/comments/${postId}`)
      .then((res) => {
        // console.log(res);
        setPostsState((prev) => ({
          ...prev,
          comments: res.data,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addComment(_id, inputs, user) {
    console.log("comment Id", _id);
    // const req.user.body = req.params._id
    postsAxios
      .post(`/api/comments/${_id}`, inputs)
      .then((res) => {
        // console.log(res.data);
        setPostsState((prevState) => ({
          ...prevState,
          comments: [...prevState.comments, res.data],
        }));
        // getCommentsById();
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function editComment(inputs, commentId) {
    postsAxios
      .put(`/api/comments/${commentId}`, inputs)
      .then((res) =>
        // console.log(typeof res)
        setPostsState((prevState) => ({
          ...prevState,
          comments: prevState.comments.map((comment) =>
            comment._id !== commentId ? comment : res.data
          ),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deleteComment(_id) {
    console.log("delete Comment", _id);
    postsAxios
      .delete(`/api/comments/${_id}`)
      .then((res) =>
        setPostsState((prevState) => ({
          ...prevState,
          comments: prevState.comments.filter((comment) => comment._id !== _id),
        }))
      )
      .catch((err) => console.log(err.response.data.errMsg));
  }

  return (
    <PostProviderContext.Provider
      value={{
        ...postsState,
        getAllPosts,
        getUserPosts,
        newPost,
        deletePost,
        editPost,
        searchByStyle,
        getCommentsById,
        addComment,
        deleteComment,
        editComment,
        searchByCameraBrand,
        searchByCameraModel,
        searchByLensBrand,
        searchByLensModel,
        setPostsState
      }}
    >
      {props.children}
    </PostProviderContext.Provider>
  );
};
