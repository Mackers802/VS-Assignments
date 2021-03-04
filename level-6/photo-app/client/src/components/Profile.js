import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../context/UserAuthProvider";
import { PostProviderContext } from "../context/PostProvider";
import { ProfilePost } from "./ProfilePost";
import { EditProfile } from "./EditProfile";

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
    <>
      {!toggle ? (
        <div className="profileCont">
            <img
              src={profilePicture}
              alt="Profile"
              width="150"
              height="150"
            ></img>
              <h1>{username}</h1>
              <h4>{bio}</h4>
              <h4>{email} </h4>
              <div className="profilePostsGrid">
                {userPosts.map((post) => (
                  <ProfilePost {...post} key={post._id} deletePost={deletePost} editPost={editPost}/>
                ))}
              </div>
            <button onClick={toggleForm} className="button">Profile Settings</button>
        </div>
      ) : (
        <>
            <EditProfile />
        </>
      )}
      </>
  );
};
