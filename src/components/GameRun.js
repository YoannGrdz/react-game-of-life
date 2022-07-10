import React from "react";

export default function GameRun(props){
    return(
        <div className="play--div">
            <button onClick={props.play} id="play--button">
            play
            </button>
        </div>
    );
}