import React, { PureComponent, Fragment } from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { Typography } from 'antd';

const { Title } = Typography;
export default class EditorDemo extends PureComponent {

    state = {
        editorState: null
    }

    async componentDidMount() {
        // 假设此处从服务端获取html格式的编辑器内容
        // const htmlContent = await fetchEditorContent()
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
        // this.setState({
        //   editorState: BraftEditor.createEditorState(htmlContent)
        // })
    }

    submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        // const result = await saveEditorContent(htmlContent)
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }

    render() {

        const { editorState } = this.state

        return (
            <Fragment>
                <Title level={4}>富文本编辑</Title>
                <div className="my-component" style={{ border: '1px solid #ccc', borderRadius: '3px' }}>
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleEditorChange}
                        onSave={this.submitContent}
                    />
                </div>
            </Fragment>
        )

    }

}