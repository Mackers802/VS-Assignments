import React from 'react'

import './App.css';
import Header from "./Header"
import Headshot from './Headshot'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      hitList: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    
  }

  componentDidMount() {
    console.log("mount up")
    this.setState({ loading: true })
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      // .then(data => { console.log(data)})
      .then(data => {
        this.setState({
          loading: false,
          hitList: data
        })
      })
  }

  render() {
    const loadingSequence = this.state.loading ? "Loading secrete hit list now" : this.state.hitList.data
    return (
      <div>
        <Header />
        {/* {loadingSequence} */}
        {this.state.hitList.map(hit => <Headshot hit = {hit} />)}
      </div>
    );
  }
}

export default App;
