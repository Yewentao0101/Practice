//定义一个根组件
import React from 'react'

class App extends React.Component{
    //定义状态
    constructor(){
        super()
        this.state = {
            count:0,
            msg:'xixi'
        }
    }

    //一般事件处理函数都写在类里面 ，相当于写在了当前组件的原型上
    hander(){
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
        //render 中的this 一定指向当前实例
        return (
            <div id = 'app'>
                <div>{this.state.count}</div>
                <div>{this.state.msg}</div>
                <button onClick={()=>{
                   this.hander()
                   }}>按钮</button>
            </div>
        )
    }
}
export default App