import React from "react"
import logo from './copply.png'
import { PageHeader, Image } from 'antd';

import "./logoStyling.css"

const AppHeader = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title={
                    <img src={logo} alt="website logo" className="logo"/>
                }
            />
        </div>
    );
}

export default AppHeader