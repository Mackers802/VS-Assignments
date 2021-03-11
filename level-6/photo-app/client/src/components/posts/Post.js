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
        <div className="post2">
          <h2>Shot by: {username}</h2>
          <img src={imgUrl} alt="post img" onDoubleClick={addPostLike}></img>
          <li>
            Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO: {iso}
          </li>
          <li>
            Shot with {cameraBrand} {cameraModel} & {lensBrand} {lensModel}
          </li>

          <ul>
            <p>{caption}</p>
          </ul>
          <button onClick={get}>Comments</button>
        </div>
      ) : (
        <>
          <div className="post2">
            <h2>Shot by: {username}</h2>
            <img src={imgUrl} alt="post img" onDoubleClick={addPostLike}></img>
            <li>
              Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO: {iso}
            </li>
            <li>
              Shot with {cameraBrand} {cameraModel} & {lensBrand} {lensModel}
            </li>
            <ul>
              <p>{caption}</p>
            </ul>

            <div className="commentContainer">
              <div className="comments">
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
            <button onClick={() => setToggle((prev) => !prev)}>
              Hide Comments
            </button>
          </div>
        </>
      )}
    </div>
  );
};
