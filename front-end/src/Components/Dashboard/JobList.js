import React, {useState, useEffect} from "react";
import {Card, Dropdown, Menu} from "antd";
import ActiveJob from "./ActiveJob";
import axios from 'axios'

const JobList = (props) => {

    const [Jobs, setJobs] = useState([])
    /*
    console.log("hello sort")
    
    /**
     * keys: [0, 1, 2]
     * 0 - no sort, rendered as pulled from db
     * 1 - sorted a-z by jobtitle
     * 2 - sorted z-a by jobtitle
     */
    const [sort, setSort] = useState(0) //0 is the base state, render as is
    
    useEffect(
        () => {
            if(sort == 1){
                const a_z = Jobs.sort((a, b) => a.jobTitle - b.jobTitle)
                setJobs(a_z)
            }
            else if(sort == 2){
                const z_a = Jobs.sort((a, b) => b.jobTitle - a.jobTitle)
                setJobs(z_a)
            }
        }, 
        [sort]
    )
    
    const menu = () =>{
        return (
            <Menu>
                <Menu.Item 
                    key="1"
                    onClick = {
                        setSort(1)
                    }
                >
                    A-Z
                </Menu.Item>
                <Menu.Item 
                    key="2"
                    onClick = {
                        setSort(2)
                    }
                >
                    Z-A
                </Menu.Item>
            </Menu>
        )
    }
    
    useEffect(async () => {
        const result = await axios('http://localhost:4000/business/alljobs')
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