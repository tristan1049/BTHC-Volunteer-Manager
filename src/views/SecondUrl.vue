<template>
  <div>
    <div id="thing">
        <h3>Is new user: {{ newUser }}</h3>
        <h3>User data: {{ user_data }}</h3>
    </div>
  </div>
</template>

<script>
import { firebase } from "../../firebase.js";
// import 'firebase/auth';
// import 'firebase/database';
import axios from "axios";

export default {
  name: 'second',
  components: {
  },
  created() {
    const user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        if (this.newUser){
            this.createUser(user);
        }
        // Set user_data
        this.getUser(user.uid);
    }
    else {
        // No user is signed in.
        console.log("Error: No user is signed in!");
    }
  },
  data() {
      return {
          newUser: this.$cookie.get('isNewUser'),
          user_data: null,
          loc_data: null
      }
  },
  methods: {
      createUser: function(user) {
          axios
          .post(`/api/user/create`, { user: user})
          .then(() => {
              // axios request successful
          })
          .catch((err) => {
              // axios request failed, do nothing
              console.log(err);
          })
      },
      getUser: function(user_uid) {
          axios
          .get(`/api/user/${user_uid}`)
          .then((res) => {
              // axios request successful, set user_data to received data
              this.user_data = res;
          })
          .catch((err) => {
              //axios request failed, do nothing
              console.log(err);
          })
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