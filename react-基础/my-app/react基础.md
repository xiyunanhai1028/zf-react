## React基础

### 1.什么是React

+ React是一个用于构建用户界面的JavaScript库，核心专注于视图，目的实现组件化开发

### 2.组件的概念

+ 我们可以很直接的讲一个复杂的页面分割成若干个独立组件，每个组件包含自己的逻辑和样式，再将这些独立组件组合完成一个复杂的页面。这样既减少了逻辑复杂度，又实现了代码重用
  + 可组合：一个组件可以和其他组件一起使用或可以直接嵌套在另一个组件内部
  + 可重用：每个组件都是具有独立功能的，它可以被使用在多个场景中
  + 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护

### 3.搭建React开发环境

```javascript
yarn create react-app my-app
```

+ 默认会自动安装React,React有两部分组成，分别问：
  + react.js是React的核心库
  + react-dom.js是提供与DOM相关的功能，内部比较重要的方法是render，它用来向浏览器里插入DOM元素

### 4.JSX

#### 4.1.什么是JSX

### 5.组件&Props

+ 可以将UI切分成一些独立的，可复用的部件，这样你就只需专注于构建每一个单独的部件
+ 组件从概念上类似于JavaScript函数，它接受任意的参数（即“props”），并返回用于描述页面展示内容的React元素

#### 5.1函数（定义的）组件

+ 函数组件接收一个单一的`props`对象并返回了一个React元素

```javascript
function Welcome(props) {
    return <h1>{props.name} {props.age} </h1>
}
```

#### 5.2类（定义的）组件

```javascript
class Welcome extends React.Component {
    render() {
        return <h1>{this.props.name} {this.props.age} </h1>
    }
}
```

#### 5.3组件渲染

+ React元素不但可以是DOM标签，还可以是用户自定义的组件
+ 当React元素为用户自定义组件时，它会将JSX所接收的属性（attributes）转换为单个对象传递给组件，这个对象被称之为`props`
+ 组件名称必须以大写字母开头
+ 组件必须在使用的时候定义或引用他
+ 组件返回值只能有一个根元素

