function render(element, parentNode) {
    if (typeof element === 'string' || typeof element === 'number') {
        return parentNode.appendChild(document.createTextNode(element))
    }
    let type, props
    type = element.type
    props = element.props
    if (type.componentState) {
        const newClazz = new type(props)
        const returnElement = newClazz.render()
        type = returnElement.type
        props = returnElement.props
    }
    else if (typeof type === 'function') {
        const returnElement = type(props)
        type = returnElement.type
        props = returnElement.props
    }
    let domElement = document.createElement(type)
    for (let propName in props) {
        if (propName === 'className') {
            domElement.className = props[propName]
        } else if (propName === 'style') {
            /**
             * {
                    color: 'red',
                    fontSize: '80px'
                }
             */
            let propObj = props[propName]
            //['color','fontSiz']=>['color:red','fontSize:80px']=>'color:red;fontSize:80px'=>'color:red;font-size:80px'
            let cssTxt = Object.keys(propObj).map(attr => `${attr.replace(/([A-Z])/g, function () {
                return '-' + arguments[1].toLowerCase()
            })}:${propObj[attr]}`).join(';')
            console.log('cssText', cssTxt)
            domElement.style.cssText = cssTxt
        } else if (propName === 'children') {
            let children = Array.isArray(props[propName]) ? props[propName] : [props[propName]]
            children.forEach(child => render(child, domElement))
        } else {
            domElement.setAttribute(propName, props[propName])
        }
    }
    parentNode.appendChild(domElement)
}

export default { render }