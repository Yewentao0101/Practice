<template>
  <ul>
    <li v-for="(value,key) in detail " :key='key'>
      {{key}}--{{value}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "name", "age"],

  data() {
    return {
      details: [
        { id: 1, title: "titlt001", content: "detail001" },
        { id: 2, title: "titlt002", content: "detail002" },
        { id: 3, title: "titlt003", content: "detail003" },
      ],
      detail:{},
    };
  },
  watch: {
    $route: {
      handler(newVal) {
        const id = +newVal.params.id;
        this.detail = this.details.find((detail) =>{
         return detail.id === id
        } );
      },
      immediate: true, // 一上来触发一次

    },
  },
};
</script>

<style>
</style>