import React from "react";
import './performancepage.css';
import clsx from "clsx";
import Card from "@site/src/components/Card/Card";

export default function PerformancePage(props): JSX.Element{
    return (
        <div className="performance-screen">
            <div className="performance-text">
                <h1>Take care of your Business KPIs with Waterdip Model <span className="span-bold">Performance Monitoring</span> Platform</h1>
            </div>
            <div className="cards">
                <Card h1="Observer Models in Real-time." p="Observer the health and performance Of your ML Models in Real time"/>
                <Card h1="Explain Models to understand problems" p="Understand the rationale behind the unexpected decisions made by your ML models"/>
                <Card h1="Monitor Models to find problem" p="Get notified instantly when there are unexpected decision  taken by your ML Models"/>
            </div>
        </div>
    )
}