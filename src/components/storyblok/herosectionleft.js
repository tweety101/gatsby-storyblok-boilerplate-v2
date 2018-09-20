import React from 'react'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'
import Remarkable from 'remarkable';
import RemarkableReactRenderer from 'remarkable-react';
import Link from 'gatsby-link'
import styled from 'react-emotion'


const md = new Remarkable();
md.renderer = new RemarkableReactRenderer();


const HeroSectionLeft = (props) => (
    <div
    className={css`
    height: 70vh;
    background: url(${props.blok.image.replace("//a.storyblok.com", "//img2.storyblok.com/700x0/smart")});
    background-size: cover;
    @media (min-width:700px) {
        height: 70vh;
        background: url(${props.blok.image.replace("//a.storyblok.com", "//img2.storyblok.com/1500x0/smart")});
        background-size: cover;
    }
    @media (min-width:1500px) {
        height: 70vh;
        background: url(${props.blok.image.replace("//a.storyblok.com", "//img2.storyblok.com")});
        background-size: cover;
    }
    `}>
        <div
            className={css`
    background: linear-gradient(rgba(252, 250, 255, 0.71),rgba(252, 250, 255, 0.71));
    max-width:400px;
    height: 100%;
    margin-left:50px;
    padding: 0px 40px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    

    `}>     <div
            className={css`
            h2 {
                font-size: 50px;
                color: #6AB9CF;
                border-bottom: solid black 1px;
            }
            h3 {
                font-size: 30px;
                color: #223F5F;
            }
            
            `}>
                <h2>{props.blok.headline}</h2>
                <h3>{props.blok.sub_headline}</h3>
            </div>

            <div
                className={css`
        color:#2C2B2B;
        `}>{md.render(props.blok.text)}</div>
            <Link
                className={css`
        display:block;
        padding: 10px 0px;
        width:100%;
        background-image: linear-gradient(#2A5471, #509ACF);
        color: white;
        text-align: center;
        font-size: 20px;
        text-decoration: none;
        `}
        to={props.blok.button_link.cached_url}>{props.blok.button_text}</Link>
        </div>
    </div>
)

export default HeroSectionLeft