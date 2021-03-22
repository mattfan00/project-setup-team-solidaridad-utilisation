import React from 'react'
import {Card} from 'antd'

const Education = (props) => {
    return (
        <Card
            title={props.education}
            type='inner'
            extra={
                <div>
                    {props.year}
                </div>
            }
        >
            {props.description} 
        </Card>
    )
}

export default Education