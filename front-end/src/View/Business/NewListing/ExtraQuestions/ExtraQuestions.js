import React from "react";
import {Menu, Input, DatePicker, Button} from "antd";
import '../index.css';
import moment from 'moment';


const { SubMenu } = Menu;
const { TextArea } = Input;

const options = {
  sections: "",
  singleLine: "<Input placeholder='Input' /> <br></br>",
  multiline: "<TextArea rows = {4} placeholder='Input'></TextArea> <br></br>",
  date: "<DatePicker></DatePicker>"
};

const ExtraQuestions = ({
  handleNextButton,
  handleBackButton
}) => {
  const handleClick = e => {
    console.log(options[e.key]);
    document.getElementById("template").innerHTML += options[e.key];
    console.log('click ', e.key);
  };
  return (
    <div className="grid-container">
      <Menu mode="horizontal" onClick={handleClick}>
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
      <br></br>
      <div id="template">
    </div>
    <Button type="default" onClick={handleBackButton} size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
        Back
    </Button>

    <Button type="primary" onClick={handleNextButton} size="medium" 
      style={{ backgroundColor:"#5D68EC", borderColor:"#5D68EC" }}>
        Next
    </Button>
    </div>
  );
};
  
  export default ExtraQuestions