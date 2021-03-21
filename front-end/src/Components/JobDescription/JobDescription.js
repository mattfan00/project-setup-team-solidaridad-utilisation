import React from "react"
import './index.css'

import {
    Typography,
    Col,
} from "antd"
import CompanyLogo from "../CompanyImageHeader"

const JobDescription = (props) => {
    return (
        <div className="JobDescription">
            <Col span={24}>
                <div layout="vertical">
                    <CompanyLogo image={props.details.logo}/>
                    <div className="JobTitle">
                        <h1>{props.details.title}</h1>
                        <h2>{props.details.company}</h2>
                    </div>
                    <div className="Description">
                        <h3>Job Description</h3>
                        <p>{props.details.description}</p>
                    </div>
                    <div className="Description">
                        <h3>About Company</h3>    
                        <p>{props.details.about}</p>
                    </div>
                    <div className="Description">
                        <h3>Job Location</h3>
                        <p>{props.details.location}</p> 
                    </div>   
                    <div className="Description">
                        <h3>Desired Skills</h3>
                        <p>{props.details.skills}</p>
                    
                    </div> 
                </div>   
            </Col>
        </div>
    )
}

export default JobDescription