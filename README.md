# rs-react-select

## Select menu pluggin for [project 14 : Pass a jQuery library to React](https://github.com/remisany/RemiSany_14_08092021)

A simple react select menu

1. [Installation](#Installation)
2. [Examples of use](#Example)
3. [Default option](#Default)

<div id='Installation'>

## Installation

You can install rs-react-modal with npm:
`npm i rs-react-select`

For import rs-react-modal:
`import {Select} from "rs-react-select"`

<div id='Example'>

## Examples of use

### Example 1: by default

```js
<Select
    options = {states}
/>
```

![Alt text](/examples/By_default.PNG)

### Example 2: with title and placeholder

```js
    <Select
        options = {states}
        placeholder = "State choice"
        title = "State"
    />
```

![Alt text](/examples/Title_Placeholder_Close.PNG)
![Alt text](/examples/Title_Placeholder_Open.PNG) 

### Example 3: customized

```js
const customSelectMenu = {
    background: "#CECECE",
    borderRadius: "5px",
    border: "none"
}
    
const customList = {
    border: "none"
}

<Select
    options = {states}
    styleList = {customList}
    styleSelectMenu = {customSelectMenu}
/>
```

![Alt text](/examples/Customized.PNG) 

<div id='Default'>

## Default option

### Default content

```js
Select.defaultProps = {
    down: Down, //To change the default down image
    hoverBackground: "#CECECE", //To customize the hover option background style
    options: ["Option 1", "Option 2", "Option 3"], //Options to display
    placeholder: "", //If no value then option 1 by default
    styleContainer: {}, //To customize the container style which contains all the select menu 
    styleImg: {}, //To customize the img style
    styleList: {}, //To customize the list of options style
    styleOption: {}, //To customize the option style
    styleOptionSelected: {}, //To customize the option selected style
    stylePlaceholder : {}, //To customize the placeholder style
    styleSelectMenu: {}, //To customize the select menu style
    styleTitle: {}, //To customize the title style
    title: "", //To change the title content
    up: Up //To change the default up image
}
```

### Default type

```js
Select.propTypes = {
    down: PropTypes.string,
    hoverBackground: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    styleContainer: PropTypes.object,
    styleImg: PropTypes.object,
    styleList: PropTypes.object,
    styleOption: PropTypes.object,
    stylePlaceholder: PropTypes.object,
    styleOptionSelected: PropTypes.object,
    styleSelectMenu: PropTypes.object,
    styleTitle: PropTypes.object,
    title: PropTypes.string,
    up: PropTypes.string,
}
```