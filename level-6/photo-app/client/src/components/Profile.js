import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from "../context/PostProvider";
import { ProfilePost } from "./ProfilePost";

export const Profile = (props) => {
  const {
    user: { username, bio, email, profilePicture, _id },
    logout,
    editUserProfile,
  } = useContext(UserAuthContext);

  const { userPosts, getUserPosts, deletePost, editPost } = useContext(PostProviderContext);

  const initInputs = {
    profilePicture: profilePicture || "",
    bio: bio || "",
    email: email || "",
  };

  // console.log("userPosts", userPosts)
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);

  function toggleForm(e) {
    setToggle((prev) => !prev);
  }

  // useEffect(() => {
  //   getUserProfile(_id)
  // })


  useEffect(() => {
    getUserPosts(_id)
    // getUserProfile(_id)
}, []);

// useEffect(() => {
//   getUserProfile(_id)
// }, []);

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
                <ProfilePost {...post} key={post._id} deletePost={deletePost} editPost={editPost}/>
              ))}
            </div>
            <button onClick={toggleForm}>Profile Settings</button>
            <br></br>
            {/* <button onClick={logout}> Signout </button> */}
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
              placeholder="Profile Pic"
            ></img>
            <div className="profileInfo">
              {/* <br></br> */}
              <h1>{username}</h1>
              <h4>{bio}</h4>
              <h4>{email} </h4>
              {/* <br></br> */}
            </div>
            <div className="profilePagePosts"></div>
            {/* <button onClick={toggleForm}>Edit Profile</button> */}
            <br></br>
          </div>
          <form>
            <label>
              <input
                onChange={handleChange}
                type="text"
                name="profilePicture"
                placeholder="Change Profile Picture?"              />
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
          <h1>User Will Be Signed out and required to Sign back in to make any changes</h1>
            <button onClick={handleSubmit}>Save Changes</button>
          </form>
            <button onClick={logout}> Signout </button>
            <button onClick={toggleForm}>Back</button>
        </div>
      )}
    </div>
  );
};
