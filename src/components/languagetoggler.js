import React from 'react'
import styled from 'react-emotion'
import { Link, replace } from 'gatsby'

const Wrapper = styled('div')`


`


const Languagetoggler = (props) => {
    let newurl = "/"
    let text = "you choose"
    if (props.myurl.substring(0,3) === "/en") {
        newurl = props.myurl.replace("/en", "/cn")
        text = "Chinese"
    }
    else if (props.myurl.substring(0,3) === "/cn") {
        newurl = props.myurl.replace("/cn", "/en")
        text = "English"
    }
    else {
        
    }
    return(
        <Wrapper>
        <Link
        to={newurl}>
        {text}</Link>
        </Wrapper>


    )
}

export default Languagetoggler