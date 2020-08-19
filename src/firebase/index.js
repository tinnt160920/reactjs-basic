import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBKY9mNeV8jGb_59ZpLEMffUK4KSxPjNMs",
    authDomain: "images-baf81.firebaseapp.com",
    databaseURL: "https://images-baf81.firebaseio.com",
    projectId: "images-baf81",
    storageBucket: "images-baf81.appspot.com",
    messagingSenderId: "257285854724",
    appId: "1:257285854724:web:e3995cc651c7a7a099c751",
    measurementId: "G-5YKQDKKE2N"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase