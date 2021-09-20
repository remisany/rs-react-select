'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var img$1 = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='caret-up' class='svg-inline--fa fa-caret-up fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='currentColor' d='M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z'%3e%3c/path%3e%3c/svg%3e";

var img = "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='caret-down' class='svg-inline--fa fa-caret-down fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='currentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e";

const CONTAINER = styled__default['default'].div`
    position: relative;
    ${props => props.customStyle}
`;
const TITLE = styled__default['default'].h3`
    ${props => props.customStyle}
`;
const LIST = styled__default['default'].div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border: solid 1px;
    border-top: none;
    width: 408px;
    ${props => props.customStyle}
`;
const SELECTMENU = styled__default['default'].div`
    display: flex;
    align-items: center;
    border: solid 1px;
    padding: 2px 4px;
    width: 400px;
    ${props => props.customStyle}
`;
const PLACEHOLDER = styled__default['default'].span`
    cursor: pointer;
    width: 100%;
    ${props => props.customStyle}
`;
const OPTIONSELECTED = styled__default['default'].span`
    cursor: pointer;
    width: 100%;
    ${props => props.customStyle}
`;
const IMG = styled__default['default'].img`
    height: 20px;
    width: 20px;
    ${props => props.customStyle}
`;
const OPTION = styled__default['default'].div`
    cursor: pointer;
    padding: 2px 4px;
    width: 400px;

    :hover {
        background: #CECECE;
    }

    ${props => props.customStyle}
`;
/**
* @param {object} props - Props
* @param {string} down - To change the default down image
* @param {array} options - Options to display
* @param {string} placeholder - If no value then option 1 by default
* @param {object} styleContainer - To customize the container style which contains all the select menu 
* @param {object} styleImg - To customize the img style
* @param {object} styleList - To customize the list of options style
* @param {object} styleOption - To customize the option style
* @param {object} styleOptionSelected - To customize the option selected style
* @param {object} styleSelectMenu - To customize the select menu style
* @param {object} styleTitle - To customize the title style
* @param {string} title - To change the title content
* @param {string} up - To change the default up image
* @returns {component} - Select menu
*/

function Select({
  down,
  options,
  placeholder,
  styleContainer,
  styleImg,
  styleList,
  styleOption,
  stylePlaceholder,
  styleOptionSelected,
  styleSelectMenu,
  styleTitle,
  title,
  up
}) {
  const [open, setOpen] = React.useState(false);
  const [choice, setChoice] = React.useState(placeholder !== "" ? placeholder : options[0]);
  const [initialOption, setInitialOption] = React.useState(true);

  const selected = e => {
    setChoice(e.target.innerHTML);
    setOpen(!open);
  };

  const escape = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (open) {
      window.addEventListener("keydown", e => {
        if (e.key === "Escape") {
          escape();
        }
      });
      window.addEventListener("click", escape);
    }

    return () => {
      window.removeEventListener("keydown", escape);
      window.removeEventListener("click", escape);
    };
  }, [open]);
  return /*#__PURE__*/React__default['default'].createElement(CONTAINER, {
    customStyle: styleContainer
  }, title !== "" && /*#__PURE__*/React__default['default'].createElement(TITLE, {
    customStyle: styleTitle
  }, title), /*#__PURE__*/React__default['default'].createElement(SELECTMENU, {
    id: "selectMenu",
    customStyle: styleSelectMenu
  }, initialOption ? /*#__PURE__*/React__default['default'].createElement(PLACEHOLDER, {
    customStyle: stylePlaceholder,
    onClick: e => {
      setInitialOption(true);
      selected(e);
    }
  }, choice) : /*#__PURE__*/React__default['default'].createElement(OPTIONSELECTED, {
    id: "selectMenu",
    onClick: e => selected(e),
    customStyle: styleOptionSelected
  }, choice), open ? /*#__PURE__*/React__default['default'].createElement(IMG, {
    id: "selectMenu",
    src: up,
    customStyle: styleImg
  }) : /*#__PURE__*/React__default['default'].createElement(IMG, {
    src: down,
    customStyle: styleImg
  })), open ? /*#__PURE__*/React__default['default'].createElement(LIST, {
    id: "selectMenu",
    customStyle: styleList
  }, options.map((option, index) => /*#__PURE__*/React__default['default'].createElement(OPTION, {
    id: "selectMenu",
    key: index,
    onClick: e => selected(e),
    customStyle: styleOption
  }, option))) : null);
}

Select.propTypes = {
  down: PropTypes__default['default'].string,
  options: PropTypes__default['default'].array,
  placeholder: PropTypes__default['default'].string,
  styleContainer: PropTypes__default['default'].object,
  styleImg: PropTypes__default['default'].object,
  styleList: PropTypes__default['default'].object,
  styleOption: PropTypes__default['default'].object,
  styleOptionSelected: PropTypes__default['default'].object,
  stylePlaceholder: PropTypes__default['default'].object,
  styleSelectMenu: PropTypes__default['default'].object,
  styleTitle: PropTypes__default['default'].object,
  title: PropTypes__default['default'].string,
  up: PropTypes__default['default'].string
};
Select.defaultProps = {
  down: img,
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
  up: img$1
};

exports.Select = Select;
