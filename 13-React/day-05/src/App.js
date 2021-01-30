// 定义一个根组件
import React ,{Component} from 'react'
import Pubsub from 'pubsub-js'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import Item from './components/Item/Item'
import './App.css'

export default class App extends Component {
	//状态在哪里，操作状态的方法就在哪里

	//初始化状态
	state = {list:[
		{id:'001',todoName:'吃饭',isDone:true},
		{id:'002',todoName:'睡觉',isDone:true},
		{id:'003',todoName:'敲代码',isDone:false},
		{id:'004',todoName:'钓富婆',isDone:false}
	]}

	componentDidMount(){
		this.token = Pubsub.subscribe('add',(msg,data)=>{
			let { list } = this.state
			let newList = [...list]

			let id = list.length?list[0].id+1:1
			let obj ={
				id,
				todoName:data,
				isDone:false
			}
			newList.unshift(obj)
			this.setState({
				list:newList
			})
		})
	}
	componentWillUnmount(){
		Pubsub.unsubscribe(this.token)
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header />
					<List name='xxx'>
						<Item />
						<Item />
						<Item />
					</List>
					<Footer />
				</div>
			</div>
		)
	}
}
 