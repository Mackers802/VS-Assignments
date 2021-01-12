import React from 'react'
import { Consumer } from "./Context";

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