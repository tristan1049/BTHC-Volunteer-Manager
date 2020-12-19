<template>
  <div>
    <div id="app">
        <div class = "loading-screen" style="height: 75vh; display:flex; align-items:center; justify-content:center">
        <div>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import * as firebaseui from 'firebaseui'

export default {
  name: 'first',
  components: {
  },
  created() {
    var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
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
        uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        //firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: 'tos.html',
    // Privacy policy url.
    privacyPolicyUrl: 'privacypolicy.html'
    };

    this.ui.start('#firebaseui-auth-container', uiConfig);

    const setNewUser = (newUser) => {
        this.$cookie.set('isNewUser', newUser);
    }

    const goToOnboarding = () => {
        this.$router.push("/second");
    }
  },
  data() {
      return {
          database: firebase.database(),
          ui: firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth()),
      }
  }
}
</script>

<style>
</style>