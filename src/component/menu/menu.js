import React ,{Component}from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
export default class Menus extends Component  {
    render(){
        console.log(window.location.pathname)
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
                <Menu.Item key="/">
                <Link to="/">
                    <Icon type="user" />
                    <span>仪表盘</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/About">
                <Link to="/About">
                    <Icon type="video-camera" />
                    <span>表格</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="/News">
                <Link to="/News" >
                    <Icon type="upload" />
                    <span>动画</span>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }

}
