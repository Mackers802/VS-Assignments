import React from 'react'

export const Ps = (props) => {

    const { val } = props
    return (
        <div className="postSearchBar">
        <img src={val.imgUrl} alt=" post img url"></img>
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
    )
}
