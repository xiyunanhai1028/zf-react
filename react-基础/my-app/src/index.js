import React from 'react'
import ReactDom from 'react-dom'
/**
 * 受控组件 非受控组件 以及ref
 * ref的三种使用
 *  1.ref='numA'
 *  2.ref={input => this.numA = input}
 *  3.this.numA = React.createRef()
 * 
 * ref可以获取组件
 * 1，如果组件是一个类的时候
 * 2，如果组件是一个方法时，需要用React.forwardRef()转
 * 
 * 非受控组件指的是DOM元素的值存在DOM元素的内部，不受React控制
 * 受控组件值的是DOM元素的值守React状态的控制
 */
class Form extends React.Component {

    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    getFocus = () => {
        // this.textInput.current.textInput.current.focus()
    }

    render() {
        return (
            <>
                <TextInput ref={this.textInput} />
                <button onClick={this.getFocus}>focus</button>
            </>
        )
    }
}

class TextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    render() {
        return <input ref={this.textInput} />
    }
}

// function TextInput2(props, ref) {
//     return <input ref={ref} />
// }

// let TextInput = React.forwardRef(TextInput2)

// function forwardRef(funcComponent) {
//     return function (props) {
//         return funcComponent(props, props.ref1)
//     }
// }

ReactDom.render(<Form />, document.getElementById('root'))