import React, { useContext, useState } from 'react'
import { PostProviderContext } from "../context/PostProvider"

export const NewPost = () => {

    const { newPost } = useContext(PostProviderContext)

    const initInputs = {
        caption: "",
        imgUrl: "",
        style: "",
        camera: "",
        lensBrand: "",
        lensFocalLength: true,
        iso: true,
        shutterSpeed: true,
        accessories: "",
    }

    const [ inputs, setInputs ] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            newPost(inputs)
        setInputs(initInputs)
        }

    return (
        <div>
           <form onSubmit={ handleSubmit } onChange={handleChange} >
             <label>
                <input type="text" name="caption" placeholder="Add Caption"/>
                <input type="text" name="imgUrl" placeholder="Add Img Url"/>
                <input type="text" name="style" placeholder="Style"/>
                <input type="text" name="camera" placeholder="Camera"/>
                <input type="text" name="lensBrand" placeholder="Lens"/>
                <input type="text" name="lensFocallength" placeholder="Focal Length"/>
                <input type="text" name="iso" placeholder="Iso"/>
                <input type="text" name="shutterSpeed" placeholder="Shutter Speed"/>
                <input type="text" name="accessories" placeholder="Accessories"/>
             </label>
            <br></br>
        <button >Add Post</button>

      </form>
        </div>
    )
}
