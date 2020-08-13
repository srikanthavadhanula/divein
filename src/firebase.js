import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAk9u9fFIOUNVRaGYTlb0wjekY0z5djsSo",
  authDomain: "dive-in-blog.firebaseapp.com",
  databaseURL: "https://dive-in-blog.firebaseio.com",
  projectId: "dive-in-blog",
  storageBucket: "dive-in-blog.appspot.com",
  messagingSenderId: "863130109299",
  appId: "1:863130109299:web:2a8137660c4e41f3fcb106",
  measurementId: "G-CDXNWT7K4E",
};

firebase.initializeApp(config);
export default firebase;
