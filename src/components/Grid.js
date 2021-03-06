// The Grid component is responsible for the display of the game's grid, and parent to each Cell component.
// It inherits the gridState from the App component, and uses it to return a 2d array of Cell components.
// It also controls dynamically the CSS grid parameters for the number of rows and columns.

import React from "react";
import "./Cell.js";
import Cell from "./Cell.js";

export default function Grid(props){

    let size = props.size;
    let gridState = props.gridState;
    let toggle = props.toggle;

    // converting state data (a 2d array of objects) to Cell components
    const squaresDivs = [];
    for (let i = 0; i < gridState.length; i++) {
      squaresDivs.push(
        gridState[i].map((cell) => (
          <Cell
            id={cell.id}
            on={cell.on}
            key={cell.id}
            numX={cell.x}
            numY={cell.y}
            toggle={() => toggle(cell.id)}
          />
        ))
      );
    }

    // styles
    const style = {
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`
      };
  
      return (
        <div id="grid" style={style} className="grid">
        {squaresDivs}
        </div>
      );

}