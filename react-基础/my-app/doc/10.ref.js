import React from 'react'
import ReactDom from 'react-dom'
/**
 * 受控组件 非受控组件 以及ref
 * ref的三种使用
 *  1.ref='numA'
 *  2.ref={input => this.numA = input}
 *  3.this.numA = React.createRef()
 */
// class Sum1 extends React.Component {
//     add = () => {
//         const numA = this.refs.numA.value
//         const numB = this.refs.numB.value
//         this.refs.result.value = parseInt(numA) + parseInt(numB)

//     }
//     render() {
//         return (
//             <>
//                 <input ref='numA' />+<input ref='numB' /><button onClick={this.add}>=</button><input ref='result' />
//             </>
//         )
//     }
// }

// class Sum2 extends React.Component {
//     add = () => {
//         const numA = this.numA.value
//         const numB = this.numB.value
//         this.result.value = parseInt(numA) + parseInt(numB)

//     }
//     render() {
//         return (
//             <>
//                 <input ref={input => this.numA = input} />+<input ref={input => this.numB = input} /><button onClick={this.add}>=</button><input ref={input => this.result = input} />
//             </>
//         )
//     }
// }

let createRef = function () {
    return { current: null }
}
class Sum3 extends React.Component {
    constructor(props) {
        super(props)
        // this.numA = React.createRef()
        // this.numB = React.createRef()
        // this.result = React.createRef()
        this.numA = createRef()
        this.numB = createRef()
        this.result = createRef()
    }
    add = () => {
        const numA = this.numA.current.value
        const numB = this.numB.current.value
        this.result.current.value = parseInt(numA) + parseInt(numB)

    }
    render() {
        return (
            <>
                <input ref={this.numA} />+<input ref={this.numB} /><button onClick={this.add}>=</button><input ref={this.result} />
            </>
        )
    }
}
ReactDom.render(<Sum3 />, document.getElementById('root'))