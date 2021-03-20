import React from 'react'
import {Card, Dropdown} from 'antd'

const Common = (props) => {
    return (
        <Card
        title='Common Questions'
        type='inner'
        extra={
            <div>
                {props.commonQCount}
            </div>
        }
        >
            {props.commonQuestions}
        </Card>
    )
}

export default Common