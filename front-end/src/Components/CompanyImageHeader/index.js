import { OmitProps } from "antd/lib/transfer/ListBody"
import React from "react"
import companyLogo from './CompanyLogo.jpg'
import './index.css'

const CompanyLogo = (props) => {
    return(
        <div className="logoContainer">
            {props.name}
        <img src={props.image} className="companyLogo"/> 
        </div>
    )
}

export default CompanyLogo
