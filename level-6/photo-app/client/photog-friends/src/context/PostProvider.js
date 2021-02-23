import React from 'react'

export const PostProviderContext = React.createContext()

export const PostProvider = (props) => {


    return (
       <PostProviderContext.Provider
        value={{
            
        }}
       >
            { props.children }
       </PostProviderContext.Provider>
    )
}
