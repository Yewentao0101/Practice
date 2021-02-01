import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './App'

ReactDOM.render(<App />,document.getElementById('root'))

//reduce有三个核心感觉
//store:
//-有一个state属性 集中储存了项目中所需要的所有的数据
//-要修改的数据 是要通过store.dispatch(需求)去修改的

//reducer:
//-reducer 是真正去修改数据的角色
//-reducer 在创建store的时候 会调用一次 为了初始化数据 后面每次调用dispatch reducer会调用 为了修改数据
//-定义 : function 函数名(state={},action){switch...}
//reducer 要求是一个纯函数(输出同样的值 得到同样的数据)

//action :
//-action 是一个普通的对象 表示需求数据的需求
//-action 对象上至少有一个type属性 值用来描述需求类型 (一般写成大写的字符串)
//- 除了type属性必写之外 其他属性可写可不写

//使用redux
//此时写的redux 跟react没有关系 写在这里只是为了在浏览器中 可以查看数据
//导入一个函数 import {createStore} from 'redux'
//根据这个函数 创建对象 const store = createStore(reducer函数)
//定义一个 reducer函数  reducer要求是一个纯函数
function reducer(state={count:0,msg:'hehehe'},action){
    switch (action.type){
        case 'INCREMENT':
            //reducer 函数中返回什么 store中的state的值就变成什么
            return{
                //为了保证数据的完整性 要在return的对象里最上面写...state
                ...state,
                count : state.count + action.data
            }
        case 'DECREMENT':
            return{
                count : state.count - action.data
            }
        default :
        return state
    }
}

const store = createStore(reducer)

store.dispatch({type:'INCREMENT',data:5})
console.log(store.getState())
store.dispatch({type:'DECREMENT',data:3})
console.log(store.getState())
