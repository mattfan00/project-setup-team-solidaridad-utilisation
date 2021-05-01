import React, { useState, useEffect } from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'
import { PageHeader } from 'antd'
import { useHistory, Link } from 'react-router-dom'
import axios from "axios"

const Header = (props) => {
    const history = useHistory()

    const [company, setCompany] = useState()

    useEffect(async () => {
        const result = await axios.get(`/company/${props.company}`)
        setCompany(result.data)
    }, [])

    return (
        <div className='top'>
            <PageHeader
                className="site-page-header"
                title={
                    <Link
                    to='/business/dashboard'>
                        <img src={logo} alt="website logo" className="logo" />
                    </Link>
                }
                subTitle={company?.name}
                extra={[
                    <Profile />,
                ]}
            />
        </div>
    )
}

export default Header