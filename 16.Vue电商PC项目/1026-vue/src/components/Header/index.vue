<template>
  <header class="header">
    <div class="header-nav">
      <div class="header-login">
        <p>尚品汇欢迎您！</p>
        <div>
          请
          <router-link to='/login' class="header-login-link">登录</router-link>
          <router-link to='/register'>免费注册</router-link>
        </div>
      </div>
      <ul class="header-nav-list">
        <li><a href="###" class="header-nav-first">我的订单</a></li>
        <li><a href="###">我的购物车</a></li>
        <li><a href="###">我的尚品汇</a></li>
        <li><a href="###">尚品汇会员</a></li>
        <li><a href="###">企业采购</a></li>
        <li><a href="###">关注尚品汇</a></li>
        <li><a href="###">合作招商</a></li>
        <li><a href="###">商家后台</a></li>
      </ul>
    </div>
    <div class="header-bottom">
      <h1 class="header-logo">
        <router-link to='/'><img src="./logo.png" alt="logo" /></router-link>
      </h1>
      <form  class="header-search" @submit.prevent='toSearch'>
        <input type="text" />
        <button type='submit'>搜索</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    toSearch(){
      this.$router.history.push('/search')
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid red;
}
.header-nav {
  display: flex;
  justify-content: space-between;
  background-color: #eaeaea;
  padding: 0 20px;
  font-size: 12px;
  color: #333;
}
.header-login {
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #333;
  }
  a:hover{
    color:#E1251B;
  }
}
.header-login-link {
  border-right: 1px solid #333;
  margin-right: 5px;
  padding-right: 5px;
}

.header-nav-list {
  display: flex;
  a {
    color: #333;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #333;
  }
  a:hover{
    color:#E1251B;
  }

  .header-nav-first {
    border-left: none;
  }
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 0;
}
.header-logo {
  margin: 0;
  img {
    width: 175px;
    height: 60px;
  }
}

.header-search {
  display: flex;
  align-items: center;
  input {
    box-sizing: border-box;
    width: 490px;
    height: 32px;
    padding: 0px 4px;
    border: 2px solid #ea4a36;
    outline: none;
  }
  button {
    height: 32px;
    width: 68px;
    background-color: #ea4a36;
    border: none;
    color: #fff;
    font-size: 12px;
  }
}
</style>
