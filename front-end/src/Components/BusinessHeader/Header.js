import React from 'react'
import './styles.css'
import Profile from './ProfileDropdown'

const Header = () => {
    return (
        <div className='header'>
            <div className='welcomeText'>
                $Company$
            </div>
            <div className="profile">
                <Profile/>
            </div>
        </div>
    )
}

export default Header