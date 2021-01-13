import React from "react";
import { Consumer } from "./contextProvider";

function Form(props) {
  return (
    <Consumer>
      {(context) => {
        return (
          <div className="form-cont">
            <form className="form">
              <br></br>
              <input
                style={{
                  width: "75px", textAlign: "center"}}
                name="imgUrl"
                type="text"
                value={context.imgUrl}
                onChange={context.handleChange}
                placeholder="URL"
              ></input>
              {/* <hr style={{width: "150px"}}></hr> */}
              <input
                style={{ width: "75px", textAlign: "center"}}
                name="title"
                type="text"
                value={context.title}
                onChange={context.handleChange}
                placeholder="Title"
                maxlength="30"
              ></input>
              {/* <hr style={{width: "150px"}}></hr> */}
              <input
                style={{ width: "75px", textAlign: "center"}}
                name="description"
                type="text"
                value={context.description}
                onChange={context.handleChange}
                placeholder="Description"
                maxlength="30"
              ></input>
              <br></br>
              <br></br>
              <button
                style={{ width: "75px", textAlign: "center"}}
                onClick={context.handleClick}
              >
                Submit
              </button>
              <br></br>
              <br></br>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
}
export default Form;


