import React from 'react'

function Headshot(props){
    return(
        <div>
            <h1 style={
                    {
                        border: "3px dotted red",

                    }
                }>
                <p style={
                    {
                        textAlign: "center"
                    }
                }>
                    {props.hit.name}
                </p>

                <img src={props.hit.image} style={{
                    width: "500px",
                    height: "350px",
                    margin: "1%",
                    padding: "3%"
                }}>
                    
                </img>
                <br></br>
                {/* <button 
                // onClick={this.handleClick}
                style={
                    {
                        textAlign: "center"
                    }
                }> Sleeping with the Fish's</button> */}
            </h1>
        </div>
    )
}

export default Headshot