import React, { useState } from "react";
import { Menu, Input, DatePicker, Button, Space, Card, Radio } from "antd";
import '../index.css';



const { SubMenu } = Menu;
const { TextArea } = Input;

const options = {
  sections: "",
  singleLine: "<Input placeholder='Input' /> <br></br>",
  multiline: "<TextArea rows = {4} placeholder='Input'></TextArea> <br></br>",
  date: "<DatePicker></DatePicker>",
  yesNo: "<Radio.Group><Radio >Yes</Radio><Radio>No</Radio></Radio.Group> <br></br>",
  dropdown: "",
  checkbox: "",
  multipleChoice: "",
  attachments: "",
  image: ""
};



const question = "<Input placeholder='Write question here' bordered={false} /> <br></br>"

const ExtraQuestions = ({
  // handleNextButton,
  handleBackButton
}) => {

  const [questions, setQuestions] = useState([]);



  const handleClick = e => {
    setQuestions(questions => [...questions, e.key]);
    console.log(questions);
  };
  return (
    <div className="gridContainer">
      <Space direction="vertical" style={{ width:"20%" }}>
        <Card style={{ "margin-bottom":"5%" }}>
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
        </Card>
      </Space>
      <Space direction="vertical" style={{ width: "40%"}}>
        <Card style={{ "margin-bottom":"5%"}}>
        <div className = "template" id="template">
          Add Extra Questions <br></br>
          {questions.map( type => (
            ( type === 'singleLine'  ?
              <>
                <Input placeholder='Write question here' bordered={false}></Input>
                <Input placeholder='Input' /> 
              </>
             : "" ) ||

            ( type === 'multiline'  ?
            <>
              <Input placeholder='Write question here' bordered={false}></Input>
              <TextArea rows = {4} placeholder='Input'></TextArea>
            </>
            : "" ) ||

            ( type === 'date' ?
            <>
              <Input placeholder='Write question here' bordered={false}></Input>
              <DatePicker></DatePicker>
            </>
            : "" ) || 

            ( type === 'yesNo' ?
            <>
              <Input placeholder='Write question here' bordered={false}></Input>
              <Radio.Group><Radio >Yes</Radio><Radio>No</Radio></Radio.Group>
            </>
            : "" )



          ))}
        </div>
        </Card>
      </Space>
      
      <div></div>
    <Button type="default" onClick={handleBackButton} size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
        Back
    </Button>


    <Button type="primary"  size="medium" 
      style={{ backgroundColor:"#5D68EC", borderColor:"#5D68EC" }}>
        Submit
    </Button>
    </div>
  );
};
  
  export default ExtraQuestions