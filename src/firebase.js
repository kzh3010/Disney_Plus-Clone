// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD68HcwF6cfUKTb8uCPZaKQX8SQaXKvssk",
  authDomain: "react-disney-clone-b410d.firebaseapp.com",
  projectId: "react-disney-clone-b410d",
  storageBucket: "react-disney-clone-b410d.appspot.com",
  messagingSenderId: "640429594022",
  appId: "1:640429594022:web:bb06913a04731c8988eb67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// app을 밖으로 내보내야 한다.
export default app;
