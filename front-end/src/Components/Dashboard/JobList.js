import React, {useState, useEffect} from "react";
import {Card, Dropdown, Menu} from "antd";
import ActiveJob from "./ActiveJob";
import axios from 'axios'

const JobList = (props) => {

    const [Jobs, setJobs] = useState([])

    /**
     * toggleSort(key)
     * keys: [1, 2]
     * 1 - sorted a-z by jobtitle
     * 2 - sorted z-a by jobtitle
     */
    const toggleSort = (sortNum) => {
        if(sortNum == 1){
            const a_z = [...Jobs].sort((a, b) =>  a.jobTitle > b.jobTitle ? 1 : -1)
            setJobs(a_z)
        }
        else if(sortNum == 2){
            const z_a = [...Jobs].sort((a, b) => a.jobTitle < b.jobTitle ? 1 : -1)
            setJobs(z_a)
        }
    }

    /**
     * menu
     * @returns a menu overlay with the options a-z and z-a
     */
    const menu = () =>{
        return (
            <Menu>
                <Menu.Item
                    key="1"
                    onClick = {() =>
                        toggleSort(1)
                    }
                >
                    A-Z
                </Menu.Item>
                <Menu.Item
                    key="2"
                    onClick = {() =>
                        toggleSort(2)
                    }
                >
                    Z-A
                </Menu.Item>
            </Menu>
        )
    }

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