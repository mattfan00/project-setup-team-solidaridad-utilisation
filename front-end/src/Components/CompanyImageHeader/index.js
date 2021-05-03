import React from "react"
import './index.css'

const BASE = process.env.NODE_ENV == "production" ? process.env.REACT_APP_API_URL : "http://localhost:4000"

const CompanyLogo = (props) => {
    return(
        <div className="logoContainer">
            {props.name}
        <img src={`${BASE}${props.image}`} className="companyLogo"/>
        </div>
    )
}

export default CompanyLogo
