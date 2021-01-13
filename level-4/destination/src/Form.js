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
                    placeholder="Your first Name"
                    maxlength="15"
                    value={context.Name}
                    name="name"
                    onChange={context.handleChange}
                  />
                </label>
                <label>
                  <input 
                    type="text"
                    maxlength="50"
                    placeholder="Write a review"
                    value={context.textbox}
                    name="textbox"
                    onChange={context.handleChange}
                  />
                </label>
              </div>
              <button onClick= {(e) => {context.submitReview(e)}}>Submit Movie Rating</button>
            </form>
          </div>
        );
      }}
</Consumer>
);
}
