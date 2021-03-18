import React, {useState} from 'react'
import { useHistory, Link } from "react-router-dom"
import {Card, Dropdown, Menu} from "antd"
import './styles.css'
import {DownOutlined} from '@ant-design/icons'

const JobView = (props) => {

    const [status, setStatus] = useState('Open')

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
            title = 'Applicants to $jobtitle$'
            extra = {
                <div className="headerextra">
                    <div className="headCounter">
                        Applications: 11{props.appCount}
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