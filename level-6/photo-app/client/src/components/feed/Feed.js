import React, { useContext, useEffect } from "react";
import { PostProviderContext } from "../../context/PostProvider";
import { PostBar } from "../posts/PostBar";
import { Post } from "../posts/Post";
import { Nav } from  "../nav//Nav"

export const Feed = (props) => {
  const { posts, getAllPosts } = useContext(PostProviderContext);

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
    <div className="appCont">
      {/* <div className="feedPostBar">  */}
        <PostBar />
      {/* </div> */}
      {/* <div className="feedPosts"> */}
        {posts.map((post) => (
          <Post {...post} key={post._id} postId={post._id} />
        ))}
      {/* </div> */}
      <Nav />
    </div>
    </>
  );
};
