import React from "react"



function Cards(props){
    return(
        <div>
            <div className="cards">
                <h1>{props.vacationData.place}</h1>
                <h2>${props.vacationData.price}</h2>
                <p>{props.vacationData.timeToGo}</p>
                <a href={props.vacationData.link}>{props.vacationData.place}</a>
                <hr></hr>
                <img src={props.vacationData.img} alt="Flag of Origin" width="300" height="200"></img>
            </div>
        </div> 
    )
}

export default Cards