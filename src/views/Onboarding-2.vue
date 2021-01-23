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

            <!-- Other Ethnicity Field -->
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-ethnicity-other"
                  placeholder="Please specify other."
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

            <!-- Other Language Field -->
            <div class="row mb-5">
              <div class="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="input-ethnicity-other"
                  placeholder="Please specify other."
                />
              </div>
            </div>

            <!-- Save Button -->
            <div class="text-right">
              <button class="btn btn-primary" data-toggle="modal" data-target="#modal-save">
                Save my progress!
              </button>
            </div>

            <!-- Save Confirmation Modal -->
            <div class="modal fade" id="modal-save" tabindex="-1" role="dialog" aria-labelledby="save-modal" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title  font-weight-bold text-success">Saved</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
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
              <li class="page-item"><a class="page-link" href="#">4</a></li>
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
//import "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "Onboarding-2",
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