import React from "react"
import {Card} from "antd"
import './styles.css'
import { useHistory, Link } from "react-router-dom"

const ActiveJob = (props) => {
    const history = useHistory()

    console.log(props.job.jobID)

    return (
        <Card
            type="inner"
            title={props.job.jobTitle}
            extra={
                <Link
                    to={{
                        pathname:`/business/dashboard/job/${props.job.jobID}`,
                        aboutProps:props.job
                    }}
                >
                    View Applications
                </Link>
            }
        >
            <div className="counter">
                {props.job.applicantCount} Applicants
            </div>
            <div>
                Status: {props.job.status}
            </div>
        </Card>
    );
}

export default ActiveJob