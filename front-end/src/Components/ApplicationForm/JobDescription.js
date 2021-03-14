import React from "react"
import {
    Typography,
    Col,
    Descriptions,
    Space
} from "antd"
import Title from "antd/lib/skeleton/Title";


const JobDescription = (props) => {
    const {Title} = Typography;
    return (
        <div>
            <Col span={24}>
                <div layout="vertical">
                    <Space direction="vertical" size="small">
                        <Title level={3}>Software Engineer</Title>
                        <div className="company">Amazon</div> 
                    </Space>
                    
                    <Descriptions title="Job Description">
                    </Descriptions>
                    <Descriptions title="About Company">
                    </Descriptions>
                    <Descriptions title="Job Location">
                    </Descriptions>
                    <Descriptions title="Desired Skills">
                    </Descriptions> 
                </div>   
            </Col>
        </div>
    )
}

export default JobDescription