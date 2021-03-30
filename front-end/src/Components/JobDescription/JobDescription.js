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
                    <CompanyLogo image={"http://localhost:4000" + props.company.companyLogo}/>
                    <div className="JobTitle">
                        <h1>{props.details.title}</h1>
                        <h2>{props.company.companyName}</h2>
                    </div>
                    <div className="Description">
                        <h3>Job Description</h3>
                        <p>{props.details.description}</p>
                    </div>
                    <div className="Description">
                        <h3>About Company</h3>    
                        <p>{props.company.description}</p>
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