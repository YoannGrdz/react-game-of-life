// This component controls the button which starts the game.
// The "play" function starts the iterations.
// to do : make the button toggleable, and modify the function so that
// it iterate continuously untill toggled again or untill a certain number of iterations is reached.

import React from "react";

export default function GameRun(props){
    return(
        <div className="play--div">
            <button onClick={props.run} id="play--button">
            {props.playing ? "stop" : "play"}
            </button>
        </div>
    );
}