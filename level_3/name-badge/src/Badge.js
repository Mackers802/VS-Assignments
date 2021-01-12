import React from 'react'
import "./badge.css"

function Badge (props){
    // const {firstName, lastName, ...} = props
    return(
      <div className="badgeCont">
        <div clasName="badge">
            <h1>
              <p>
               Name: {props.badge.firstName} {props.badge.lastName}
              </p> 
              <p>
                Phone: {props.badge.phone}
              </p>
              <p>
                Place of Birth: {props.badge.placeOfBirth}
              </p>
              <p>
                Favorite Food: {props.badge.favoriteFood}
              </p>
              <p>
                Email: {props.badge.email}
              </p>
              <p>
                {props.badge.aboutYou}
              </p>
              <hr></hr>
            </h1>
        </div>
      </div>
    )
}

export default Badge