<template>
  <div>
    <div id="thing">
        <h3>Now I'm on the second page, nice!</h3>
        <router-link to="/first">
            <button>Okay take me back</button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  components: {
  }
}
</script>

<style>
#thing {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
}
</style>