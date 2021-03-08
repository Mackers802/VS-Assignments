import React, { useState } from "react";
import { CommentForm } from "./CommentForm"
// import { UserAuthContext } from "../context/UserAuthProvider"

export const Comment = (props) => {
  // const { user: _id } = useContext(UserAuthContext)
  const { commentDescription, _id } = props;

  const [toggle, setToggle ] = useState(false)

  // function togglePage(){
  //   setToggle(prev => !prev)
  // }

  // function deleteCom() {
  //   deleteComment(_id);
  // }

  // function editCom() {
  //   editComment(_id);
  //   setInputs(inputs);
  // }

  return (
    <>
    {
      !toggle ?
    <div className="comment">
      <h3>{commentDescription}</h3>
      <button onClick={() => setToggle(prev => !prev)}>Edit</button>
    </div>
      :
      <div className="comment">
        <CommentForm btnText="Submit Edit" _id={_id}/>
        <button onClick={() => setToggle(prev => !prev)}>Close</button>
    </div>
    }
    </>
  );
};
