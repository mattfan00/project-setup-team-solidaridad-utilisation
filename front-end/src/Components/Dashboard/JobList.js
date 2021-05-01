import React, {useState, useEffect} from "react";
import {Card, Dropdown} from "antd";
import ActiveJob from "./ActiveJob";
import menu from './SortMenu';
import axios from 'axios'

const JobList = (props) => {

    const [Jobs, setJobs] = useState([])

    useEffect(async () => {
        const result = await axios('/business/alljobs')
        setJobs(result.data)
    }, [])

    return (
        <div>
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
                {Jobs && Jobs.map(job => (
                    <ActiveJob key={job._id} job={job}></ActiveJob>
                ))}
            </Card>
        </div>
    );
};

export default JobList;