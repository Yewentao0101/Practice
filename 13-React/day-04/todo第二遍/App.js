// 定义一个根组件
import React ,{Component} from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import './App.css'

export default class App extends Component {
	//状态在哪里，操作状态的方法就在哪里

	//初始化状态
	state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'敲代码',done:false},
		{id:'004',name:'钓富婆',done:false}
	]}
	//添加一个todo
	addTodo=(todoObj)=>{
		const {todos} = this.state
		const newTodos = [todoObj,...todos]
		//console.log(newTodos)
		this.setState({
			todos:newTodos
		})
	}
	//用于更新一个todo对象
	updataTodo =(id,done)=>{
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			if(todoObj.id===id) return {...todoObj,done}
			else return todoObj
		})
		this.setState({
			todos:newTodos
		})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List todos = {todos} updataTodo={this.updataTodo}/>
					<Footer />
				</div>
			</div>
		)
	}
}
 