import React, { useState } from "react";
import { PostForm } from "./PostForm";
// import { UserAuthContext } from "../context/UserAuthProvider";

export const PostBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navBar">
      {!toggle ? (
        <>
          <button onClick={() => setToggle((prev) => !prev)}> New Post</button>
        </>
      ) : (
        <>
          <PostForm setToggle={setToggle} />
        </>
      )}
    </div>
  );
};
