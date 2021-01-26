import React ,{Component} from 'react'
import './List.css'
import Item from '../Item/Item'

export default class List extends Component{
    render(){
        const {list} = this.props
        return(
            <ul className="todo-main">
                {list.map((item)=>{
                    return <Item key={item.id} todo={item}></Item>
                })}
            </ul>
        )
    }
}