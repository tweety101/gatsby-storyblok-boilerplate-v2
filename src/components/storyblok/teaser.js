import React from 'react'
import { Link } from 'gatsby'
import SbEditable from 'storyblok-react'
import { css } from 'emotion'

const Teaser = (props) => (
  <SbEditable content={props.blok}>
    <div className={css`
          width: 100%;
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
          display: flex;
          justify-content: center;
          align-items: center;
          `}>
      <div
        className={css`
          padding: 20px;
          color:white;
          text-align:center;
          `}>
        <h1>{props.blok.headline}</h1>
        <p>{props.blok.intro}</p>
        <p>
          <Link
            className={css`
          padding:10px 20px;
          background-color:${props.blok.button_color};
          color: white;
          `}
            to={props.blok.button_link.cached_url}>
            {props.blok.button_text}
          </Link>
        </p>
      </div>
    </div>
  </SbEditable>
)



export default Teaser
