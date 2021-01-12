
import React from 'react'

function Square(props){

console.log(props)
    return(
        <div>
            <div style={{
                backgroundColor: props.colors,
                width: "150px", 
                height: "150px", 
            }}></div>
        </div>
    )
}


export default Square