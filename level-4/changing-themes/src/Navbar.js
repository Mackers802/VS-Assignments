import React from 'react'
import {ThemeContextConsumer} from "./themeContext"

function Navbar(props){
    return (
        <ThemeContextConsumer>  
        {context => (
            <div className={`${context.theme}-theme`}>
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Contact</ul>
            </div>
        )}
        </ThemeContextConsumer>
    )
}
export default Navbar
