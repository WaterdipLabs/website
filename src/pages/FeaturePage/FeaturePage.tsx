import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import FCard from "@site/src/components/FCard/FCard";
import { features } from "../../utils/data";
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'
import vector from '../../assets/Vector.png'
import vector1 from '../../assets/Vector1.png'
import './featurepage.css';
const CustomBtn = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: ${({ type }) => (type === 'left' ? '#FFFFFF':'#0466C8')};
  color: ${({ type }) => (type === 'left' ? 'black':'white')};
  cursor: pointer;
  top: 40%;
  z-index: 10;
  border-radius: 50%;
  transition: all 0.25s;
  left: ${({ type }) => (type === 'left' ? '0' : 'initial')};
  right: ${({ type }) => (type === 'right' ? '0' : 'initial')};
  &:hover {
    opacity: 0.5;
  }
`
const CustomDot = styled.span`
  margin-top: 100px;
  display: inline-block;
  height: 10px;
  width: ${({ isActive }) => (isActive ? '23px' : '15px')};
  border-radius: 8px;
  background: ${({ isActive }) => (isActive ? '#0466C8' : '#FFFFFF')};
  transition: all 0.2s;
`
export default function FeaturePage(props) {
    return (
        <div className="feature-screen">
            <h1 className="featuresh1">Our Features</h1>
            <div className="lol">
                <Carousel showDots arrowLeft={<CustomBtn type="left"><img src={vector1} alt="open"/></CustomBtn>}
        arrowRight={<CustomBtn type="right"><img src={vector} alt="close"/></CustomBtn>} dot={CustomDot} cols={3} rows={1} gap={50} responsiveLayout={[
                    {
                        breakpoint: 1500,
                        cols: 2,
                        gap: 20
                    },
                    {
                        breakpoint: 850,
                        cols: 1,
                        
                    }
                ]}
                    mobileBreakpoint={1}>
                    {features.map((feature) => (
                        <Carousel.Item index={feature.id} >
                            <FCard img={feature.img} h1={feature.h1} p={feature.p} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}