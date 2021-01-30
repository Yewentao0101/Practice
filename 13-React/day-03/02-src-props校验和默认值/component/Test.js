import React,{Component} from 'react'
import PropTypes from 'prop-types'
class Test extends Component{
  static defaultProps = {
    list : [6,7,8]
  }

  render(){
    return(
      <div>
        {this.props.list.map((item)=>{
          return <p key={item}>{item}</p>
        })}
      </div>
    )
  }
}

//给Test组件做props校验 需要给Test组件调价静态属性propTypes，值为对象.对象里面定义校验规则
Test.propTypes = {
  list : PropTypes.array.isRequired
  //list表示要对list属性进行校验 没有写的属性 就不进行校验
  //list 属性后面的值是校验规则
  //所有的规则都是PropTypes开头的 
  //array表示list属性应该是数组
  //isRequired表示list属性必须写
}

export default Test