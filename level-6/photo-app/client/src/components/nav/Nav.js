import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { PostProviderContext } from "../context/PostProvider";
import { UserAuthContext } from "../../context/UserAuthProvider";

export const Nav = () => {
  const {
    user: { profilePicture },
  } = useContext(UserAuthContext);
  // const {  getAllPosts } = useContext(PostProviderContext)

  //   useEffect(() => {
  //     getAllPosts();
  //     setMakesModelsLens(lensDataFile);
  //     setInputs(initInput)
  //     console.log("selected", selected)
  // }, []);

  return (
    <div className="navBar">
      <Link to="/Feed">
        <h1>🎞️</h1>
      </Link>
      <Link to="/Explore">
        <h1>🧭</h1>
      </Link>
      <Link to="/SearchUsers">
        <h1>🫂</h1>
      </Link>
      {/* <Link to="/PostForm" className="navProfile"> 
          <h3>➕</h3>
        </Link> */}
      {/* <Link to="/NewPost" className="navPost">
          <h3>➕</h3>
        </Link> */}
      <Link to="/Profile" className="navProfile">
        <img
          src={profilePicture}
          alt="V small pro pic"
          width="25"
          height="25"
        ></img>
      </Link>
    </div>
  );
};
