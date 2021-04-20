import React, { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import logo from './copply.png'
import { Button, PageHeader, message } from 'antd';

import "./logoStyling.css"

const ApplicantHeader = () => {
    const { applicantUser, setApplicantUser, setApplicantToken } = useContext(AuthContext)

    const logout = () => {
        setApplicantUser(null)
        setApplicantToken(null)
        localStorage.removeItem("applicantToken")
        message.info("You have been logged out")
    }

    const logoutButton = () => {
        if (applicantUser) {
            return <Button key="1" onClick={logout}>Logout</Button>
        } else {
            return ""
        }
    }
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title={
                    <img src={logo} alt="website logo" className="logo"/>
                }
                extra={[
                   logoutButton(),
                ]}
            />
        </div>
    );
}

export default ApplicantHeader