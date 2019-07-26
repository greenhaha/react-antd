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
                <Menu.Item key="/table">
                <Link to="/table">
                    <Icon type="video-camera" />
                    <span>表格</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="/news">
                <Link to="/news" >
                    <Icon type="upload" />
                    <span>消息</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/animation">
                <Link to="/animation" >
                    <Icon type="skin" />
                    <span>动画</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/editor">
                <Link to="/editor" >
                    <Icon type="edit" />
                    <span>富文本编辑</span>
                    </Link>
                </Menu.Item>
                
            </Menu>
        )
    }

}
