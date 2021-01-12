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

    requestData = () => {
        axios.get(`https://api.vschool.io/MackYandowL4/todo`)
        .then(res => {
            this.setState({uglyThingsList: res.data})
        })
    }

    postRequest = () => {
        const newObj = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }

        axios.post(`https://api.vschool.io/MackYandowL4/todo`, newObj)
        .then(res => {
            this.requestData()
        })

        this.requestData()
    }

    componentDidMount = () => {
        this.requestData()
      }

    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
            this.setState(prevState => { 
                return{...prevState,
                    [name] : value
            }})
        }

        // is expecting the uglyThing (becuase its being passed an individual uglyThing) 
        // settting the state of each individual ugly thing by tellingn it if the 
        // setting state with the uglyThing that the user specifically wants to edit 

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
