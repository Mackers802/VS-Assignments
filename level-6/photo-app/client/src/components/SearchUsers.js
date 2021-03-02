import React, { useState, useContext } from "react";
import { UserAuthContext } from "../context/UserAuthProvider";
import JSONData from "./JSONData"

export const SearchUsers = () => {

  const { getUserProfile } = useContext(UserAuthContext)
  const [searchTerm, setSearchTerm] = useState("")

function handleChange(e){
  setSearchTerm(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  getUserProfile(searchTerm)
}

  // useEffect(() => {
  //   getAllPosts();
  //   setMakesModelsLens(lensDataFile);
  //   setInputs(initInput)
    // console.log("selected", selected)
// }, []);

  return (
    <div>
      <form>
        <input 
            type="text" 
            placeholder="User Search" 
            onChange={handleChange} 
            />
            <button onClick={handleSubmit}>
              Find Users Profile
            </button>
            {JSONData.filter((val) => {
              if (searchTerm === ""){
                return val
              } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            }).map((val, key) => {
              return (
                <div>
                  <h1>{val.firstName}</h1>
                </div>

              )
            })
            }
      </form>
    </div>
  );
};
