import React from 'react'


export default function Review({review:{name, starRating, textbox}}) {
    return (
            <div className="reviewDisplay">
                <h1>{name} </h1>
            gave {starRating} ⭐
              <p>
              and Said 
              </p>
                        {textbox}
            </div>
            );
      }