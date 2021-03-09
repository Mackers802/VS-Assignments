import React, { useContext, useEffect, useState } from "react";
import { PostProviderContext } from "../context/PostProvider";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const Post = (props) => {

 const {
   getCommentsById,
   comments,
   deleteComment,
   editComment,
   addPostLike,
   addComment
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
   /* accessories */
  } = props;
  
  
  const [toggle, setToggle] = useState(false);
  
  
  function get() {
    setToggle((prev) => !prev);
    getCommentsById(postId);
    console.log("postId ", postId)
  }


  const commentFilter = comments.filter((comment) => comment.post === postId);

  return (
    <>
      {!toggle ? (
        <div className="post">
          <br></br>
          <img src={imgUrl} alt="post img" onDoubleClick={addPostLike}></img>

          <ul>
            <li>{caption}</li>
            <li>{style}</li>
            <li>
              Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO{iso}
            </li>
            <li>
              Camera: {cameraBrand}, {cameraModel}
              <br></br>
              Lens: {lensBrand}, {lensModel}
              <br></br>
              {/* accessories: { accessories } */}
            </li>
          </ul>
          <div>
            <button onClick={get}>Comments</button>
          </div>
        </div>
      ) : (
        <div className="post">
          <br></br>
          <img src={imgUrl} alt="post img"></img>

          <ul>
            <li>
              <p>{caption}</p>
            </li>
            <li>{style}</li>
            <li>
              Settings: 𝑓 {fStop}, SS: {shutterSpeed}, ISO{iso}
            </li>
            <li>
              Camera: {cameraBrand}, {cameraModel}
              <br></br>
              Lens: {lensBrand}, {lensModel}
              <br></br>
              {/* accessories: { accessories } */}
            </li>
          </ul>

          {commentFilter.map((comment) => (
            <Comment
              {...comment}
              key={comment._id}
              commentId={comment._id}
              deleteComment={deleteComment}
              editComment={editComment}
            />
          ))}
          <CommentForm postId={postId} submit={addComment} btnText="add Comment"/>
          <button onClick={() => setToggle((prev) => !prev)}>Hide Comments</button>
        </div>
      )}
    </>
  );
};
