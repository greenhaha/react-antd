import React, { Component } from 'react';
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd';
import {Redirect} from 'react-router-dom';
import './Login.css'
//=====组件=====

class LoginForm extends Component {
	goLogin = e => {
		console.log(this.props)
		e.preventDefault();
		let _this = this
		this.props.form.validateFields((err, values) => {
			if (!err) {
				sessionStorage.setItem("loginFlag", true)
				console.log('Received values of form: ', values);
				_this.props.GOLOGIN(values.username, values.password, _this.props.history);
			}
		});
		
	}

	componentDidMount() {
		console.log("Login渲染完毕")
	}
	render() {
		console.log(sessionStorage.getItem("loginFlag") == 'true')
		// if(sessionStorage.getItem("loginFlag") == 'true'){
		// 	return <Redirect to="/" />
		// }
		const { getFieldDecorator } = this.props.form;
		return (
			<Card style={{ width: 350,height:350 }}>
				<h2 style={{textAlign:"center"}}>login</h2>
				<Form onSubmit={this.goLogin} className="login-form">
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>,
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
						<a className="login-form-forgot" href="">
							Forgot password
          </a>
						<Button type="primary" htmlType="submit" style={{width:'100%'}} className="login-form-button">
							Log in
          </Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</Card>
		);
	}



}

const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default Login