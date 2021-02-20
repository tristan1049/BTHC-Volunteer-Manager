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

            <!-- Phone Number Field -->
            <h3 class="h4 text-success font-weight-bold mb-1">Phone Number</h3>
            <h6 class="text-bold text-muted mb-3">
              Please include the best phone number to reach you.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="phone_number_empty">
              'Phone Number' is a required field.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="phone_number_bad">
              'Phone Number' contains unallowed characters. Please only include numbers, dashes -, brackets (), and spaces.
            </h6>
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-phone-number"
                  v-model="phone_number"
                  placeholder="xxx-xxx-xxxx"
                />
              </div>
            </div>

            <!-- Gender Buttons -->
            <h3 class="h4 text-success font-weight-bold mb-4">
              Please select your gender.
            </h3>
            <h6 style="color: red; font-size: 85%;" v-if="gender_empty">
              'Gender' is a required field.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="gender_input_empty">
              You selected 'Other' gender. Please specify in the text box.
            </h6>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="mb-5">
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-gender"
                      class="custom-control-input"
                      id="select-gender-male"
                      type="radio"
                      value="Male"
                      v-model="gender"
                    />
                    <label
                      class="custom-control-label"
                      for="select-gender-male"
                      >Male</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-gender"
                      class="custom-control-input"
                      id="select-gender-female"
                      type="radio"
                      value="Female"
                      v-model="gender"
                    />
                    <label class="custom-control-label" for="select-gender-female"
                      >Female</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-gender"
                      class="custom-control-input"
                      id="select-gender-transgender"
                      type="radio"
                      value="Transgender"
                      v-model="gender"
                    />
                    <label class="custom-control-label" for="select-gender-transgender"
                      >Transgender</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-gender"
                      class="custom-control-input"
                      id="select-gender-no"
                      type="radio"
                      value="No"
                      v-model="gender"
                    />
                    <label class="custom-control-label" for="select-gender-no"
                      >Prefer not to say</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-gender"
                      class="custom-control-input"
                      id="select-gender-other"
                      type="radio"
                      value="Other"
                      v-model="gender"
                    />
                    <label class="custom-control-label" for="select-gender-other"
                      >Other</label
                    >
                  </div>
                  <div class="col-md-6" v-if="gender === 'Other'">
                    <input
                      type="text"
                      class="form-control"
                      id="input-gender-other"
                      placeholder="Please specify gender"
                      v-model="gender_other"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Ethnicity Buttons -->
            <h3 class="h4 text-success font-weight-bold mb-4">
              Please select your ethnicity.
            </h3>
            <h6 style="color: red; font-size: 85%;" v-if="ethnicity_empty">
              'Ethnicity' is a required field.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="ethnicity_input_empty">
              You selected 'Other' ethnicity. Please specify in the text box.
            </h6>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="mb-5">
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-black"
                      type="radio"
                      value="Black/African American"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-black"
                      >Black/African American</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-latino"
                      type="radio"
                      value="Latino/Hispanic"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-latino"
                      >Latino/Hispanic</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-white"
                      type="radio"
                      value="White/Caucasian"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-white"
                      >White/Caucasian</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-asian"
                      type="radio"
                      value="Asian/Pacific Islander"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-asian"
                      >Asian/Pacific Islander</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-native"
                      type="radio"
                      value="Native American"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-native"
                      >Native American</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-multi"
                      type="radio"
                      value="Multi-Racial"
                      v-model="ethnicity"
                    />
                    <label
                      class="custom-control-label"
                      for="select-ethnicity-multi"
                      >Multi-Racial</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-no"
                      type="radio"
                      value="No"
                      v-model="ethnicity"
                    />
                    <label class="custom-control-label" for="select-ethnicity-no"
                      >Prefer not to say</label
                    >
                  </div>
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-ethnicity"
                      class="custom-control-input"
                      id="select-ethnicity-other"
                      type="radio"
                      value="Other"
                      v-model="ethnicity"
                    />
                    <label class="custom-control-label" for="select-ethnicity-other"
                      >Other</label
                    >
                  </div>
                  <div class="col-md-6" v-if="ethnicity === 'Other'">
                    <input
                      type="text"
                      class="form-control"
                      id="input-gender-other"
                      placeholder="Please specify gender"
                      v-model="ethnicity_other"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Language Check Boxes -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              What languages do you speak?
            </h3>
            <h6 class="text-bold text-muted mb-3">
              Please check all that apply.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="language_empty">
              'Language' is a required field.
            </h6>
            <h6 style="color: red; font-size: 85%;" v-if="language_input_empty">
              You selected 'Other' language. Please specify in the text box.
            </h6>
            <div class="row mb-3">
              <div class="col-md-3">
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-english"
                    type="checkbox"
                    value="English"
                    v-model="languages"
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
                    value="Spanish"
                    v-model="languages"
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
                    value="Haitian Creole"
                    v-model="languages"
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
                    value="Vietnamese"
                    v-model="languages"
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
                    value="Portuguese"
                    v-model="languages"
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
                    value="Cantonese"
                    v-model="languages"
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
                    value="Mandarin"
                    v-model="languages"
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
                    value="Cape Verdean Creole"
                    v-model="languages"
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
                    value="Arabic"
                    v-model="languages"
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
                    value="Somali"
                    v-model="languages"
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
                    value="American Sign Language"
                    v-model="languages"
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
                    v-model="language_checkbox_other"
                  />
                  <label class="custom-control-label" for="checkbox-other"
                    >Other</label
                  >
                </div>
              </div>
              <div class="col-md-6" v-if="language_checkbox_other">
                  <input
                    type="text"
                    class="form-control"
                    id="input-language-other"
                    placeholder="Please specify languages"
                    v-model="language_other"
                  />
              </div>
            </div>

            <h5 style="color: red;" v-if="errors">
              Correct errors before data can be saved.
            </h5>
            <h5 v-if="saved" class="text-success">
              Your changes have been saved!
            </h5>
            <!-- Save Button -->
            <div class="text-right">
              <button class="btn btn-primary" @click="save_data()">
                Save my progress!
              </button>
              <div>{{ user_data }}</div>
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
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

import PageChanger from "../components/PageChanger";

export default {
  name: "Onboarding-2",
  components: {
    PageChanger
  },
  data() {
      return {
          user_data: null,
          first_name: "",
          last_name: "",
          phone_number: "",
          gender: "",
          gender_other: "",
          ethnicity: "",
          ethnicity_other: "",
          languages: [],
          language_other: "",
          language_checkbox_other: "",

          errors: false,
          saved: false,
          first_name_empty: false,
          last_name_empty: false,
          phone_number_empty: false,
          phone_number_bad: false,
          gender_empty: false,
          gender_input_empty: false,
          ethnicity_empty: false, 
          ethnicity_input_empty: false,
          language_empty: false,
          language_input_empty: false,

          stuff: ""
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
    set_data: function(){
      console.log("SET DATA USER DATA:");
      console.log(this.user_data);
      if (this.user_data === null)
        return;
      if (this.user_data.first_name)
        this.first_name = this.user_data.first_name;
      if (this.user_data.last_name)
        this.last_name = this.user_data.last_name;
      if (this.user_data.phone_number)
        this.phone_number = this.user_data.phone_number;
      if (this.user_data.gender)
        this.gender = this.user_data.gender;
      if (this.user_data.ethnicity)
        this.ethnicity = this.user_data.ethnicity;
      if (this.user_data.gender_other) 
        this.gender_other = this.user_data.gender_other;
      if (this.user_data.ethnicity_other) 
        this.ethnicity_other = this.user_data.ethnicity_other;
      if (this.user_data.languages) 
        this.languages = this.user_data.languages;
      if (this.user_data.language_other) {
        this.language_checkbox_other = true;
        this.language_other = this.user_data.language_other;
      }
    },
    detect_errors: function() {
      this.errors = false;
      this.saved = false;
      this.first_name_empty = false;
      this.last_name_empty = false;
      this.phone_number_empty = false;
      this.phone_number_bad = false;
      this.gender_empty = false;
      this.gender_input_empty = false;
      this.ethnicity_empty = false;
      this.ethnicity_input_empty = false;
      this.language_empty = false;
      this.language_input_empty = false;

      var allowed_chars = "0123456789-() "
      for (var i = 0; i < this.phone_number.length; i++) {
        if (!allowed_chars.includes(this.phone_number[i])) {
          this.phone_number_bad = true;
          this.errors = true;
        }
      }

      if (this.first_name.length === 0) {
        this.first_name_empty = true;
        this.errors = true;
      } 
      if (this.last_name.length === 0) {
        this.last_name_empty = true;
        this.errors = true;
      }
      if (this.phone_number.length === 0) {
        this.phone_number_empty = true;
        this.errors = true;
      }
      if (this.gender === "") {
        this.gender_empty = true;
        this.errors = true;
      }
      if (this.ethnicity == "") {
        this.ethnicity_empty = true;
        this.errors = true;
      }
      if (this.gender === "Other" && this.gender_other.length === 0) {
        this.gender_input_empty = true;
        this.errors = true;
      }
      if (this.ethnicity === "Other" && this.ethnicity_other.length === 0) {
        this.ethnicity_input_empty = true;
        this.errors = true;
      }
      if (this.language_checkbox_other && this.language_other.length === 0) {
        this.language_input_empty = true;
        this.errors = true;
      }
      else if (this.languages.length === 0 && !this.language_checkbox_other) {
        this.language_empty = true;
        this.errors = true;
      }

      if (!this.errors) {
        this.saved = true;
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
      this.set_data();
    },
    writeUserData: async function() {
      var data = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_number: this.phone_number,
        gender: this.gender,
        gender_other: this.gender_other,
        ethnicity: this.ethnicity,
        ethnicity_other: this.ethnicity_other,
        languages: this.languages,
        language_other: this.language_other,
        onboarding_stage: 2
      };

      //ERROR CHECK
      if (!this.language_checkbox_other)
        data.language_other = "";
      if (data.gender != "Other")
        data.gender_other = "";
      if (data.ethnicity != "Other")
        data.ethnicity_other = "";


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
  },

  // methods: {
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