import React from 'react'
import { useHistory, Link } from "react-router-dom"
import {Card} from "antd"

const JobView = (props) => {

    return (  
        <Card
            title = 'Applicants to $jobtitle$'
            extra = {
                <div className = "counter">
                    112{props.appCount}
                </div>
            }
        >
            <Card
                title='Applicant Name'
                type='inner'
                extra={
                    <a href="#">View Applicant</a>
                }
            >
                <div className="education">
                    --Institution and year--
                    </div>
                <div className="recentWork">
                    --most recent job--
                    </div>
            </Card>
            
            
            {props.applicants && props.applicants.map(applicant => (
                <Card
                    title={applicant.name}
                    extra={
                        <a href="#">View Applicant</a>
                    }
                >
                    <div className="description">
                        <div className="education">
                            --Institution and year--
                        </div>
                        <div className="recentWork">
                            --most recent job--
                        </div>
                    </div>
                </Card>
            ))}
        </Card>
    )
}

export default JobView