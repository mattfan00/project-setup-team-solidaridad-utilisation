import React, {useState} from "react"
import {Button} from "antd";

const ActiveJob = (props) => {
    return (
        <div
            key={props.title}
            actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
        >
            <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
            />
            {item.content}
            
            <Button type="primary">View</Button>
        </div>
    );
};