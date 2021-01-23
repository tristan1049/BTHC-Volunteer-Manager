<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
           
            <!-- "How did you hear about us?" Field -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              How did you hear about our volunteer opportunities?
            </h3>
            <h6 class="text-bold text-muted mb-3">Please be specific.</h6>
            <div class="row mb-5">
              <div class="col-md-12">
                <textarea
                  class="form-control"
                  id="input-hear-about"
                  rows="3"
                  placeholder="Example: I heard about this opportunity through my workplace at state street."
                ></textarea>
              </div>
            </div>

            
            <!-- "Are you a tax professional" Field -->
            <h3 class="h4 text-success font-weight-bold mb-4">
              Have you volunteered with any VITA program in the past, and/or are
              you a tax professional?
            </h3>
            <div class="mb-5">
              <div class="custom-control custom-radio mb-3">
                <input
                  name="select-professional"
                  class="custom-control-input"
                  id="select-professional-yes"
                  type="radio"
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
            <div class="mb-5">
              <div class="custom-control custom-radio mb-3">
                <input
                  name="select-credit"
                  class="custom-control-input"
                  id="select-credit-yes"
                  type="radio"
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
                />
                <label class="custom-control-label" for="select-credit-no"
                  >No</label
                >
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
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  <i class="fa fa-angle-left"></i>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">2</a>
              </li>
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
  name: "Onboarding-3",
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