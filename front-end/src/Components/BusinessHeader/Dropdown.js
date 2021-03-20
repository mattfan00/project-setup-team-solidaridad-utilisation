import React from 'react'
import {Menu} from 'antd'

const menu = () => {
    return (
        <Menu>
            <Menu.Item key="1">Edit Profile</Menu.Item>
            <Menu.Item key="2">Sign Out</Menu.Item>
        </Menu>
    )
}

export default menu