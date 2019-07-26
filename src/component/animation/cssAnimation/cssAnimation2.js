import React, { PureComponent } from 'react'
import QueueAnim from 'rc-queue-anim';
import {Button} from 'antd'
class CssAnimation2 extends PureComponent{
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
            <QueueAnim className="demo-content">
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
}

export default CssAnimation2;