import React, { Component ,Fragment} from 'react';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import Menus from './component/menu/menu'
import HeadersReactRedux from './component/header/headerReactRedux'
import {Routers, NotLoginRoutes} from './routers'
import './App.css'
const { Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
};

toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
};
  render() {
      console.log(sessionStorage.getItem("loginFlag") == true)
    return (
        <Fragment>
        {sessionStorage.getItem("loginFlag") == 'true'?
            
            <Layout style={{minHeight:'100vh'}}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" style={{height:'32px', background:'rgba(255, 255, 255, 0.2)', margin:'16px'}}/>
                    <Menus />
                </Sider>
                <Layout>
                    <HeadersReactRedux toggleHeaders={()=>this.toggle()}/>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Routers />
                    </Content>
                </Layout>
            </Layout>:
            <div style={{width:'100%', minHeight:'100vh',display:'flex',justifyContent:'center', alignItems:'center'}}>
                <NotLoginRoutes />
            </div>
        }
        </Fragment>
        
      
    );
  }
}

//=====react-redux 封装组件=====

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
	return {
		isLogin:state.isLogin
	}
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
	return {};
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
