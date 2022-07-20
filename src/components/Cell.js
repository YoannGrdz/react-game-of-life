// each "Cell" component represents a cell on the grid and is a direct child of the Grid component.
// It has the capacity to alternate between to states, on and off,
// by using the toggle function which modifies the state of the whole grid.
// (this state called gridState is stored in the App component)

import React from "react";

export default function Cell(props){

    const bgColor = props.on ? "#8914B8" : "#DCD6F7";
    const style = {
      backgroundColor: bgColor
    };

    return (
      <div onClick={props.toggle} style={style} className="cell">
        
      </div>
    );

  // display this inside the div for testing : {props.numX} : {props.numY}
}