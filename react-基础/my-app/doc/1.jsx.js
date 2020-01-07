import React from 'react'
import ReactDom from 'react-dom'
/**
 * jsx JavaScript+xml 是一种把JS和HTML混合书写的一种语法
 * JSX是用来描述界面上的元素长什么样子的
 * JSX可增加属性 js dom xx.className
 * JSX里面如果想使用一个变量，我们需要把它放在大括号里面
 * 表达式就是变量和运算符的组合
 */
let style = { color: 'red' }
let name = '张三'
function getAge() {
    return '18岁'
}
ReactDom.render(<h1 style={style}>
    {name} {getAge()}
</h1>, document.getElementById('root'))