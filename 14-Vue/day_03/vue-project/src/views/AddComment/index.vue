<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="comment.username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="comment.content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button @click='submit' type="button" class="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'AddComment',
        props:['addComment'],
        data(){
          return{
            comment:{
              username:'',
              content:''
            }
          }
        },
        methods:{
          submit(){
            const {username,content} = this.comment;
            if(!username.trim()||!content.trim()){
              alert('请输入用户名或评论内容');
              return;
            }
            this.addComment(this.comment)
            this.comment.username=''
            this.comment.content=''
          }
        }
    }
</script>

<style>

</style>