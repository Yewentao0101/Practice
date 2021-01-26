import React ,{Component} from 'react'

//prop三个特点 
//1.props可以接受任何类型的的数据（组件 react元素）
//2.在构造器中无法直接通过this.props获取数据 要在构造器上接收 然后传入super（）
//3.props的数据只是可读的 修改的对象是里面的值 可以说明props是浅层对比

export default class Test extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        console.log(props)
    }
  render(){
    //类组件的实例身上 还有一个props属性 可以接受 使用Test组件时 使用属性=值的这种形式传递过来的数据
    //props用于接收组件外部传过来的数据
    console.log('render',this.props)
    this.props.obj.name =  'ls'
    return (
      <div>
        <h1>要展示App组件中count的值:{this.props.count}</h1>
      </div>
    )
  }
}

// import React from 'react'
// //注意 如果是函数组件就在组件的形参上接收
// export default function Test(props){
//   console.log(props)
//   return <div>{props.count}{prop.element}</div>
// }