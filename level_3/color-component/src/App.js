import './App.css';
import React from 'react'
import axios from 'axios'
import Block from "./Block"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
        backgroundColor: 0,
        id: ""
    }
  }

  componentDidMount() {
    axios.get(`http://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => {
          // console.log(response.data)
          // console.log(response.data.colors)
          // console.log(response.data.colors[0])
          // console.log(response.data.colors[0].hex)
            this.setState({
                backgroundColor: response.data.colors[0].hex,
                id: response.data.colors.[2]
            });
        }
      )
  }
  render(){

    return (
      <div>
        {/* {this.state.backgroundColor.map(color => <Block color={color.hex}/>)} */}
        <Block color={`#${this.state.backgroundColor}`} />
      </div>
    )
  }
}

export default App;
