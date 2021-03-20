import React from "react"
import {Card} from "antd"
import './styles.css'
import { useHistory, Link } from "react-router-dom"

const ActiveJob = (props) => {
    const history = useHistory()

    return (
        <Card
            type="inner"
            title={props.job.title}
            extra={
                <Link 
                to='/business/dashboard/applications'
                >
                    View Applications
                </Link>
            }
        >
            <div className="counter">
                {props.job.appCount} Applicants
            </div>
            <div>
                Status: {props.job.status}
            </div>
        </Card>
    );
}

export default ActiveJob