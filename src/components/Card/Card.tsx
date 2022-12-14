import React from "react";
import clsx from "clsx";
import img from '../../assets/Rectpng.png';
import './card.css';
export default function Card(props): JSX.Element{
    return(
        <div className="card">
            <img src={props.img} alt="card-man"/>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </div>
    )
}