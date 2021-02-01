import React,{Component} from 'react'

import {connect} from 'react-redux'
import {increment}from './redux/actions'

class Count extends Component{
    render(){
        console.log(this.props)  
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={()=>{
                    this.props.incre(1)
                }}>按钮+1</button>
                <button onClick={()=>{
                    this.props.incre(5)
                }}>按钮+5</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        Count:state.count
    }
}

function mapDispatchToProps(dispatch){
    return{
        incre:function(data){
            dispatch(increment(data))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count)