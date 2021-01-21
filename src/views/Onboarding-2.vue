<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5 my-5">
            <h1 class="text-success display-1">New Volunteer Onboarding</h1>
            <h3 class="text-default mt-1">
              <small class="text-muted">
                Thank you for your interest in volunteering with the Boston Tax
                Help Coalition! Please take a few minutes to complete the
                volunteer registration.</small
              >
            </h3>
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
            <br />
            <br />

            <h3 class="h4 text-success font-weight-bold mb-">Name</h3>
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="First Name"></base-input>
              </div>
              <div class="col-md-6">
                <base-input placeholder="Last Name"></base-input>
              </div>
            </div>

            <h3 class="h4 text-success font-weight-bold mt-3 mb-1">Email</h3>
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

            <h3 class="h4 text-success font-weight-bold mt-3 mb-1">
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

            <h3 class="h4 text-success font-weight-bold mt-3 mb-1">
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

            <h3 class="h4 text-success font-weight-bold mt-4 mb-2">
              Please select your gender and ethnicity.
            </h3>
            
            <div class="row">
              <div class="col-md-6">
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Regular
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <base-input placeholder="Disabled" disabled></base-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="name@example.com"></base-input>
              </div>
              <div class="col-md-6">
                <base-input placeholder="Disabled" disabled></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <base-input
                  placeholder="Birthday"
                  addon-left-icon="ni ni-zoom-split-in"
                ></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Birthday"
                  addon-right-icon="ni ni-zoom-split-in"
                ></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <base-input placeholder="Success" :valid="true"></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  placeholder="Error input"
                  :valid="false"
                ></base-input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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