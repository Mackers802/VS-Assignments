// import axios from "axios"
import React, {useState} from "react"
// const uuid = require("uuid").v4

export default function AddTarget(props){
    const initInputs = {
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        bountyAmount: props.bountyAmount || "", 
        type: props.type || "",
        // living: true, 
        _id: props._id}

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        // e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name"/>
            <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name"/>
            <input type="number" name="bountyAmount" value={inputs.bountyAmount} onChange={handleChange} placeholder="Bounty Amount"/>
            <input type="text" name="type" value={inputs.type} onChange={handleChange} placeholder="Sith or Jedi"/>
            <button>Submit Bounty</button>
            {/* <h3>Filter Bountys</h3>
            <select onChange={handleFilter} className="filter">
                <option value= "all">All Bountys</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>

            </select> */}
        </form>
        </>
    )
}