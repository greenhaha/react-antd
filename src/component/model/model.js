import React, { Component } from 'react';
import { Modal, Button } from 'antd';
class AddModel extends Component {
    // state = { visible: false };

    // showModal = () => {
    //     this.setState({
    //     visible: true,
    //     });
    // };

    handleOk = e => {
        // console.log(e);
        // this.setState({
        // visible: false,
        // });
        this.props.handleOk()
    };

    handleCancel = e => {
        // console.log(e);
        // this.setState({
        // visible: false,
        // });
        this.props.handleCancel()
    };
    render() {
        return (
            <Modal
                title="提示"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText='确定'
                cancelText='关闭'
            >
                {this.props.context}
            </Modal>
        )
    }
}

export default AddModel;