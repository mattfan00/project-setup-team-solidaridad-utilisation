import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Row, Col} from 'antd'; 

import { useHistory } from "react-router-dom";
import axios from "axios";
import { BusinessAuthContext } from "../../../Context/BusinessAuthContext"

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const Signin = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const { setUser } = useContext(BusinessAuthContext);

  const signin = async () => {
    try {
      const validateResult = await form.validateFields();
      console.log(validateResult);

      const result = await axios.get("http://localhost:4000/business/user");
      setUser(result.data);

      history.push("/business/dashboard");

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      message.error("");
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div class="business-signin-main">
      <Row>
        <Col span={2}>
          <Button type="link" href="/business/signup" size = "middle" block="true">
            <p>Back to Sign Up</p>
          </Button>
        </Col>
      </Row>
      <Row><Col span={6} offset={9}><h1>Copply</h1></Col></Row>
      <Row><Col span={14} offset={5}><h2>Making the application process seamless for both parties</h2></Col></Row>
      
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
          
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block="true" onClick={signin}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin