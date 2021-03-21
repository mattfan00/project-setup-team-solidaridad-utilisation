import React, {useState} from 'react'
import {Card, Collapse, Dropdown, Menu} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import Responses from './Responses'
import {DownOutlined} from '@ant-design/icons'

const {Panel} = Collapse;

const Candidate = (props) => {
    
    const [status, setStatus] = useState('New')
    
    function handleMenuClick(i) {
        if(i.key == '1'){
            setStatus('Strong Candidate')
        }
        else if(i.key == '2'){
            setStatus('To Review')
        }
        else{
            setStatus('Rejected')
            //do something else to erase the applicant
        }
    }

    const menu = () =>{
        return(
            <Menu 
                onClick={handleMenuClick}
            >
                <Menu.Item key='1'>Approve</Menu.Item>
                <Menu.Item key='2'>Review</Menu.Item>
                <Menu.Item key='3'>Reject</Menu.Item>
            </Menu>
        );
    }

    return (
        <div className="content">
            <Card
                title={"Applicant Name" + props.name}
                extra = {
                    <Dropdown
                        overlay={menu()}
                    >
                        <a>
                            {status} <DownOutlined/>
                        </a>
                    </Dropdown>
                }
            >
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                >
                    <Panel header="Education" key='1'>
                        <Education education={props.education} year={props.educationYear} />
                    </Panel>
                    <Panel header="Work Experience" key='2'>
                        <WorkExperience work={props.work} />
                        {props.work && props.work.map(w =>
                            <WorkExperience workExp={w} />
                        )}
                    </Panel>
                    <Panel header="Responses" key='3'>
                        <Responses answers={props.answers} />
                    </Panel>
                    <Panel header="Projects" key='4'>
                        <Project />
                        {props.projects && props.projects.map(p =>
                            <Project project={p} />
                        )}
                    </Panel>                    
                </Collapse>
            </Card>
        </div>
    )
}

export default Candidate