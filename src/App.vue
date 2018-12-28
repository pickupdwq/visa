<template>
  <div id="app">
    <transition name="fade-fast">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
