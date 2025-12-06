// import {getDatabase, ref} from "firebase/database"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiWqJoh1y9Wi77tDsMBcIH6QmdWFnl7ek",
  authDomain: "jsi09-website-project.firebaseapp.com",
  projectId: "jsi09-website-project",
  storageBucket: "jsi09-website-project.firebasestorage.app",
  messagingSenderId: "360846852805",
  appId: "1:360846852805:web:c1c8c90ccb869c374026ac",
  measurementId: "G-G83JWXJHVN"
};
const app = firebase.initializeApp(firebaseConfig)
const authentication = firebase.auth()
const database = firebase.firestore()

console.log(firebase.app().name)
console.log(app, authentication)
console.log(database)
// console.log(rtDatabase)