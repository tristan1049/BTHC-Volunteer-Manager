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
            <h6 class="text-bold text-muted mb-3">
              Click the tabs below to learn about each one!
            </h6>

             <!-- Learn about the different roles (tabs) -->
            <div class="nav-wrapper">
                <ul class="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-roles" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0 active" id="tab-tax" data-toggle="tab" href="#tab-tax-body" role="tab" aria-controls="tab-tax-body" aria-selected="true"><i class="fa fa-pencil mr-2"></i>Tax Preparer</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0" id="tab-financial" data-toggle="tab" href="#tab-financial-body" role="tab" aria-controls="tab-financial-body" aria-selected="false"><i class="fa fa-file mr-2"></i>Financial Guide</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0" id="tab-bilingual" data-toggle="tab" href="#tab-bilingual-body" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i class="fa fa-comment mr-2"></i>Bi-lingual Interpreter</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-sm-3 mb-md-0" id="tab-community" data-toggle="tab" href="#tab-community-body" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i class="fa fa-users mr-2"></i>Community Engagement Liaison</a>
                    </li>
                </ul>
            </div>

             <!-- Learn about the different (descriptions) -->
            <div class="card shadow-sm mb-5">
                <div class="card-body floating-card">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="tab-tax-body" role="tabpanel" aria-labelledby="tab-tax-body">
                            <p>Prior tax experience is not necessary. We will train! Tax Preparer volunteers prepare and file taxes face-to-face with eligible taxpayers using IRS TaxWise software. Volunteers are encouraged to serve at any site (or combination of sites) as they wish.</p>
                            <p>Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="tab-financial-body" role="tabpanel" aria-labelledby="tab-financial-body">
                            <p class="">Financial Guide volunteers provide a comprehensive tax site intake experience for taxpayers. This includes screening for tax preparation readiness and eligibility, interpreting and advising client’s credit report, referring services, and encouraging clients to opt-in to tax-time savings options. Financial Guides are placed at a tax site at the discretion of the Coalition Asset Building Program Coordinator.</p>
                            <p class="">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="tab-bilingual-body" role="tabpanel" aria-labelledby="tab-bilingual-body">
                            <p class="">Bi-lingual Interpreter volunteers will provide interpretation and translation services to Limited English Proficiency taxpayers at one of, or a combination of, tax sites. Languages needed are: Spanish, Portuguese, Cantonese, Mandarin, Haitian Creole, Vietnamese, Arabic, and Cape Verdean.</p>
                            <p class="">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                            <strong>You MUST be able to speak English and another language fluently.</strong>
                        </div>
                        <div class="tab-pane fade" id="tab-community-body" role="tabpanel" aria-labelledby="tab-community-body">
                            <p class="">Community Engagement Liaison volunteers are responsible for greeting all incoming taxpayers, answering basic tax FAQs, providing taxpayers with the necessary paperwork, screening taxpayers for eligibility, and assuring a smooth flow of taxpayers from initial sign-up to the financial check-up process and/or tax preparation stage. Volunteers are encouraged to serve at any site (or combination of sites) they wish.</p>
                            <p class="">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p> 
                        </div>
                    </div>
                </div>
            </div>

            <!-- Role Selection Button -->
            <!-- <h3 class="h4 text-success font-weight-bold mb-1">
              Please select a Volunteer Role.
            </h3>
            <h6 class="text-bold text-muted mb-4">You may only select one. To change this role after your registration is approved, please contact the <a href="https://www.bostontaxhelp.org/contact-us/">Volunteer Program Administrator.</a></h6>
            <div class="row mb-5">
              <div class="col-md-6">
                <div class="dropdown mr-2">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdown-role"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Role
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdown-role">
                    <a @click="activate(1)" class="dropdown-item" href="#terms-tax-body">Tax Preparer</a>
                    <a @click="activate(2)" class="dropdown-item" href="#terms-financial-body">Financial Guide</a>
                    <a @click="activate(3)" class="dropdown-item" href="#terms-bilingual-body">Bi-lingual Interpreter</a>
                    <a @click="activate(4)" class="dropdown-item" href="#terms-community-body">Community Engagement Liaison</a>
                  </div>
                </div>
              </div>
            </div> -->


             <!-- Role Selection Radio Buttons -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              Please select a Volunteer Role.
            </h3>
            <h6 class="text-bold text-muted mb-4">You may only select one. To change this role after your registration is approved, please contact the <a href="https://www.bostontaxhelp.org/contact-us/">Volunteer Program Administrator.</a></h6>
            <h6 style="color: red; font-size: 85%;" v-if="role_empty">
              'role' is a required field.
            </h6>
            <div class="row mb-4">
              <div class="col-md-12">
                <div class="mb-5">
                  <div class="custom-control custom-radio mb-3">
                    <input
                      name="select-role"
                      class="custom-control-input"
                      id="select-role-taxpreparer"
                      type="radio"
                      value="Tax Preparer"
                      v-model="role"
                      @click="activate(1)"
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
                      @click="activate(2)"
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
                      @click="activate(3)"
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
                      @click="activate(4)"
                    />
                    <label class="custom-control-label" for="select-role-communityengagementliaison"
                      >Community Engagement Liaison</label
                    >
                  </div>
                </div>
              </div>
            </div>

            
            <!-- Terms and Conditions (header) -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              Please read and accept the Terms & Conditions.
            </h3>
            <h6 class="text-bold text-muted mb-4">
              Please note that the terms & conditions are role-specific.
            </h6>

             <!-- Terms and Conditions (descriptions) -->
            <div class="card shadow-sm mb-4">
                <div class="card-body floating-card">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade" v-bind:class="{ show: active_el === 1, active: active_el === 1}" id="terms-tax-body" role="tabpanel" aria-labelledby="terms-tax-body">
                            <ol>
                              <li>I understand that as a NEW Tax Preparer Volunteer, I must take ALL the required training components a 2-day classroom training</li>
                              <li>I understand that when I sign-up for my classroom training, I MUST create (or log back into) a SignUp Genius volunteer account. (You will receive the link to Sign-Up Genius upon completing this form)</li>
                              <li>I understand that I MUST become IRS basic certified (or re-certified) as a Tax Preparer BEFORE I am able to volunteer at my confirmed tax site.</li>
                              <li>I understand that I am respectfully requested to volunteer at least 4 hours a week, or a total of 30 hours throughout the 2020 tax season.</li>
                              <li>I understand that I must pass a background check and/or other paperwork IF I select any ABCD OR STREETCRED tax site location BEFORE I am able volunteer at one of these locations.</li>
                            </ol>
                        </div>
                        <div class="tab-pane fade" v-bind:class="{ show: active_el === 2, active: active_el === 2}" id="terms-financial-body" role="tabpanel" aria-labelledby="terms-financial-body">
                            <ol>
                              <li>I understand that as a NEW Financial Guide Volunteer, I must take ALL the required training components (Part ONE: Online training and Part TWO: Classroom training)</li>
                              <li>I understand that when I sign-up for my Part Two classroom training, I MUST create (or log back into) a SignUp Genius volunteer account. (You will receive the link to SignUp Genius after completing this form)</li>
                              <li>I understand that I MUST complete and successful pass the IRS Volunteer Standards of Conduct and Intake/Interview exams BEFORE I am able to volunteer at my confirmed tax site.</li>
                              <li>I understand that I am respectfully requested to volunteer at least 4 hours a week, or a total of 30 hours throughout the 2018 tax season.</li>
                              <li>I understand that I must pass a background check and/or other paperwork IF I select any ABCD tax site location BEFORE I am able volunteer at one of these locations.</li>
                            </ol>
                        </div>
                        <div class="tab-pane fade" v-bind:class="{ show: active_el === 3, active: active_el === 3}" id="terms-bilingual-body" role="tabpanel" aria-labelledby="terms-bilingual-body">
                            <ol>
                              <li>I understand that as a Bi-Lingual Interpreter Volunteer, I must attend the tax site orientation.</li>
                              <li>I understand that I MUST complete and successful pass the IRS Volunteer Standards of Conduct and Intake/Interview exams BEFORE I am able to volunteer at my confirmed tax site.</li>
                              <li>I understand that I am respectfully requested to volunteer at least 4 hours a week, or a total of 30 hours throughout the 2020 tax season.</li>
                              <li> I understand that I must pass a background check and/or other paperwork IF I select any STREETCRED tax site location BEFORE I am able volunteer at one of these locations.</li>
                            </ol>
                        </div>
                        <div class="tab-pane fade" v-bind:class="{ show: active_el === 4, active: active_el === 4}" id="terms-community-body" role="tabpanel" aria-labelledby="terms-community-body">
                            <ol>
                              <li>I understand that as a Community Engagement Liaison Volunteer, I must take the required classroom training and attend my tax site site orientation.</li>
                              <li>I understand that I MUST complete and successful pass the IRS Volunteer Standards of Conduct and Intake/Interview exams BEFORE I am able to volunteer at my confirmed tax site.</li>
                              <li>I understand that I am respectfully requested to volunteer at least 4 hours a week, or a total of 30 hours throughout the 2018 tax season.</li>
                              <li>I understand that I must pass a background check and/or other paperwork IF I select any STREETCRED tax site location BEFORE I am able volunteer at one of these locations.</li>
                            </ol> 
                        </div>
                    </div>
                </div>
            </div>

            <!-- Terms and Conditions (selection) -->
            <h6 style="color: red; font-size: 85%;" v-if="terms_empty">
              This is a required field.
            </h6>
            <div class="mb-5 ml-2">
              <div class="custom-control custom-radio mb-3">
                <input
                  name="select-terms"
                  class="custom-control-input"
                  id="select-terms-yes"
                  type="radio"
                  value="yes"
                  v-model="terms"
                />
                <label
                  class="custom-control-label"
                  for="select-terms-yes"
                  >I have reviewed and will comply with the terms and conditions.</label
                >
              </div>
            </div>

            
            <h5 style="color: red;" v-if="errors">
              Correct errors on this page before data can be saved.
            </h5>
            <h5 v-if="saved" class="text-success">
              Your changes have been saved!
            </h5>
            <!-- Save Button -->
            <div class="text-right">
              <button class="btn btn-primary" @click="save_data()">
                Save my progress!
              </button>
            </div>
            {{ user_data }}
            <!-- Spacing -->
            <br />
            <br />

            <!-- Page changing UI -->
            <PageChanger v-bind:page="3"/>
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
  name: "Onboarding-4",
  components: {
    PageChanger
  },
  data() {
    return {
      active_el: 1,
      user_data: null,

      role: "",
      role_empty: false,
      terms: "",
      terms_empty: false,
      errors: false,
      saved: false,
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
    activate: async function(tab) {
      this.active_el = tab;
    },
    set_data: function(){
      if (this.user_data === null)
        return;
      if (this.user_data.vol_role)
        this.role = this.user_data.vol_role;
      if (this.user_data.terms)
        this.terms = this.user_data.terms;
      
      if(this.role === "Tax Preparer")
        this.activate(1);
      if(this.role === "Financial Guide")
        this.activate(2);
      if(this.role === "Bi-lingual Interpreter")
        this.activate(3);
      if(this.role === "Community Engagement Liaison")
        this.activate(4);
    },
    detect_errors: function() {
      this.errors = false;
      this.saved = false;
      this.role_empty = false;

      if (this.role.length === 0){
        this.role_empty = true;
        this.errors = true;
      }

      if (this.terms.length === 0){
        this.terms_empty = true;
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
        vol_role: this.role,
        terms: this.terms,
        onb_4: true
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
</style>