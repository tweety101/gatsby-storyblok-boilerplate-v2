import React from 'react'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import Image from './image'

const md = new Remarkable();
md.renderer = new RemarkableReactRenderer({
  components:{
    img: Image,
  }
});


const Feature = (props) => (
  <SbEditable content={props.blok}>
    <div className={css`
    max-width:700px;
    width:100%;
    margin: auto;
    
    `}>
      <h2>{props.blok.headline}</h2>
      {md.render(props.blok.text)}
      </div>
  </SbEditable>
)

export default Feature
