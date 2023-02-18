import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDVgZ1jUtl7wmPhk9t7XbmGHpJqFKJYO8Y",
    authDomain: "olxproject-5b257.firebaseapp.com",
    databaseURL: "https://olxproject-5b257-default-rtdb.firebaseio.com",
    projectId: "olxproject-5b257",
    storageBucket: "olxproject-5b257.appspot.com",
    messagingSenderId: "457169785106",
    appId: "1:457169785106:web:b4a8177a7ef05e6cf1a3cb",
    measurementId: "G-D0W8FTQJDX"
  };

export default firebase.initializeApp(firebaseConfig)