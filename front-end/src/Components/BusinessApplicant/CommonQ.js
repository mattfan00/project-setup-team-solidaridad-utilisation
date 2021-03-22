import React from 'react'
import {Card, Descriptions} from 'antd'

const Common = (props) => {
    return (
        <Descriptions 
            bordered
            column={2}
        >
            <Descriptions.Item label='email'>santaisreal@gmail.com</Descriptions.Item>
            <Descriptions.Item label='location'>New York, NY</Descriptions.Item>
            <Descriptions.Item label='phone'>(123)-456-7890</Descriptions.Item>
            {props.commonQ && props.commonQ.map(common =>
                <Descriptions.Item
                    label={common.question}
                >
                    {common.answer}
                </Descriptions.Item>
            )}
        </Descriptions>
    )
}

export default Common