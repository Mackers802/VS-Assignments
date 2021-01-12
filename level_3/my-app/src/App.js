import React from "react"
import Cards from "./Cards"
import VacationData from "./VacationData"
import CSS from "./App.css"


function App(){
    const vacationPlaces = VacationData.map(place => <Cards vacationData={place}/>)

return(
    <div>
        {vacationPlaces}
    </div>
)
}

export default App