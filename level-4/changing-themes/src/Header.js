import React from 'react'
import {ThemeContextConsumer} from "./themeContext"

function Header(props){
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <h1>'Here Yee, Here Yee'</h1>
                </div>
            )}   
        </ThemeContextConsumer>
    )
}

export default Header
