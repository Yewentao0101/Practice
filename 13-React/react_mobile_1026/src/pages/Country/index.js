import React, { Component } from 'react'
import {NavBar,Icon,List} from 'antd-mobile'

const Item = List.Item;
export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color={'#000'}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    >
                        硅谷注册登录
                </NavBar>
                <List renderHeader={() => 'Basic Style'} className="my-list">
                    <Item extra={'extra content'}>Title</Item>
                </List>
            </div>

       
        )
    }
}
