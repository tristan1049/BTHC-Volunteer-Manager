<template>
  <div>
    <!-- Select first choice site -->
    <h3 class="h4 text-success font-weight-bold mb-1">
        First choice
    </h3>
    <h6 class="text-bold text-muted mb-4">Please select the site you would like to work at.
        You are not guaranteed to get your first choice.
    </h6>

    <div class="table-div mb-3">
        <b-table striped hover :items="table_array" :fields="table_fields" 
        @row-clicked="selectRowFirst" selectable select-mode="single" 
        selected-variant = "primary" ref="tab1">
        <template #cell(Roles)="data">
            <span v-html="data.value"></span>
        </template>
        </b-table>
    </div>


    
    <h6 style="color: red; font-size: 85%;" v-if="first_empty">
        Please select a first choice site. Selected sites are purple.
    </h6>

    <br />

    <!-- Select second choice site -->
    <h3 class="h4 text-success font-weight-bold mb-1">
        Second choice
    </h3>
    <h6 class="text-bold text-muted mb-4">Please select the site you would like to work at if the first is full.
        You are not guaranteed to get your second choice.
    </h6>

    <div class="table-div mb-3">
        <b-table striped hover :items="table_array" :fields="table_fields" 
        @row-clicked="selectRowSecond" selectable select-mode="single" 
        selected-variant = "primary" ref="tab2">
        <template #cell(Roles)="data">
            <span v-html="data.value"></span>
        </template>
        </b-table>
    </div>

    <h6 style="color: red; font-size: 85%;" v-if="second_empty">
        Please select a second choice site. Selected sites are purple.
    </h6>
    <h6 style="color: red; font-size: 85%;" v-if="equal_error">
        Please select a different first and second choice.
    </h6>

    <br />

    <h5 style="color: red;" v-if="errors">
        Correct errors on this page before form can be completed.
    </h5>
    <h5 style="color: red;" v-if="pages_incomplete.length === 1">
        Correct errors on page {{ pages_incomplete[0] - 1}} before form can be completed.
    </h5>
    <h5 style="color: red;" v-if="pages_incomplete.length === 2">
        Correct errors on pages {{ pages_incomplete[0] - 1}} and {{ pages_incomplete[1] - 1 }} before form can be completed.
    </h5>
    <h5 style="color: red;" v-if="pages_incomplete.length > 2">
        <span> Correct errors on pages </span> 
        <span v-for="i in pages_incomplete.length - 1" v-bind:key="i">{{ (pages_incomplete[i-1] - 1) + ", " }}</span>
        <span>{{ "and " + (pages_incomplete[pages_incomplete.length - 1] - 1) + " " }}</span>
        <span>before form can be completed. </span>
    </h5>

    <div v-if="!admin_edit">
        <h5 v-if="saved" class="text-success">
            Your changes have been saved!
        </h5>
        <!-- Save Button -->
        <div class="text-right">
            <button class="btn btn-primary" @click="save_data()">
            Submit Form!
            </button>
        </div>
        <div v-if="!admin_edit">{{ user_data }}</div>
    </div>
  </div>
</template>

<script>
//import { json } from 'express';
//import "bootstrap/dist/js/bootstrap.bundle";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

//import JsonCSV from 'vue-json-csv'

//var csv = require('csvtojson');

export default {
  name: "Onb-5",
  components: {
    //JsonCSV
  },
  props: {
    admin_edit: {
      type: Boolean,
      default: false
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
      edit: function(newVal, oldVal) {
          if (newVal === true && oldVal === false) {
              this.save_data();
          } 
          this.edit = false;
      }
  },
  data() {
    return{
      user_data: null,

      compiled_json: {},
      filtered_json: {},

      table_array: [],
      table_fields: ["Site Name", "Address", "Hours of Operation", "Roles"],

      first_choice: null,
      second_choice: null,

      first_empty: false,
      second_empty: false,
      equal_error: false,

      errors: false,
      saved: false,
      pages_incomplete: []
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
            // Set user_data
            self.getUserData(user.uid);

        }
        else {
            // No user is signed in.
            console.log("Error: No user is signed in!");
        }
    });
  },
  methods: {
    selectRowFirst(row){
      if(this.first_choice == row["name_cleaned"])
        this.first_choice = null;
      else
        this.first_choice = row["name_cleaned"];

      console.log(this.first_choice);
    },
    selectRowSecond(row){
      if(this.second_choice == row["name_cleaned"])
        this.second_choice = null;
      else
        this.second_choice = row["name_cleaned"];
      console.log(this.second_choice);
    },
    applyFilter() {
      
      if (this.user_data === null)
        return;

      var role = this.user_data["vol_role"];

      for(const property in this.compiled_json){
        if(this.compiled_json[property]["roles_dict"][role])
        {
          this.filtered_json[this.compiled_json[property]["name_cleaned"]] = this.compiled_json[property]
        }
      }

      this.table_array = Object.values(this.filtered_json);

      // var prop_contains = {City: "Boston"};
      // var filtered_table_json = [];

      // for(var i = 0; i < this.table_json.length; i++){
        
      //   var new_el = {};
      //   var do_include = true;

      //   for (const property in this.table_json[i]) {

      //     new_el[property] = this.table_json[i][property];
      //     if(property in prop_contains){
      //       if (!this.table_json[i][property].includes(prop_contains[property])){
      //         do_include = false;
      //       }
      //     }
      //   }

      //   if(do_include)
      //     filtered_table_json.push(new_el);
      // }

      // console.log(filtered_table_json);
      // this.filtered_table_json = filtered_table_json;
    
    },
    set_data: function(){
      if (this.user_data === null)
        return;

      setTimeout(() => { this.clickRows(this.user_data.first_choice, this.user_data.second_choice); }, 50);
      

      //https://jsfiddle.net/sem409uc/

      // if (this.user_data.vol_role)
      //   this.role = this.vol_role;
    },
    clickRows(first, second) {

      var tab1 = this.$refs.tab1.$el;
      var tabBody1 = tab1.getElementsByTagName('tbody')[0];
      var tabRows1 = tabBody1.getElementsByTagName('tr');

      var tab2 = this.$refs.tab2.$el;
      var tabBody2 = tab2.getElementsByTagName('tbody')[0];
      var tabRows2 = tabBody2.getElementsByTagName('tr');
      
      console.log(tab1)
      console.log(tabBody1)
      console.log(tabRows1)

      var index_first = -1;
      var index_second = -1;

      var counter = 0;
      for(const property in this.filtered_json){
        console.log(this.filtered_json[property].name_cleaned)
        if (first === this.filtered_json[property].name_cleaned)
          index_first = counter;
        if (second === this.filtered_json[property].name_cleaned)
          index_second = counter;
        counter += 1;
      }

      console.log(index_first);
      console.log(index_second);

      console.log(tabRows1);
      console.log(tabRows2);

      console.log(tabRows1[1]);
      console.log(tabRows2[0]);
      if(index_first != -1){
        tabRows1[index_first].click();
        this.first_choice = first;
      }
        
      if(index_second != -1){
        tabRows2[index_second].click();
        this.second_choice = second;
      }
    },
    detect_errors: function() {
      this.errors = false;
      this.saved = false;

      this.first_empty = false;
      this.second_empty = false;
      this.equal_error = false;

      if (this.first_choice == null){
        this.first_empty = true;
        this.errors = true;
      }

      if (this.second_choice == null){
        this.second_empty = true;
        this.errors = true;
      }

      if (this.first_choice === this.second_choice && this.first_choice != null){
        this.equal_error = true;  
        this.errors = true;
      }

      this.pages_incomplete = [];

      if (!this.errors) {
        this.saved = true;

        // If no errors on final page, save data, and check other pages for complete form submission
        this.pages_incomplete = [];

        if (!this.user_data.onb_2) 
          this.pages_incomplete.push(2);
        if (!this.user_data.onb_3)
          this.pages_incomplete.push(3);
        if (!this.user_data.onb_4)
          this.pages_incomplete.push(4);
      }
    },
    save_data: async function(){
      this.detect_errors();

      if (this.saved) {
        await this.writeUserData();
      }
    },
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
      this.getSiteData();
    },
    getSiteData: async function() {
      var data = await firebase.database().ref('site-data').once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.compiled_json = data;
      this.applyFilter();
      this.set_data();
    },
    writeUserData: async function() {
      var data = {
        first_choice: this.first_choice,
        second_choice: this.second_choice,
        onb_5: true
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