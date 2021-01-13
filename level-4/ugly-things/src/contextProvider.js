import React, { Component } from "react"
import axios from "axios"

const {Provider, Consumer} = React.createContext()

class ContextProvider extends Component{

    state = {
        uglyThingsList: [],
        uglyThing: {},
        imgUrl: "",
        title: "",
        description: "",
        id: "",
        edit: false
    }
    // inittial Lifestyle method that calls requestData func
    componentDidMount = () => {
        this.requestData()
      }

    //   API call that loads what is currently held on the API server, 
    // then it will set the State to whatever is activly being held on the API and storing it in the uglythingsList Array
    requestData = () => {
        axios.get(`https://api.vschool.io/mackyandow/thing`)
        .then(res => {
            this.setState({uglyThingsList: res.data})
        })
    }

    // post data is handling the API post request.
    // when called it is creating a new obj and appending it to the current list on the API
    // lastly it is requesting the data from the API and updating the state yet again.
    postRequest = () => {
        
        const newObj = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }

        axios.post(`https://api.vschool.io/mackyandow/thing`, newObj)
        .then(res => {
            this.requestData()
        })

        this.requestData()
    }

// handleChange is similtaniousy changeing the key : value pair that is being effected by the specific target location.
// it is taking its previous state and spreading it as the user ads to the corresponding input values
    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
            this.setState(prevState => { 
                return{...prevState,
                    [name] : value
            }})
        }

        // edit form is expecting the uglyThing (becuase its being passed a specific individual uglyThing ) 
        // settting the state of each individual ugly thing it is passed by giving it the unique id and 
        // setting state with the same/new uglyThing that the user specifically wants to edit 

    editForm = (thing) => {

        this.setState(prevState => {
            return{
                ...prevState, 
                edit: true,
                id: thing._id,
                title: thing.title,
                imgUrl: thing.imgUrl,
                description: thing.description
            }
        })
    }

// the delete function is taking a specific and indivdual uglything that it is being passed and deleting it based on its specific ID
// then it is calling requestData and updating state with the new array
    deleteButton = (thing) => {
        axios.delete(`https://api.vschool.io/mackyandow/thing/${thing._id}`)
        .then( () => {
                this.requestData()
            }
        )
    }
    
    
    putRequest = () => {
        const newObj = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }
        axios.put(`https://api.vschool.io/mackyandow/thing/${this.state.id}`, newObj)
        .then( () => {
            this.requestData()
            this.setState(prevState => {
                return{
                    ...prevState, 
                    edit: false,
                    id: "",
                    title: "",
                    imgUrl: "",
                    description: ""

            }
            }
        )

        }
            // clear key values 
    )
}

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.edit === true){
            this.putRequest()
        } else {
            this.postRequest()
        }
    }

    render(){
        return (
            <Provider value= {{
                    uglyThingsList: this.state.uglyThingsList, 
                    imgUrl: this.state.imgUrl,
                    title: this.state.title,
                    description: this.state.description,
                    handleChange: this.handleChange,
                    handleClick: this.handleClick,
                    editForm: this.editForm,
                    deleteButton: this.deleteButton
                }}>
                    {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer}
