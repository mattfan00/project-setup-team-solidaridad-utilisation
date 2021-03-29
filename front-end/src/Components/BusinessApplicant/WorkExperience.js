import React from 'react'
import {Card} from 'antd'

const WorkExperience = (props) => {
    return (
        <Card
            title={props.company + ": " + props.role}
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