import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'react-emotion'
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import Image from './image'


const md = new Remarkable();
md.renderer = new RemarkableReactRenderer({
  components:{
    img: Image,
  }
});


const Background = styled('div')`
    position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: translateZ(0);
  background-color: rgba(#000, 0.15);
`

const Content = styled('div')`
    position: fixed;
    top: 20%;
    left: 50%;
  
  padding: 2.5em 1.5em 1.5em 1.5em;
  background-color: #FFFFFF;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

`

const Mapmodal = (props) => {

    return ReactDOM.createPortal (
        <Background
        onClick={props.close}>
            <Content>
            {md.render(props.content)}
            <button
            onClick={props.close}>Close me</button>
            </Content>
        </Background>,
        document.body

    );
}

export default Mapmodal