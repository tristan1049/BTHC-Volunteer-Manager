import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDlpces85D7-q4YXqQvk6Sd7K4ns_hxzIc",
    authDomain: "bthc-volunteer-manager.firebaseapp.com",
    databaseURL: "https://bthc-volunteer-manager-default-rtdb.firebaseio.com",
    projectId: "bthc-volunteer-manager",
    storageBucket: "bthc-volunteer-manager.appspot.com",
    messagingSenderId: "460312984962",
    appId: "1:460312984962:web:929cdb4bca23cea6dd239b",
    measurementId: "G-YKPGZTFHW2"
};
  
firebase.default.initializeApp(firebaseConfig);

exports.firebase = firebase;
