import React  from 'react'

export const Post = (props) => {

    const { imgUrl, style, lensBrand, caption, camera, accessories, _id } = props
    return (
        <div className="posts">
                <h3>{ _id }</h3>
                <img src={imgUrl} alt="post img" width="200" height="150"></img>
                <p>{caption}</p>
                <p> Style: { style } </p>
                    <p>
                    Kit: {camera}, {lensBrand}, { accessories }
                    </p>
                <hr></hr>
                <br></br>
        </div>
    )
}
