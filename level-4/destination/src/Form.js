// import React from "react";
// import Reviews from "./Reviews";
// import axios from "axios"
import { Consumer } from "./Context";

export default function Form(props) {
  return (
    <Consumer>
      {(context) => {
        return (
          <div>
          <form className="formContainer">
              <div className="radioButtons">
                <div>
                  <label>
                    <input
                      type="radio"
                      value="1"
                      name={context.starRating}
                      checked={context.starRating}
                      onClick={context.onValueChange}
                    />
                    ⭐
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="2"
                      name={context.starRating}
                      checked={context.starRating}
                      onClick={context.onValueChange}
                    />
                    ⭐⭐
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="3"
                      name={context.starRating}
                      checked={context.starRating}
                      onClick={context.onValueChange}
                    />
                    ⭐⭐⭐
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="4"
                      name={context.starRating}
                      checked={context.starRating}
                      onClick={context.onValueChange}
                    />
                    ⭐⭐⭐⭐
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="5"
                      name={context.starRating}
                      checked={context.starRating}
                      onClick={context.onValueChange}
                    />
                    ⭐⭐⭐⭐⭐
                  </label>
                </div>
              </div>
              <button onClick={context.handleSubmit}>Submit Movie Rating</button>
            </form>
            {/* {context.textbox} */}
          </div>
        );
      }}
</Consumer>
);
}


// export default class Form extends React.Component {
//   state = {
//     reviews: "",
//     review: "",
//     checked: "",
//     textArea: ""
//   };

//   onValueChange = (e) => {
//         e.preventDefault();
//         this.setState({
//           checked: e.target.value,
//           textArea: e.target.value
//         });
//       };
    

//   submitReview = (e) => {
//     e.preventDefault()
//     console.log(this.state.reviews)
//     this.setState(prevState => {
//       const review = {
//         checked: prevState.checked,
//         textArea: prevState.textArea
//       }
//       return(
//         {
//           reviews: [...prevState.reviews, review],
//           review: ""
//         }
//         )
//       })
//       // this.requestData()
//       console.log(this.state.reviews)
//   }

// //   requestData = (e) => {
// //     e.preventDefault()
// //     axios.get(`https://api.vschool.io/mackyandowL4/thing`)
// //     .then(res => {
// //         this.setState({reviews: res.data})
// //     })
// // }

//   //   postRequest = () => {
//   //     const newRev = {
//   //        reviews:this.state.review
//   //     }
//   //     axios.post(`https://api.vschool.io/mackyandow/thing`, newRev)
//   //     .then(res => {
//   //         this.requestData()
//   //     })

//   //     this.requestData()
//   // }

//   render() {
//     return (
//       <div>
//         <form className="formContainer">
//           <div className="radioButtons">
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="1"
//                   name="starRating"
//                   checked={this.state.checked === "1"}
//                   // onClick={context.onValueChange}
//                 />
//                 ⭐
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="2"
//                   name="starRating"
//                   checked={this.state.checked === "2"}
//                   // onClick={context.onValueChange}
//                 />
//                 ⭐⭐
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="3"
//                   name="starRating"
//                   checked={this.state.checked === "3"}
//                   // onClick={context.onValueChange}
//                 />
//                 ⭐⭐⭐
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="4"
//                   name="starRating"
//                   checked={this.state.checked === "4"}
//                   // onClick={context.onValueChange}
//                 />
//                 ⭐⭐⭐⭐
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   value="5"
//                   name="starRating"
//                   checked={this.state.checked === "5"}
//                   // onClick={context.onValueChange}
//                 />
//                 ⭐⭐⭐⭐⭐
//               </label>
//             </div>
//             <div>
//               <label>
//                 <input placeholder="Write a review" type="textArea" value={this.state.handleChange} />
//               </label>
//             </div>
//           </div>
//           <button onClick={this.submitReview} >Submit Movie Rating</button>
//         </form>

//       <br></br>
//         {/* {reviews.map(review => {
//           return(
//           <Reviews review = {this.state.review} />
//           )
//         })} */}
//       </div>
//     );
//   }
// }

