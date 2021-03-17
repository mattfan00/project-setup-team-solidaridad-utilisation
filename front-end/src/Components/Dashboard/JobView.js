import react from 'react'
import { useHistory } from "react-router-dom"
import {Card} from "antd"

const JobView = (props) => {
    const history = useHistory()

    return (
        <Card
            title = {props.jobTitle}
            extra = {
                <div className = "counter">
                    {props.appCount}
                </div>
            }
        >
            {props.applicants && props.applicants.map(applicant => (
                <Card
                    title = {applicant.name}
                    extra = {
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
            ))}
        </Card>
    )

}

export default JobView