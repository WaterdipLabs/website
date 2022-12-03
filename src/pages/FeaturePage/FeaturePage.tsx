import React, { useState } from "react";
import clsx from "clsx";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import FCard from "@site/src/components/FCard/FCard";
import next from '../../assets/Vector.png';
import back from '../../assets/Vector1.png';
import { features } from "./data";

import './featurepage.css';
export default function FeaturePage(props) {
    const [slides, onSlide] = useState(3);
    return (
        <div className="feature-screen">
            <h1>Our Features</h1>
            <CarouselProvider
                visibleSlides={3}
                totalSlides={9}
                step={3}
                naturalSlideWidth={300}
                naturalSlideHeight={450}

                infinite
            >
                <Slider className="slider">
                    {features.map((feature) => (
                        <Slide index={feature.id} className="slide">
                            <FCard img={feature.img} h1={feature.h1} p={feature.p} />
                        </Slide>
                    ))}
                </Slider>
                <div className="slid-flex">
                    <ButtonBack><img src={back} alt="back" /></ButtonBack>
                    <div className="slid-dot-flex">
                        <Dot slide={0} />
                        <Dot slide={3} />
                        <Dot slide={6} />
                    </div>
                    <ButtonNext><img src={next} alt="back" /></ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
}