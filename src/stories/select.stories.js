import { storiesOf } from "@storybook/react"

import Select from "../components/Select";

const stories = storiesOf("Example", module);

const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
];


stories.add("Ex1", () => {
    return (
        <Select
            options = {states}
        />
    )
});

/*
stories.add("Ex1", () => {
    return (
        <Select
            options = {states}
        />
    )
});

stories.add("Ex2", () => {
    return (
        <Select
            options = {states}
            placeholder = "State choice"
            selectTitle = ""
        />
    )
});

stories.add("Ex3", () => {
    return (
        <Select
            options = {states}
            selectTitle = "State choice"
        />
    )
});
*/