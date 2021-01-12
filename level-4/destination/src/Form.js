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
                      checked={context.starRating.checked}
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
                      checked={context.starRating.checked}
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
                      checked={context.starRating.checked}
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
                      checked={context.starRating.checked}
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
                      checked={context.starRating.checked}
                      onClick={context.onValueChange}
                    />
                    ⭐⭐⭐⭐⭐
                  </label>
                </div>
              </div>
              <div>
                <label>
                  <input 
                    type="text"
                    placeholder="Write a review"
                    value={context.textbox}
                    name={context.textbox}
                    onChange={context.handleChange}
                  />
                </label>
              </div>
              <button onClick={context.submitReview}>Submit Movie Rating</button>
            </form>
          </div>
        );
      }}
</Consumer>
);
}
