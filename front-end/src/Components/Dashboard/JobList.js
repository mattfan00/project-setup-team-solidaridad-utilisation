import React, {useState} from "react";
import {Card, Button} from "antd";
import ActiveJob from "./ActiveJob";

const JobList = (props) => {
    return (
        <div>
            {props.pizza}
            <Card 
                title="Active Jobs"
                extra={
                    <a href='#'>Sort</a>
                }
            >
                {props.jobs && props.jobs.map(job => (
                    <ActiveJob job={job}></ActiveJob>
                ))}
            </Card>
        </div>
    );
};

export default JobList;