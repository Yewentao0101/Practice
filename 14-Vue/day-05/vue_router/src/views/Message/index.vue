<template>
  <div>
    <ul>
      <li v-for="message in messages" :key='message.id'>
        <router-link
          :to="{
            name:'detail',
            params:{id:message.id},
            query:{name:'jack',age:25}
          }">{{message.title}}</router-link>
          <!-- <button @click="push(message.id)">push</button>
          <button @click="replace(message.id)">replace</button> -->

      </li>
    </ul>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data(){
    return{
      messages:[
        {id:1,title:'messsage001'},
        {id:2,title:'messsage002'},
        {id:3,title:'messsage003'},
      ],
    }
  },
  mounted(){
    // setTimeout(() => {
    //   this.messages=[
    //     {id:1,title:'messsage001'},
    //     {id:2,title:'messsage002'},
    //     {id:3,title:'messsage003'},
    //   ]
    // }, 2000);
  },
  // methods:{
  //   push(id){
  //     this.$router.history.push({
  //       name:'detail',
  //       params:{
  //         id
  //       },
  //       query:{name:'jack'}
  //     })
  //   },
  //   replace(id){
  //     this.$router.history.replace({
  //       name:'Detail',
  //       params:{
  //         id
  //       },
  //       query:{name:'jack'}
  //     })
  //   },
  // }
}
</script>

<style>

</style>