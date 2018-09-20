import React from 'react'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'
import Link from 'gatsby-link'


const Button = (props) => (
    <SbEditable content={props.blok}>
        <div>
            <Link className={css`
        padding: 10px 40px;
        background-image: linear-gradient(#2A5471, #509ACF);
        color: white;
        text-align: center;
        font-size: 20px;
        text-decoration: none;
        `}
                to={props.blok.link}>{props.blok.text}
            </Link>
        </div>
    </SbEditable>
)

export default Button
