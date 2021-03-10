import React, { useState, useContext } from "react";
import { PostProviderContext } from "../../../context/PostProvider";
import { UserAuthContext } from "../../../context/UserAuthProvider";

export const CommentForm = (props) => {
  const { user } = useContext(UserAuthContext);
  const { postId, commentDescription, commentId } = props;
  console.log("commentForm commentId", commentId);

  const { setToggle } = props;

  const initInputs = {
    commentDescription: commentDescription || "",
  };

  const [inputs, setInputs] = useState(initInputs);
  const { addComment, editComment } = useContext(PostProviderContext);

  // console.log("inputs on CommentForm", inputs)

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    // console.log("handleChange", inputs)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, inputs, user);
    editComment(inputs, commentId, user);
    if (setToggle) {
      setToggle(false);
    }
    // window.location.reload();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          <input
            type="text"
            name="commentDescription"
            placeholder={commentDescription}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSubmit}>{props.btnText}</button>
      </form>
    </div>
  );
};
