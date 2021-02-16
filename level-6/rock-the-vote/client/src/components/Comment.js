import React from 'react'

export const Comment = (props) => {

    // const { comment } = useContext(UserAuthContext)
const { description } = props

    return (
       
                <div className="comments">
                    <p> ~ { description } </p>
                </div>
    )
}
