import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDM6BfefxnTromSl8BmEoGCGaJllI2ivqM",
    authDomain: "xpark-492ae.firebaseapp.com",
    databaseURL: "https://xpark-492ae.firebaseio.com",
    projectId: "xpark-492ae",
    storageBucket: "xpark-492ae.appspot.com",
    messagingSenderId: "705611960944",
    appId: "1:705611960944:web:fb175c971f725b4dac5ab5",
    measurementId: "G-RJN23G402P"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;