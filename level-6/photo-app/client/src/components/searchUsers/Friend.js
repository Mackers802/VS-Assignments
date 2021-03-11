import React from "react";

export const Friend = (props) => {
  const { val } = props;

  function getUserProfile(){
    console.log("got")
  }
  return (
    <div className="friend">
      <button onClick={getUserProfile}>
        {val}
      </button>
    </div>
  );
};
