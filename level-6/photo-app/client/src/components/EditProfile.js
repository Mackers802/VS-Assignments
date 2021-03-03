// import React, { useContext, useState} from 'react'
// import { UserAuthContext } from "../context/UserAuthProvider"

// export const EditProfile = (props) => {
// const { editUserProfile,  user: { profilePicture, bio, email, _id }, } = useContext(UserAuthContext)

// const initInputs = {
//    profilePicture: profilePicture,
//    bio: bio, 
//    email: email
// }

// const [ inputs, setInputs ] = useState(initInputs)

// function handleChange(e){
//     const {name, value} = e.target
//     setInputs(prevInputs => ({
//         ...prevInputs,
//         [name]: value
//     }))
// }

// function handleSubmit(e){
//     e.preventDefault()
//     editUserProfile(inputs, _id)
//     }

// return ( 
//         <div>
//             <form >
//                 <label>
//                     <input onChange={ handleChange } type="text" name="profilePicture" placeholder={profilePicture} />
//                     <input onChange={ handleChange } type="text" name="bio" placeholder={ bio } />
//                     <input onChange={ handleChange } type="text" name="email" placeholder={email} />
//                 </label>
//             </form>
//             <button onClick={ handleSubmit }>Save Changes</button>
//         </div>
//     )
// }
