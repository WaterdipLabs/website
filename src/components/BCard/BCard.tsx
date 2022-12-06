import React from "react";
import './bcard.css';
import clsx from "clsx";

export default function BCard(props): JSX.Element {
    return(
        <div className="bcard">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}