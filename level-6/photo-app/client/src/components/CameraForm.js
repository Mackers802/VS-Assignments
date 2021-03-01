import { useEffect, useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import cameraDataFile from "./cameraDataFile.js"
import lensDataFile from "./lensDataFile.js"
import { PostProviderContext } from "../context/PostProvider"
// const axios = require('axios');

export const CameraForm = (props) => {

	const initInput = {
		caption: ""
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
				setInputs(input)
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
		// e.preventDefault();
		newPost(selected)
		console.log("selected submit", selected);
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
    }
	
	{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}

	const selectMake = (e) => {
		const { name, value } = e.target;
		console.log("MAKE SELECT", value)
		setCamModels(makesModelsCam[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		// console.log("selected make", selected);
	};


	const handleModelSelect = (e) => {
		const { name, value } = e.target;
		console.log("Model SELECT", value)
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		console.log("selected model", selected);
	};
	// console.log(Object.keys(makesmodels));

	{/* ~~~~~~~~~~~~~~ lens selection ~~~~~~~~~~~~~~~~~ */}

	const selectLensMake = (e) => {
		const { name, value } = e.target;
		console.log("MAKE SELECT", value)
		setLensModels(makesModelsLens[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		// console.log("selected make", selected);
	};


	const handleLensModelSelect = (e) => {
		const { name, value } = e.target;
		console.log("Model SELECT", value)
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		console.log("selected model", selected);
	};
	// console.log(Object.keys(makesmodels));

	{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}

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


{/* ~~~~~~~~~~~~~~ lens selection ~~~~~~~~~~~~~~~~~ */}

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
		<div className='flex justify-center '>
			<form onChange={ handleChange } className='flex flex-row space-x-4'>
			<label>
			<h3>Caption</h3>
				<input type="text" name="caption" placeholder="Add Caption"/>
			<h3>Image Url</h3>
				<input type="text" name="imgUrl" placeholder="Add Caption"/>
			</label>
			<h3>Select Style</h3>
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
			<h3>Camera</h3>
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
				<h3>Lens</h3>
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
				<button onClick={handleSubmit} type="button" className='w-56'>
					Post
				</button>
			</form>
		</div>
	);
};
