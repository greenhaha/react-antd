import React ,{Component}from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
export default class Menus extends Component  {
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.hash]}>
                <Menu.Item key="#/">
                <Link to="/Home">
                    <Icon type="user" />
                    <span>主页</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="#/About">
                <Link to="/About">
                    <Icon type="video-camera" />
                    <span>关于</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="#/News">
                <Link to="/News" >
                    <Icon type="upload" />
                    <span>消息</span>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }

}
