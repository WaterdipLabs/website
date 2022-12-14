import React from "react";
import './performancepage.css';
import clsx from "clsx";
import Card from "@site/src/components/Card/Card";
import Fade from 'react-reveal/Fade';
import { Performances } from "./data";
export default function PerformancePage(props): JSX.Element {
    return (
        <div className="performance-screen">
            <div className="performance-text">
                <h1>Take care of your Business KPIs with Waterdip Model <span className="span-bold">Performance Monitoring</span> Platform</h1>
            </div>
            
                <div className="cards">
                    {Performances.map((performance) =>(
                        <Fade bottom>
                            <Card img={performance.img} h1={performance.h1} p={performance.p} />
                        </Fade>
                        
                    ))}
                </div>

        </div>
    )
}