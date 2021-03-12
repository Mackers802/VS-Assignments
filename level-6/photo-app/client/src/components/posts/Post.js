import React, { useContext, useState } from "react";
import { PostProviderContext } from "../../context/PostProvider";
import { Comment } from "./comment/Comment";
import { CommentForm } from "./comment/CommentForm";

export const Post = (props) => {
  const {
    getCommentsById,
    comments,
    deleteComment,
    editComment,
    addPostLike,
    addComment,
  } = useContext(PostProviderContext);

  const {
    postId,
    imgUrl,
    style,
    cameraBrand,
    cameraModel,
    lensBrand,
    lensModel,
    caption,
    iso,
    shutterSpeed,
    fStop,
    username,
    /* accessories */
  } = props;

  const [toggle, setToggle] = useState(false);

  function get() {
    setToggle((prev) => !prev);
    getCommentsById(postId);
    console.log("postId ", postId);
  }

  const commentFilter = comments.filter((comment) => comment.post === postId);

  return (
    <div className="post">
      {!toggle ? (
        <>
          <h2>{username}</h2>
          <img src={imgUrl} alt="post img" onDoubleClick={addPostLike}></img>
          <li>
            Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO: {iso}
          </li>
          <li>
            Shot with {cameraBrand} {cameraModel} & {lensBrand} {lensModel}
          </li>

          <ul>
            <h1>{username} {caption}</h1>
          </ul>
          <button onClick={get} className="button">Comments</button>
        </>
      ) : (
        <>
          <>
            <h2>Shot by: {username}</h2>
            <img src={imgUrl} alt="post img" onDoubleClick={addPostLike}></img>
            <li>
              Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO: {iso}
            </li>
            <li>
              Shot with {cameraBrand} {cameraModel} & {lensBrand} {lensModel}
            </li>
            <ul>
              <h1>{username} {caption}</h1>
            </ul>
            <div className="commentContainer">
              <div className="commentsList">
                {commentFilter.map((comment) => (
                  <Comment
                    {...comment}
                    key={comment._id}
                    commentId={comment._id}
                    deleteComment={deleteComment}
                    editComment={editComment}
                  />
                ))}
              </div>
              <div className="commentForm">
                <CommentForm
                  postId={postId}
                  submit={addComment}
                  btnText="add Comment"
                />
              </div>
            </div>
          </>
            <button onClick={() => setToggle((prev) => !prev)} className="button">
              Hide Comments
            </button>
        </>
      )}
    </div>
  );
};
