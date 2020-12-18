<template>
  <div>
    <div id="thing">
        <h3>{{ newUser }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'second',
  components: {
  },
  data() {
      return {
          newUser: this.$cookie.get('isNewUser')
      }
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