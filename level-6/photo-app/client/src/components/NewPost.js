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
        fStop: true,
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
        
        {/* ------------ camera -------------------------- */}
                <select name="style">
                    <option input="">Style</option> 
                    <option input="Fashion">Fashion</option> 
                    <option value="Portrait">Portrait</option>
                    <option value="Car">Car</option>
                    <option value="Wedding">Wedding</option> 
                    <option value="Landscape">Landscape</option>
                    <option value="Street">Street</option>
                    <option value="Macro">Macro</option> 
                    <option value="Sports">Sports</option>
                    <option value="Travel">Travel</option>
                    <option value="Wildlife">Wildlife</option> 
                    <option value="Product">Product</option>
                    <option value="Astro">Astro</option> 
                    <option value="Food">Food</option>
                    <option value="Photojournalism">Photojournalism</option>
                    <option value="Underwater">Underwater</option> 
                    <option value="Architectural">Architectural</option>
                    <option value="Night">Night</option>
                    <option value="Pet">Pet</option> 
                    <option value="Product">Product</option>
                    <option value="Still Life">Still Life</option>
                    <option value="Other">Other</option> 
                </select>

        {/* ------------ camera -------------------------- */}
                <select name="camera">
                    <option input="">Camera</option> 
                    <option input="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                    <option value="Nikon">Nikon</option>
                    <option value="Fujifilm">Fujifilm</option> 
                    <option value="Olympus">Olympus</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Leica">Leica</option> 
                    <option value="Hassleblad">Hassleblad</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Android">Android</option> 
                    <option value="Other">Camera</option>
                </select>

        {/* ------------ Lens -------------------------- */}
                <select name="lensBrand">
                    <option value="">Lens Brand</option> 
                    <option value="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                    <option value="Nikon">Nikon</option>
                    <option value="Fujifilm">Fujifilm</option> 
                    <option value="Olympus">Olympus</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Leica">Leica</option> 
                    <option value="Hassleblad">Hassleblad</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Android">Android</option> 
                    <option value="Other">Camera</option>
                </select>

        {/* ------------ FStop 𝑓 -------------------------- */}
                <select value="fStop">
                    <option value="">𝑓-Stop</option> 
                    <option value="Canon">Canon</option> 
                    <option value="Sony">Sony</option>
                    <option value="Nikon">Nikon</option>
                    <option value="Fujifilm">Fujifilm</option> 
                    <option value="Olympus">Olympus</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Leica">Leica</option> 
                    <option value="Hassleblad">Hassleblad</option>
                    <option value="Iphone">Iphone</option>
                    <option value="Android">Android</option> 
                    <option value="Other">Camera</option>
                </select>

        {/* ------------ Iso -------------------------- */}
                <select name="iso">
                    <option value="">Shutter Speed</option> 
                    <option value="60">60</option> 
                    <option value="30">30</option>
                    <option value="15">15</option>
                    <option value="8">8</option> 
                    <option value="4">4</option>
                    <option value="2">2</option>
                    <option value="1">1</option> 
                    <option value="1/2">1/2</option>
                    <option value="1/4">1/4</option>
                    <option value="1/8">1/8</option> 
                    <option value="1/15">Camera</option>
                    <option value="1/30">1/30</option> 
                    <option value="1/60">1/60</option>
                    <option value="1/125">1/125</option>
                    <option value="1/250">1/250</option> 
                    <option value="1/500">1/500</option>
                    <option value="1/1000">1/1000</option>
                    <option value="1/2000">1/2000</option> 
                    <option value="1/4000">1/4000</option>
                    <option value="1/8000">1/8000</option>
                </select>

                {/* ------------ Shuttter Speed-------------------------- */}
                <select name="shutterSpeed">
                    <option value="">Shutter Speed</option> 
                    <option value="60">60</option> 
                    <option value="30">30</option>
                    <option value="15">15</option>
                    <option value="8">8</option> 
                    <option value="4">4</option>
                    <option value="2">2</option>
                    <option value="1">1</option> 
                    <option value="1/2">1/2</option>
                    <option value="1/4">1/4</option>
                    <option value="1/8">1/8</option> 
                    <option value="1/15">Camera</option>
                    <option value="1/30">1/30</option> 
                    <option value="1/60">1/60</option>
                    <option value="1/125">1/125</option>
                    <option value="1/250">1/250</option> 
                    <option value="1/500">1/500</option>
                    <option value="1/1000">1/1000</option>
                    <option value="1/2000">1/2000</option> 
                    <option value="1/4000">1/4000</option>
                    <option value="1/8000">1/8000</option>
                </select>
                <input type="text" name="accessories" placeholder="Accessories"/>
             </label>
            <br></br>
        <button >Add Post</button>

      </form>
        </div>
    )
}
