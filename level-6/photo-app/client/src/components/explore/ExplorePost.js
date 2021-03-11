import React, { useState } from "react";

export const ExplorePost = (props) => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  const { val } = props;
  return (
    <div className="explorePost">
      {!toggle ? (
        <>
          <h3>{val.username}</h3>
          <img src={val.imgUrl} alt=" post img url" onClick={handleToggle}></img>
        </>
      ) : (
        <div onClick={handleToggle}>
         <h1>{val.username}</h1>
          <br></br>
          Style {val.style},
          <br></br>
          Camera Brand: {val.cameraBrand},
          <br></br>
          Camera Model: {val.cameraModel},
          <br></br>
          Lens Brand {val.lensBrand},
          <br></br>
          Lens Model {val.lensModel},
        </div>
      )}
    </div>
  );
};
