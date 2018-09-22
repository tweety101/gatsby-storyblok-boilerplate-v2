import React from 'react'
import styled, { keyframes } from 'react-emotion'

const pulse = keyframes`
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
`
const Clickarea = styled('circle')`
    fill: rgb(255, 255, 255, 0);
    stroke: none;
    cursor: pointer;
`


const Outercircle = styled('circle')`
        fill: none;
        stroke: #f4feff;
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 3px;
        animation: ${pulse} 3s ease infinite ;
`

const Innercircle = styled('circle')`
        fill: #fff;
        animation: ${pulse} 3s ease infinite ;
        animation-delay: 0.5s;
`

const Bullseye = (props) => (
    <g onClick={props.click}>
        <Outercircle cx={props.cx} cy={props.cy} r="10"/>
        <Innercircle cx={props.cx} cy={props.cy} r="2.9"/>
        <Clickarea cx={props.cx} cy={props.cy} r="20"/>
    </g>
)

export default Bullseye;