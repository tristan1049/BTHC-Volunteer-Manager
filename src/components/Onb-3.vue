<template>
  <div>
    <!-- "How did you hear about us?" Field -->
    <h3 class="h4 text-success font-weight-bold mb-1">
        How did you hear about our volunteer opportunities?
    </h3>
    <h6 class="text-bold text-muted mb-3">Please be specific.</h6>
    <h6 style="color: red; font-size: 85%;" v-if="volunteer_text_empty">
        This is a required field.
    </h6>
    <div class="row mb-5">
        <div class="col-md-12">
        <textarea
            class="form-control"
            id="input-hear-about"
            rows="3"
            placeholder="Example: I heard about this opportunity through my workplace at state street."
            v-model="volunteer_text"
        ></textarea>
        </div>
    </div>

    
    <!-- "Are you a tax professional" Field -->
    <h3 class="h4 text-success font-weight-bold mb-4">
        Have you volunteered with any VITA program in the past, and/or are
        you a tax professional?
    </h3>
    <h6 style="color: red; font-size: 85%;" v-if="tax_prof_empty">
        This is a required field.
    </h6>
    <div class="mb-5">
        <div class="custom-control custom-radio mb-3">
        <input
            name="select-professional"
            class="custom-control-input"
            id="select-professional-yes"
            type="radio"
            value="yes"
            v-model="tax_prof"
        />
        <label
            class="custom-control-label"
            for="select-professional-yes"
            >Yes</label
        >
        </div>
        <div class="custom-control custom-radio mb-3">
        <input
            name="select-professional"
            class="custom-control-input"
            id="select-professional-no"
            type="radio"
            value="no"
            v-model="tax_prof"
        />
        <label class="custom-control-label" for="select-professional-no"
            >No</label
        >
        </div>
    </div>

    <!-- "CE Credits" Field -->
    <h3 class="h4 text-success font-weight-bold mb-1">
        Are you seeking CE Credits?
    </h3>
    <h6 class="text-bold text-muted mb-4">If you select yes, we will contact you with further instructions. </h6>
    <h6 style="color: red; font-size: 85%;" v-if="ce_credit_empty">
        This is a required field.
    </h6>
    <div class="mb-5">
        <div class="custom-control custom-radio mb-3">
        <input
            name="select-credit"
            class="custom-control-input"
            id="select-credit-yes"
            type="radio"
            value="yes"
            v-model="ce_credit"
        />
        <label
            class="custom-control-label"
            for="select-credit-yes"
            >Yes</label
        >
        </div>
        <div class="custom-control custom-radio mb-3">
        <input
            name="select-credit"
            class="custom-control-input"
            id="select-credit-no"
            type="radio"
            value="no"
            v-model="ce_credit"
        />
        <label class="custom-control-label" for="select-credit-no"
            >No</label
        >
        </div>
    </div>


    <div v-if="!admin_edit">
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
    </div>

    <!-- Page changing UI -->
    <div v-if="!admin_edit">
        <PageChanger v-bind:page="2"/>
    </div>
  </div>

</template>

<script>
import { EventBus } from '../eventbus';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import PageChanger from "../components/PageChanger";

export default {
  name: "Onb-3",
  props: {
    admin_edit: {
      type: Boolean,
      default: false
    },
    edit: {
        type: Number,
        default: 0
    }
  },
  components: {
      PageChanger
  },
  watch: {
      edit: function(val) {
          if (val !== 0) {
              this.save_data();
              if (this.errors) {
                  EventBus.$emit('errors', true);
              }
          }
      }
  },
  data() {
    return {
      volunteer_text: "",
      tax_prof: "",
      ce_credit: "",

      errors: false,
      saved: false,
      volunteer_text_empty: false,
      tax_prof_empty: false,
      ce_credit_empty: false
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
    set_data: function () {
      console.log("SET DATA USER DATA:");
      console.log(this.user_data);
      if (this.user_data === null)
        return
      if (this.user_data.volunteer_text)
        this.volunteer_text = this.user_data.volunteer_text;
      if (this.user_data.tax_prof)
        this.tax_prof = this.user_data.tax_prof;
      if (this.user_data.ce_credit)
        this.ce_credit = this.user_data.ce_credit;
    },
    detect_errors: function() {
      this.errors = false;
      this.saved = false;
      this.volunteer_text_empty = false;
      this.tax_prof_empty = false;
      this.ce_credit_empty = false;

      if (this.volunteer_text.length === 0) {
        this.volunteer_text_empty = true;
        this.errors = true;
      }
      if (this.tax_prof === "") {
        this.tax_prof_empty = true;
        this.errors = true;
      }
      if (this.ce_credit === "") {
        this.ce_credit_empty = true;
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
        volunteer_text: this.volunteer_text,
        tax_prof: this.tax_prof,
        ce_credit: this.ce_credit,
        onb_3: true
      };

      // Update database
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
</style>