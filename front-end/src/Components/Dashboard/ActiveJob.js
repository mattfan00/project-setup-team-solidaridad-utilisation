import React, {useState} from "react"
import {Button} from "antd";

const ActiveJob = (props) => {
    return (
        <div key={props.title}>
            <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
            />
            {item.content}
            
            <Button type="primary">View</Button>
        </div>
    );
}