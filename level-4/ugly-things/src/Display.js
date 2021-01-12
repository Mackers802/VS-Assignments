import React from 'react'
import { Consumer } from './contextProvider'
import UglyThingsDisplay from "./uglyThingsDisplay"

function Display (props){
    return (
        <Consumer>
            {context => (
                <p>
                    {context.uglyThingsList.map(uglyThing => { 
                        return(
                            <UglyThingsDisplay uglyThing = {uglyThing} editForm={context.editForm} deleteButton={context.deleteButton}/>
                        )
                    })}
                </p>
            )}
        </Consumer>
    )
}

export default Display

{/* maping over each individual uglyThing and providing each one its own edit and delete button */}
