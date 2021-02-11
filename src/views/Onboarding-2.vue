<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <!-- Alert for telling people how the form saves -->
            <div class="alert alert-primary alert-with-icon mb-5">
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
                <b> Heads up! - </b> This form auto-saves as you move from page.
              </span>
            </div>

            <!-- Name Field -->
            <h3 class="h4 text-success font-weight-bold mb-3">Name</h3>
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-first-name"
                  placeholder="First Name"
                />
              </div>
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-last-name"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <!-- Phone Number Field -->
            <h3 class="h4 text-success font-weight-bold mb-1">Phone Number</h3>
            <h6 class="text-bold text-muted mb-3">
              Please include the best phone number to reach you.
            </h6>
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-phone-number"
                  placeholder="xxx-xxx-xxxx"
                />
              </div>
            </div>

            <!-- Gender and Ethnicity Buttons -->
            <h3 class="h4 text-success font-weight-bold mb-4">
              Please select your gender and ethnicity.
            </h3>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="dropdown mr-2">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdown-gender"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Gender
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdown-gender">
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-gender', 'Female')">Female</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-gender', 'Male')">Male</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-gender', 'Transgender')">Transgender</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-gender', 'Prefer not to say')">Prefer not to say</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdown-ethnicity"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ethnicity
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdown-ethnicity"
                  >
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Black/African American')">Black/African American</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Latino/Hispanic')">Latino/Hispanic</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'White/Caucasian')">White/Caucasian</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Asian/Pacific Islander')">Asian/Pacific Islander</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Native American')">Native American</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Multi-racial')">Multi-racial</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Other')">Other</a>
                    <a class="dropdown-item" @click="set_dropdown_text('dropdown-ethnicity', 'Prefer not to say')">Prefer not to say</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Other Ethnicity Field -->
            <div class="row mb-5">
              <div class="col-md-6" >
                <input
                  type="text"
                  class="form-control"
                  id="input-ethnicity-other"
                  placeholder="Please specify other."
                  style = "display: none"
                />
              </div>
            </div>

            <!-- Language Check Boxes -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              What languages do you speak?
            </h3>
            <h6 class="text-bold text-muted mb-3">
              Please check all that apply.
            </h6>
            <div class="row mb-3">
              <div class="col-md-3">
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-english"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-english"
                    >English</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-spanish"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-spanish"
                    >Spanish</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-hatiancreole"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-hatiancreole"
                    >Haitian Creole</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-vietnamese"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-vietnamese"
                    >Vietnamese</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-portuguese"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-portuguese"
                    >Portuguese</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-cantonese"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-cantonese"
                    >Cantonese</label
                  >
                </div>
              </div>
              <div class="col-md-4">
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-mandarin"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-mandarin"
                    >Mandarin</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-capeverdeancreole"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-capeverdeancreole"
                    >Cape Verdean Creole</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-arabic"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-arabic"
                    >Arabic</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-somali"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-somali"
                    >Somali</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-americansignlanguage"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-americansignlanguage"
                    >American Sign Language</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-other"
                    type="checkbox"
                    @click="toggle_language_other()"
                  />
                  <label class="custom-control-label" for="checkbox-other"
                    >Other</label
                  >
                </div>
              </div>
            </div>

            <!-- Other Language Field -->
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-language-other"
                  placeholder="Please specify other."
                  style="display: none"
                />
              </div>
            </div>

            <!-- Save Button -->
            <div class="text-right">
              <button class="btn btn-primary" @click="save_data()">
                Save my progress!
              </button>
            </div>

            <!-- Save Confirmation Modal -->
            <div class="modal fade" id="modal-save" tabindex="-1" role="dialog" aria-labelledby="save-modal" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title  font-weight-bold" id = "save-title-message">Saved</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body" id = "save-message">
                    Your changes have been saved
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Ok!</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Spacing -->
            <br />
            <br />

            <!-- Page changing UI -->
            <PageChanger v-bind:page="1"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import "bootstrap/dist/js/bootstrap.bundle";
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import PageChanger from "../components/PageChanger";
import $ from 'jquery'
//import { Router } from 'express';
//import 'bootstrap-select'

export default {
  name: "Onboarding-2",
  components: {
    PageChanger
  },
  data() {
      return {
          user_data: null
      }
  },
  mounted() {

    var user = firebase.auth().currentUser;
    
    if (user === null)
      console.log(user);

    // if (user === null)
    //   Router.push({ path: 'FirstUrl' })
    
    this.getUserData(user.uid);

  },
  methods: {
    toggle_language_other: async function(){
      console.log("hello");
      if ($('#checkbox-other').is(':checked'))
        document.getElementById("input-language-other").style.display = "block";
      else
        document.getElementById("input-language-other").style.display = "none";
      document.getElementById("input-language-other").value = ""
    },
    set_dropdown_text: async function(dropdown_id, text){
      document.getElementById(dropdown_id).innerText = text;

      if(dropdown_id === "dropdown-ethnicity"){
        if (text === "Other")
          document.getElementById("input-ethnicity-other").style.display = "block";
        else
          document.getElementById("input-ethnicity-other").style.display = "none";
        document.getElementById("input-ethnicity-other").value = "";
      }
    },
    read_data: function(){

      var languages = ['english', 'spanish', 'hatiancreole', 'vietnamese', 'portuguese', 'cantonese', 'mandarin', 'capeverdeancreole', 'arabic', 'somali', 'americansignlanguage'];
      var checked_languages = [];
      for (var i = 0; i < languages.length; i++){
        if ($('#checkbox-' + languages[i]).is(':checked'))
          checked_languages.push(languages[i]);
      }

      //console.log($('#dropdown-ethnicity').text());
      var out_data = {
        first_name : $('#input-first-name').val(),
        last_name : $('#input-last-name').val(),
        phone_number : $('#input-phone-number').val(),
        gender : $('#dropdown-gender').text(),
        ethnicity : $('#dropdown-ethnicity').text(),
        ethnicity_other : $('#input-ethnicity-other').val(),
        language_other : $('#input-language-other').val(),
        languages : checked_languages,
      };

      return out_data
    },
    set_data: function(){

      console.log(this.user_data);
      if (this.user_data === null)
        return;
      if (this.user_data.first_name != null)
        document.getElementById("input-first-name").value = this.user_data.first_name;
      if (this.user_data.last_name != null)
        document.getElementById("input-last-name").value = this.user_data.last_name;
      if (this.user_data.phone_number != null)
        document.getElementById("input-phone-number").value = this.user_data.phone_number;
      if (this.user_data.gender != null)
        this.set_dropdown_text('dropdown-gender', this.user_data.gender)
      if (this.user_data.ethnicity != null)
        this.set_dropdown_text('dropdown-ethnicity', this.user_data.ethnicity)
      if (this.user_data.ethnicity_other != null && this.user_data.ethnicity_other.length != 0)
        document.getElementById("input-ethnicity-other").value = this.user_data.ethnicity_other;
      if (this.user_data.language_other != null && this.user_data.language_other.length != 0){
        document.getElementById("input-language-other").style.display = "block";
        document.getElementById("input-language-other").value = this.user_data.language_other;
        document.getElementById('checkbox-other').checked = true;
      }

      
      if (this.user_data.languages != null){
        for(var i = 0; i < this.user_data.languages.length; i++){
          document.getElementById('checkbox-' + this.user_data.languages[i]).checked = true;
        }
      }


    },
    detect_errors: function(data){
      var errors = [];

      var is_phone_number_bad = false;
      var allowed_chars = "0123456789-() "
      for (var i = 0; i < data.phone_number.length; i++){
        if (!allowed_chars.includes(data.phone_number[i]))
          is_phone_number_bad = true;
      }

      if(data.first_name.length === 0)
        errors.push("'First Name' is a required field");
      if(data.last_name.length === 0)
        errors.push("'Last Name' is a required field");
      if(data.phone_number.length === 0)
        errors.push("'Phone Number' is a required field");
      if(is_phone_number_bad)
        errors.push("'Phone Number' contains unallowed characters. Please only include numbers, dashes -, brackets (), and spaces");
      if(data.gender === " Gender ")
        errors.push("'Gender' is a required field");
      if(data.ethnicity === " Ethnicity ")
        errors.push("'Ethnicity' is a required field");
      if(data.ethnicity === "Other" && data.ethnicity_other.length == 0)
        errors.push("You selected 'other' ethnicity. Please specify in the box below the dropdown");
      if($('#checkbox-other').is(':checked') && data.language_other.length == 0)
        errors.push("You selected 'other' language. Please specify in the box below the checkbox");
      else if(data.languages.length == 0 && data.language_other.length == 0 && !$('#checkbox-other').is(':checked'))
        errors.push("'Languages' is a required field");

      return errors;
    },
    save_data: async function(){
      
      var data = this.read_data();
      var errors = this.detect_errors(data);

      //console.log(data);
      //console.log(this.user_data);

      if(errors.length == 0){
        document.getElementById("save-title-message").innerHTML = 'Saved';
        document.getElementById("save-title-message").classList.add("text-success");
        document.getElementById("save-title-message").classList.remove("text-danger");
        document.getElementById("save-message").innerHTML = 'Your changes have been saved!';

        await this.writeUserData(data);
      }
      else{
        document.getElementById("save-title-message").innerHTML = 'Your changes could not be saved';
        document.getElementById("save-title-message").classList.add("text-danger");
        document.getElementById("save-title-message").classList.remove("text-success");
        var error_message = ""
        for(var i = 0; i < errors.length; i++){
          error_message += errors[i] + "<br> <br>";
        }
        document.getElementById("save-message").innerHTML = error_message;
      }
      
      $('#modal-save').modal('show');
        
    },
    getUserData: async function(user_uid) {
      var data = await firebase.database().ref('user-data/' + user_uid).once('value').then((snapshot) => {
          return snapshot.val();
      });
      this.user_data = data;
      this.set_data();
    },
    writeUserData: async function(data){
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
  },
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
.special-select{
  padding: 15px;
  border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
  background-color: #5e72e4;
  color: white;
}
.special-select:hover{
  padding: 15px;
  border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
  background-color: #4e62d4;
}
.special-select:active:not(hover){
  padding: 15px;
  border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
  background-color: #4e62d4;
}
.option-special{
  background-color: white;
  color: #5e72e4;
}
.option-special:hover{
  background-color: #5e72e4;
  color: white;
}
.option-special:active:not(hover){
  background-color: #5e72e4;
  color: white;
}
</style>