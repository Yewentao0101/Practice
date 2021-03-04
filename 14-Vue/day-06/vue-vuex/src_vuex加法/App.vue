<template>
  <div>
    <p>click {{ $store.state.count }} times count is {{$store.getters.countType}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="oddnum">increment if odd</button>
    <button @click="asyncnum">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log(this.$store);
  },
  methods: {
    increment() {
      this.$store.dispatch("increment");
    },
    decrement() {
      this.$store.dispatch("decrement");
    },
    oddnum() {
      this.$store.dispatch("oddnum");
    },
    asyncnum() {
      this.$store.dispatch("asyncnum");
    },
  },
};
</script>

<style>
</style>