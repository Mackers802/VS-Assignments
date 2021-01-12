import React from "react";
import {Consumer} from "./Context"
import { Link } from "react-router-dom";

export default function Home(props){
    return(
        <Consumer>
            {(context) => {
                return(
                    <div className="containerHome">
                        <h1>{context.title}</h1>
                        <div className="imageHome">
                            <Link to="/Movie">
                            <img src={context.backdrop_path} alt={context.title} style={{
                                width: "85vw",
                                height: "50vh"
                            }}/>
                            </Link>
                            <p>Click image see more info about {context.title}</p>
                        <button onClick={context.handleClickChooseNewMovie}>Shuffle Movie</button>
                        <br></br>
                        <br></br>
                        <div className="snacks">
                            Dont forget your Snacks and Popcorn 
                        </div>
                        <div className="emoji">
                            🥨 🍿 🍫 🍭 🍬 🥤 🍺 🥂 🍼
                        </div>
                        </div>
                    </div>
                )
            }}
        </Consumer>
    )
}