import React from "react"

import Badge from "./Badge"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nameBadges: [],
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      aboutYou: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    // console.log(event.target.name, event.target.value)
    const { name, value } = event.target
    this.setState(
      { [name]: value }
    )
  }

  handleClick(e){
    e.preventDefault()

      this.setState(prevState => {

        const newBadgeItem = { 
         firstName: prevState.firstName, 
         lastName: prevState.lastName,
         email: prevState.email,
         placeOfBirth: prevState.placeOfBirth,
         phone: prevState.phone,
         favoriteFood: prevState.favoriteFood,
         aboutYou: prevState.aboutYou
       } 

        return(
          {
            nameBadges: [...prevState.nameBadges, newBadgeItem],
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            aboutYou: ""
          }
        )
      }
      )
  }

  render() {
    return (

      <div>

        <h1 style={
          {
            backgroundColor: "salmon",
            color: "darkblue",
            justifyContent: "center",
            textAlign: "center"

          }
        }>Please Sign </h1>
        <div className="formCont">

          <form className="form">
            <input
            style={{
              width: "250px"
            }}
              name="firstName"
              type="text"
              placeholder="First name"
              minLength="3"
              value={this.state.firstName}
              onChange={this.handleChange}
              required></input>

            <input
            style={{
              width: "250px",
            }}
              name="lastName"
              type="text"
              placeholder="Last name"
              minLength="3"
              value={this.state.lastName}
              onChange={this.handleChange}
              required></input>

            <input
            style={{
              width: "250px"
            }}
              name="email"
              type="email"
              placeholder="Email"
              minLength="3"
              value={this.state.email}
              onChange={this.handleChange}></input>

            <input
            style={{
              width: "250px"
            }}
              name="placeOfBirth"
              type="text"
              placeholder="Place of Birth"
              minLength="3"
              value={this.state.placeOfBirth}
              onChange={this.handleChange}></input>

            <input
            style={{
              width: "250px"
            }}
              name="phone"
              type="phone"
              placeholder="Phone"
              pattern="[0-9]*" 
              inputMode="numeric"
              minLength="3"
              value={this.state.phone}
              onChange={this.handleChange}></input>

            <input
            style={{
              width: "250px"
            }}
              name="favoriteFood"
              type="text"
              placeholder="Favorite Food"
              minLength="3"
              value={this.state.favoriteFood} onChange={this.handleChange}></input>

            <textarea
              style={{
                width: "510px"
              }}
              name="aboutYou"
              type="text"
              placeholder="About You"
              minLength="3"
              value={this.state.aboutYou} onChange={this.handleChange}></textarea>

            <button style={{
                margin: " 10px 250px"
              }} onClick={this.handleClick}>Submit Button</button>

          </form>
        </div>

          
        <hr></hr>
        <div style={
                {
                  backgroundColor: "White",
                  color: "black",
                  width: "100%",
                  border: "3px solid black",
                  borderRadius: "8%",
                  paddingLeft: "3%",
                  paddingTop: "1%"
                  
                }
              }>
          <div className="badge"> Badge:

                  {this.state.nameBadges.map(badge => <Badge badge ={badge} />)}
                  {/* {this.state.nameBadge}
                  {this.state.nameBadgeItem} */}
            </div>
        </div>

      </div>
    )
  }
}

export default App