import React, { useState } from "react";

export const ExplorePost = (props) => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  const { val } = props;
  return (
        <>
      {!toggle ? (
    <div className="explorePost">
          <h3>{val.username}</h3>
          <img src={val.imgUrl} alt=" post img url" onClick={handleToggle}></img>
    </div>
      ) : (
        <div className="explorePostInfo" onClick={handleToggle}>
         <h3>{val.username}</h3>
          <br></br>
          Style {val.style},
          <br></br>
          Camera: {val.cameraBrand}, {val.cameraModel},
          <br></br>
          Lens: {val.lensBrand}, {val.lensModel},
          <br></br>
          <br></br>
          <br></br>
        </div>
      )}
        </>
  );
};
