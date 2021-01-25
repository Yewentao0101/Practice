import React from 'react'
import ReactDOM from 'react-dom'

//定义一个数组组件
function Div(){
    return <div>hello 函数组件</div>
}

//定义一个类组件 
class Header extends React.Component {
    render(){
        return <h1>hello 类组件</h1>    }
}

ReactDOM.render(<Header />,document.getElementById('root'))