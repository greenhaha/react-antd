import React, { Component } from 'react';
import { Table, Input, Button, Popconfirm, Form, Row } from 'antd';
import AddModel from '../../component/model/model'
import TableFormDemo from '../../component/Form/tableForm'
//=====组件=====

class About extends Component {
	state={
		visible: false,
		context: null
	}
	handleDelete(key){
		console.log(`删除的行的key:${key}`)
	}
	showModal(){
		this.setState({
			visible: true,
			context:<TableFormDemo wrappedComponentRef={(form) => this.formRef = form} />
		});
	};
	showDangerModal(){
		this.setState({
			visible: true,
			context:<p>确定要删除吗？</p>
		})
	}
	handleOk(e){
		console.log('this.formRef.getItemsValue()',this.formRef.getItemsValue());
		console.log(e);
		if(this.formRef.getItemsValue().select){
			this.setState({
				visible: false,
				});
		}
        
        // this.props.handleOk()
    };

    handleCancel(e){
        console.log(e);
        this.setState({
        visible: false,
        });
 
    };
	render() {
		const columns = [
			{
			  title: 'Name',
			  dataIndex: 'name',
			  render: text => <a href="javascript:;">{text}</a>,
			},
			{
			  title: 'Age',
			  dataIndex: 'age',
			},
			{
			  title: 'Address',
			  dataIndex: 'address',
			},
			{
				title: 'operation',
				dataIndex: 'operation',
				render: (text, record) =>
				data.length >= 1 ? (
					<Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
					  <a href="javascript:;">Delete</a>
					</Popconfirm>
				  ) : null,
			  },
		  ];
		  const data = [
			{
			  key: '1',
			  name: 'John Brown',
			  age: 32,
			  address: 'New York No. 1 Lake Park',
			},
			{
			  key: '2',
			  name: 'Jim Green',
			  age: 42,
			  address: 'London No. 1 Lake Park',
			},
			{
			  key: '3',
			  name: 'Joe Black',
			  age: 32,
			  address: 'Sidney No. 1 Lake Park',
			},
			{
			  key: '4',
			  name: 'Disabled User',
			  age: 99,
			  address: 'Sidney No. 1 Lake Park',
			},
		  ];
		  
		  // rowSelection object indicates the need for row selection
		  const rowSelection = {
			onChange: (selectedRowKeys, selectedRows) => {
			  console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			},
			getCheckboxProps: record => ({
			  disabled: record.name === 'Disabled User', // Column configuration not to be checked
			  name: record.name,
			}),
		  };
		return (
			<div>
				<Button type="primary" onClick={()=>this.showModal()}>
					新增
				</Button>
				<Button type="danger" onClick={()=>this.showDangerModal()} style={{marginLeft:'1rem'}}>
					删除
				</Button>
				<Row style={{padding:'.5rem 0'}}></Row>
				<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
				<AddModel visible={this.state.visible} handleOk={()=>this.handleOk()} handleCancel={()=>this.handleCancel()} context={this.state.context}/>
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("About渲染完毕")
	}
	
}


export default About