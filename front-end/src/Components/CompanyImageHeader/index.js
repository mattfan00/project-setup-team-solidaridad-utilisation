import { OmitProps } from "antd/lib/transfer/ListBody"
import React from "react"
import companyLogo from './CompanyLogo.jpg'
import './index.css'

const BASE = "http://localhost:4000"

const CompanyLogo = (props) => {
    return(
        <div className="logoContainer">
            {props.name}
        <img src={`${BASE}${props.image}`} className="companyLogo"/>
        </div>
    )
}

export default CompanyLogo
