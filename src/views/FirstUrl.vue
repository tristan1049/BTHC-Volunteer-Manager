<template>
  <div>
    <div id="app">
      <div class="main-container">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
          <div class="row row-grid my-0">
            <div class="col-md-6 header">
              <div class="mt-4 ml-4" href="#">
                <img src="../../assets/img/logo-crop.png" alt="Logo" width="35%" height="25%"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="center-div">
                  <div class="full-width text-align-right">
                      <div class= "card shadow-sm--hover shadow-sm right-div mr-4">
                          <p class="text-primary vcenter mx-3 lead big-text">
                              <strong>
                                   Volunteer Login
                              </strong>
                              <strong class="text-primary">
                                   Portal
                              </strong>
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="loading-screen">
          <div class="center-div">
            <div class="zoom mb-5">
              <div id="firebaseui-auth-container"></div>
              <div id="loader">Loading...</div>
            </div>
          </div>
        </div>
        <div class="footer bg-gray-custom">
          <div class="row row-grid my-0">
            <div class="col-md-6">
              <p class="text-primary vcenter">
                <strong>
                  <a
                    href="https://www.bostontaxhelp.org/"
                    class="text-primary vcenter"
                  >
                    <span class="fa fa-copyright ml-4"></span>
                    2021
                    <strong> Boston Tax Help Coalition</strong>
                  </a>
                </strong>
              </p>
            </div>
            <div class="col-md-6 text-align-right">
              <p class="text-primary vcenter">
                <strong>
                  <a
                    href="https://github.com/tristan1049/BTHC-Volunteer-Manager"
                    class="text-primary vcenter"
                  >
                    <strong>Code4Good</strong>
                    <span class="fa fa-at ml-2"></span>
                    <strong class="ml-2">MIT</strong>
                    <span class="fa fa-university ml-2 mr-4"></span>
                  </a>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import * as firebaseui from "firebaseui";

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

firebase.default.initializeApp(firebaseConfig);

export default {
  name: "first",
  components: {},
  created() {
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          console.log(authResult);
          console.log(redirectUrl);
          setNewUser(authResult.additionalUserInfo.isNewUser);
          goToOnboarding();
          //this.$cookie.set('isNewUser', authResult.additionalUserInfo.isNewUser);
          //init_user(authResult.additionalUserInfo.isNewUser);
          //   page_manager("div.user-profile-screen");
          //   user_view_init();

          return false;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById("loader").style.display = "none";
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: "popup",
      signInSuccessUrl: "<url-to-redirect-to-on-success>",
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      // Terms of service url.
      tosUrl: "tos.html",
      // Privacy policy url.
      privacyPolicyUrl: "privacypolicy.html",
    };

    this.ui.start("#firebaseui-auth-container", uiConfig);

    const setNewUser = (newUser) => {
      this.$cookie.set("isNewUser", newUser);
    };

    const goToOnboarding = () => {
      this.$router.push("/second");
    };
  },
  data() {
    return {
      database: firebase.database(),
      ui:
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth()),
    };
  },
};
</script>

<style>
.loading-screen {
  /* display: flex;
  height: 60vh; */
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
}
.center-div {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.right-div{
    float: right;
}

.full-width{
  width : 100%;
}

.big-text{
    font-size: 36px;
    font-weight: 400;
}

.header {
  width: 95vw;
}
.main-container {
  /*min-height: 100vh; 
 overflow: hidden;
 display: block;
 position: relative;*/
  display: flex;
  flex-flow: column;
  height: 100vh;
}
.footer {
  flex: 0 1 10px;
  padding: 15px;
}
.text-align-center {
  text-align: center;
}
.text-align-right {
  text-align: right;
}
.vcenter {
  margin: auto;
}
.bg-gray-custom {
  background-color: #e9ecef;
}
.zoom{
     transform: scale(1.20, 1.20);
}
</style>
