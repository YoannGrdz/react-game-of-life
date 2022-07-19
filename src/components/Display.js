import React from "react";

export default function Display(props){


    return(
        <p>playing : {props.playing ? "true" : "false"}</p>
    )
}