import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from "../context/PostProvider";
import { Post } from "./Post";

export const Profile = (props) => {
  const {
    user: { username, bio, email, profilePicture, _id },
    logout,
    editUserProfile,
  } = useContext(UserAuthContext);

  const { userPosts, getUserPosts } = useContext(PostProviderContext);

  const initInputs = {
    profilePicture: profilePicture,
    bio: bio,
    email: email,
  };

  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  function toggleForm(e) {
    setToggle((prev) => !prev);
  }

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
  }

  return (
    <div className="profilePage">
      {!toggle ? (
        <div className="profileBox">
          <div className="profileContainer">
            <br></br>
            <img
              src={profilePicture}
              alt="Profile"
              width="150"
              height="150"
            ></img>
            <div className="profileInfo">
              {/* <br></br> */}
              <h1>{username}</h1>
              <h4>{bio}</h4>
              <h4>{email} </h4>
              {/* <br></br> */}
            </div>
            <div className="profilePagePosts">
              {userPosts.map((post) => (
                <Post {...post} key={post._id} />
              ))}
            </div>
            <button onClick={toggleForm}>Edit Profile</button>
            <br></br>
            <button onClick={logout}> Signout </button>
          </div>
        </div>
      ) : (
        <div className="profileEdit">
          <div className="profileContainer">
            <br></br>
            <img
              src={profilePicture}
              alt="Profile"
              width="150"
              height="150"
            ></img>
            <div className="profileInfo">
              {/* <br></br> */}
              <h1>{username}</h1>
              <h4>{bio}</h4>
              <h4>{email} </h4>
              {/* <br></br> */}
            </div>
            <div className="profilePagePosts"></div>
            <button onClick={toggleForm}>Edit Profile</button>
            <br></br>
            <button onClick={logout}> Signout </button>
          </div>
          <form>
            <label>
              <input
                onChange={handleChange}
                type="text"
                name="profilePicture"
                placeholder={profilePicture}
              />
              <input
                onChange={handleChange}
                type="text"
                name="bio"
                placeholder={bio}
              />
              <input
                onChange={handleChange}
                type="text"
                name="email"
                placeholder={email}
              />
            </label>
            <button onClick={handleSubmit}>Save Changes</button>
          </form>
          <button onClick={toggleForm}>Back</button>
        </div>
      )}
    </div>
  );
};
