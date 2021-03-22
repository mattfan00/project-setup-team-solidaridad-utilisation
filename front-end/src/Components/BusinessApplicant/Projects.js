import React from 'react'
import {Card} from 'antd'

const Project = (props) => {
    return (
        <Card
            title={props.projectTitle}
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

export default Project