import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import BaseCharts from '../../component/bizcharts/charts';
import Basiccolumn from '../../component/bizcharts/basiccolumn'
import GaoMap from '../../component/map/gaomap'
//=====组件=====

class Home extends Component {

	render() {
		// if( this.props.isLogin==false){
		// 	return <Redirect to="/login" />
		// }

		return (
			// <div>
			// 	<h3>主页</h3>
			// 	<div>
			// 		<button onClick={this.outLogin.bind(this)}>退出登录</button>
			// 	</div>
			// </div>
			<div className="gutter-example">
				<Row gutter={16}>
					<Col className="gutter-row" span={12}>
						<Card title="折线统计图">
							<BaseCharts />
						</Card>
					</Col>
					<Col className="gutter-row" span={12}>
						<Card title="柱状图">
							<Basiccolumn />
						</Card>
					</Col>
				</Row>
				<Row gutter={16} style={{marginTop:'16px'}}>
					<Col className="gutter-row" >
					<Card title="地图展示">

							<GaoMap />
						</Card>
					</Col>
				</Row>
			</div>
		);
	}

	outLogin() {
		this.props.OUTLOGIN(this.props.history);
	}

	componentDidMount() {
		console.log("Home渲染完毕")
	}

}


export default Home