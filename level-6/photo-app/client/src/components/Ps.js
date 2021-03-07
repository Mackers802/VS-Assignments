import React, { useState } from 'react'

export const Ps = (props) => {

    const [toggle, setToggle] = useState(false)

    function handleToggle(){
    setToggle(prev => !prev)
}

    const { val } = props
    return (
        <>{
        ! toggle ?
            <div className="postSearchBar" onClick={handleToggle}>
            <img src={val.imgUrl} alt=" post img url"></img>
            </div>
        :
            <div onClick={handleToggle}>
            
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
        }
        </>
    )
}
