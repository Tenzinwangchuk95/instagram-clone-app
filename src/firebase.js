import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBht3TNnlBFw4qiDnE-EyieFqSgDTQ8S7M",
    authDomain: "instagram-clone-app-10ba3.firebaseapp.com",
    databaseURL: "https://instagram-clone-app-10ba3.firebaseio.com",
    projectId: "instagram-clone-app-10ba3",
    storageBucket: "instagram-clone-app-10ba3.appspot.com",
    messagingSenderId: "728386847860",
    appId: "1:728386847860:web:fc72147743bbb2fd713d21",
    measurementId: "G-4V0HWK7KC0"
  });

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export { db, auth, storage }
