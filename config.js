import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBX09xMqw3QyLBv7VZ2VLd2S5vF3Pzunjk",
  authDomain: "wily-d395b.firebaseapp.com",
  projectId: "wily-d395b",
  storageBucket: "wily-d395b.appspot.com",
  messagingSenderId: "903624686398",
  appId: "1:903624686398:web:56c63f94c6c7d6db7bca6f"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();