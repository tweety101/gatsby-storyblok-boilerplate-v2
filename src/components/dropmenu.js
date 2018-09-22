import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import { css } from 'emotion'





const Dropmenu = ({ id, open, openfunction, closefunction }) => {
    if (open === id) {
        var display = "block"
    }
    else {
        var display = "none"
    }
    console.log(id, open);
    return (
        <div>
            <button className={css`
            cursor:pointer;
            `} onClick={openfunction}>Dropdown {id}</button>
            <div className={css`
                position: absolute;
                display: ${display};
                z-index: 5;
                `}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <div onClick={closefunction}>close</div>
            </div>
        </div>
    )
}



export default Dropmenu;