import React from 'react'
import ReactDom from 'react-dom'
/**
 * 解决this指针的三种方法：
 * 1.this.add.bind(this)把add方法里面的this指针绑定为组件实例
 * 2.() => this.add(),使用匿名函数
 * 3.add = () => {} ，箭头函数，类的属性
 */
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    //给类的实例添加一个add的属性，而这个属性里的this绑死为组件的实例
    add = () => {
        const oldCount = this.state.count
        this.setState({
            count: oldCount + 1
        })
    }

    render() {
        return <>
            <p>当前计数：{this.state.count}</p>
            <button onClick={this.add}>添加</button>
        </>
    }
}
ReactDom.render(<Counter />, document.getElementById('root'))