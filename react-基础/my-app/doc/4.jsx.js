import React from 'react'
import ReactDom from 'react-dom'
/**
 * 元素的更新
 * 元素是不可以变得
 */
setInterval(() => {
    ReactDom.render(<h1>{new Date().toLocaleString()}</h1>, document.getElementById('root'))
}, 1000)
