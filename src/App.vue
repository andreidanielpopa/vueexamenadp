<template>
  <MenuCompoent />
</template>

<script>
import MenuCompoent from "./components/MenuCompoent.vue";

export default {
  name: "App",
  components: {
    MenuCompoent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
