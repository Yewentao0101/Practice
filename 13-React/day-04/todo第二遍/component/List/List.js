import React ,{Component} from 'react'
//import PropTypes from 'prop-types'
import './List.css'
import Item from '../Item/Item'

export default class List extends Component {


	render() {
		const{todos,updataTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map((todo)=>{
						return <Item  key={todo.id} {...todo} updataTodo={updataTodo}/>
					})
				}
			</ul>
		)
	}
}