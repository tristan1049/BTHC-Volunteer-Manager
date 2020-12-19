<template>
  <div>
    <div id="thing">
        <h3>Is new user: {{ newUser }}</h3>
        <h3>User data: {{ user_data_static }}</h3>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export default {
  name: 'second',
  components: {
  },
  created() {
    const user = firebase.auth().currentUser;
    if (user) {
        // User is signed in.
        if (this.newUser){
            this.database_create_user(user);
        }
        this.database_get_user_data(user.uid);
        //this.database_init_user_data_update_loop(user.uid);
        //redirect(test.html)
    }
    else {
        // No user is signed in.
        console.log("Error: No user is signed in!");
    }
  },
  data() {
      return {
          newUser: this.$cookie.get('isNewUser'),
          user_data_static: null,
          user_data_dynamic: null,
          loc_data_dynamic: null
      }
  },
  methods: {
    //creates a new user in the database
    database_create_user: async function(user) {
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
            }
            else {
            // Data saved successfully!
            }
        });
    },
    database_get_user_data: async function(user_id) {
        // loads user data into "user_data_static" once
        // firebase.database().ref('user-data/' + user_id).once('value').then(function(snapshot) {
        //     this.user_data_static = snapshot.val();
        // });
        const snapshot = await firebase.database().ref('user-data/' + user_id).once('value');
        //const snapshot = await firebase.database().ref('test/').once('value');
        this.user_data_static = snapshot.val();
        console.log(snapshot.val());
        console.log(user_id);
    },
    database_init_user_data_update_loop: function(user_id) {
        // sets up update loop for loading data into "user_data_dynamic"
        // auto - updates user data every time the data change 
        firebase.database().ref('user-data/' + user_id).on('value', function(snapshot) {
            this.user_data_dynamic = snapshot.val();
        });
        //console.log(snapshot.val());
    },
    database_init_location_data_update_loop: function(user_id) {
        firebase.database().ref('location-data/').on('value', function(snapshot) {
            this.location_data_dynamic = snapshot.val();
            console.log(user_id);
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