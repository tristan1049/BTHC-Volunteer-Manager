<template>
  <div>

    <div>
      <basenav type="primary" effect="dark" expand style="position:fixed" class="fill-width navbar-style ">
        <div class="container mx-2">
          <a class="navbar-brand" href="#">Boston Tax Help - Volunteer Portal</a>

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
        </div>
          
      </basenav>
    </div>



    <div class="container-fluid p-0">
      <div class="row no-gutters form-body">
        <div class="col-sm sidebar .nav-space">

             <div class="nav-wrapper nav-stacked nav-space">
                <!-- <ul class="nav nav-pills nav-fill flex-column nav-stacked" role="tablist">
                 -->
                <ul class="nav nav-pills nav-fill flex-column nav-stacked">
                    <li class="nav-item">
                        <a class="nav-link mb-3 ml-3" data-toggle="tab" href="#tab-tax-body" role="tab"><i class="fa fa-envelope mr-2"></i >
                          Updates
                          <div class="notif">
                            <i class="fa fa-exclamation-circle mr-2"></i >
                          </div>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-3 ml-3 active" data-toggle="tab" href="#tab-financial-body" role="tab"><i class="fa fa-calendar mr-3"></i>Hours</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-3 ml-3" data-toggle="tab" href="#tab-bilingual-body" role="tab"><i class="fa fa-pencil mr-2"></i>Training</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link mb-3 mx-3" data-toggle="tab" href="#tab-bilingual-body" role="tab"><i class="fa fa-user mr-2"></i>Profile</a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="col main-content justify-content-center align-items-center">
          <div class="card-holder">
            <div class="card shadow-sm p-5 my-0">
                <div class="main-main-content">

                  <!-- Name Field -->
                  <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
                  <h6 style="color: red; font-size: 85%;" v-if="first_name_empty">
                    'First Name' is a required field.
                  </h6>
                  <h6 style="color: red; font-size: 85%;" v-if="last_name_empty">
                    'Last Name' is a required field.
                  </h6>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-first-name"
                        v-model="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-last-name"
                        v-model="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <!-- Name Field -->
                  <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
                  <h6 style="color: red; font-size: 85%;" v-if="first_name_empty">
                    'First Name' is a required field.
                  </h6>
                  <h6 style="color: red; font-size: 85%;" v-if="last_name_empty">
                    'Last Name' is a required field.
                  </h6>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-first-name"
                        v-model="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-last-name"
                        v-model="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <!-- Name Field -->
                  <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
                  <h6 style="color: red; font-size: 85%;" v-if="first_name_empty">
                    'First Name' is a required field.
                  </h6>
                  <h6 style="color: red; font-size: 85%;" v-if="last_name_empty">
                    'Last Name' is a required field.
                  </h6>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-first-name"
                        v-model="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-last-name"
                        v-model="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <!-- Name Field -->
                  <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
                  <h6 style="color: red; font-size: 85%;" v-if="first_name_empty">
                    'First Name' is a required field.
                  </h6>
                  <h6 style="color: red; font-size: 85%;" v-if="last_name_empty">
                    'Last Name' is a required field.
                  </h6>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-first-name"
                        v-model="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-last-name"
                        v-model="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <!-- Name Field -->
                  <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
                  <h6 style="color: red; font-size: 85%;" v-if="first_name_empty">
                    'First Name' is a required field.
                  </h6>
                  <h6 style="color: red; font-size: 85%;" v-if="last_name_empty">
                    'Last Name' is a required field.
                  </h6>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-first-name"
                        v-model="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="input-last-name"
                        v-model="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
            
                </div>
            </div>    
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
           <div class="main-content">

           </div>
            
          </div>
        </div>
      </div>
    </div> -->

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

// import BaseButton from '../components/BaseButton.vue';

// import Tabs from "../components/Tabs/Tabs.vue";
// import TabsPane from "../components/Tabs/TabPane.vue";

export default {
  name: "Onboarding-3",
  components: {
    basenav,
    basedropdown,
    closebutton,
    // Tabs,
    // TabsPane,
    // BaseButton,
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
.main-main-content {
  
}
.text-center {
  text-align: center;
}
.nav-space{
  margin-top: 72px;
}
.card-holder{
  /* margin-top: 20px;
  margin-bottom: 20px; */
  width: 100%;
}
.card{
  width: 100%;
  min-height: 100%;
  margin: 0px;
  /*background-color: #f5f5f5;*/
}
.menu-button{
  background-color: white;
}
.navbar div.container{
  margin-left: 30px !important;
  margin-right: 30px !important;
  padding: 0%;
  max-width: 100%;
  width: 100% !important;
}
.notif{
  position:relative;
  width: 100%;
  padding: 0;
  transform: translateX(calc(50% - 2px));
  top: calc(-40px - 4px + 2px);
  margin-bottom: calc(-20px - 4px);
  margin-left: 16px;
  /* font-size: 14px; */
   font-size: 18px;
}
</style>