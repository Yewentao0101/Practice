import React ,{Component} from 'react'
import './Header.css'

export default class Header extends Component{
    state ={
        todeName:''
    }
    handle = (e)=>{
        this.setState({
            todeName:e.target.value
        })
    }
    keyupHandle=(e)=>{
        if(e.keyCode ===13){
            this.props.fn(this.state.todeName)
        }
    }
    render(){
        return(
            <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onChange={this.handle} onKeyUp={this.keyupHandle}></input>
            </div>
        )
    }
}