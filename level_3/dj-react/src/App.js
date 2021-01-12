import React from 'react'
import Square from "./Square"

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickPurple = this.handleClickPurple.bind(this)
        this.handleClickLeft = this.handleClickLeft.bind(this)
        this.handleClickRight = this.handleClickRight.bind(this)
        this.handleClickBig1 = this.handleClickBig1.bind(this)
        this.handleClickBig2 = this.handleClickBig2.bind(this)
        this.handleClickBig3 = this.handleClickBig3.bind(this)
        this.handleClickBig4 = this.handleClickBig4.bind(this)
        // this.handleClickSpecialSauce = this.handleClickSpecialSauce(this)
    }
 
    handleClick(){
       this.setState(prevState => {
            if(prevState.colors[0] === "white") { 
                return { 
                    colors: ["black", "black", "black", "black"]
                }
            }
            else 
                return { 
                    colors: ["white", "white", "white", "white"]
                }
        })
    }

    // handleClickTest() {
        // setState can take one of two things depending on what you need
        // 1. a new object 
        // this.setState({colors: ["pink", "pink", "pink", "pink"]})

        // 2. you pass in a cb function that gives you prevState
        // do this when you need to know what the prev state is to 
        // determine the new state
        // this.setState(prevState => { 
            // return { 
                // something here 
    //         }
    //     })
    // }

    handleClickPurple(){
       this.setState(prevState => {
           return {
               colors: ["purple", "purple", prevState.colors[2], prevState.colors[3]]
           }
       })
    }

    handleClickLeft(){
        this.setState(prevState => {
            return{
                colors: [prevState.colors[0], prevState.colors[1], "blue", prevState.colors[3]]
            }
        })
    }

    handleClickRight(){
        this.setState(prevState => {
            return{
                colors: [prevState.colors[0], prevState.colors[1], prevState.colors[2], "blue"]
            }
        })
    }

    handleClickBig1(){
        this.setState(prevState => {
            return{
                colors: ["yellow", "red", "green", "pink"]
            }
        })
    }

    handleClickBig2(){
        this.setState(prevState => {
            return{
                colors: ["lightgreen", "darkblue", "brightgreen", "hotpink"]
            }
        })
    }

    handleClickBig3(){
        this.setState(prevState => {
            return{
                colors: ["grey", "black", "lightgrey", "orange"]
            }
        })
    }

    handleClickBig4(){
        this.setState(prevState => {
            return{
                colors: ["orange", "black", "red", "purple"]
            }
        })
    }

    // handleClickSpecialSauce(){
    //     this.setState(prevState => {
    //         return{
    //             colors: ["red", prevState.colors[1], prevState.colors[2], prevState.colors[3]]
    //             // playmusic!
    // }
    //     })
    // }

    render(){
        return(
            <div className="squares">
            {this.state.colors.map(color => { 
                return(
                    <Square colors={color}/>

                )
            })}
                {<button onClick={this.handleClick}
                        style={
                            {backgroundColor: "darkred",
                            color: "lightgreen",
                            border: "3px solid black",
                            padding: "3px",

                }
                    }>Small time DJ Clicks Here</button>}
                    
                {<button onClick={this.handleClickPurple}
                        style={
                            {backgroundColor: "darkorange",
                            color: "darkblue",
                            border: "3px solid purple",
                            padding: "3px",

                    }
                }>Party DJ Clicks Here</button>}

                {<button onClick={this.handleClickLeft}
                        style={
                            {backgroundColor: "firebrick",
                            color: "white",
                            borderBottom: "3px solid blue",
                            padding: "3px",
                        }
                }>Professional DJ Bottom button Left</button>}

                {<button onClick={this.handleClickRight}
                    style={
                            {backgroundColor: "firebrick",
                            color: "white",
                            borderBottom: "3px solid blue",
                            padding: "3px",
                        }
                }>Professional DJ Button button Right</button>}

                {<button onClick={this.handleClickBig1}
                    style={
                            {backgroundColor: "yellow",
                            color: "black",
                            borderTop: "3px solid yellow",
                            borderBottom: "3px solid pink",
                            borderLeft: "3px solid green",
                            borderRight: "3px solid red",
                            padding: "3px",
                        }
                }>Big time DJ Clicker 1</button>}

                {<button onClick={this.handleClickBig2}
                    style={
                            {backgroundColor: "yellow",
                            color: "black",
                            borderTop: "3px solid lightgreen",
                            borderBottom: "3px solid pink",
                            borderLeft: "3px solid white",
                            borderRight: "3px solid darkblue",
                            padding: "3px",
                        }
                }>Big time DJ Clicker 2</button>}

                {<button onClick={this.handleClickBig3}
                    style={
                            {backgroundColor: "yellow",
                            color: "black",
                            borderTop: "3px solid darkgrey",
                            borderBottom: "3px solid yellow",
                            borderLeft: "3px solid grey",
                            borderRight: "3px solid black",
                            padding: "3px",
                        }
                }>Big time DJ Clicker 3</button>}

                {<button onClick={this.handleClickBig4}
                    style={
                            {backgroundColor: "yellow",
                            color: "black",
                            borderTop: "3px solid yellow",
                            borderBottom: "3px solid purple",
                            borderLeft: "3px solid red",
                            borderRight: "3px solid black",
                            padding: "3px",
                        }
                }>Big time DJ Clicker 4</button>}

                {/* {<button onClick={this.handleClickSpecialSauce}>SSSSpecial Sauce </button>}  */}


            </div>
        )
    }
}

export default App