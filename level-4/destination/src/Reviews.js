import React from 'react'
import { Consumer } from "./Context";
// import Reviews from "./Reviews";
// <Reviews />

export default function Reviews(props) {
    return (
<Consumer>
      {(context) => {
        return (
            <div>
                    {context.review}
            </div>
            );
      }}
</Consumer>
);
}