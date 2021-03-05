import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from "../context/PostProvider";

export const EditProfile = (props) => {
  const {
    user: { username, bio, email, profilePicture, _id },
    logout,
    editUserProfile,
  } = useContext(UserAuthContext);

  const { getUserPosts, deletePost, editPost } = useContext(PostProviderContext);

  const initInputs = {
    profilePicture: profilePicture || "",
    bio: bio || "",
    email: email || "",
  };

  // console.log("userPosts", userPosts)
  const [inputs, setInputs] = useState(initInputs);

  useEffect(() => {
    getUserPosts(_id)
}, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editUserProfile(inputs, _id);
    // logout()
  }

  return (
        <div className="postEditForm">
            <img
              src={profilePicture}
              alt="Profile"
              width="150"
              height="150"
              placeholder="Profile Pic"
            ></img>
              <br></br>
              <h1>{username}</h1>
              <h4>{bio}</h4>
              <h4>{email} </h4>
          <form>
            <label>
              <input
                onChange={handleChange}
                type="text"
                name="profilePicture"
                placeholder="Change Profile Picture?"/>
              <input
                onChange={handleChange}
                type="text"
                name="bio"
                placeholder="Change Bio"
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Change Email?"
              />
            </label>
            <br></br>
            <h4 className="warning">Signout is required to implament changes</h4>
            <button onClick={handleSubmit} className="button">Save Changes</button>
          </form>
            <button onClick={logout} className="button"> Signout </button>
    </div>
    )
}