import React from 'react'
import {Card} from 'antd'

const Project = (props) => {
    return (
        <Card
            title={'Project Title' + props.projectTitle}
            type='inner'
            extra={
                <div>
                    {"project year" + props.year}
                </div>
            }
        >
            {"Project description" + props.description}
        </Card>
    )
}

export default Project