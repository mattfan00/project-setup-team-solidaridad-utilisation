import React, {useState} from "react"
import {Button, List} from "antd";

const ActiveJob = (props) => {
    return (
        <div key={props.title}>
            <List.Item.Meta
                title={<a href={props.href}>{props.title}</a>}
                description={props.description}
            />
            {props.content}
            
            <Button type="primary">View</Button>
        </div>
    );
}

export default ActiveJob