import React from 'react'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'
import styled from 'react-emotion'

const Picture = styled('picture')`


`

const Image = (props) => (
    <Picture>
        <source 
        media="(max-width: 400px)" 
        srcSet={props.src.replace("//a.storyblok.com", "//img2.storyblok.com/400x0/smart")}/>
        <source media="(min-width: 400px)" 
        srcSet={props.src.replace("//a.storyblok.com", "//img2.storyblok.com/700x0/smart")}/>
        <img src={props.src.replace("//a.storyblok.com", "//img2.storyblok.com/700x0/smart")} alt="Flowers" width="100%"/>
    </Picture>
    )
                
export default Image