import React from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import Review from "./Review";
// <Reviews />
import { Consumer } from "./Context";

export default function reviews(props) {
  return (
    <Consumer>

      {(context) => {
        return (
          <div className="reviewContainer">
              <br></br>
              <div className="revImg">
              <Link to="/Movie">
              <img src={context.backdrop_path} alt={context.title} style={{width: "85vw",
                        height: "50vh"}}></img>
                            </Link>
              </div>
              <p>Click image for {context.title} discription page</p>
            <h1>Tell me what you thought about
            <br></br>
             {context.title}</h1>
            <div className="formRate">
              <Form />
            </div>
                <h1>Previous Ratings</h1>
            <div className="writtenReviews">
                    {context.reviews.map(review => <Review review = {review} />)}
                </div>
            {/* <Reviews /> */}
          <br></br>
          </div>
        );
      }}
    </Consumer>
  );
}
