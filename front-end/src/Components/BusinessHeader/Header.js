import React from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'
import {PageHeader} from 'antd'

const Header = () => {
    return (
        <div className='top'>
            <PageHeader
                className="site-page-header"
                title={
                    <img src={logo} alt="website logo" className="logo" />
                }
                subTitle='Company name'
                extra={
                    <Profile />
                }
            />
        </div>
    )
}

export default Header