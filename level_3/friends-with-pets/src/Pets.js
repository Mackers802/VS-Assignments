import React from "react"

import Data from "./Data"

function Pets(props){
    return(
        <div className="petContainer">
            <h4>Pet: </h4>
            <h1 className="petName">{props.petData.name}</h1>
            <br></br>
            <h4>Breed: </h4>
            <h1 className="petBreed">{props.petData.breed}</h1>
        </div>
    )
}

export default Pets