import React from "react"
import { useParams } from "react-router-dom"
import './index.css'
import { Button, Col, Divider, Card } from 'antd';
import {
    Link,
  } from "react-router-dom";


const ExpressApply = () => {
    const { job } = useParams()

    return (
        <div className="ExpressApplyButton">
            <Col span={24}>
                <Card className="ExpressApply">

                    <Button href={`/application/signin/job/${job}`} className="ExpressButton" type="primary" size="large" block>
                        Express Apply
                    </Button>
                </Card>

                <Divider className="Divider" >or</Divider>
           </Col>
        </div>
    )
}

export default ExpressApply