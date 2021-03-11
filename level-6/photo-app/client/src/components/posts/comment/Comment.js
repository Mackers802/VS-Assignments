import React, { useState } from "react";
import { CommentForm } from "./CommentForm";

export const Comment = (props) => {
  const { commentDescription, _id, deleteComment, commentId } = props;

  const [toggle, setToggle] = useState(false);

  function deleteCom() {
    deleteComment(_id);
  }

  return (
    <div className="comment">
      {!toggle ? (
        <>
          <h3>{commentDescription}</h3>
          <button onClick={() => setToggle(prev=> !prev)} className="buttonSkinny">Edit</button>
        </>
      ) : (
        <>
          <CommentForm
            btnText="Submit Edit"
            commentId={commentId}
            commentDescription={commentDescription}
            setToggle={setToggle}
          />
          <button onClick={deleteCom} className="buttonSkinnyDelete">Delete</button>
          <button onClick={() => setToggle((prev) => !prev)} className="buttonSkinny">Close</button>
        </>
      )}
    </div>
  );
};
