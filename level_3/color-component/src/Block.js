import React from 'react'

function Block(props){
    return(
        <div>
            <div style={
                {
                    border: "solid 2px black",
                    width: "250px",
                    height: "250px",
                    textAlign: "center",
                    backgroundColor: props.color
                }
            }>
            </div>
        </div>
    )
}


export default Block