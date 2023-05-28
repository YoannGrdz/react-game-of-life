import React from "react";

export default function Display(props){


    return(
        <div className="display">
            <p>iterations: {props.iterations}</p>
            <p>game: {props.playing ? "on" : "paused"}</p>
        </div>
    )
}