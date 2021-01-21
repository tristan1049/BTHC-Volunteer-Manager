<template>
  <div>
    <div class="main-container bg-gray-custom justify-content-center">
      <div class="row justify-content-center align-items-center form-body">
        <div class="col-10">
          <div class="card shadow-lg p-5">
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
            <div class="text-center">
              <router-link to='/onb2'>
                <button class="btn btn-primary">
                Let's get started
                <span class="fa fa-chevron-right ml-2"></span>
              </button>
              </router-link>
            </div>
            <div class="text-center mt-1">
              <button class="btn btn-link text-primary">
                Wait, I'm an admin.
              </button>
            </div>
            <!-- <div class="row">
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
            </div> -->
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
  height: 100vh;
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