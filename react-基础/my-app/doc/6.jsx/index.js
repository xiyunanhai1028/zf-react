import React from './react'
import ReactDom from './react-dom'

let element = React.createElement("h1", {
    className: "title",
    style: {
        color: 'red',
        fontSize: '80px'
    }
}, "'hello'", React.createElement("span", null, "world"));

function Welcome(props) {
    return React.createElement("h1", {
        className: "title",
        style: {
            color: 'red',
            fontSize: '80px'
        }
    }, props.name, props.age)
}
let welcome = React.createElement(Welcome, { name: '张三', age: 18 })

class Welcome2 extends React.Component {
    render() {
        return React.createElement("h1", {
            className: "title",
            style: {
                color: 'red',
                fontSize: '80px'
            }
        }, this.props.name, this.props.age)
    }
}
let welcome2 = React.createElement(Welcome2, { name: '张三', age: 18 })
ReactDom.render(welcome2, document.getElementById('root'))