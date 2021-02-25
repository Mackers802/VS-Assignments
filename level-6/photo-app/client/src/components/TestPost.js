import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const axios = require('axios');

export const TestPage = (props) => {
	const [makesModels, setMakesModels] = useState({});
	const [models, setModels] = useState([]);
	const [selected, setSelected] = useState({});
	const history = useHistory();

	useEffect(() => {
		axios
			.get('https://data-tram.herokuapp.com/makesmodels')
			.then(function (response) {
				setMakesModels(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	const selectMake = (e) => {
		const { name, value } = e.target;

		setModels(makesModels[value]);
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		// e.preventDefault();
		console.log(selected);
		const { make, model } = selected;
		if (model !== undefined) {
			history.push(`/collection/?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);
		}	
		// setModels("")

	};

	const handleModelSelect = (e) => {
		const { name, value } = e.target;
		setSelected((prevState) => {
			return { ...prevState, [name]: value };
		});
		console.log(selected);
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
				<select
					className='w-56 p-2'
					onChange={selectMake}
					name='make'
					id='make'>
					<option value='' disabled selected defaultValue>
						Select Make
					</option>
					{makeOptions}
				</select>
				<select
					className='w-56 p-2'
					onChange={handleModelSelect}
					name='model'
					id='model'>
					<option value='' disabled selected defaultValue>
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
