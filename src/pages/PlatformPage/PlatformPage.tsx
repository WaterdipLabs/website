import React from "react";
import clsx from "clsx";
import './platformpage.css';
import waterdip from '../../assets/platform.png';

export default function PlatformPage(props): JSX.Element {
    return(
        <div className="platform-screen">
            <h1>The <span className="span-bold">Waterdip</span> Platform</h1>
            <img src={waterdip} alt="platform"/>
        </div>
    )
}