import React from 'react'
import ReactDom from 'react-dom'
/**
 * setState是异步的
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
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log(this.state.count)//=>0
        // this.setState({
        //     count: this.state.count + 1//这里拿到的this.state.count是0，所以显示的是1
        // })
        // console.log(this.state.count)//=>0

        //如果要显示改变的值
        //当调用setState的时候，其实状态并没有直接改变，而是放入一个队列当中，并且在队里中的所有执行完成后，才会执行每一个的回调
        this.setState((state) => ({//state是老的state
            count: state.count + 1
        }), () => {
            console.log(this.state.count)//=>2
        })

        this.setState((state) => ({//state是老的state
            count: state.count + 1
        }), () => {
            console.log(this.state.count)//=>2
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