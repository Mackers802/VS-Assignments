import React, { useState, useContext } from "react";
import { UserAuthContext } from "../../context/UserAuthProvider";
import { Friend } from "./Friend";
import { PostBar } from "../posts/PostBar"
import { Nav } from "../nav/Nav"
// import JSONData from "./JSONData"
// import { PostProviderContext } from '../context/PostProvider'

export const SearchUsers = () => {
  const {
    user: { friends },
  } = useContext(UserAuthContext);
  // const { getAllPosts } = useContext(PostProviderContext)
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  // function handleSubmit(e){
  //   e.preventDefault()
  //   getUserProfile(searchTerm)
  // }

  // useEffect(() => {
  //   getAllPosts();
  // getUserProfile(_id)
  // setMakesModelsLens(lensDataFile);
  // setInputs(initInput)
  // console.log("selected", selected)
  // }, []);

  return (
    <div className="appCont">
    <PostBar />
    <div className="friendsList">
      <form>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={handleChange}
        />
      </form>
      {friends
        .sort((a, b) => a.localeCompare(b))
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }
        )
        .map((val, key) => {
          return (
              <Friend val={val} key={key} />
          );
        })}
    </div>
      <Nav />
    </div>
  );
};
