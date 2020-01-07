import React from 'react'
import ReactDom from 'react-dom'

/**
 * 我们把页面分成若干的独立的部分，单独编写，单独维护
 * 1.一个返回普通React元素的函数就是一个合法的React组件
 * 2.组件需要返回一个并且仅能返回一个React根元素
 * 3.组件的名称必须大写字母开头
 */
function Welcome1(props) {
    return <h1>{props.name} {props.age} </h1>
}

/**
 * 1.收集属性对象 props
 * 2.把属性对象传递给Welcome类的构造函数，并得到Welcome类的实例
 *  
 */
class Welcome extends React.Component {
    constructor(props) {
        super(props)//this.props=props
    }
    render() {
        return <h1>{this.props.name} {this.props.age} </h1>
    }
}

let props = {
    name: '张三',
    age: 18
}
ReactDom.render(<Welcome {...props} />, document.getElementById('root'))