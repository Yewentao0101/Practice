//定义一个根组件
import React from 'react'

class App extends React.Component{
    //定义状态
    // constructor(){
    //     super()
    //     this.state = {
    //         count:0,
    //         msg:'xixi'
    //     }
    // }

    //上面构造函数的一种解析形式

    state = { count:0,msg:'xixi'}

    //一般事件处理函数都写在类里面 ，相当于写在了当前组件的原型上
    //handle(){}  es6中在类中定义函数 这个函数就加到了类的原型上
    //es7中新增了一种在类里面定义函数的形式 函数名 = ()=>{} 函数加到了实例身上
    //类的实例方法 ：在类里面定义函数 但是函数加到了实例上
    hander = () => {
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
                <button onClick={this.hander}>按钮</button>
        {/* 注意: 如果handle在原型上,可以简单理解成底层使用了普通函数调用 
        如果handle函数是存储在实例身上,可以简单理解成 使用了对象方法调用,this就指向对象,而对象就是当前组件实例
        */}

            </div>
        )
    }
}
export default App