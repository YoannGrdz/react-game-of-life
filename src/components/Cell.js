import React from "react";

export default function Cell(props){

    const bgColor = props.on ? "purple" : "white";
    const style = {
      backgroundColor: bgColor
    };

    return (
      <div onClick={props.toggle} style={style} className="cell">
        {props.numX} : {props.numY}
      </div>
    );

}