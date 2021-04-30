import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Row, Col} from 'antd';

import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthContext"

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
  const { setBusinessUser, setBusinessToken } = useContext(AuthContext);

  const validate = async () => {
    try {
      const validateResult = await form.validateFields();

      signin(validateResult)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      message.error("Please fill out all of the required fields");
    }
  }

  const signin = async (fields ) => {
    try {
      const result = await axios.post("http://localhost:4000/business/user/login", fields)

      setBusinessUser(result.data.user);
      setBusinessToken(result.data.token);
      localStorage.setItem("businessToken", result.data.token);
      history.push("/business/dashboard");
    } catch({ response }) {
      message.error(response.data)
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="business-signin-main">
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
        form={form}
        //name="basic"
        initialValues={{
          remember: true,
        }}
        //onFinish={signin}
        //onFinishFailed={onFinishFailed}
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block="true" onClick={validate}>
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin