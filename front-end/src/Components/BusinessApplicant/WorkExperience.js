import React from 'react'
import {Card} from 'antd'

const WorkExperience = (props) => {
    return (
        <Card
            title={props.title + " - " + props.employer}
            type='inner'
            extra = {
                <div>
                    {props.year}
                </div>
            }
        >
            {props.desc}
        </Card>
    )
}

export default WorkExperience