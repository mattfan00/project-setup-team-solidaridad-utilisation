import React, {useEffect, useState} from 'react'
import { useHistory, Link } from "react-router-dom"
import {Card, Dropdown, Menu} from "antd"
import './styles.css'
import {DownOutlined} from '@ant-design/icons'

const JobView = (props) => {
    const history = useHistory()
    const [status, setStatus] = useState('Open')

    console.log(props)

    function handleMenuClick(i) {
        console.log(i.key)
        if(i.key == '1'){
            setStatus('Open')
        } 
        else if(i.key == '2'){
            setStatus('Closed')
        }
        else{
            setStatus('Archived')
        }
    }

    const menu = () =>{
        return(
            <Menu 
                onClick={handleMenuClick}
            >
                <Menu.Item key='1'>Open</Menu.Item>
                <Menu.Item key='2'>Close</Menu.Item>
                <Menu.Item key='3'>Archive</Menu.Item>
            </Menu>
        );
    }

    return (  
        <Card
            title = {'Applicants to ' + props.job.jobTitle}
            extra = {
                <div className="headerextra">
                    <div className="headCounter">
                        Applications: {props.job.applicantCount}
                    </div>
                    <Dropdown
                        overlay={menu()}
                    >
                        <a>
                            {status} <DownOutlined/>
                        </a>
                    </Dropdown>                    
                </div>
            }
        >
               
            {props.job.applicants && props.job.applicants.map((applicant) => (
                <Card
                    title={applicant.firstname + ' '+applicant.lastname}
                    extra={
                        <Link
                            to={{
                                pathname:'/business/dashboard/applications/applicant',
                                aboutProps:applicant
                            }}
                        >
                            View Application
                        </Link>
                    }
                >
                    <div className="description">
                        <div className="education">
                            {applicant.education}
                            {console.log({applicant})}
                        </div>
                        <div className="recentWork">
                            {applicant.work[0].company}
                        </div>
                    </div>
                </Card>
            ))}
        </Card>
    )
}

export default JobView