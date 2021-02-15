import React from 'react'

export const Comment = (props) => {

    // const { comment } = useContext(UserAuthContext)
const { description  } = props

    return (
       
                <div>
                    <h1> { description } </h1>
                </div>
    )
}
