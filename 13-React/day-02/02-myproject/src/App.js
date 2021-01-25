// 定义一个根组件
import React from 'react'

import Test from './components/Test'

class App extends React.Component {
  // 上面构造函数的一种解析形式
  state = { count: 0, masg: 'hehe' }

  handle = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    // render函数中的this,一定指向当前组件的实例
    return (
      <div id="app">
        <div>{this.state.count}</div>
        <button onClick={this.handle}>按钮</button>
        <Test count={this.state.count} />
      </div>
    )
  }
}
export default App
