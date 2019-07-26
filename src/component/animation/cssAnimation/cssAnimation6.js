import React, { PureComponent } from 'react'
import {Button} from 'antd'
import QueueAnim from 'rc-queue-anim';

class CssAnimation6 extends React.Component{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (
      <div className="queue-demo">
        <p className="buttons" style={{ marginBottom: 20 }}>
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <QueueAnim type={['right', 'left']} className="demo-content">
        {this.state.show ? [
          <div className="demo-header" key="header">
            <div className="logo">
              <img height="15" src="https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg" />
              <img height="8" src="https://zos.alipayobjects.com/rmsportal/glnFNVQMvQinmUr.svg" />
            </div>
            <ul>
              <li key="0"></li>
              <li key="1"></li>
              <li key="2"></li>
            </ul>
          </div>,
          <div className="demo-banner" key="banner">
            <div className="point">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>
          </div>,
          <QueueAnim className="demo-page" key="page" type="bottom">
            <h1 key="h1"/>
            <p key="p"/>
            <div key="box" className="box">
             <QueueAnim type="bottom" component="ul">
               <li key="0"/>
               <li key="1"/>
               <li key="2"/>
             </QueueAnim>
            </div>
          </QueueAnim>,
          <div className="demo-footer" key="footer" />,
        ] : null}
        </QueueAnim>
      </div>
    );
  }
};

export default CssAnimation6;