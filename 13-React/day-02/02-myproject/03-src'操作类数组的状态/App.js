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
    render(){
        //render 中的this 一定指向当前实例
        return (
            <div id = 'app'>
                <div>{this.state.count}</div>
                <div>{this.state.msg}</div>
                <button onClick={()=>{
                   this.setState({
                       count:this.state.count + 1
                   })        
                }}>按钮</button>
                <Header></Header>
                <Footer></Footer>
                <Test />
            </div>
        )
    }
}
export default App