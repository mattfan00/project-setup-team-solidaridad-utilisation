import React from "react";
import {Menu, Input, DatePicker} from "antd";
import '../index.css';
import moment from 'moment';


const { SubMenu } = Menu;
const { TextArea } = Input;
const dateFormat = 'MM/DD/YYYY';

const options = {
  singleLine: "<Input placeholder='Input' />",
  multiline: "<TextArea rows = {4} placeholder='Input' />",
  date: "<DatePicker defaultValue={moment('03/15/2021', dateFormat)} format={dateFormat} />"
};

const ExtraQuestions = () => {
  const handleClick = e => {
    console.log(options[e.key]);
    document.getElementById("template").innerHTML += options[e.key];
    console.log('click ', e.key);
  };
  return (
    <div className="grid-container">
      <Menu mode="inline" onClick={handleClick}>
        <SubMenu title="Layout Elements">
          <Menu.Item key="sections">Sections</Menu.Item>
        </SubMenu>
        <SubMenu title="Text Elements">
          <Menu.Item key="singleLine">Single line</Menu.Item>
          <Menu.Item key="multiline">Multiline</Menu.Item>
          <Menu.Item key="date">Date</Menu.Item>
        </SubMenu>
        <SubMenu title="Multi Elements">
          <Menu.Item key="yesNo">Yes/No</Menu.Item>
          <Menu.Item key="dropdown">Dropdown</Menu.Item>
          <Menu.Item key="checkbox">Checkbox</Menu.Item>
          <Menu.Item key="multipleChoice">Multiple Choice</Menu.Item>
        </SubMenu>
        <SubMenu title="Media Elements">
          <Menu.Item key="attachments">Attachments</Menu.Item>
          <Menu.Item key="image">Image</Menu.Item>
        </SubMenu>
      </Menu>
      <div id="template">

      </div>
    </div>
  );
};
  
  export default ExtraQuestions