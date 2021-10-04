"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),l=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),n=o(t),s=o(l);const c=s.default.h3`
    ${e=>e.customStyle}
`,r=s.default.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    border: solid 1px;
    border-top: none;
    width: 408px;
    ${e=>e.customStyle}
`,d=s.default.div`
    display: flex;
    align-items: center;
    border: solid 1px;
    padding: 2px 4px;
    width: 400px;
    ${e=>e.customStyle}
`,i=s.default.span`
    cursor: pointer;
    width: 100%;
    ${e=>e.customStyle}
`,u=s.default.span`
    cursor: pointer;
    width: 100%;
    ${e=>e.customStyle}
`,p=s.default.img`
    height: 20px;
    width: 20px;
    ${e=>e.customStyle}
`,f=s.default.div`
    cursor: pointer;
    padding: 2px 4px;
    width: 400px;

    :hover {
        background: ${e=>e.hoverBackground};
    }

    ${e=>e.customStyle}
`;function y({down:t,hoverBackground:l,options:o,placeholder:n,styleImg:s,styleList:y,styleOption:m,stylePlaceholder:g,styleOptionSelected:w,styleSelectMenu:h,styleTitle:v,title:S,up:x}){const[E,b]=e.useState(!1),[k,C]=e.useState(""!==n?n:o[0]),[j,L]=e.useState(!0),O=()=>{b(!1)};return e.useEffect((()=>(E&&(window.addEventListener("keydown",(e=>{"Escape"===e.key&&O()})),window.addEventListener("click",O)),()=>{window.removeEventListener("keydown",O),window.removeEventListener("click",O)})),[E]),a.default.createElement(e.Fragment,null,""!==S&&a.default.createElement(c,{customStyle:v},S),a.default.createElement(d,{customStyle:h},j?a.default.createElement(i,{customStyle:g,onClick:e=>{b(!0)}},k):a.default.createElement(u,{onClick:e=>b(!0),customStyle:w},k),E?a.default.createElement(p,{alt:"Icon to open",src:x,customStyle:s}):a.default.createElement(p,{alt:"Icon to close",src:t,customStyle:s})),E?a.default.createElement(r,{customStyle:y},o.map(((e,t)=>a.default.createElement(f,{key:t,onClick:e=>(e=>{C(e.target.innerHTML),b(!1),j&&L(!1)})(e),hoverBackground:l,customStyle:m},e)))):null)}y.propTypes={down:n.default.string,hoverBackground:n.default.string,options:n.default.array,placeholder:n.default.string,styleContainer:n.default.object,styleImg:n.default.object,styleList:n.default.object,styleOption:n.default.object,styleOptionSelected:n.default.object,stylePlaceholder:n.default.object,styleSelectMenu:n.default.object,styleTitle:n.default.object,title:n.default.string,up:n.default.string},y.defaultProps={down:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='caret-down' class='svg-inline--fa fa-caret-down fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='currentColor' d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'%3e%3c/path%3e%3c/svg%3e",hoverBackground:"#CECECE",options:["Option 1","Option 2","Option 3"],placeholder:"",styleContainer:{},styleImg:{},styleList:{},styleOption:{},styleOptionSelected:{},stylePlaceholder:{},styleSelectMenu:{},styleTitle:{},title:"",up:"data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='caret-up' class='svg-inline--fa fa-caret-up fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3e%3cpath fill='currentColor' d='M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z'%3e%3c/path%3e%3c/svg%3e"},exports.Select=y;
