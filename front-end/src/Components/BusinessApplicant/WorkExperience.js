import React from 'react'
import {Card} from 'antd'

const WorkExperience = (props) => {
    return (
        <Card
            title="Company: Role"
            type='inner'
            extra = {
                <div>
                    2020 {props.date}
                </div>
            }
        >
            Developed Feature F using tool T, with p users
            {props.description}
        </Card>
    )
}

export default WorkExperience