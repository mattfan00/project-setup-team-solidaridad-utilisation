import React, { useEffect, useState } from "react"
import { Card, Space} from "antd"
import axios from 'axios'
import './styles.css'
import { useHistory, Link } from "react-router-dom"

const ActiveJob = (props) => {
    const history = useHistory()
    const [job, setJob] = useState()

    const id_url_active_job = 'http://localhost:4000/jobs/' + props.job._id
    const new_pathname = '/business/dashboard/job/' + props.job._id

    return (
        <Card
            type="inner"
            title={props.job.jobTitle}
            extra={(
                <Space size="large">
                    <Link
                        to={`/application/${props.job._id}`}
                    >
                        View Live Page
                    </Link>
                    <Link
                        to={{
                            pathname: `/business/dashboard/job/${props.job._id}`,
                            aboutProps:props.job
                        }}
                    >
                        View Applications
                    </Link>
                </Space>
            )}
        >
            <div className="counter">
                {props.job.applicants.length} Applicants
            </div>
            <div>
                Status: {props.job.status}
            </div>
        </Card>
    );
}

export default ActiveJob