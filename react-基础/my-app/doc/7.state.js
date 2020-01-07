import React from 'react'
import ReactDom from 'react-dom'
/**
 * 修改state的值
 */
class Clock extends React.Component {
    constructor(props) {
        super(props)
        //构造函数里，是唯一可以给this.state赋初始值的地方
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    //组件挂载完成后调用
    componentDidMount() {
        setInterval(() => {
            //setState: 1.修改状态，2.重新render
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render() {
        return <>
            <h1>时间:{this.state.date}</h1>
        </>
    }
}
ReactDom.render(<Clock />, document.getElementById('root'))