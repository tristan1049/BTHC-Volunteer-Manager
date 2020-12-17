<template>
  <div>
    <div id="app">
        <router-link to="/second">
            <button>Take me to different url and page</button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'first',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>