import React, { PureComponent } from 'react'
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';

class CssAnimation3 extends PureComponent{
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
        <p className="buttons">
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <QueueAnim className="demo-content"
          key="demo"
          type={['right', 'left']}
          ease={['easeOutQuart', 'easeInOutQuart']}>
          {this.state.show ? [
            <div className="demo-thead" key="a">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </div>
          ] : null}
        </QueueAnim>
      </div>
    );
  }
};

export default CssAnimation3;