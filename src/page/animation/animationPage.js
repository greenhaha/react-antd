import React, { PureComponent } from 'react'
import { Card } from 'antd';
import Animation1 from '../../component/animation/textanimation/animation1'
import Animation2 from '../../component/animation/textanimation/animation2'
import Animation3 from '../../component/animation/textanimation/animation3'
import Animation4 from '../../component/animation/textanimation/animation4'
import CssAnimation1 from '../../component/animation/cssAnimation/cssAnimation1'
import CssAnimation2 from '../../component/animation/cssAnimation/cssAnimation2'
import CssAnimation3 from '../../component/animation/cssAnimation/cssAnimation3'
import CssAnimation4 from '../../component/animation/cssAnimation/cssAnimation4'
import CssAnimation5 from '../../component/animation/cssAnimation/cssAnimation5'
import CssAnimation6 from '../../component/animation/cssAnimation/cssAnimation6'
class AnimationPage extends PureComponent{
    render(){
        const gridStyle = {
            width: '33.333%',
            textAlign: 'center',
            height:'200px'
          };
          const gridStyle2 = {
            width: '50%',
            textAlign: 'center',
          };
          const gridStyleAll = {
            width: '100%',
            textAlign: 'center',
            height:'375px'
          }
          const gridStyleAllCss = {
            width: '100%',
            textAlign: 'center',
          }
          
        return (
            <div>
                <Card title="文字动画">
                    <Card.Grid style={gridStyle}>
                        <p>文字切换</p>
                        <Animation1 />
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <p>自定义</p>
                        <Animation2 />
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <p>内置效果</p>
                        <Animation3 />
                    </Card.Grid>
                    <Card.Grid style={gridStyleAll}>
                        <p>内置效果</p>
                        <Animation4 />
                    </Card.Grid>
                </Card>
                <Card title="进出场动画" style={{marginTop:'1rem'}}>
                    <Card.Grid style={gridStyle}>
                        <p>简单的例子</p>
                        <CssAnimation1 />
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <p>进场和离场</p>
                        <CssAnimation2 />
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>
                        <p>属性设置</p>
                        <CssAnimation3 />
                    </Card.Grid>
                    <Card.Grid style={gridStyle2}>
                        <p>简单的例子</p>
                        <div><CssAnimation4 /></div>
                    </Card.Grid>
                    <Card.Grid style={gridStyle2}>
                        <p>自定义动画进出场</p>
                        <CssAnimation5 />
                    </Card.Grid>
                    <Card.Grid style={gridStyleAllCss}>
                        <p>一个复杂些的例子</p>
                        <CssAnimation6 />
                    </Card.Grid>
                </Card>
            </div>
        )
    }
}

export default  AnimationPage