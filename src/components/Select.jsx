import { useState } from "react"
import PropTypes from "prop-types";
import styled from "styled-components";

import Up from "../assets/caret-up-solid.svg"

const CONTAINER = styled.div`
`

const LIST = styled.div`
    display: flex;
    flex-direction: column;
`

const OPTIONSELECTED = styled.div`
    display: flex;
    cursor: pointer;
    border: solid 1px;
    padding: 2px 4px;
    width: 400px;
`

const IMG = styled.img`
    height: 20px;
    width: 20px;
`

const OPTION = styled.div`
    cursor: pointer;
    padding: 2px 4px;
    width: 400px;

    :hover {
        background: #CECECE;
    }
`

function Select ({options, placeholder, title}) {
    const [open, setOpen] = useState(false)
    const [choice, setChoice] = useState(placeholder !== "" ? placeholder : options[0])

    const selected = (e) => {
        setChoice(e.target.innerHTML)
        setOpen(!open)
    }

    return (
        <CONTAINER>
            {title !== "" && title}
            <OPTIONSELECTED onClick = {(e) => selected(e)}>{choice}</OPTIONSELECTED>

            {open ?
                <LIST>
                    {options.map((option, index) =>(
                        <OPTION key = {index} onClick = {(e) => selected(e)}>
                            {option}
                        </OPTION>
                    ))}
                </LIST>
            :
                null
            }
        </CONTAINER>
    )
}

Select.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    title: PropTypes.string,
}
  
Select.defaultProps = {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "",
    title: ""
}

export default Select