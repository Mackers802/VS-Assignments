import React from "react";
import { Link } from "react-router-dom";
// import { UserAuthContext } from "../context/UserAuthProvider";

export const Nav2 = () => {

  
//   const { user: { profilePicture } } = useContext(UserAuthContext)
  // const {  getAllPosts } = useContext(PostProviderContext)

//   useEffect(() => {
//     getAllPosts();
//     setMakesModelsLens(lensDataFile);
//     setInputs(initInput)
//     console.log("selected", selected)
// }, []);



  return (
      <div className="navBar">
        <Link to="/AddPost">
          <h1>Post</h1>
        </Link>
      </div>
  );
};
