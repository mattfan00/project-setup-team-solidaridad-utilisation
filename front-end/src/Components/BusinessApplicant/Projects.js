import React from 'react'
import {Card} from 'antd'

const Project = (props) => {
    return (
        <Card
            title="Project1 {props.title}"
            type='inner'
            extra={
                <div>
                    2020 {props.year}
                </div>
            }
        >
            Description {props.description}
        </Card>
    )
}

export default Project