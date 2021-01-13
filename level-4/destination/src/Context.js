import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const { Provider, Consumer } = React.createContext();

class Context extends Component {
  state = {
    // Api Call data for state
    title: "",
    overview: "",
    release_date: "",
    backdrop_path: "",
    id: "",
    // Extra state
    name: "",
    starRating: false,
    textbox: "",
    reviews: [],
    rating: ""
  };

  // Action 1)
  componentDidMount = () => {
    console.log("did mount");
    this.requestMovie();
  };

  // Action 2)
  requestMovie = (e) => {
    const random = Math.floor(Math.random() * 20);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d246833b98ed7223e0d531d6ef59d00f&language=en-US&page=4`
      )
      .then((res) => {
        this.setState({
          title: res.data.results[random].title,
          overview: res.data.results[random].overview,
          release_date: res.data.results[random].release_date,
          backdrop_path: `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${res.data.results[random].backdrop_path}`,
          id: res.data.results[random].id,
        });
      });
  };

  // Potential action 3)
  handleClickChooseNewMovie = () => {
    console.log("Shuffle");
    this.requestMovie()
    this.clearState()
  };

  clearState = () => {
      this.setState(this.baseState)
  }

  // Reviews button / Link

  handleClickReview = () => {
    <Link to="/Reviews"> ⭐⭐⭐ </Link>;
    console.log("To Review");
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => {
      return{
        ...prevState,
        [name]: value,
      }
    });
  };

  // handles the radio button
  onValueChange = (e) => {
    const { value } = e.target;
    this.setState(prevState => {
      return {
        ...prevState,
        starRating: value,
      };
    });
  };

  submitReview = (e) => {
    e.preventDefault();
    console.log("submit")
    this.setState(prevState => {
      const rating = {
        starRating: this.state.starRating,
        textbox: this.state.textbox,
        name: this.state.name
      };
      return {
        ...prevState,
        reviews: [...prevState.reviews, rating],
        textbox: "",
        name: "",
      };
    });
  };


  render() {
    return (
      <Provider
        value={{
          title: this.state.title,
          overview: this.state.overview,
          release_date: this.state.release_date,
          backdrop_path: this.state.backdrop_path,
          id: this.state.id,
          starRating: this.state.starRating,
          textbox: this.state.textbox,
          name: this.state.name,
          reviews: this.state.reviews,
          handleChange: this.handleChange,
          onValueChange: this.onValueChange,
          handleClickReview: this.handleClickReview,
          handleClickChooseNewMovie: this.handleClickChooseNewMovie,
          submitReview: this.submitReview,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Context, Consumer };