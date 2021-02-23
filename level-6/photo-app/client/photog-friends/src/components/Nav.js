import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {

  return (
      <>
      <div className="navBar">
        <Link to="/Profile">
          Profile
        </Link>
        <Link to="/Feed">
          Feed
        </Link>
        <Link to="/Search">
          Search
        </Link>
        <Link to="/NewPost">
          Add Post
        </Link>
      </div>
    </>
  );
};
