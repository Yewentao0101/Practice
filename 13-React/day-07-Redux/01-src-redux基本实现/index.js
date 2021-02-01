import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './App'

ReactDOM.render(<App />,document.getElementById('root'))

//使用redux
//此时写的redux 跟react没有关系 写在这里只是为了在浏览器中 可以查看数据
//导入一个函数 import {createStore} from 'redux'
//根据这个函数 创建对象 const store = createStore(reducer函数)
//定义一个 reducer函数
function reducer(state={count:0},action){
    switch (action.type){
        case 'INCREMENT':
            return{
                count : state.count + 1
            }
        case 'DECREMENT':
            return{
                count : state.count - 1
            }
        default :
        return state
    }
}

const store = createStore(reducer)

console.log(store.getState())
store.dispatch({type:'INCREMENT'})
console.log(store.getState())
