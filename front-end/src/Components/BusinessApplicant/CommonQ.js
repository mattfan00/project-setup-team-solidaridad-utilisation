import React from 'react'
import {Card, Descriptions} from 'antd'

const Common = (props) => {
    return (
        <Descriptions 
            bordered
            column={2}
        >
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