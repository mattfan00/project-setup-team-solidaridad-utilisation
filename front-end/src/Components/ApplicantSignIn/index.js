import React from "react"

import {Card,Col, Button, Form, Input } from 'antd';

const ApplicantSignIn = () => {
    return (
        <div>
            <Col span={24}>
                <Card>
                    <p>Express Apply</p>
                    <p>Already have an account?</p>
                    
                    <Button type="primary" block>
                        Sign In 
                    </Button>
                </Card>
            </Col>
        </div>
    );
}

export default ApplicantSignIn