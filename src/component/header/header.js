import React, { PureComponent } from 'react'
import { Layout, Icon, Menu, Dropdown, message, Avatar, Badge} from 'antd';
const { Header } = Layout;

class Headers extends PureComponent {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
        this.props.toggleHeaders()
    };
    onClick(){
       
    }
    
    render() {
        const onClick = ({ key }) => {
            message.info(`Click on item ${key}`);
            if(key == 3){
                this.props.OUTLOGIN(this.props.history);
            }
          };
          
          const menu = (
            <Menu onClick={onClick}>
            <Menu.Item key='1'>
                 个人资料
            </Menu.Item>
            <Menu.Item key='2'>
              消息
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key='3'>
              <Icon type="logout" />退出登录
            </Menu.Item>
          </Menu>
          );
        return (
            <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <div style={{float:'right', padding:'0 16px'}}>
                <Badge count={1} dot >
                <Icon type="notification" />
                </Badge>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{marginLeft:'1.25rem'}}/>
                <Dropdown overlay={menu}>
                
                    <a className="ant-dropdown-link" href="#">
                    境界的彼方<Icon type="down" />
                    </a>
                </Dropdown>
                </div>
            </Header>
        )
    }
}

export default Headers