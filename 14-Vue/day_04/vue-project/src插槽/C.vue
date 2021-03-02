<template>
  <div>
      <p>CCCCC</p>
      <slot name="content"  :count='count'/>
  </div>
</template>

<script>
export default {
 name:'C',
 data(){
     return{
         count:1
     }
 }
}
</script>

<style>

</style>