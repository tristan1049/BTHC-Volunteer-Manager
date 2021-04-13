<template>
  <div>

    <!-- Top Navbar -->
    <div>
      <user-nav></user-nav>
    </div>

    <!-- Everything But Nav -->
    <div class="container-fluid p-0">
      <div class="row no-gutters form-body">

        <!-- Sidebar -->
        <div class="col-sm sidebar">
             <div class="nav-wrapper nav-stacked nav-space">
                <user-side-menu :notifUpdate="true" active="Profile"></user-side-menu>
            </div>
        </div>

        <!-- Main Content -->
        <div class="col main-content justify-content-center align-items-center">
          <div class="fill-width">
            <div class="main-card shadow-sm p-5 my-0 bg-white">
              <div class="">

                <h3 class="h4 text-success font-weight-bold mb-3">Profile Page</h3>
                <!-- Name Field -->
                                
          
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import UserSideMenu from "./UserSideMenu.vue";
import UserNav from './UserNav.vue';

export default {
  name: "Onboarding-3",
  components: {
    UserSideMenu,
    UserNav,
  },
  data() {
    return {
      user_data: null,
    }
  },
  async created() {
    // Check if firebase is initialized, and if not, initialize it
    if (firebase.apps.length === 0) {
      const firebaseConfig = {
        apiKey: "AIzaSyDlpces85D7-q4YXqQvk6Sd7K4ns_hxzIc",
        authDomain: "bthc-volunteer-manager.firebaseapp.com",
        databaseURL: "https://bthc-volunteer-manager-default-rtdb.firebaseio.com",
        projectId: "bthc-volunteer-manager",
        storageBucket: "bthc-volunteer-manager.appspot.com",
        messagingSenderId: "460312984962",
        appId: "1:460312984962:web:929cdb4bca23cea6dd239b",
        measurementId: "G-YKPGZTFHW2",
      };

      await firebase.default.initializeApp(firebaseConfig);
    }
  },
  mounted() {
    let self = this;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // Set user_data and check for updates to it
            self.getUserData(user.uid);
            //self.initLoop()
        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  methods: {
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
    },
  }
};
</script>

<style>
.navbar-style{
  z-index:10;
}
.fill {
  min-height: 100vh;
  height: 100%;
  widows: 100%;
  /* overflow-x: visible; */
  display: flex;
  position: relative;
}
.fill-width {
  width: 100%;
}
.bg-primary{
  background-color: #5e72e4;
}
.bg-gray-custom {
  background-color: #e9ecef;
}
.bg-white {
  background-color: #fff;
}
.sidebar {
  background-color:#e1e5fa;
  height: 100vh;
  height: 100%;
  /* overflow-x: visible; */
  /*display: flex;*/
  position: fixed;
  width: max(12vw, 150px);
  /* z-index: 5; */
}
.main-content {
  background-color: #f6f9fc;
  min-height: calc(100vh - 72px);
  margin-left: max(12vw, 150px);
  margin-top: 72px;
  display: flex;
  position: relative;
}
.text-center {
  text-align: center;
}
.nav-space{
  margin-top: 72px;
}
.main-card{
  width: 100%;
  min-height: 100%;
  margin: 0px;
  /*background-color: #f5f5f5;*/
}

</style>