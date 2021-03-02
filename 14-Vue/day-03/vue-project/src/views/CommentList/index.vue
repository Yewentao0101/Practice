<template>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
            <CommentItem 
                v-for='comment in comments'
                :key="comment.id"
                :comment='comment'
                :delComment='delComment'
            />
        </ul>
      </div>
</template>

<script>
import CommentItem from '../CommentItem'
export default{
    name:"CommentList",
    props:{
        comments: {
            type: Array,
            required: true,
        },
        delComment:{
            type: Function,
            required: true,
        }
    },
    components:{
        CommentItem,
    }
}
</script>
    
<style>
.reply {
  margin-top: 0px;
}
</style>