import React from 'react'

export const Comment = (props) => {

    const { comment } = props

    return (
        <div>
            <h1> { comment } </h1>
        </div>
    )
}
