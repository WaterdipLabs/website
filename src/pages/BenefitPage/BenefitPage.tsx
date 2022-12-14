import React from "react";
import './benefitpage.css';
import clsx from "clsx";
import BCard from "@site/src/components/BCard/BCard";
import { benefits } from "../../utils/data";
import Fade from 'react-reveal/Fade';
export default function BenefitPage(props): JSX.Element{
    return (
        <div className="benefit-screen">
            <div className="benefit-text">
                <h1>Benifits get by <span className="span-bold">ML Engineers</span> &#38; <span className="span-bold">Product Leaders</span></h1>
            </div>
            <div className="ben-card"></div>
            
            <div className="ben-cards">
                {benefits.map((benefit) => (
                    <Fade bottom>
                        <BCard h1={benefit.h1} p={benefit.p} />
                    </Fade>
                ))}
            </div>
            
        </div>
    )
}