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
import PageChanger from "../components/PageChanger";
var csv = require('csvtojson');

export default {
  name: "Onboarding-5",
  components: {
    PageChanger
  },
  data() {
    return{
      text: "",
      filtered_table_json: null,
      table_json: null,
    }
  },
  methods: {
    selectRow(row){
      console.log(row["Site Name"]);
      console.log(row);
    },
    selectedFile() {

      //console.log(this.$refs.myFile.files[0]);      
      var file = this.$refs.myFile.files[0];
      
      if(!file){
        console.log("Error reading file!");
        return;
      }

      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.text = evt.target.result;

        csv()
          .fromString(this.text)
          .then((jsonObj)=>{
              this.table_json = jsonObj;
              this.filtered_table_json = jsonObj;

              console.log(this.table_json);
          })
      }     

      reader.onerror = evt => {
        console.error(evt);
      }
      
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
    
    }
  }
  // mounted() {
  //   let self = this;
  //   firebase.auth().onAuthStateChanged(function(user) {
  //       if (user) {
  //           // User is signed in, create user if new
  //           if (self.newUser){
  //               self.createUser(user);
  //           }
  //           // Set user_data and check for updates to it
  //           self.getUser(user.uid);
  //           self.initLoop()
  //       }
  //       else {
  //           // No user is signed in.
  //           console.log("Error: No user is signed in!");
  //       }
  //   });
  // },
  // data() {
  //     return {
  //         newUser: this.$cookie.get('isNewUser'),
  //         user_data: null
  //     }
  // },
  // methods: {
  //     createUser: async function(user) {
  //       await firebase.database().ref('user-data/' + user.uid).set({
  //           displayName: user.displayName,
  //           email: user.email,
  //           uid: user.uid,
  //           role: "volunteer",
  //           site: null,
  //           skills: null
  //       }, function(error) {
  //           if (error) {
  //               // The write failed...
  //               console.log("Error: Could not add user to database!");
  //               console.log(error);
  //               return false;
  //           }
  //           else {
  //               // Data saved successfully!
  //               return true;
  //           }
  //       });
  //     },
  //     getUser: async function(user_uid) {
  //       var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
  //           return snapshot.val();
  //       });
  //       this.user_data = data;
  //     },
  //     initLoop: async function(user_id) {
  //       let self = this;
  //       await firebase.database().ref('user-data/' + user_id).on('value', function(snapshot) {
  //           let data = [];
  //           snapshot.forEach(function(childSnapshot) {
  //               data.push(childSnapshot.val());
  //               // Fill the local data property with Firebase data
  //               self.user_data = data;
  //   });
  //       });
  //     }
  // }
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