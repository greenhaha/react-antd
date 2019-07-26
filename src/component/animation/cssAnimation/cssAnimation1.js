import React, { PureComponent } from 'react';
import QueueAnim from 'rc-queue-anim';
// import './cssAnimation1.css'

class CssAnimation1 extends PureComponent{
  
  render(){
    return (
      <QueueAnim delay={300} className="queue-simple">
        <div key="a">Queue Demo</div>
        <div key="b">Queue Demo</div>
        <div key="c">Queue Demo</div>
        <div key="d">Queue Demo</div>
      </QueueAnim>
    );
  }
}

export default CssAnimation1;