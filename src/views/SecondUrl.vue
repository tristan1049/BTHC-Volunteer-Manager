<template>
  <div>
    <div id="thing">
        <h3>Is new user: {{ newUser }}</h3>
        <h3>User data: {{ user_data }}</h3>
        <router-link to='/third'>
            <button>Take me to Third Page!</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

export default {
  name: 'second',
  components: {
  },
  mounted() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in, create user if new
            if (self.newUser){
                self.createUser(user);
            }
            // Set user_data and check for updates to it
            self.getUser(user.uid);
            self.initLoop()
        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  data() {
      return {
          newUser: this.$cookie.get('isNewUser'),
          user_data: null
      }
  },
  methods: {
      createUser: async function(user) {
        await firebase.database().ref('user-data/' + user.uid).set({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            role: "volunteer",
            site: null,
            skills: null
        }, function(error) {
            if (error) {
                // The write failed...
                console.log("Error: Could not add user to database!");
                console.log(error);
                return false;
            }
            else {
                // Data saved successfully!
                return true;
            }
        });
      },
      getUser: async function(user_uid) {
        var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
            return snapshot.val();
        });
        this.user_data = data;
      },
      initLoop: async function(user_id) {
        let self = this;
        await firebase.database().ref('user-data/' + user_id).on('value', function(snapshot) {
            let data = [];
            snapshot.forEach(function(childSnapshot) {
                data.push(childSnapshot.val());
                // Fill the local data property with Firebase data
                self.user_data = data;
    });
        });
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