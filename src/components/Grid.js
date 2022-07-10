import React from "react";
import "./Cell.js";
import Cell from "./Cell.js";

export default function Grid(props){

    let size = props.size;
    let gridState = props.gridState;
    let toggle = props.toggle;

    // converting state data to Cell components
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