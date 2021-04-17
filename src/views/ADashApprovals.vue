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
                <admin-side-menu :notifUpdate="true" active="Approvals"></admin-side-menu>
            </div>
        </div>

        <!-- Main Content -->
        <div class="col main-content justify-content-center align-items-center">
          <div class="fill-width">
            <div class="main-card shadow-sm p-5 my-0 bg-white">
              <div class="">

                
                <h3 class="h4 text-success font-weight-bold mb-1 mt-5">
                  Approvals
                </h3>
                <h6 class="text-bold text-muted mb-4">The following users either just completed their onboarding, or are requesting a role/site change.</h6>
                <div class="table-div">
                  <b-table striped hover :items="table_array" :fields="table_fields"
                  @row-clicked="selectRow" selectable select-mode="single" selected-variant = "primary" show-empty outlined>
                    <template #empty="">
                      <div class="container justify-content-center text-center align-items-center">
                        <h4>
                          <small class="text-default">No records to display</small>
                        </h4>
                      </div>
                    </template>
                    <!-- <template #cell(Roles)="data">
                      <span v-html="data.value"></span>
                    </template> -->
                    <!-- <template #cell(actions)="row">
                      <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                        Info modal
                      </b-button>
                    </template> -->
                  </b-table>
                </div>


          
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
      user_data: null,

      approval_json: {},
      table_json: {},
      table_array: [],
      
      table_fields: [
          { key: 'First Name', sortable: true },
          { key: 'Last Name', sortable: true },
          { key: 'Email', sortable: true }
      ]
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
            self.getApprovalData();
            //self.initLoop()
        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  methods: {
    setTable(){

      var count = 0;
      for(const elem in this.approval_json){
        
        var new_el = {};

        for (const property in this.approval_json[elem]) {
          if (property === "first_name")
            new_el["First Name"] = this.approval_json[elem][property];
          if (property === "last_name")
            new_el["Last Name"] = this.approval_json[elem][property];
          if (property === "email")
            new_el["Email"] = this.approval_json[elem][property];
          if (property === "uid")
            new_el["uid"] = this.approval_json[elem][property];
        }
        this.table_json[count] = new_el;
        count += 1
      }
      this.table_array = Object.values(this.table_json);
    },
    selectRow(row){
      console.log(row["First Name"]);
      console.log(row["Last Name"]);
      console.log(row["Email"]);
      console.log(row["uid"]);
      // this.$router.push('/onb2');
    },
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
    },
    clearTable(){
      this.table_json = {};
      this.table_array = [];
    },
    getApprovalData: async function() {
      this.clearTable();
      var data = await firebase.database().ref('needs-approval').once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.approval_json = data;
      this.setTable();
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