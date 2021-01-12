import React from 'react'

function Dice(props){
    return(
        <div>
        
            <h1 style={
                
                {
                    backgroundColor: "black",
                    color: "red",
                    border: "3px white solid",
                    padding: "3px",
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                }

            }>{props.all[0]}
              {props.all[1]}
              {props.all[2]}
              {props.all[3]}
              {props.all[4]}
            
            </h1>
        </div>
    )
}

export default Dice