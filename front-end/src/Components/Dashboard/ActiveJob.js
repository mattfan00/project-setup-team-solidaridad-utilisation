import React, { useEffect, useState } from "react"
import { Card, Space} from "antd"
import axios from 'axios'
import './styles.css'
import { useHistory, Link } from "react-router-dom"

const ActiveJob = (props) => {
    const history = useHistory()
    const [job, setJob] = useState()

    const id_url_active_job = 'http://localhost:4000/jobs/' + props.job._id
    const new_pathname = '/business/dashboard/' + props.job._id

    useEffect(async () => {
        const result = await axios(id_url_active_job);
        setJob(result.data)
      }, []);

    console.log(props.job)

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
                            pathname: new_pathname,
                            aboutProps:props.job
                        }}
                    >
                        View Applications
                    </Link>
                </Space>
            )}
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