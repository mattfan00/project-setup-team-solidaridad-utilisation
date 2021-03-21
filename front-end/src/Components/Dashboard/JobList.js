import React, {useState} from "react";
import {Card, Menu, Dropdown} from "antd";
import ActiveJob from "./ActiveJob";
import menu from './SortMenu';

const JobList = (props) => {
    return (
        <div>
            {props.pizza}
            <Card 
                title="Active Jobs"
                extra={
                    <Dropdown 
                    overlay = {menu}
                    >
                        <a>
                            Sort by
                        </a>
                    </Dropdown>
                    
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