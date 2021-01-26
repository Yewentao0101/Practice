// 定义一个根组件
import React ,{Component} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import './App.css'

export default class App extends Component{
    state = {
        list: [
          {
            id: 1,
            todoName: '吃饭',
            isDone: true,
          },
          {
            id: 2,
            todoName: '睡觉',
            isDone: true,
          },
          {
            id: 3,
            todoName: '找富婆',
            isDone: false,
          },
        ],
      }

      getTodeName = (todoName)=>{
        let obj={
          id:Date.now(),
          todoName,
          isDone:false,
        }

        let {list}=this.state
        let newList = [...list]
        newList.unshift(obj)
        this.setState({
          list:newList
        })
      }
    render(){
        return(
            <div>
              <div className="todo-container"></div>
              <div className="todo-wrap"></div>
              <Header fn={this.getTodeName}></Header>
              <List list={this.state.list}></List>
              <Footer></Footer>
            </div>
        )
    }
}
 