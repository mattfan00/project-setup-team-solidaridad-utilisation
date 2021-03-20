import React from "react"
import {Menu} from 'antd'

const menu = () =>{
    return (
        <Menu>
            <Menu.Item key="1">A-Z</Menu.Item>
            <Menu.Item key="2">Z-A</Menu.Item>
            <Menu.Item key="3">Most Recent</Menu.Item>
            <Menu.Item key="4">Oldest</Menu.Item>
        </Menu>
    )
}

export default menu