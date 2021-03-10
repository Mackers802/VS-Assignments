import React, { useContext, useEffect } from "react";
import { PostProviderContext } from "../../context/PostProvider";
import { PostBar } from "../posts/PostBar";
import { Post } from "../posts/Post";

export const Feed = (props) => {
  const { posts, getAllPosts } = useContext(PostProviderContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <PostBar />
      <div className="feedCont">
        {posts.map((post) => (
          <Post {...post} key={post._id} postId={post._id} />
        ))}
      </div>
    </div>
  );
};
