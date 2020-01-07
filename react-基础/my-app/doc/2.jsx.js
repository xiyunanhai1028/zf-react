import React from 'react'
import ReactDom from 'react-dom'
/**
 * React.createElement('h1', null, 'hello')=<h1>hello</h1>
 * 
 */
let element = React.createElement('h1', {
    className: 'title'
}, 'hello', React.createElement('span', null, 'world'))
console.log(JSON.stringify(element))
/**
 * React元素 就是一个普通的JS元素，虚拟DOM
{
    "type":"h1",
    "props":{
        "className":"title",
        "children":[
            "hello",
            {
                "type":"span",
                "props":{
                    "children":"world"
                },
            }
        ]
    },
}
 * 
 */
ReactDom.render(element, document.getElementById('root'))