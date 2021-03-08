import React, { useContext, useState } from "react";
import { PostProviderContext } from "../context/PostProvider";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
// import { UserAuthContext } from "../context/UserAuthProvider";

export const Post = (props) => {
  const {
    _id,
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

  const { getCommentsById, comments, deleteComment, editComment } = useContext(PostProviderContext);

  function get() {
    setToggle((prev) => !prev);
    getCommentsById(_id);
  }

  function toggleComments() {
    setToggle((prev) => !prev);
  }

  const commentFilter = comments.filter((comment) => comment.post === _id);

  return (
    <>
      {!toggle ? (
        <div className="post">
          <br></br>

          <img src={imgUrl} alt="post img"></img>

          <ul>
            <li>
              {caption}
            </li>
            <li>
                {style}
            </li>
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
            <Comment {...comment} key={comment._id} deleteComment={deleteComment} editComment={editComment}/>
          ))}
          <CommentForm _id={ _id } />
          <button onClick={toggleComments}>Hide Comments</button>
        </div>
      )}
    </>
  );
};
