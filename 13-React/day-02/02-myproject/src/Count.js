import React,{Component} from 'react'

export default class Count extends Component{
    render(){
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={()=>{
                    this.props.increment(1)
                }}>按钮+1</button>
                <button onClick={()=>{
                    this.props.increment(5)
                }}>按钮+5</button>
            </div>
        )
    }
}
