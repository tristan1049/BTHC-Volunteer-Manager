<template>
  <div>
    <div id="thing">
        <h3>This is the third page! Wow</h3>
        <h3>User data: {{ user_data }}</h3>
        <router-link to="/third">
            <button>Take me to third page!</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import { firebase } from "../../firebase.js";
// import 'firebase/auth';
// import 'firebase/database';
import axios from "axios";

export default {
  name: 'third',
  components: {
  },
  created() {
    // Get current user credentials
    const user = firebase.auth().currentUser;

    // Use axios to get current user data
    axios
    .post(`/api/user/${user.uid}`)
    .then((res) => {
        // axios request successful, set user_data to received data
        this.user_data = res.data;
    })
    .catch((err) => {
        //axios request failed, do nothing
        console.log(err);
    })
  },
  data() {
      return {
          user_data: null
      }
  }

}
</script>