import React, { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { PostForm } from "./PostForm";
import { UserAuthContext } from "../../context/UserAuthProvider";

export const PostBar = () => {
  const { user: { username } } = useContext(UserAuthContext)
  const [toggle, setToggle] = useState(false);


  return (
    <>
      {!toggle ? (
        <div className="fullPostBar">
        <Link to="/Profile">
          <h2>{username}</h2> 
        </Link>
        <Link to="/Feed" >
          <img src="/images/g-h-Logo.png" alt="GH-logo"></img>
        </Link>
          <button onClick={() => setToggle((prev) => !prev)} className="postButton"> 
            <img src="/images/camera-logo.png" alt="cam-logo"></img>
          </button>
        </div>
      ) : (
        <>
          <PostForm setToggle={setToggle} />
        </>
      )}
    </>
  );
};
