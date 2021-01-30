import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './Item.css'
export default class Item extends Component {

  updataHandle=()=>{
    Pubsub.publish('updata',this.props.item.id)
  }
  delHandle =()=>{
    Pubsub.publish('delete',this.props.item.id)
  }

  render() {
    const { item } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={item.isDone} onChange={this.updataHandle}/>
          <span className={item.isDone ? 'done' : ''}>{item.todoName}</span>
        </label>
        <button className="btn btn-danger" onClick={this.delHandle}>删除</button>
      </li>
    )
  }
}
