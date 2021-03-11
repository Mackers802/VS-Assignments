import React, { useState } from "react";
// import { UserAuthContext } from "../context/UserAuthProvider";
import { EditPostForm } from "../posts/EditPostForm";

export const ProfilePost = (props) => {
  // const {
  //   user: { username },
  // } = useContext(UserAuthContext);
  const { imgUrl, caption, _id } = props;

  const [Toggle, setToggle] = useState(false);

  function changeToggle() {
    setToggle((prevToggle) => !prevToggle);
  }

  // useEffect(() => {
  //     console.log(_id)
  // }, []);

  return (
    <div className="userPosts">
    <br></br>
      {!Toggle ? (
          <img
            src={imgUrl}
            alt="post img"
            // width="200"
            // height="150"
            onClick={changeToggle}
          ></img>
      ) : (
          <EditPostForm
            caption={caption}
            _id={_id}
            changeToggle={changeToggle}
          />
      )}
    </div>
  );
};
