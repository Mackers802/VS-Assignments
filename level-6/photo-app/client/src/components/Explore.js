              // ---------------------- test 1------------------------
              // ---------------------- test 1------------------------
              // ---------------------- test 1------------------------

import React, { useState, useContext, useEffect } from "react";
import { PostProviderContext } from "../context/PostProvider";
import { Ps } from "./Ps"

export const Explore = () => {

const { posts, getAllPosts } = useContext(PostProviderContext)
const [searchTerm, setSearchTerm] = useState("")

function handleChange(e){
setSearchTerm(e.target.value)
}

useEffect(() => {
getAllPosts()
}, []);

return (
<div className="friendsListCont">
<form className="friendSearch">
<input 
type="text" 
placeholder="Search by Style, Brand, Camera or Lens "  
onChange={handleChange} 
/>
</form>

  {posts.filter((val) => {
    if (searchTerm === ""){
      return val
    } 
    else if (val.style.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    } else if (val.cameraBrand.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    } else if (val.cameraModel.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    } else if (val.lensBrand.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    } else if (val.lensModel.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }
  }).map((val, key) => {
    return (
      <>
      <button>
          <Ps val={val} key={key} />
      </button>
      </>
    )
  })
  }
</div>
);
};

// ---------------------- test 2------------------------
// ---------------------- test 2------------------------
// ---------------------- test 2------------------------

// import React, { useState, useContext, useEffect } from "react";
// import { PostProviderContext } from "../context/PostProvider";
// // import { Ps } from "./Ps"

// export const Explore = () => {
  
//     const { posts, getAllPosts } = useContext(PostProviderContext)
//     const [searchTerm, setSearchTerm] = useState("")

//     console.log("posts", posts)
    
//     function handleChange(e){
//       setSearchTerm(e.target.value)
//       console.log("searchTerm", searchTerm)
//     }
    
//     const lowercaseFilter = searchTerm
//     const filteredData = posts.filter(item => {
//       return Object.keys(item).some(key => 
//         item[key].toLowerCase().includes(lowercaseFilter)
//         )
//       })
      
//         useEffect(() => {
//             getAllPosts()
//         }, []);
        
//           return (
//               <div className="friendsListCont">
//                 <form className="friendSearch">
//                   <input 
//                       type="text" 
//                       onChange={handleChange} 
//                       placeholder="Search by Style, Brand, Camera or Lens "  
//                       />
//                 </form>
//                 {filteredData.map(item => (
//                     <div>
//                     <div key={item}>
//                       {/* {item.style} {item.cameraBrand} {item.cameraStyle} */}
//                     </div>
//                     </div>
//                   ))
//                   }
//                 </div>
//               );
//             };


// ---------------------- test 3 ------------------------
// ---------------------- test 3 ------------------------
// ---------------------- test 3 ------------------------



// import React, { useContext, useState, useEffect } from 'react'
// // import { UserAuthContext } from "../context/UserAuthProvider";
// import { PostProviderContext } from '../context/PostProvider'
// import cameraDataFile from "./cameraDataFile.js"
// import lensDataFile from "./lensDataFile.js"
// import { Post } from "./Post"

// export const PostSearch = () => {

// const initInputs = {
//     style: "",
//     cameraBrand: "",
//     cameraModel: "",
//     lensBrand: "",
//     lensModel: ""
// }

// const { 
//     posts, 
//     getAllPosts, 
//     // search,
//     searchByStyle,
//     searchByCameraBrand,
//     searchByCameraModel,
//     searchByLensBrand,
//     searchByLensModel 
// } = useContext(PostProviderContext)

// const [makesModelsCam, setMakesModelsCam] = useState({});
// const [makesModelsLens, setMakesModelsLens] = useState({});
// const [camModels, setCamModels] = useState([]);
// const [lensModels, setLensModels] = useState([]);
// const [selected, setSelected] = useState(initInputs);
// // const history = useHistory();

// // const { newPost } = useContext(PostProviderContext)

// useEffect(() => {
//     getAllPosts()
//     setMakesModelsLens(lensDataFile);
//     setMakesModelsCam(cameraDataFile)
//     setSelected(selected)
// }, []);

// // useEffect(() => {
// // 	axios
// // 		.get('URL')
// // 		.then(function (response) {
// // 			setMakesModels(response.data);
// // 		})
// // 		.catch(function (error) {
// // 			// handle error
// // 			console.log(error);
// // 		});
// // }, []);

// function handleSubmit(e){
//     e.preventDefault()
//     // console.log("selected", selected)
//     // console.log("please Make a search selection")
//     searchByStyle(selected)
//     searchByCameraBrand(selected)
//     searchByCameraModel(selected)
//     searchByLensBrand(selected)
//     searchByLensModel(selected)
//     // const selectedStyle = selected.style
//     // const selectedCameraBrand = selected.cameraBrand
//     // const selectedCameraModel = selected.cameraModel
//     // const selectedLensBrand = selected.lensBrand
//     // const selectedLensModel = selected.lensModel
//     // console.log("Selected style", selectedStyle)
//     // console.log("Selected cameraBrand", selectedCameraBrand)
//     // console.log("Selected cameraModel", selectedCameraModel)
//     // console.log("Selected lensBrand", selectedLensBrand)
//     // console.log("Selected lensModel", selectedLensModel)
// }

// function handleChange(e){
//     const {name, value} = e.target
//     setSelected(prevSelected => ({
//         ...prevSelected, [name]: value
//     }))
//     console.log("handleChange", selected)
// }

// //* -------------   camera selection -------------   */

// const selectMake = (e) => {
//     const { name, value } = e.target;
//     setCamModels(makesModelsCam[value]);
//     setSelected((prevState) => {
//         return { ...prevState, [name]: value };
//     });
// };


// const handleModelSelect = (e) => {
//     const { name, value } = e.target;
//     setSelected((prevState) => {
//         return { ...prevState, [name]: value };
//     });
//     console.log("selected model", selected);
// };
// // console.log(Object.keys(makesmodels));


// const cameraBrandOptions =
//     makesModelsCam &&
//     Object.keys(makesModelsCam)
//         .sort((a, b) => a.localeCompare(b))
//             .map((camBrand, idx) => {
//                 return (
//                     <option key={idx} value={camBrand}>
//                         {camBrand}
//                     </option>
//                 );
//         });

// const cameraOptions =
//     camModels &&
//     camModels
//         .sort((a, b) => a.localeCompare(b))
//         .map((camModel, idx) => {
//             return (
//                 <option className='p-4' key={idx} value={camModel}>
//                     {camModel}
//                 </option>
//             );
//         });

// /* -------------    lens selection ~~~-------------    */

// const selectLensMake = (e) => {
//     const { name, value } = e.target;
//     setLensModels(makesModelsLens[value]);
//     setSelected((prevState) => {
//         return { ...prevState, [name]: value };
//     });
// };


// const handleLensModelSelect = (e) => {
//     const { name, value } = e.target;
//     setSelected((prevState) => {
//         return { ...prevState, [name]: value };
//     });
// };
// // console.log(Object.keys(makesmodels));



// const lensBrandOptions =
// makesModelsLens &&
// Object.keys(makesModelsLens)
//     .sort((a, b) => a.localeCompare(b))
//         .map((lensBrand, idx) => {
//             return (
//                 <option key={idx} value={lensBrand}>
//                     {lensBrand}
//                 </option>
//             );
//     });

// const lensOptions =
// lensModels &&
// lensModels
//     .sort((a, b) => a.localeCompare(b))
//     .map((lensModel, idx) => {
//         return (
//             <option className='p-4' key={idx} value={lensModel}>
//                 {lensModel}
//             </option>
//         );
//     });



// return (
//     <div className="postsFeed">     
//            <form onSubmit={ handleSubmit } className='flex flex-row space-x-4'>
// 			<h3>Search...</h3>
// 			<select onChange={ handleChange } name="style">
//                     <option input="" disabled selected defaultValue>Style</option> 
//                     <option input="all">All</option> 
//                     <option value="Architectural">Architectural</option>
//                     <option value="Astro">Astro</option> 
//                     <option value="Car">Car</option>
//                     <option input="Fashion">Fashion</option> 
//                     <option value="Food">Food</option>
//                     <option value="Landscape">Landscape</option>
//                     <option value="Portrait">Portrait</option>
//                     <option value="Macro">Macro</option> 
// 					<option value="Nature">Nature</option>
//                     <option value="Night">Night</option>
//                     <option value="Other">Other</option> 
//                     <option value="Pet">Pet</option> 
//                     <option value="Photojournalism">Photojournalism</option>
//                     <option value="Product">Product</option>
//                     <option value="Sports">Sports</option>
//                     <option value="Still Life">Still Life</option>
//                     <option value="Street">Street</option>
//                     <option value="Travel">Travel</option>
//                     <option value="Underwater">Underwater</option> 
//                     <option value="Wedding">Wedding</option> 
//                     <option value="Wildlife">Wildlife</option> 
//                 </select>
// 				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
// 				<select
// 					className='w-56 p-2'
// 					onChange={selectMake}
// 					name='cameraBrand'
// 					id='cameraBrand'>
// 					<option value='' disabled selected defaultValue Brand>Camera Brand
// 					</option>
// 					{cameraBrandOptions}
// 				</select>
// 				<select
// 					className='w-56 p-2'
// 					onChange={handleModelSelect}
// 					name='cameraModel'
// 					id='cameraModel'>
// 					<option value='Select Value' disabled selected defaultValue >Camera Model
// 					</option>
// 					{cameraOptions}
// 				</select>
// 				{/* ~~~~~~~~~~~~~~ camera selection ~~~~~~~~~~~~~~~~~ */}
// 				<select
// 					className='w-56 p-2'
// 					onChange={selectLensMake}
// 					name='lensBrand'
// 					id='lensBrand'>
// 					<option value='' disabled selected defaultValue >Lens Brand
// 					</option>
// 					{lensBrandOptions}
// 				</select>
// 				<select
// 					className='w-56 p-2'
// 					onChange={handleLensModelSelect}
// 					name='lensModel'
// 					id='lensModel'>
// 					<option value='Select Value' disabled selected defaultValue >Lens Model
// 					</option>
// 					{lensOptions}
// 				</select>
//                 <button className="button"> 
//                     Search
//                 </button>
// 			</form>

//             { posts.map(post => <Post { ...post} key={post._id}/> ) }
//         </div>
//     )
// }

// function handleChange(e){
//     styleFilter(e.target)
//     cameraFilter(e.target)
//     lensFilter(e.target)
//     console.log(e.target)
// }

// function styleFilter(e){
//     if(e.target === "all"){
//         getAllPosts()
//     } else {
//         searchByStyle()
//     }
// }

// function cameraFilter(e){
//     if(e.target.value === "all"){
//         getAllPosts()
//     } else {
//         searchByCamera(e.target.value)
//     }
// }

// function lensFilter(e){
//     if(e.target.value === "all"){
//     } else { if(e.target === {lensFilter})
//         searchByLens(e.target.value)
//     }
// }
            
            
