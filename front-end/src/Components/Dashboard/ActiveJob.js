import React, {useState} from "react"
import {Card} from "antd"
import './styles.css'

const ActiveJob = (props) => {
    return (
        <Card
            type="inner"
            title={props.job.title}
            extra={
                <a href='#'>More</a>
            }
        >
            {props.job.desc}
            <div className="counter">
                {props.job.appCount}
            </div>
        </Card>
    );
}

export default ActiveJob