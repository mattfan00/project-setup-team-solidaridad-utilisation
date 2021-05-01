import React, {useContext} from "react"
import { useHistory, Link } from "react-router-dom"
import {Dropdown, Menu, message} from 'antd'
import { AuthContext } from "../../Context/AuthContext"

const Profile = () =>{
    const {businessUser, setBusinessUser, setBusinessToken } = useContext(AuthContext);
    const history = useHistory()

    const logout = () => {
        setBusinessUser(null)
        setBusinessToken(null)
        localStorage.removeItem("businessToken")
        message.info("You have been logged out")
    }

    const logoutButton = () => {
        if (businessUser) {
            return <Link 
                key="1" 
                onClick={
                    logout
                }
            >
                Sign Out
            </Link>
        } else {
            return ""
        }
    }

    
    const menu = () =>{
        return(
            <Menu>
                <Menu.Item
                    key='1'
                >
                    <Link
                        to='/business/dashboard/editprofile'
                    >
                        Edit Profile
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    key='2'
                >
                    {logoutButton()}
                </Menu.Item>
            </Menu>
        );
    }

    return (
        <div>
            <Dropdown
            overlay={menu()}>
                <a>
                    Profile
                </a>
            </Dropdown>
        </div>        
    )
}

export default Profile