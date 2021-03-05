<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
           

           <div class="row mb-1">
              <div class="col-md-6">
                <h3 class="h4 text-success font-weight-bold mb-1">
                  Please upload a file
                </h3>
                <h6 class="text-bold text-muted mb-4">The only supported file is a .csv (comma separated value file). If you have a spreadsheet or google sheet download it or "save as" a .csv</h6>
                <div class="mb-5">
                  <input type="file" ref="myFile" @change="selectedFile()">
                </div>
              </div>
              <div class="col-md-6">
                <h3 class="h4 text-success font-weight-bold mb-1">
                  This is a test box
                </h3>
                <h6 class="text-bold text-muted mb-4">If it's empty, your file was not uploaded properly.</h6>
                  <textarea v-model="text"></textarea>
              </div>
            </div>
            

           <!-- Choose a Role -->
            <h3 class="h4 text-success font-weight-bold mb-4">
              Please choose a role to add site data for
            </h3>

            <div class="row mb-3">
              <div class="col-md-6">
                <div class="mb-1">
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-role"
                      class="custom-control-input"
                      id="select-role-taxpreparer"
                      type="radio"
                      value="Tax Preparer"
                      v-model="role"
                    />
                    <label
                      class="custom-control-label"
                      for="select-role-taxpreparer"
                      >Tax Preparer</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-role"
                      class="custom-control-input"
                      id="select-role-financialguide"
                      type="radio"
                      value="Financial Guide"
                      v-model="role"
                    />
                    <label class="custom-control-label" for="select-role-financialguide"
                      >Financial Guide</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-role"
                      class="custom-control-input"
                      id="select-role-bilingualinterpreter"
                      type="radio"
                      value="Bi-lingual Interpreter"
                      v-model="role"
                    />
                    <label class="custom-control-label" for="select-role-bilingualinterpreter"
                      >Bi-lingual Interpreter</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-role"
                      class="custom-control-input"
                      id="select-role-communityengagementliaison"
                      type="radio"
                      value="Community Engagement Liaison"
                      v-model="role"
                    />
                    <label class="custom-control-label" for="select-role-communityengagementliaison"
                      >Community Engagement Liaison</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-md-6">
                <button class="btn btn-primary" @click="parseFile()">
                  Add to chart
                </button>
              </div>
            </div>
           
           
            
            <h3 class="h4 text-success font-weight-bold mb-1 mt-4">
              Site Data
            </h3>
            <h6 class="text-bold text-muted mb-4">Updates as you add data. See more options below.</h6>
            <div class="table-div">
              <b-table striped hover :items="table_array" :fields="table_fields"
              @row-clicked="selectRow" selectable select-mode="single" 
              selected-variant = "primary">
                <template #cell(Roles)="data">
                  <span v-html="data.value"></span>
                </template>
                <!-- <template #cell(actions)="row">
                  <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                    Info modal
                  </b-button>
                </template> -->
              </b-table>
            </div>

            <!-- Table Buttons -->
            <div class="row mb-4 mt-3">
              <div class="col-md-4 text-center">
                <button class="btn btn-primary button-center-fill" @click="parseFile()">
                  Save to Database
                </button>
              </div>
              <div class="col-md-4 text-center">
                <button class="btn btn-primary button-center-fill" @click="clearTable()">
                  Clear Chart
                </button>
              </div>
              <div class="col-md-4 text-center">
                <JsonCSV class="btn btn-primary button-center-fill" :data="table_array" name="location-data.csv">
                  Download as CSV
                </JsonCSV>
              </div>
            </div>

            <button type="button" class="btn  mb-3 btn-block btn-primary"><!----><!----><!---->
              Default
            </button>


            <!-- Modal -->
             <div tabindex="-1" role="dialog" class="modal fade d-none" style="display: none" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h6 id="modal-title-default" class="modal-title">
                      Type your modal title
                    </h6>
                    <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                      <span aria-hidden="true"> × </span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">
                        <!----><!----><!---->Save changes
                      </button>
                      <button type="button" class="btn ml-auto btn-link">
                        <!----><!----><!---->Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- <button class="btn btn-primary" @click="parseFile()">
                Apply filter.
            </button> -->
            
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

//import PageChanger from "../components/PageChanger";
import JsonCSV from 'vue-json-csv'
//import { componentsPlugin } from 'bootstrap-vue';

var csv = require('csvtojson');

export default {
  name: "Onboarding-5",
  components: {
    //PageChanger,
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
      table_array: [],
      table_fields: ["Site Name", "Address", "Hours of Operation", "Roles"],

      show_save_modal: false,

      role: "Tax Preparer",
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
              this.input_json = jsonObj;
              console.log(this.input_json);
          })
      }     

      //check read error
      reader.onerror = evt => {
        console.error(evt);
      }      
    },
    parseFile(){

      //add changes
      //this.compiled_json;

      for(var i = 0; i < this.input_json.length; i++){
        
        var new_el = {};
        var name = "";

        for (const property in this.input_json[i]) {

          //console.log(property);
          var cleaned = property.replace(/[^a-zA-Z]/g, "").toLowerCase();
          //console.log(cleaned);

          if(cleaned === "sitename"){
            name = this.input_json[i][property];
            name = name.replace(/[^a-zA-Z1234567890]/g, "").toLowerCase()
            new_el["Site Name"] = this.input_json[i][property];
          }
          else if(cleaned === "address")
            new_el["Address"] = this.input_json[i][property];
          else{
            if(this.input_json[i][property] != null && this.input_json[i][property].length != 0){
              if(new_el["Hours of Operation"] == null)
                new_el["Hours of Operation"] = this.input_json[i][property];
              else
                new_el["Hours of Operation"] += ", " + this.input_json[i][property];
            }
          }
        }

        if(this.compiled_json[name] == null){
          this.compiled_json[name] = new_el; 
          this.compiled_json[name]["Roles"] = '';
          this.compiled_json[name]["roles_dict"] = {};
        }
        if(!this.compiled_json[name]["roles_dict"][this.role]){
          var color_class = 'badge-primary';
          if(this.role === "Tax Preparer")
            color_class = 'badge-primary';
          if(this.role === "Financial Guide")
            color_class = 'badge-success';
          if(this.role === "Bi-lingual Interpreter")
            color_class = 'badge-warning';
          if(this.role === "Community Engagement Liaison")
            color_class = 'badge-info';
          this.compiled_json[name]["Roles"] += '<span class = "badge text-uppercase '+ color_class + '">' +  this.role + '</span>'; 
        } 
        this.compiled_json[name]["roles_dict"][this.role] = true; 
      }

      this.table_array = Object.values(this.compiled_json);
      console.log(this.compiled_json);

    },
    clearTable(){
      this.compiled_json = {};
      this.table_array = [];
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
.button-center-fill {
  text-align: center;
  width: 100%;
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