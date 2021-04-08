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
  extra,
  check
}) => {

  const extraO = extra;


  const [questions, setQuestions] = useState(extraO);

  const handleClick = e => {
    setQuestions(questions => [...questions, {
      label: "",
      type: e.key
    }]);
  };

  const update = async () => {
    try {
        console.log('Success:', questions);
        updateExtra(questions);
        showModal();
        check();
    } catch (errorInfo) {
        console.log('Failed:', errorInfo);
    }
  }

  const updateBack = async () => {
    try {
        updateExtra(questions);
        handleBackButton();
    } catch (errorInfo) {
        console.log('Failed:', errorInfo);
    }
  }




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
              {questions.map( (question, i) => (
                ( question.type === 'singleLine'  ?
                  <>
                    <Input 
                      onChange={(e) => {
                        question.label = e.target.value;
                        const newQuestions = [...questions];
                        newQuestions[i] = question;
                        setQuestions(newQuestions);
                      }} 
                      placeholder='Write question here' 
                      bordered={false}
                      value={questions[i].label}
                    ></Input>
                    <Input placeholder='Input' /> 
                  </>
                : "" ) ||

                ( question.type === 'multiline'  ?
                <>
                  <Input 
                    onChange={(e) => {
                      question.label = e.target.value;
                      const newQuestions = [...questions];
                      newQuestions[i] = question;
                      setQuestions(newQuestions);
                    }}
                    placeholder='Write question here'
                    bordered={false}
                    value={questions[i].label}
                  ></Input>
                  <TextArea rows = {4} placeholder='Input'></TextArea>
                </>
                : "" ) ||

                ( question.type === 'date' ?
                <>
                  <Input 
                    onChange={(e) => {
                      question.label = e.target.value;
                      const newQuestions = [...questions];
                      newQuestions[i] = question;
                      setQuestions(newQuestions);
                    }}
                    placeholder='Write question here' 
                    bordered={false}
                    value={questions[i].label}
                  ></Input>
                  <DatePicker></DatePicker>
                </>
                : "" ) || 

                ( question.type === 'yesNo' ?
                <>
                  <Input 
                    onChange={(e) => {
                      question.label = e.target.value;
                      const newQuestions = [...questions];
                      newQuestions[i] = question;
                      setQuestions(newQuestions);
                    }}
                    placeholder='Write question here' 
                    bordered={false}
                    value={questions[i].label}
                  ></Input>
                  <Radio.Group><Radio value={1} >Yes</Radio><Radio value={2} >No</Radio></Radio.Group>
                </>
                : "" )
            ))}
          </Form>
        </div>
        </Card>
      </Space>
      
      <div></div>
    <Button type="default" onClick={updateBack} size="medium" style={{ backgroundColor:"white", borderColor:"white" }}>
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