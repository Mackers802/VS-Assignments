import { useState, useContext } from "react";
import { PostProviderContext } from "../context/PostProvider";
// const axios = require('axios');

export const EditPostForm = (props) => {
  const { editPost, deletePost, getUserPosts } = useContext(
    PostProviderContext
  );
  const { caption, _id, changeToggle } = props;

  const initInputs = {
    caption: caption,
    // style: style,
    // post: _id,
    // fStop: fStop,
    // iso: iso,
    // shutterSpeed: shutterSpeed,
  };

  const [inputs, setInputs] = useState(initInputs);
  // const history = useHistory();

  function handleDeleteSubmit(e) {
    e.preventDefault();
    deletePost(_id);
    getUserPosts(_id);
    console.log("deletePost ID", _id);
    // console.log("selected Submit", selected)
  }

  function editPostSubmit(e) {
    e.preventDefault();
    editPost(inputs, _id);
    getUserPosts(_id);
  }

  function closeEdit() {
    changeToggle();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    console.log("handleChange", inputs);
  }

  return (
    <div className="editProfile">
      <form onChange={handleChange}>
        <label>
          <input type="text" name="caption" placeholder={caption} />
        </label>
        <br></br>
        <button onClick={editPostSubmit} className="button">
          Save Post
        </button>
        <button onClick={handleDeleteSubmit} className="button">
          Delete Post
        </button>
        <button onClick={closeEdit} className="button">
          Close
        </button>
      </form>
    </div>
  );
};
