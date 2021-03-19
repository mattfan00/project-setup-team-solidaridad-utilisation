import React from "react"
import logo from './copply.png'
import { PageHeader} from 'antd';

import "./logoStyling.css"

const ApplicantHeader = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title={
                    <img src={logo} alt="website logo" className="logo"/>
                }
            />
        </div>
    );
}

export default ApplicantHeader