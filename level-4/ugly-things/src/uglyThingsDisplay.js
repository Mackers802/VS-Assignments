import React from "react";

export default function uglyThingsDisplay(props) {
  return (
    <div className="uglyThingDisplay">
      <div className="image">
        <img
          src={props.uglyThing.imgUrl}
          alt={props.uglyThing.title}
          width="225"
          height="150"
        ></img>
      </div>

      <div className="descBox">
        <div>
          <p>
            Title: {props.uglyThing.title}
            <br></br>
            <br></br>
            Description: {props.uglyThing.description}
          </p>
            <button
              onClick={() => {
                props.editForm(props.uglyThing);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                props.deleteButton(props.uglyThing);
              }}
            >
              Delete
            </button>
        </div>
      </div>
      {/* passing in the specific data from each individual ugly thing  */}
    </div>
  );
}
