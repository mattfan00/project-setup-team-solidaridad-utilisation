import React from 'react'
import {Card, Descriptions} from 'antd'

const Common = (props) => {
    return (
        <Descriptions 
            bordered
            column={2}
        >
            <Descriptions.Item label='Question1'>Answer1</Descriptions.Item>
            <Descriptions.Item label='Question2'>Answer2</Descriptions.Item>
            <Descriptions.Item label='Question3'>Answer3</Descriptions.Item>
        </Descriptions>
    )
}

export default Common