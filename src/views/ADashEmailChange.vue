<template>
  <div>

    <!-- Top Navbar -->
    <div>
      <admin-nav></admin-nav>
    </div>

    <!-- Everything But Nav -->
    <div class="container-fluid p-0">
      <div class="row no-gutters form-body">

        <!-- Sidebar -->
        <div class="col-sm sidebar">
             <div class="nav-wrapper nav-stacked nav-space">
                <admin-side-menu :notifUpdate="true" active="None"></admin-side-menu>
            </div>
        </div>

        <!-- Main Content -->
        <div class="col main-content justify-content-center align-items-center">
          <div class="fill-width">
            <div class="main-card shadow-sm p-5 my-0 bg-white">
              <div class="">

                <!-- Alert for telling people how the form saves -->
                <div class="alert alert-primary alert-with-icon mb-5" v-if="success">
                  <button
                    type="button"
                    aria-hidden="true"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span class="fa fa-times ml-4 text-white"></span>
                  </button>
                  <span data-notify="icon" class="tim-icons icon-trophy"></span>
                  <span>
                    <b> Your email has been saved! </b> Please <u><a style="color: white;" href="http://localhost:8080/"> sign in again.</a></u>
                  </span>
                </div>

                <h3 class="h4 text-success font-weight-bold mb-1 mt-5">
                  Email Change
                </h3>
                <h6 class="text-bold text-muted mb-4">Please enter your new email twice.</h6>
                <h6 style="color: red; font-size: 85%;" v-if="not_match">
                  Your emails did not match.
                </h6>
                <h6 style="color: red; font-size: 85%;" v-if="error">
                  An error occurred. Please make sure you entered a valid email address.
                </h6>
                <div class="row mb-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="input-first-name"
                      v-model="email1"
                      placeholder="New email"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="input-last-name"
                      v-model="email2"
                      placeholder="Repeat new email"
                    />
                  </div>
                </div>
                <button class="btn btn-primary" @click="saveData">
                  Save and Confirm
                </button>


          
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

import AdminSideMenu from "./AdminSideMenu.vue";
import AdminNav from './AdminNav.vue';


export default {
  name: "Onboarding-3",
  components: {
    AdminSideMenu,
    AdminNav,
  },
  data() {
    return {
      user: null,
      user_data: null,

      email1: "",
      email2: "",
      error: false,
      not_match: false,
      success: false,
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
            self.user = user;
            //self.initLoop()
        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  methods: {
    saveData(){
      this.not_match = false;
      this.error = false;
      this.success = false;
      if (this.email1.length > 0 && this.email2.length > 0){
        if(this.email1 === this.email2){
          this.changeEmail();
        }
        else{
          this.not_match = true;
        }
      }
      else{
        this.error = true;
      }
    },
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
    },
    changeEmail: async function(){
      
      var user = firebase.auth().currentUser;
      var worked = await user.updateEmail(this.email1).then(function() {
        return true;
      }).catch(function(error) {
        console.log(error);
        return false;
      });

      if (worked){
        this.success = true;
        this.writeUserData();
      }
      else
        this.error = true;
    },
    writeUserData: async function() {
      var data = {
        email: this.email1
      };

      await firebase.database().ref('user-data/' + this.user_data.uid).update(data, function(error) {
            if (error) {
                // The write failed...
                console.log("Error: Could not update user data!");
                console.log(error);
                return false;
            }
            else {
                // Data saved successfully!
                return true;
            }
        });
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