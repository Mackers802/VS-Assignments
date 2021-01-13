import React from 'react'


export default function Review(props) {
    return (
            <div className="reviewDisplay">
                <h1>{props.review.name} </h1>
            gave {props.review.starRating} ⭐
              <p>
              and Said 
              </p>
                        {props.review.textbox}
            </div>
            );
      }