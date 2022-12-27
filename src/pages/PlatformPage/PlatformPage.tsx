import React from "react";
import clsx from "clsx";
import './platformpage.css';
import waterdip from '../../assets/platform.png';
import waterdipMobile from '../../assets/platform-mobile.png';
import Fade from 'react-reveal/Fade';
export default function PlatformPage(props): JSX.Element {
    return(
        <div className="platform-screen">
            <h1><span className="span-bold">Monitoring</span> Across the ML Workflow</h1>
            <Fade bottom>
                <img src={waterdip} className="desktop-waterdip" alt="platform"/>
                <img src={waterdipMobile} className="mobile-waterdip" alt="platform" />
            </Fade>
            
        </div>
    )
}