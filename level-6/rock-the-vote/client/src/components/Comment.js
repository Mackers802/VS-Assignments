import React, { useContext } from 'react'
import { UserAuthContext } from '../context/UserAuthProvider.js'

export const Comment = () => {

    const { comments } = useContext(UserAuthContext)

    return (
       
                <div>
                    <h1> Comment { comments } </h1>
                </div>
    )
}
