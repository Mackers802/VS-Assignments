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
    starRating: false,
    name: "",
    movie: {},
    textbox: "",
    reviews: [],
  };

  // Action 1)
  componentDidMount = () => {
    console.log("did mount");
    this.requestMovie();
  };

  // Action 2)
  requestMovie = (e) => {
    // const randomPage = Math.floor(Math.random() * 2);
    // console.log(randomPage);
    const random = Math.floor(Math.random() * 20);
    // console.log(random);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d246833b98ed7223e0d531d6ef59d00f&language=en-US&page=4`
      )
      // ${randomPage}
      // (`https://api.themoviedb.org/3/movie/top_rated?api_key=d246833b98ed7223e0d531d6ef59d00f&language=en-US&page=1`)
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
    this.requestMovie();
  };

  // Reviews button / Link

  handleClickReview = () => {
    <Link to="/Reviews"> ⭐⭐⭐ </Link>;
    console.log("To Review");
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onValueChange = (e) => {
    const { value } = e.target;
    this.setState((prevState) => {
      return {
        // ...this.state,
        starRating: value,
      };
    });
  };

  submitReview = (e) => {
    e.preventDefault();
    console.log("submit")
    this.setState(prevState => {
      const rating = {
        starRating: prevState.starRating,
        textbox: prevState.textbox,
      };
      return {
        reviews: [...prevState.reviews, rating],
        starrating: false,
        textbox: "",
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
          // value: this.state.value,
          textbox: this.state.textbox,
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

// State to handle Form change
//   handleChange = (e) => {
//     e.preventDefault()
//     const {name, value} = e.target
//     this.setState(prevState => {
//         return{...prevState,
//             [name] : value
//         }
//     })
// }
//   onValueChange = (e) => {
//     e.preventDefault();
//     this.setState({
//       selectedOption: e.target.value,
//     });
//   };

//   formSubmit = (e) => {
//     e.preventDefault();
//     console.log("form submitted");
//     this.setState(prevState => {
//         const review = {

//         }
//     })
//   }
