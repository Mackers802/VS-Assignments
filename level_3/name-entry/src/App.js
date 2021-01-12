import React from "react"
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            names: "Add Name's here",
            list: []

        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event) {
        event.preventDefault()
          this.setState(prevState => {
            return (
            {
              list: [...prevState.list, prevState.names],
              names: ""
            })
        })
     }

    handleChange(event) {
      // event.preventDefault()
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log("hello")
        console.log(event.target)

        // const names = {this.state.value}

    }


    render() {
        return (

            <div>
            <h1 style = {
                {
                    padding: "7%",
                    backgroundColor: "black",
                    color: "yellow",
                    textAlign: "center"
                }
            } > Names List </h1>
             <form>
            <p style = {
                {
                    alignItems: "center"
                }
            } >
            <input name = "names"
            type = "text"
            value = { this.state.names }
            onChange = { this.handleChange }
            style = {
                {
                    backgroundColor: "white",
                    justifyContent: "center",
                    color: "red",
                    textAlign: "center"
                }
            }/> 
            </p> { <button onClick = {this.handleClick}
                style = {
                    {
                        justifyContent: "center",
                        backgroundColor: "red",
                        color: "white",
                        width: "100px",
                        height: "75px"
                    }
                }> A.D.D. </button>
            } 
            </form> 
            <h1 style = {
                {
                    padding: "7%",
                    backgroundColor: "black",
                    color: "yellow",
                    textAlign: "center"
                }
            } > List of Names</h1> 
            <p></p> 
            
            <ul style={
              {
                    backgroundColor: "black",
                    color: "yellow",
                    textAlign: "center",
                    listStyle: "none"
              }
            }>
              {this.state.list.map(eachName => <li>{eachName}</li>)}
            </ul>
              
            </div>
        )
    }
}

export default App;