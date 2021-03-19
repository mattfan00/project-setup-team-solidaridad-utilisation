import React from "react"
import './index.css'
import { Button, Col, Divider, Card } from 'antd';

const ExpressApply = () => {
    return (
        <div className="ExpressApplyButton"> 
            <Col span={24}>
                <Card> 
                    <Button className="ExpressButton" type="primary" size="large" block>
                        Express Apply
                    </Button> 
                </Card>
                <Divider className="Divider" >or</Divider>
           </Col>
        </div>
    )
}

export default ExpressApply