import React , {Component} from 'react'
import './Header.css'

export default class Header extends Component{
    state = {
        todo:''
    }
    handle = (e) =>{
        this.setState({
            todo:e.target.value.trim()
        })
    }

    keyUpHandle = (e)=>{
        let {todo} = this.state
        if(todo && e.keyCode === 13){
            this.props.addtodo(todo)
            this.setState({
                todo:''
            })
        }
    }


    render() {
        return (
          <div className="todo-header">
            <input
              type="text"
              value={this.state.todo}
              onChange={this.handle}
              onKeyUp={this.keyUpHandle}
            />
          </div>
        )
      }
}