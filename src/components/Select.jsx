import React, { useState, useEffect, Fragment } from "react"
import PropTypes from "prop-types";
import styled from "styled-components";

import Up from "../assets/caret-up-solid.svg"
import Down from "../assets/caret-down-solid.svg"

const TITLE = styled.h3`
    ${(props) => props.customStyle}
`

const LIST = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border: solid 1px;
    border-top: none;
    width: 408px;
    ${(props) => props.customStyle}
`

const SELECTMENU = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px;
    padding: 2px 4px;
    width: 400px;
    ${(props) => props.customStyle}
`

const PLACEHOLDER = styled.span`
    cursor: pointer;
    width: 100%;
    ${(props) => props.customStyle}
`

const OPTIONSELECTED = styled.span`
    cursor: pointer;
    width: 100%;
    ${(props) => props.customStyle}
`

const IMG = styled.img`
    height: 20px;
    width: 20px;
    ${(props) => props.customStyle}
`

const OPTION = styled.div`
    cursor: pointer;
    padding: 2px 4px;
    width: 400px;

    :hover {
        background: ${props => props.hoverBackground};
    }

    ${(props) => props.customStyle}
`

/**
* @param {object} props - Props
* @param {string} down - To change the default down image
* @param {string} hoverBackground - To customize the hover option background style
* @param {array} options - Options to display
* @param {string} placeholder - If no value then option 1 by default
* @param {object} styleImg - To customize the img style
* @param {object} styleList - To customize the list of options style
* @param {object} styleOption - To customize the option style
* @param {object} styleOptionSelected - To customize the option selected style
* @param {object} stylePlaceholder - To customize the placeholder style
* @param {object} styleSelectMenu - To customize the select menu style
* @param {object} styleTitle - To customize the title style
* @param {string} title - To change the title content
* @param {string} up - To change the default up image
* @returns {component} - Select menu
*/

function Select ({down, hoverBackground, options, placeholder, styleImg, styleList, styleOption, stylePlaceholder, styleOptionSelected, styleSelectMenu, styleTitle, title, up}) {
    const [open, setOpen] = useState(false)
    const [choice, setChoice] = useState(placeholder !== "" ? placeholder : options[0])
    const [initialOption, setInitialOption] = useState(true)

    const selected = (e) => {
        setChoice(e.target.innerHTML)
        setOpen(false)
        initialOption && setInitialOption(false)
    }

    const escape = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (open) {
            window.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    escape()
                }
            })

            window.addEventListener("click", escape)
        }

        return () => {
            window.removeEventListener("keydown", escape);
            window.removeEventListener("click", escape)
        }
      },[open])

    return (
        <Fragment>
            {title !== "" && <TITLE customStyle = {styleTitle}>{title}</TITLE>}
            <SELECTMENU customStyle = {styleSelectMenu}>
                {initialOption ? 
                    <PLACEHOLDER customStyle = {stylePlaceholder} onClick = {(e) => {
                        setOpen(true)}}
                    >
                        {choice}
                    </PLACEHOLDER>
                :
                    <OPTIONSELECTED onClick = {(e) => setOpen(true)} customStyle = {styleOptionSelected}>{choice}</OPTIONSELECTED>
                }
                {open ? <IMG src = {up} customStyle = {styleImg}/> : <IMG src = {down} customStyle = {styleImg}/>}
            </SELECTMENU>

            {open ?
                <LIST customStyle = {styleList}>
                    {options.map((option, index) =>(
                        <OPTION key = {index} onClick = {(e) => selected(e)} hoverBackground = {hoverBackground} customStyle = {styleOption}>
                            {option}
                        </OPTION>
                    ))}
                </LIST>
            :
                null
            }
        </Fragment>
    )
}

Select.propTypes = {
    down: PropTypes.string,
    hoverBackground: PropTypes.string, 
    options: PropTypes.array,
    placeholder: PropTypes.string,
    styleContainer: PropTypes.object,
    styleImg: PropTypes.object,
    styleList: PropTypes.object,
    styleOption: PropTypes.object,
    styleOptionSelected: PropTypes.object,
    stylePlaceholder: PropTypes.object,
    styleSelectMenu: PropTypes.object,
    styleTitle: PropTypes.object,
    title: PropTypes.string,
    up: PropTypes.string,
}
  
Select.defaultProps = {
    down: Down,
    hoverBackground: "#CECECE",
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "",
    styleContainer: {},
    styleImg: {},
    styleList: {},
    styleOption: {},
    styleOptionSelected: {},
    stylePlaceholder: {},
    styleSelectMenu: {},
    styleTitle: {},
    title: "",
    up: Up
}

export default Select