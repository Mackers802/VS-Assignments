import { useEffect, useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import cameraDataFile from "./cameraDataFile.js"
import lensDataFile from "./lensDataFile.js"
import { PostProviderContext } from "../context/PostProvider"
// const axios = require('axios');

export const PostForm = (props) => {

	const initInput = {
		caption: "",
		style: "",
		cameraBrand: "",
		cameraModel: "",
		lensBrand: "",
		lensModel: "",
		fStop: "",
		iso: "",
		shutterSpeed: ""
	}

	const [makesModelsCam, setMakesModelsCam] = useState({});
	const [makesModelsLens, setMakesModelsLens] = useState({});
	const [camModels, setCamModels] = useState([]);
	const [lensModels, setLensModels] = useState([]);
	const [input, setInputs ] = useState(initInput)
	const [selected, setSelected] = useState({});
	// const history = useHistory();

	const { newPost } = useContext(PostProviderContext)

	useEffect(() => {
				setMakesModelsCam(cameraDataFile);
				setMakesModelsLens(lensDataFile);
				setInputs(initInput)
				// console.log("selected", selected)
	}, []);

	// useEffect(() => {
	// 	axios
	// 		.get('URL')
	// 		.then(function (response) {
	// 			setMakesModels(response.data);
	// 		})
	// 		.catch(function (error) {
	// 			// handle error
	// 			console.log(error);
	// 		});
	// }, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("selected Submit", selected)
		newPost(selected)
		// const { make, model } = selected;
		// if (model !== undefined) {
		// 	history.push(`/collection/?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);
		// }	
		// setModels("")
	};
	
	function handleChange(e){
        const {name, value} = e.target
        setSelected(prevSelected => ({
			...prevSelected,
            [name]: value
        }))
		console.log("handleChange", selected)
    }
	
	//* -------------   camera selection -------------   */

	const selectMake = (e) => {
		const { name, value } = e.target;
		setCamModels(makesModelsCam[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
	};


	const handleModelSelect = (e) => {
		const { name, value } = e.target;
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		console.log("selected model", selected);
	};
	// console.log(Object.keys(makesmodels));


	const cameraBrandOptions =
		makesModelsCam &&
		Object.keys(makesModelsCam)
			.sort((a, b) => a.localeCompare(b))
				.map((camBrand, idx) => {
					return (
						<option key={idx} value={camBrand}>
							{camBrand}
						</option>
					);
			});

	const cameraOptions =
		camModels &&
		camModels
			.sort((a, b) => a.localeCompare(b))
			.map((camModel, idx) => {
				return (
					<option className='p-4' key={idx} value={camModel}>
						{camModel}
					</option>
				);
			});

	/* -------------    lens selection ~~~-------------    */

	const selectLensMake = (e) => {
		const { name, value } = e.target;
		setLensModels(makesModelsLens[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
	};


	const handleLensModelSelect = (e) => {
		const { name, value } = e.target;
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
	};
	// console.log(Object.keys(makesmodels));



	const lensBrandOptions =
	makesModelsLens &&
	Object.keys(makesModelsLens)
		.sort((a, b) => a.localeCompare(b))
			.map((lensBrand, idx) => {
				return (
					<option key={idx} value={lensBrand}>
						{lensBrand}
					</option>
				);
		});

const lensOptions =
	lensModels &&
	lensModels
		.sort((a, b) => a.localeCompare(b))
		.map((lensModel, idx) => {
			return (
				<option className='p-4' key={idx} value={lensModel}>
					{lensModel}
				</option>
			);
		});


	return (
		<div className="postForm">
			<form onChange={ handleChange } >
			<label>
				<input type="text" name="caption" placeholder="Add Caption"/>
				<br></br>
				<input type="text" name="imgUrl" placeholder="Add Image URL"/>
			</label>
			<br></br>
			<select name="style">
                    <option input="">Style</option> 
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
				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
				<h4>Camera</h4>
				<select
					className='w-56 p-2'
					onChange={selectMake}
					name='cameraBrand'
					id='cameraBrand'>
					<option value='' disabled selected defaultValue >
						Select Brand
					</option>
					{cameraBrandOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleModelSelect}
					name='cameraModel'
					id='cameraModel'>
					<option value='Select Value' disabled selected defaultValue >
						Select Model
					</option>
					{cameraOptions}
				</select>
				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
				<h4>Lens</h4>
				<select
					className='w-56 p-2'
					onChange={selectLensMake}
					name='lensBrand'
					id='lensBrand'>
					<option value='' disabled selected defaultValue >
						Select Brand
					</option>
					{lensBrandOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleLensModelSelect}
					name='lensModel'
					id='lensModel'>
					<option value='Select Value' disabled selected defaultValue >
						Select Model
					</option>
					{lensOptions}
				</select>
				<br></br>
				<h4>Settings</h4>
				<br></br>
  {/* ------------ FStop 𝑓 --------------------------  */}
                <select name="fStop">
                    <option value="">𝑓-Stop</option> 
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
                     <option value="">ISO</option> 
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
				<br></br>
				<button onClick={handleSubmit} type="button" className="button">
					Post
				</button>
			</form>
		</div>
	);
};
