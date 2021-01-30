import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Item from './components/Item/Item'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      {
        id: 3,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 2,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 1,
        todoName: '找富婆',
        isDone: false,
      },
    ],
  }

  componentDidMount() {
    this.token = Pubsub.subscribe('add', (msg, data) => {
      // 如果这个回调执行了,说明任务名传过来了.可以直接添加数据了
      let { list } = this.state


      let id = list.length ? list[0].id + 1 : 1
      let obj = {
        id,
        todoName: data,
        isDone: false,
      }
      let newList = [...list]
      newList.unshift(obj)
      this.setState({
        list: newList,
      })
    })
    
    Pubsub.tokenUpdata = Pubsub.subscribe('updata',(msg,id)=>{
      const {list} = this.state
      const newList = [...list]
      newList.forEach((item)=>{
        if(item.id===id){
          item.isDone = !item.isDone
        }
      })
      this.setState({
        list:newList
      })
    })

    Pubsub.tokenDel = Pubsub.subscribe('delete',(msg,id)=>{
      const {list}= this.state
      const newList =list.filter((item)=>{
        return item.id!==id
      })
      this.setState({
        list:newList
      })
    })

    Pubsub.tokenAllCheck = Pubsub.subscribe('allCheck',(msg,list)=>{
      this.setState({
        list
      })
    })

    Pubsub.tokenClearDones = Pubsub.subscribe('clearAlldone',(msg,data)=>{
      const {list} = this.state
      const newList = list.filter((item)=>{
        return !item.isDone
      })
      this.setState({
        list:newList
      })
    })
  }

  componentWillUnmount() {
    Pubsub.unsubscribe(this.token)

  }

  render() {
    const {list} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header></Header>
          {
            <div>
              {list.length > 0 && (
                <div>
                  <List name="123">
                    {list.map((item) => (
                      <Item key={item.id} item={item}></Item>
                    ))}
                  </List>
                  <Footer list={list}></Footer>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    )
  }
}
