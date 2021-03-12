import React, { useState, useContext, useEffect } from "react";
import { PostProviderContext } from "../../context/PostProvider";
import { ExplorePost } from "./ExplorePost";
import { PostBar } from "../posts/PostBar"
import { Nav } from  "../nav/Nav"

export const Explore = (props) => {
  const { username } = props
  const { posts, getAllPosts } = useContext(PostProviderContext);
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="appCont">
      <PostBar />
      <div className="explore">
        <form>
          <input type="text" placeholder="Search" className="input" onChange={handleChange}/>
        </form>
        <br></br>
        {posts
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.style.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.cameraBrand.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.cameraModel.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.lensBrand.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            } else if (
              val.lensModel.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key, a, b) => {
            return (
                  <ExplorePost val={val} key={key} username={username} />
            );
          })}
      </div>
        <Nav />
      </div>
  );
};
