import React from 'react'
import styled from 'react-emotion'

const Bar = styled('div')`
    background: #3D3B33;
    height: 10%;
    width: 80%;

`
const Container = styled('div')`
    border: solid black 1px;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

`



const Hamburger = () => (
    <Container>
        <Bar/>
        <Bar/>
        <Bar/>
    </Container>
)

export default Hamburger;