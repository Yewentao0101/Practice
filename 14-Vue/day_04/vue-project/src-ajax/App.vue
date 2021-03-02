<template>
  <div>
    <p v-if='isLoading'>Loading</p>
    <p v-else>
        Most Star Repo Is <a :href="repo.html_url">{{ repo.name }}</a>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    data(){
        return{
            isLoading:false,
            repo:{
                name:'',
                html_url:'',
            }
        }
    },
    mounted(){
        this.isLoading = true;
        axios
        .get("https://api.github.com/search/repositories?q=v&sort=stars")
        .then((res)=>{
            const {name,html_url} = res.data.items[0];
            this.repo = {
                name,
                html_url,
            };
            this.isLoading = false;
        })
        .catch((error)=>{
            // console.dir(error.response.status); // 响应状态码 401(未授权) 403(禁止) 404(资源找不到) 500（服务器内部错误）
            console.dir(error.message)
            alert('网络错误')
        })
        
    }
}
</script>

<style>

</style>