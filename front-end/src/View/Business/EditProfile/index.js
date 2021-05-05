import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../../../Context/AuthContext"
import './index.css';
import { Form, Input, Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import axios from 'axios';

//layout of the form item
const layout = {
  wrapperCol: {
    span: 14,
    offset: 5
  },
};

/*
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
*/

const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

const BusinessEditProfile = () => {
  const [fileList, setFileList] = useState([])
  const { businessUser } = useContext(AuthContext)
  const [initialValues, setInitialValues] = useState()
  const [form] = Form.useForm()

  useEffect(async () => {
    const { data } = await axios.get(`/company/${businessUser.company}`)

    setInitialValues({
      description: data.description,
      industry: data.industry
    })

    form.resetFields()
  }, [])

  const onFinish = async(values) => {
    let formData = new FormData();
    if (fileList.length > 0) {
      formData.append("logo", fileList[0].originFileObj)
    }

    formData.append("description", values.description || "")
    formData.append("industry", values.industry || "")

    try {
      await axios.patch(`/updateprofile/${businessUser.company}`, formData)
      message.success("Successfully saved changes")
    } catch (err) {
      console.log(err)
    }

  };

  const handleUpload = ({ fileList }) => {
    setFileList(fileList)
  }

  return (
    <div className="profile-main">
        <Row>
            <Col span={2}>
                <Button type="link" href="/business/dashboard" size = "middle" block="true">
                    <p>Back to Dashboard</p>
                </Button>
            </Col>
        </Row>
        <Row>
            <Col span = {10} offset = {8}>
                <h1>Tell us about your company</h1>
            </Col>
        </Row>

        <Form
          {...layout}
          form={form}
          name="edit-profile"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Row><Col offset={5}>Description - This info will be on all job postings </Col></Row>
          <Form.Item name="description">
              <Input.TextArea rows={4}/>
          </Form.Item>

          <Row><Col offset={5}>What industry are you in? </Col></Row>
          <Form.Item name="industry">
              <Input.TextArea rows={4}/>
          </Form.Item>

          <Row><Col offset={5}>Upload a logo</Col></Row>
          <Form.Item>
              <Form.Item name="logo" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
              <Upload.Dragger name="files" multiple={false} maxCount={1} onChange={handleUpload} beforeUpload={() => false}>
                  <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Upload.Dragger>
              </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
              <Button type="primary" htmlType="submit" block="true" size="middle">
              Save Changes
              </Button>
          </Form.Item>

        </Form>
    </div>
  );
};

export default BusinessEditProfile