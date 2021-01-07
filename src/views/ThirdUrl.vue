<template>
  <div>
    <div id="thing">
        <h3>This is the third page! Wow</h3>
        <h3>User data: {{ user_data }}</h3>
        <router-link to='/second'>
            <button>Okay back to second page</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

export default {
  name: 'third',
  components: {
  },
  mounted() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          self.getUser(user.uid);
        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  methods: {
      getUser: async function(user_uid) {
        var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
            return snapshot.val();
        });
        this.user_data = data;
      }
  },
  data() {
      return {
          user_data: null
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