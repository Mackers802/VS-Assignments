import React from 'react'
import {ThemeContextConsumer} from "./themeContext"
function Footer(props){
    return (
        <ThemeContextConsumer>   
            {context => (
                <h1 className={`${context.theme}-theme`}>Thanks For Changing My Color</h1>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer
