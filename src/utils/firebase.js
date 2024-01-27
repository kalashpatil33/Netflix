// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD49AziELFW8bMGrnf_FA66RaaeNCqCUcc",
    authDomain: "netflixgpt-7fd3d.firebaseapp.com",
    projectId: "netflixgpt-7fd3d",
    storageBucket: "netflixgpt-7fd3d.appspot.com",
    messagingSenderId: "1039398429930",
    appId: "1:1039398429930:web:f11d0030fd353d4a5da393",
    measurementId: "G-TZRNYPGFRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth(); 