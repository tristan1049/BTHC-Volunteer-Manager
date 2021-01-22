<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <h3 class="h4 text-success font-weight-bold mb-">Name</h3>
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="First Name"></base-input>
              </div>
              <div class="col-md-6">
                <base-input placeholder="Last Name"></base-input>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-4 mb-1">Email</h3>
            <small class="text-uppercase text-bold mb-3">
              Please be sure to use an email address that you check frequently.
              Your tax site coordinator will be using this email as the primary
              form of contact.</small
            >
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="name@example.com"></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Repeat your email."
                  :valid="true"
                ></base-input>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-4 mb-1">
              Phone Number
            </h3>
            <small class="text-uppercase text-bold mb-3">
              Please include the best phone number to reach you.</small
            >
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="xxx-xxx-xxxx"></base-input>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-4 mb-1">
              How did you hear about our volunteer opportunities?
            </h3>
            <small class="text-uppercase text-bold mb-3">
              Please be specific.</small
            >
            <div class="row">
              <div class="col-md-12 mb-1">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Example: I heard about this opportunity through my workplace at state street."
                ></textarea>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-5 mb-4">
              Please select your gender and ethnicity.
            </h3>
            <div class="row mb-4">
              <div class="col-md-6">
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
                    <a class="dropdown-item">Female</a>
                    <a class="dropdown-item">Male</a>
                    <a class="dropdown-item">Transgender</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Prefer not to say</a>
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
                    <a class="dropdown-item">Black/African American</a>
                    <a class="dropdown-item">Latino/Hispanic</a>
                    <a class="dropdown-item">White/Caucasian</a>
                    <a class="dropdown-item">Asian/Pacific Islander</a>
                    <a class="dropdown-item">Native American</a>
                    <a class="dropdown-item">Multi-racial</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">Other</a>
                    <a class="dropdown-item">Prefer not to say</a>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-4 mb-1">
              What languages do you speak?
            </h3>
            <small class="text-uppercase text-bold mb-4">
              Please check all that apply.</small
            >
            <div class="row">
              <div class="col-md-2">
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
                    id="checkbox-hatian"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-hatian"
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
                    id="checkbox-cape"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-cape"
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
                    id="checkbox-american"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-american"
                    >American Sign Language</label
                  >
                </div>
                <div class="custom-control custom-checkbox mb-3">
                  <input
                    class="custom-control-input"
                    id="checkbox-other"
                    type="checkbox"
                  />
                  <label class="custom-control-label" for="checkbox-other"
                    >Other</label
                  >
                </div>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-4 mb-4">
              Have you volunteered with any VITA program in the past, and/or are
              you a tax professional?
            </h3>
            <div>
              <div class="custom-control custom-radio mb-3">
                <input name="select-professional" class="custom-control-input" id="select-professional-yes" type="radio"/>
                <label class="custom-control-label" for="select-professional-yes">Yes</label>
              </div>
              <div class="custom-control custom-radio mb-3">
                <input name="select-professional" class="custom-control-input" id="select-professional-no" type="radio"/>
                <label class="custom-control-label" for="select-professional-no">No</label>
              </div>
            </div>

            <br />
            <br />
            <ul class="pagination pagination-lg justify-content-center">
              <!-- <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  <i class="fa fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li> -->

              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">
                  <i class="fa fa-angle-right"></i>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "Onboarding 1",
  components: {},
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
</style>