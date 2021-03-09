import React, { useState } from "react";
import { CommentForm } from "./CommentForm";

export const Comment = (props) => {
  const { commentDescription, _id, deleteComment, commentId } = props;

  const [toggle, setToggle] = useState(false);

  console.log("commment Id", commentId);

  function deleteCom() {
    deleteComment(_id);
  }

  return (
    <>
      {!toggle ? (
        <div className="comment">
          <h3>{commentDescription}</h3>
          <button onClick={() => setToggle((prev) => !prev)}>Edit</button>
        </div>
      ) : (
        <div className="comment">
          <CommentForm
            btnText="Submit Edit"
            commentId={commentId}
            commentDescription={commentDescription}
            setToggle={setToggle}
          />
          <button onClick={deleteCom}>Delete</button>
          <button onClick={() => setToggle((prev) => !prev)}>Close</button>
        </div>
      )}
    </>
  );
};
