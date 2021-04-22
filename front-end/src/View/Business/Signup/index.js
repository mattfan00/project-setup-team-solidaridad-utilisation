import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, message } from 'antd';
import { Row, Col} from 'antd';

import { useHistory } from "react-router-dom";
import axios from "axios";
import { BusinessAuthContext } from "../../../Context/BusinessAuthContext";

import { formatCountdown } from 'antd/lib/statistic/utils';
import { AuthContext } from '../../../Context/AuthContext';

const layout = {
  labelCol: {
    span: 4,
    offset: 4
  },
  wrapperCol: {
    span: 9,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Signup = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const { setBusinessUser, setBusinessToken } = useContext(AuthContext);

  const signup = async () => {
    try {
      const validateResult = await form.validateFields();
      console.log(validateResult);

      const result = await axios.get("http://localhost:4000/business/user/register", {
        email: validateResult.email,
        password: validateResult.password
      })
      setBusinessUser(result.data.user);
      setBusinessToken(result.data.token);
      localStorage.setItem("businessToken", result.data.token)

      history.push("/business/dashboard");

    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
      message.error("Please fill out all of the required fields");
    }
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div class="business-signup-main">
      <Row><Col span={6} offset={9}><h1>Copply</h1></Col></Row>
      <Row><Col span={14} offset={5}><h2>Making the application process seamless for both parties</h2></Col></Row>
      <Form
        {...layout}
        name="basic"
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Company Name"
          name="companyname"
          rules={[
            {
              required: true,
              message: 'Please input your company name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Your Email"
          name="email"
          rules={[
            {
              type:'email',
              message: 'email is not valid'
            },
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        <Form.Item {...tailLayout}>
          <Row>
            <Col>
              <Button type="primary" htmlType="submit" block="true" onClick={signup}>
                Sign up
              </Button>
            </Col>
            <Col offset={3}>
              <Button type="link" href="/business/signin">Already have an account? Sign In</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};


export default Signup