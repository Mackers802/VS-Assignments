import { useState, useContext, useEffect } from 'react';
import { PostProviderContext } from "../context/PostProvider"
// const axios = require('axios');

export const EditPostForm = (props) => {
    const { editPost, deletePost} = useContext(PostProviderContext)
    const { caption, style, _id, fStop, iso, shutterSpeed,  } = props

    const initInputs = {
        caption: caption,
        style: style,
        post: {_id},
        fStop: fStop,
        iso: iso,
        shutterSpeed: shutterSpeed
    }

    useEffect(() => {
        console.log(_id)
    }, []);

	const [inputs, setInputs ] = useState(initInputs)
	// const history = useHistory();

	function handleDeleteSubmit(e){
		e.preventDefault();
        deletePost(_id)
        console.log("deleteFunc ID", _id)
		// console.log("selected Submit", selected)
	};

function editPostSubmit(e){
    e.preventDefault()
    editPost(inputs, _id)
}
	
	function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
			...prevInputs,
            [name]: value
        }))
		console.log("handleChange", inputs)
    }

	return (
		<div className='flex justify-center '>
			<form onChange={ handleChange } className='flex flex-row space-x-4'>
			<label>
			<h3>Caption</h3>
				<input type="text" name="caption" placeholder={caption}/>
			</label>
			<h3>Select Style</h3>
			<select name="style" >
                    <option input="">{style}</option> 
                    <option value="Architectural">Architectural</option>
                    <option value="Astro">Astro</option> 
                    <option value="Car">Car</option>
                    <option input="Fashion">Fashion</option> 
                    <option value="Food">Food</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Macro">Macro</option> 
					<option value="Nature">Nature</option>
                    <option value="Night">Night</option>
                    <option value="Other">Other</option> 
                    <option value="Pet">Pet</option> 
                    <option value="Photojournalism">Photojournalism</option>
                    <option value="Product">Product</option>
                    <option value="Sports">Sports</option>
                    <option value="Still Life">Still Life</option>
                    <option value="Street">Street</option>
                    <option value="Travel">Travel</option>
                    <option value="Underwater">Underwater</option> 
                    <option value="Wedding">Wedding</option> 
                    <option value="Wildlife">Wildlife</option> 
                </select>
				<h3>Settings</h3>
  {/* ------------ FStop 𝑓 --------------------------  */}
                <select name="fStop">
                    <option value="">{fStop}</option> 
                    <option value="45">45</option> 
                    <option value="32">32</option>
                    <option value="22">22</option>
                    <option value="20">20</option> 
                    <option value="18">18</option> 
                    <option value="16">16</option> 
                    <option value="14">14</option> 
                    <option value="13">13</option> 
                    <option value="11">11</option>
                    <option value="10">10</option> 
                    <option value="9">9</option> 
                    <option value="8">8</option>
                    <option value="7.1">7.1</option> 
                    <option value="6.3">6.3</option> 
                    <option value="5.6">5.6</option> 
                    <option value="5">5</option> 
                    <option value="4.5">4.5</option> 
                    <option value="4">4</option>
                    <option value="3.5">3.5</option> 
                    <option value="3.2">3.2</option> 
                    <option value="2.8">2.8</option>
                    <option value="2.4">2.4</option> 
                    <option value="2.2">2.2</option> 
                    <option value="2">2</option> 
                    <option value="1.8">1.8</option> 
                    <option value="1.6">1.6</option> 
                    <option value="1.4">1.4</option> 
                    <option value="1.2">1.2</option> 
                    <option value="1.1">1.1</option> 
                    <option value="1">1</option> 
                </select>

         {/* ------------ Iso -------------------------- */}
                 <select name="iso">
                     <option value="">{iso}</option> 
                     <option value="50">50</option> 
                     <option value="65">65</option> 
                     <option value="100">100</option>
                     <option value="125">125</option>
                     <option value="160">160</option> 
                     <option value="200">200</option>
                     <option value="250">250</option>
                     <option value="320">320</option> 
                     <option value="400">400</option>
                     <option value="500">500</option>
                     <option value="640">640</option>
                     <option value="800">800</option> 
                     <option value="1000">1000</option>
                     <option value="1250">1250</option>
                     <option value="1600">1600</option> 
                     <option value="2000">2000</option>
                     <option value="2500">2500</option>
                     <option value="3200">3200</option> 
                     <option value="4000">4000</option>
                     <option value="5000">5000</option>
                     <option value="6400">6400</option> 
                     <option value="8000">8000</option>
                     <option value="10000">10000</option>
                     <option value="125000">125000</option> 
                 </select>

                 {/* ------------ Shuttter Speed-------------------------- */}
                 <select name="shutterSpeed">
                     <option value="">{shutterSpeed}</option> 
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
                     <option value="1/20">1/20</option>
                     <option value="1/25">1/25</option>
                     <option value="1/30">1/30</option> 
                     <option value="1/40">1/40</option>
                     <option value="1/50">1/50</option>
                     <option value="1/60">1/60</option>
                     <option value="1/80">1/80</option>
                     <option value="1/100">1/100</option>
                     <option value="1/125">1/125</option>
                     <option value="1/160">1/160</option>
                     <option value="1/200">1/200</option>
                     <option value="1/250">1/250</option>
                     <option value="1/320">1/320</option>
                     <option value="1/400">1/400</option> 
                     <option value="1/500">1/500</option>
                     <option value="1/640">1/640</option>
                     <option value="1/800">1/800</option>
                     <option value="1/1000">1/1000</option>
                     <option value="1/1250">1/1250</option>
                     <option value="1/1600">1/1600</option>
                     <option value="1/2000">1/2000</option> 
                     <option value="1/2500">1/2500</option>
                     <option value="1/3200">1/3200</option>
                     <option value="1/4000">1/4000</option>
                     <option value="1/5000">1/5000</option>
                     <option value="1/6400">1/6400</option>
                     <option value="1/8000">1/8000</option>
                 </select>

				<button onClick={editPostSubmit}>Save Post</button>
                <button onClick={() => handleDeleteSubmit() }>Delete Post</button>
                {/* <button onClick={() => editPost(_id) }>Edit Post</button> */}
			</form>
		</div>
	);
};
