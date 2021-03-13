import React from "react";
import {List} from "antd";
import ActiveJob from "./ActiveJob";

//pass the list of all data to Joblist to render each job
const JobList = () => {
    return(
        <List
            className="loadmore-list"
            itemLayout="horizontal"
            pagination={{
                onChange: page =>{
                    console.log(page);
                },
                pageSize: 10
            }}         
            renderItem={item=> (
                ActiveJob(item)
            )}
        />        
    );    
}

export default JobList