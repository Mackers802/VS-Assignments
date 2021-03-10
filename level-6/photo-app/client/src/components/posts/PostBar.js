import React, { useState } from "react";
import { PostForm } from "./PostForm";
// import { UserAuthContext } from "../context/UserAuthProvider";

export const PostBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="PostBar">
      {!toggle ? (
        <>
          <button onClick={() => setToggle((prev) => !prev)} className="button"> New Post</button>
        </>
      ) : (
        <>
          <PostForm setToggle={setToggle} />
        </>
      )}
    </div>
  );
};
