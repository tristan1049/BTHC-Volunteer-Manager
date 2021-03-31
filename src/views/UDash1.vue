<template>
  <div>

    <div style="position: relative">
      <basenav type="primary" effect="dark" expand style="position:fixed" class="fill-width navbar-style">
          <a class="navbar-brand" href="#">Boston Tax Help Volunteer Portal</a>

          <div class="row" slot="content-header" slot-scope="{closeMenu}">
              <div class="col-6 collapse-brand">
                  <img src="../../assets/img/logo-crop.png"  alt="Logo" />
              </div>
              <div class="col-6 collapse-close">
                  <closebutton @click="closeMenu"></closebutton>
              </div>
          </div>

          <ul class="navbar-nav ml-lg-auto">
              <li class="nav-item">
                  <a class="nav-link nav-link-icon" href="#">
                      Discover
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link nav-link-icon" href="#">
                      Profile
                  </a>
              </li>
              <basedropdown tag="li" title="Settings">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </basedropdown>
          </ul>
      </basenav>
    </div>



    <!-- <div class="container-fluid p-0">
      <div class="row no-gutters form-body">
        <div class="col-sm sidebar">


        <div class="fill bg-primary justify-content-center">
          <div class="row justify-content-center fill-width pr-1 mt-3">
            <img src="../../assets/img/logo-crop.png" class="img-fluid" style="max-height: 4vw" alt="Logo" />

          </div>
        </div>

        </div>
        <div class="col main-content">
          <p>hello</p>
        </div>
      </div>
    </div> -->

    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
           <div class="main-content">

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

//import PageChanger from "../components/PageChanger";
import basenav from "../components/BaseNav";
import closebutton from "../components/CloseButton";
import basedropdown from "../components/BaseDropdown";

export default {
  name: "Onboarding-3",
  components: {
    basenav,
    basedropdown,
    closebutton,
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
.sidebar {
  background-color: #f5f5f5;
  height: 100vh;
  height: 100%;
  /* overflow-x: visible; */
  /*display: flex;*/
  position: fixed;
  width: 12vw;
}
.main-content {
  background-color: #e9ecef;
  min-height: 100vh;
  margin-left: 12vw;
}
.text-center {
  text-align: center;
}
</style>