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
                <div class="card-body">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="tab-tax-body" role="tabpanel" aria-labelledby="tab-tax-body">
                            <p class="description">Prior tax experience is not necessary. We will train! Tax Preparer volunteers prepare and file taxes face-to-face with eligible taxpayers using IRS TaxWise software. Volunteers are encouraged to serve at any site (or combination of sites) as they wish.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="tab-financial-body" role="tabpanel" aria-labelledby="tab-financial-body">
                            <p class="description">Financial Guide volunteers provide a comprehensive tax site intake experience for taxpayers. This includes screening for tax preparation readiness and eligibility, interpreting and advising client’s credit report, referring services, and encouraging clients to opt-in to tax-time savings options. Financial Guides are placed at a tax site at the discretion of the Coalition Asset Building Program Coordinator.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="tab-bilingual-body" role="tabpanel" aria-labelledby="tab-bilingual-body">
                            <p class="description">Bi-lingual Interpreter volunteers will provide interpretation and translation services to Limited English Proficiency taxpayers at one of, or a combination of, tax sites. Languages needed are: Spanish, Portuguese, Cantonese, Mandarin, Haitian Creole, Vietnamese, Arabic, and Cape Verdean.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                            <strong>You MUST be able to speak English and another language fluently.</strong>
                        </div>
                        <div class="tab-pane fade" id="tab-community-body" role="tabpanel" aria-labelledby="tab-community-body">
                            <p class="description">Community Engagement Liaison volunteers are responsible for greeting all incoming taxpayers, answering basic tax FAQs, providing taxpayers with the necessary paperwork, screening taxpayers for eligibility, and assuring a smooth flow of taxpayers from initial sign-up to the financial check-up process and/or tax preparation stage. Volunteers are encouraged to serve at any site (or combination of sites) they wish.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p> 
                        </div>
                    </div>
                </div>
            </div>

            <!-- Role Selection Button -->
            <h3 class="h4 text-success font-weight-bold mb-1">
              Please select a Volunteer Role.
            </h3>
            <h6 class="text-bold text-muted mb-4">You may only select one. To change this role after your registration is approved, please contact the <a href="https://www.bostontaxhelp.org/contact-us/">Volunteer Program Administrator.</a></h6>
            <div class="row mb-5">
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
                    Role
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdown-gender">
                    <a class="dropdown-item" data-toggle="tab" href="#terms-tax-body">Tax Preparer</a>
                    <a class="dropdown-item" data-toggle="tab" href="#terms-financial-body">Financial Guide</a>
                    <a class="dropdown-item" data-toggle="tab" href="#terms-bilingual-body">Bi-lingual Interpreter</a>
                    <a class="dropdown-item" data-toggle="tab" href="#terms-community-body">Community Engagement Liaison</a>
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
                <div class="card-body">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="terms-tax-body" role="tabpanel" aria-labelledby="terms-tax-body">
                            <p class="description">Prior tax experience is not necessary. We will train! Tax Preparer volunteers prepare and file taxes face-to-face with eligible taxpayers using IRS TaxWise software. Volunteers are encouraged to serve at any site (or combination of sites) as they wish.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="terms-financial-body" role="tabpanel" aria-labelledby="terms-financial-body">
                            <p class="description">Financial Guide volunteers provide a comprehensive tax site intake experience for taxpayers. This includes screening for tax preparation readiness and eligibility, interpreting and advising client’s credit report, referring services, and encouraging clients to opt-in to tax-time savings options. Financial Guides are placed at a tax site at the discretion of the Coalition Asset Building Program Coordinator.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                        </div>
                        <div class="tab-pane fade" id="terms-bilingual-body" role="tabpanel" aria-labelledby="terms-bilingual-body">
                            <p class="description">Bi-lingual Interpreter volunteers will provide interpretation and translation services to Limited English Proficiency taxpayers at one of, or a combination of, tax sites. Languages needed are: Spanish, Portuguese, Cantonese, Mandarin, Haitian Creole, Vietnamese, Arabic, and Cape Verdean.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p>
                            <strong>You MUST be able to speak English and another language fluently.</strong>
                        </div>
                        <div class="tab-pane fade" id="terms-community-body" role="tabpanel" aria-labelledby="terms-community-body">
                            <p class="description">Community Engagement Liaison volunteers are responsible for greeting all incoming taxpayers, answering basic tax FAQs, providing taxpayers with the necessary paperwork, screening taxpayers for eligibility, and assuring a smooth flow of taxpayers from initial sign-up to the financial check-up process and/or tax preparation stage. Volunteers are encouraged to serve at any site (or combination of sites) they wish.</p>
                            <p class="description">Commitment: Volunteers are respectfully requested to volunteer at their selected tax site at least 4 hours per week, or for a total of 30 hours of service throughout the tax season.</p> 
                        </div>
                    </div>
                </div>
            </div>

            <!-- Terms and Conditions (selection) -->
            <div class="mb-5 ml-2">
              <div class="custom-control custom-radio mb-3">
                <input
                  name="select-terms"
                  class="custom-control-input"
                  id="select-terms-yes"
                  type="radio"
                />
                <label
                  class="custom-control-label"
                  for="select-terms-yes"
                  >I have reviewed and will comply with the terms and conditions.</label
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
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item active">
                <a class="page-link" href="#">3</a>
              </li>
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
  name: "Onboarding-4",
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