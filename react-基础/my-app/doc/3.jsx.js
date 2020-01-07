import React from 'react'
import ReactDom from 'react-dom'
//jsx是一个普通JS对象，那么它就可以被用在if while for方法的参数 返回值
let username = '张三'
function greeting(username) {
    if (username) {
        return <h1>{username}</h1>
    } else {
        return <h1>陌生人</h1>
    }
}
let element = greeting(username)
ReactDom.render(element, document.getElementById('root'))