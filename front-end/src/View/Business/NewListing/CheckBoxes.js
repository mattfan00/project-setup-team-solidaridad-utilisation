import React from "react";
import { Checkbox } from "antd";
import "../NewListing/index.css";

const CheckBoxes = () => {
    return (
        <div>
            <h2>Copply-Header-Component</h2>
            <h2>Progress-Tracker-Component</h2>
            <h1>Common Elements</h1>
            <p>Tick all the necessary details you want to require:</p>
            <Checkbox>Name</Checkbox>
            <Checkbox>Email</Checkbox>
            <Checkbox>Gender</Checkbox>
            <Checkbox>Hispanic/Latino</Checkbox>
            <br></br>
            <Checkbox>Address</Checkbox>
            <Checkbox>City</Checkbox>
            <Checkbox>State</Checkbox>
            <Checkbox>Country</Checkbox>
            <Checkbox>Postal Code</Checkbox>
            <Checkbox>Primary Phone</Checkbox>
            <br></br>
            <Checkbox>Work Experience</Checkbox>
            <Checkbox>Work Authorization</Checkbox>
            <Checkbox>Graduation Date</Checkbox>
            <Checkbox>LinkedIn Profile</Checkbox>
            <br></br>
        </div>
    );
}

export default CheckBoxes