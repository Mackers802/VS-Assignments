import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import cameraDataFile from "./cameraDataFile.js"
// const axios = require('axios');

export const TestPost = (props) => {
	const [makesModels, setMakesModels] = useState({});
	const [models, setModels] = useState([]);
	const [selected, setSelected] = useState({});
	const history = useHistory();

	useEffect(() => {
				setMakesModels(cameraDataFile);
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
		// console.log("selected", selected);
		const { make, model } = selected;
		if (model !== undefined) {
			history.push(`/collection/?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);
		}	
		// setModels("")
	};

	const selectMake = (e) => {
		const { name, value } = e.target;
		console.log("MAKE SELECT", value)
		setModels(makesModels[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		console.log("selected make", selected);
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

	const makeOptions =
		makesModels &&
		Object.keys(makesModels)
			.sort((a, b) => a.localeCompare(b))
				.map((car, idx) => {
					return (
						<option key={idx} value={car}>
							{car}
						</option>
					);
			});

	const modelOptions =
		models &&
		models
			.sort((a, b) => a.localeCompare(b))
			.map((model, idx) => {
				return (
					<option className='p-4' key={idx} value={model}>
						{model}
					</option>
				);
			});

	return (
		<div className='flex justify-center '>
			<form className='flex flex-row space-x-4'>
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
			<h3>Camera</h3>
				<select
					className='w-56 p-2'
					onChange={selectMake}
					name='make'
					id='make'>
					<option value='' disabled selected defaultValue >
						Select Brand
					</option>
					{makeOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleModelSelect}
					name='model'
					id='model'>
					<option value='Select Value' disabled selected defaultValue >
						Select Model
					</option>
					{modelOptions}
				</select>
				<button type="button" className='w-56' onClick={handleSubmit}>
					Results
				</button>
			</form>
		</div>
	);
};
