import React, { useState, useContext } from "react";
import { PostProviderContext } from "../context/PostProvider";

export const CommentForm = (props) => {
  const { _id } = useContext(PostProviderContext);

  const initInputs = {
    commentDescription: "",
  };

  const [inputs, setInputs] = useState(initInputs);
  const { addComment } = useContext(PostProviderContext);

console.log("inputs on CommentForm", inputs)
console.log("_id on CommentForm", _id)

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
    addComment(_id, inputs);
    setInputs(inputs);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label>
          <input
            type="text"
            name="commentDescription"
            placeholder="Edit Comment"
          />
        </label>
        <button onClick={handleSubmit}>{props.btnText}</button>
      </form>
    </div>
  );
};
