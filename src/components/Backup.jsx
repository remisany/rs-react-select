import PropTypes from "prop-types";
import styled from "styled-components";

const CONTAINER = styled.div`
    display: flex;
    flex-direction: column;
    ${(props) => props.customStyle}
`

const LABEL = styled.label`
    ${(props) => props.customStyle}
`

const SELECT = styled.select`
    ${(props) => props.customStyle}
`

const PLACEHOLDER = styled.option`
    ${(props) => props.customStyle}
`

const OPTION = styled.option`
    margin: 40px;
    ${(props) => props.customStyle}
`

function Select ({options, placeholder, selectTitle, styleContainer, styleLabel, styleOption, stylePlaceholder, styleSelect}) {

    const label = selectTitle.replace(" ", "-").toLowerCase()

    return (
        <CONTAINER customStyle = {styleContainer}>
            {selectTitle !== "" && <LABEL htmlFor = {label} customStyle = {styleLabel}>{selectTitle}</LABEL>}
            <SELECT id = {label} customStyle = {styleSelect}>
                {placeholder !== "" && <PLACEHOLDER value = "" customStyle = {stylePlaceholder}>{placeholder}</PLACEHOLDER>}
                {options.map((option, index) =>(
                    <OPTION
                        key = {index}
                        value = {option}
                        customStyle = {styleOption}
                    >
                        {option}
                    </OPTION>
                ))}
            </SELECT>
        </CONTAINER>
    )
}

Select.propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    selectTitle: PropTypes.string,
    styleContainer: PropTypes.object,
    styleLabel: PropTypes.object,
    styleOption: PropTypes.object,
    stylePlaceholder: PropTypes.object,
    styleSelect: PropTypes.object
}
  
Select.defaultProps = {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "",
    selectTitle: "Title",
    styleContainer: {},
    styleLabel: {},
    styleOption: {},
    stylePlaceholder: {},
    styleSelect: {}
}

export default Select