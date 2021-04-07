import React, { useState } from "react";
import { Menu, Input, DatePicker, Button, Space, Card, Radio, Modal, Result} from "antd";
import '../index.css';
import Form from "antd/lib/form/Form";



const { SubMenu } = Menu;
const { TextArea } = Input;



const ExtraQuestions = ({
  // handleNextButton,
  handleBackButton,
  updateExtra,
  extra
}) => {

  const extraO = extra;

  const [values, setValues] = useState(extraO);

  const update = async () => {
    try {
        console.log('Success:', values);
        updateExtra(values);
        console.log("extra", extraO);
        showModal();
    } catch (errorInfo) {
        console.log('Failed:', errorInfo);
    }
  }


  const [key,increaseKey] = useState(-1);

  const assignKey = () => {
    increaseKey(key + 1);
    return key;
  }

  const handleOnChange = (e) => {
    const a = assignKey();
    setValues(...values, {id: a, label: e.target.value, required: true, type: e.target.type});
  }


  const [questions, setQuestions] = useState([]);

  const handleClick = e => {
    setQuestions(questions => [...questions, e.key]);
    console.log(questions);
  };


  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  }
  const handleOk = () => {
    setIsModalVisible(false);
  }

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
            <Form
            >
              {questions.map( type => (
                ( type === 'singleLine'  ?
                  <Form.Item name="singleline">
                    <Input onChange={handleOnChange} placeholder='Write question here' bordered={false}></Input>
                    <Input placeholder='Input' /> 
                  </Form.Item>
                : "" ) ||

                ( type === 'multiline'  ?
                <Form.Item name="textarea">
                  <Input placeholder='Write question here' bordered={false}></Input>
                  <TextArea rows = {4} placeholder='Input'></TextArea>
                </Form.Item>
                : "" ) ||

                ( type === 'date' ?
                <Form.Item name="date">
                  <Input placeholder='Write question here' bordered={false}></Input>
                  <DatePicker></DatePicker>
                </Form.Item>
                : "" ) || 

                ( type === 'yesNo' ?
                <Form.Item name="yesno">
                  <Input placeholder='Write question here' bordered={false}></Input>
                  <Radio.Group><Radio >Yes</Radio><Radio>No</Radio></Radio.Group>
                </Form.Item>
                : "" )
            ))}
          </Form>
        </div>
        </Card>
      </Space>
      
      <div></div>
    <Button type="default" onClick={handleBackButton} size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
        Back
    </Button>


    <Button type="primary"  size="medium" onClick={update}
      style={{ backgroundColor:"#5D68EC", borderColor:"#5D68EC" }}>
        Submit
    </Button>


    <Modal visible = {isModalVisible} onOk={handleOk}>
      <Result status="success" title="Your job is live!"/>
    </Modal>

    </div>
  );
};
  
  export default ExtraQuestions