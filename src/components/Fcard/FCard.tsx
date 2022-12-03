import React from "react";
import './fcard.css';
import clsx from "clsx";

export default function BCard(props): JSX.Element {
    return(
        <div className="fcard">
            <img src={props.img} alt="desc" />
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}