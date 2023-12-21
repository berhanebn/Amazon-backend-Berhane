// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// 	apiKey: "AIzaSyCA-wNPCwd92QSQEOxiN3o3NuEuZrSh43U",
// 	authDomain: "clone-e8123.firebaseapp.com",
// 	projectId: "clone-e8123",
// 	storageBucket: "clone-e8123.appspot.com",
// 	messagingSenderId: "365715962658",
// 	appId: "1:365715962658:web:8ede48c36825932aec437b",
// 	measurementId: "G-BQ2VZKE93H",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCA-wNPCwd92QSQEOxiN3o3NuEuZrSh43U",
	authDomain: "clone-e8123.firebaseapp.com",
	projectId: "clone-e8123",
	storageBucket: "clone-e8123.appspot.com",
	messagingSenderId: "365715962658",
	appId: "1:365715962658:web:8ede48c36825932aec437b",
	measurementId: "G-BQ2VZKE93H",
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
export default firebase;
