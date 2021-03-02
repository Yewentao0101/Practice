import React, { Component } from 'react'
import {
  NavBar,
  Icon,
  InputItem,
  WingBlank,
  Button,
  WhiteSpace,
} from 'antd-mobile'

export default class Login extends Component {
  toRegister = () => {
    this.props.history.replace('/register/phone', { from: '/login' })
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" color={'#000'} />}
          onLeftClick={() => console.log('onLeftClick')}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem placeholder="请输入手机号">
            <div className="inp-phone">
              <span>+86</span>
              <Icon type="down" />
            </div>
          </InputItem>
          <div className="inp-phone">
            <InputItem placeholder="请输入手机验证码"></InputItem>
            <div className="inp-code-tip">获取验证码</div>
          </div>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WhiteSpace></WhiteSpace>
          <WingBlank>
            <Button type="warning" disabled className="login-btn">
              登录
            </Button>
            <WhiteSpace></WhiteSpace>
            <WhiteSpace></WhiteSpace>




          </WingBlank>
        </WingBlank>
      </div>
    )
  }
}
