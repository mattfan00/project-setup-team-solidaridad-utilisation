import React, {useState} from "react"
import {List, Avatar, Skeleton} from "antd";

const ActiveJob = (props) => {
    return (
        <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton title={false} loading={props.loading} active>
              <List.Item.Meta
                title={<a href="https://github.com">{props.jobTitle}</a>}
                description="dEVEloP FrONteND in tW0 wEEkS"
              />
              <div>{props.count}</div>
            </Skeleton>
          </List.Item>
    );
}

export default ActiveJob