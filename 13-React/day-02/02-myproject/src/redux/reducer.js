import {ADDTODO, DELETETODO} from './constants'
let initState = {
    todoList: [
      {
        id: 3,
        todoName: '吃饭',
        isDone: false,
      },
      {
        id: 2,
        todoName: '睡觉',
        isDone: true,
      },
      {
        id: 1,
        todoName: '回家过年',
        isDone: false,
      },
    ],
  }

  export default function (state = initState,action){
      switch (action.type){
          case ADDTODO:
              const todoName = action.data
              let id =state.todoList.length?state.todoList[0].id+1:1
              let obj = {
                  id,
                  todoName,
                  isDone:false
              }
              let newTodoList = [...state.todoList]
              newTodoList.unshift(obj)

              return{
                  ...state,
                  todoList:newTodoList
              }

          case UPDATETODO:
              let updateTodoList = state.todoList.map((item)=>{
                return {...item}
              })
              updateTodoList.forEach((item)=>{
                if(item.id ===action.data){
                  item.isDone = !item.isDone
                }
              })
              return {
                ...state,
                todoList:updateTodoList
              }
          
          case DELETETODO:

  }
}