import React from "react";
import {Menu} from "antd";



const ExtraQuestions = () => {
  return (
    <Menu>
      <Menu.ItemGroup title="Layout Elements">
        <Menu.Item>Sections</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Text Elements">
        <Menu.Item>Single line</Menu.Item>
        <Menu.Item>Multiline</Menu.Item>
        <Menu.Item>Date</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Multi Elements">
        <Menu.Item>Yes/No</Menu.Item>
        <Menu.Item>Dropdown</Menu.Item>
        <Menu.Item>Checkbox</Menu.Item>
        <Menu.Item>Multiple Choice</Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="Media Elements">
        <Menu.Item>Attachments</Menu.Item>
        <Menu.Item>Image</Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};
  
  export default ExtraQuestions