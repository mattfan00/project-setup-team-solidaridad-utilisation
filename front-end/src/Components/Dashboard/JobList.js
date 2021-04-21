import React, {useState, useEffect} from "react";
import {Card, Dropdown} from "antd";
import ActiveJob from "./ActiveJob";
import menu from './SortMenu';
import axios from 'axios'

const JobList = (props) => {

    const [Jobs, setJobs] = useState([])

    useEffect(async () => {
        const currJobs = await axios('http://localhost:4000/business/alljobs')
        setJobs(currJobs)
    }, [])
    
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