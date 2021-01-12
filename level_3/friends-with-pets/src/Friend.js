import React from "react"

import Data from "./Data"
import Pets from "./Pets"

function Friend(props){

const petsData = props.friendData.pets.map(pets => <Pets petData={pets}/>)

return(
    
    <div className="mainContainer">
        <div className="personContainer">
            <h2 className="friend">Name: {props.friendData.name}</h2>
            <p className="personAge">Age: {props.friendData.age}</p>
        </div>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="petdata">{petsData}</h3>
    </div>
)

}

export default Friend