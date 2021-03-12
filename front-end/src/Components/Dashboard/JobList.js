import React from "react";
import {List} from "antd";
import ActiveJob from "./ActiveJob";

//pass the list of all data to Joblist to render each job
const JobList = () => {
    return (
        <List
            itemLayout="vertical"
            size="medium"
            pagination={{
            onChange: page => {
            console.log(page); //change to some kind of useState
        },
        pageSize: 3,
        }}
        footer={
            <div>
                <b>Page</b>
            </div>
        }
        renderItem = {ActiveJob}
    />
    );
}

export default JobList