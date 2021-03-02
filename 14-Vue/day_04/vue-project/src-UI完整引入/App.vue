<template>
<div>
    <el-button type='primary' @click="tip">按钮</el-button>
</div>
</template>

<script>

export default {
    name:'APP',
    methods:{
        tip(){
            this.$message({
                type:'success',
                message:'这是一段提示'
            })
        }
    }
}
</script>

<style>

</style>
