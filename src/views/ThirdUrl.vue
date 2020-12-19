<template>
  <div>
    <div id="thing">
        <h3>This is the third page! Wow</h3>
        <h3>User data: {{ user_data }}</h3>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default {
  name: 'third',
  components: {
  },
  data() {
      return {
          user_data: null
      }
  }

}
</script>