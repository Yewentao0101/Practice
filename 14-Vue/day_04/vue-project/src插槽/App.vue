<template>
  <div>
    <p>App...</p>
    <A>
      <p>这是一段文字</p>
      <button>按钮</button>
    </A>
    <B>
      <template #header>
        <header>header...</header>
      </template>

      <template #footer>
        <div>div...</div>
        <footer>footer...</footer>
      </template>
    </B>
    <C>
      <template #content="{ count }">
        <p>count的值：{{ count }}</p>
      </template>
    </C>
  </div>
</template>

<script>
import A from './A'
import B from './B'
import C from './C'


export default{
  name:'App',
  components:{
    A,
    B,
    C,
  }
}
</script>

<style>

</style>
