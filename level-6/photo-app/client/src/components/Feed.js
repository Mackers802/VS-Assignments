import React, { useContext, useEffect } from "react";
import { PostProviderContext } from "../context/PostProvider";
import { Nav2 } from "./Nav2";
// import { UserAuthContext } from '../context/UserAuthProvider'
import { Post } from "./Post";

export const Feed = (props) => {
  const { posts, getAllPosts } = useContext(PostProviderContext);

  useEffect(() => {
    getAllPosts("all Posts");
  }, []);

  return (
    <div>
      <Nav2 />
      <div className="feedCont">
        {posts.map((post) => (
          <Post {...post} key={post._id} />
        ))}
      </div>
    </div>
  );
};
