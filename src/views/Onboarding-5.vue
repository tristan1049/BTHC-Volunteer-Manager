<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
           
           <!-- Learn about the different roles (heading) -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              There are 4 types of Volunteer Roles.
            </h3>
            <input type="file" ref="myFile" @change="selectedFile()"><br/>
            <textarea v-model="text"></textarea>

            <div class="table-div">
              <b-table striped hover :items="filtered_table_json" 
              @row-clicked="selectRow" selectable select-mode="single" 
              selected-variant = "primary">
                <!-- <template #cell(actions)="row">
                  <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    Info modal
                  </b-button>
                </template> -->
              </b-table>
            </div>

            <button class="btn btn-primary" @click="applyFilter()">
                Apply filter.
            </button>

            <JsonCSV class="btn btn-primary" :data="filtered_table_json" name="location-data.csv">
              Download Data As CSV
              <img src="download_icon.png">
          </JsonCSV>

            <!-- Spacing -->
            <br />
            <br />

            <!-- Page changing UI -->
            <PageChanger v-bind:page="4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { json } from 'express';
//import "bootstrap/dist/js/bootstrap.bundle";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import PageChanger from "../components/PageChanger";
import JsonCSV from 'vue-json-csv'

var csv = require('csvtojson');

export default {
  name: "Onboarding-5",
  components: {
    PageChanger,
    JsonCSV
  },
  data() {
    return{
      user_data: null,

      text: "",
      filtered_table_json: null,
      table_json: null,


      input_json: null,
      compiled_json: {},
      filtered_json: {},

      role: "",
      role_empty: false,
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
    selectRow(row){
      console.log(row["Site Name"]);
      console.log(row);
    },
    selectedFile() {

      //open file    
      var file = this.$refs.myFile.files[0];
      
      if(!file){
        console.log("Error reading file!");
        return;
      }

      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.text = evt.target.result;

        //read json from csv
        csv()
          .fromString(this.text)
          .then((jsonObj)=>{
              this.input_jsonm = jsonObj;
              console.log(this.input_jsonm);
          })
      }     

      //check read error
      reader.onerror = evt => {
        console.error(evt);
      }

    //add changes

      
    },

    applyFilter() {
      
      var prop_contains = {City: "Boston"};
      var filtered_table_json = [];

      for(var i = 0; i < this.table_json.length; i++){
        
        var new_el = {};
        var do_include = true;

        for (const property in this.table_json[i]) {

          new_el[property] = this.table_json[i][property];
          if(property in prop_contains){
            if (!this.table_json[i][property].includes(prop_contains[property])){
              do_include = false;
            }
          }
        }

        if(do_include)
          filtered_table_json.push(new_el);
      }

      console.log(filtered_table_json);
      this.filtered_table_json = filtered_table_json;
    
    },
    set_data: function(){
      if (this.user_data === null)
        return;
      // if (this.user_data.vol_role)
      //   this.role = this.vol_role;
    },
    detect_errors: function() {
      // this.errors = false;
      // this.saved = false;
      // this.role_empty = false;

      // if (this.role.length === 0){
      //   this.role_empty = true;
      //   this.errors = true;
      // }

      // if (!this.errors) {
      //   this.saved = true;
      // }
    },
    save_data: async function(){
      this.detect_errors();

      if (this.saved) {
        //await this.writeUserData();
      }
    },
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
      this.set_data();
    },
    writeUserData: async function() {
      var data = {
        vol_role: this.role,
        onboarding_stage: 5
      };

      console.log(this.user_data.uid);
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
    }
  }
};
</script>

<style>
.main-container {
  min-height: 100vh;
  height: 100%;
  /* overflow-x: visible; */
  display: flex;
  position: relative;
}
.form-body {
  width: 100%;
}
.bg-gray-custom {
  background-color: #e9ecef;
}
.text-center {
  text-align: center;
}
.floating-card{
  padding-top: 30px;
  padding-bottom: 14px;
    font-size: 16px;
}
.table-div {
  overflow: scroll;
  height: 60vh;
}
</style>