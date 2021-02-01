import React,{Component} from 'react'
import store from './redux/store'

export default class App extends Component{
    componentDidMount(){
        store.subscribe(()=>{
            console.log(store.getState().count)
        })
    }

    handle = () =>{
        store.dispatch({type:'INCREMENT',data:1})
    }
    render(){
        return(
            <div>
                <div>{store.getState().count}</div>
                <button onClick = {this.handle}>按钮+1</button>
            </div>
        ) 

    }
}