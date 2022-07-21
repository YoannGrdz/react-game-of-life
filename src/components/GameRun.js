// This component controls the button which starts the game.
// The "play" function starts the iterations.

import React from "react";

export default function GameRun(props){

    const setGridState = props.setGridState;
    const size = props.size;
    const setPlaying = props.setPlaying;
    const setIterations = props.setIterations


    // generating 2d array that will then be used as the reset state (similar to base state initalized in "App.js")
    const squares = [];
    let idCount = 0;
    for (let i = size; i > 0; i--) {
    let newArr = [];
    for (let j = 1; j < size + 1; j++) {
        idCount++;
        // let id = Number(String(j) + String(i));
        newArr.push({ id: idCount, x: j, y: i, on: false });
    }
    squares.push(newArr);
    }

    function reset(){
        setGridState(squares);
        setIterations(0);
    }

    // switches the game on and off
    function run(){
        setPlaying(previous => !previous);
      }

    return(
        <div className="play--div">
            <button onClick={run} id="play--button">
            {props.playing ? "stop" : "play"}
            </button>
            <button onClick={() => {setPlaying(false); reset()}} id="reset--button">reset</button>
        </div>
    );
}