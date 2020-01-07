class Component {
    static componentState = true
    constructor(props) {
        this.props = props
    }
}

function ReactElement(type, props) {
    const element = { type, props }
    return element
}

function createElement(type, config = {}, children) {
    let props = {}
    for (let propName in config) {
        props[propName] = config[propName]
    }
    const childrenLen = arguments.length - 2
    if (childrenLen === 1) {
        props.children = children
    } else {
        props.children = Array.from(arguments).slice(2)
    }
    return ReactElement(type, props)
}

export default { createElement, Component }