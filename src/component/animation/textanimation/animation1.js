import React,{PureComponent} from 'react'

import Texty from 'rc-texty';
import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';

class Animation1 extends PureComponent{
  state = {
    show: true
  };
  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }
  render(){
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <p className="buttons" style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.onClick}>Switch</Button>
        </p>
        <Texty>{this.state.show && 'Ant Motion'}</Texty>
      </div>
    );
  }
}

export default Animation1