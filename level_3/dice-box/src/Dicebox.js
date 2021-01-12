import React from 'react'

import Dice from "./Dice"

class Dicebox extends React.Component{
    constructor(){
        super()
        
        this.state = {
            all: ["", "", "", "", ""]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const min = 1
        const max = 6

        const ranNum1 = [Math.floor(Math.random() * (max - min)) + min]
        const ranNum2 = [Math.floor(Math.random() * (max - min)) + min]
        const ranNum3 = [Math.floor(Math.random() * (max - min)) + min]
        const ranNum4 = [Math.floor(Math.random() * (max - min)) + min]
        const ranNum5 = [Math.floor(Math.random() * (max - min)) + min]

        this.setState({all: [ranNum1, ranNum2, ranNum3, ranNum4, ranNum5]})
    }

    render(){
        return(
            <div className= "Dice">
            
            <Dice all={this.state.all[0]}/>
            <Dice all={this.state.all[1]}/>
            <Dice all={this.state.all[2]}/>
            <Dice all={this.state.all[3]}/>
            <Dice all={this.state.all[4]}/>

                {<button onClick={this.handleClick}
                style={
                        {
                            backgroundColor: "black",
                            color: "white",
                            border: "3px solid black",
                            padding: "10px",
                            width: "100px",
                            height: "50px"

                }
                }>Roll the Dice</button>
                }
            </div>
        )
    }
}

export default Dicebox