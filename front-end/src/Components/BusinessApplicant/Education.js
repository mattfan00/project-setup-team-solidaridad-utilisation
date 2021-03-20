import React from 'react'
import {Card} from 'antd'

const Education = (props) => {
    return (
        <Card
            title='New York University{props.institution}'
            type='inner'
            extra={
                <div>
                    2022 {props.gradYear}
                </div>
            }
        >
            Description {props.description}   
        </Card>
    )
}

export default Education