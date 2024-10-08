// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATBFpa255YOHnXSeFsUeOn_h3lbJR6Yrc",
  authDomain: "fir-js-fc0aa.firebaseapp.com",
  projectId: "fir-js-fc0aa",
  storageBucket: "fir-js-fc0aa.appspot.com",
  messagingSenderId: "266360330821",
  appId: "1:266360330821:web:8b4265aacdbcf91905212c",
  measurementId: "G-6XPV1100TP",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const logOut = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
      // Xử lý sau khi đăng xuất thành công (ví dụ: điều hướng đến trang đăng nhập)
    })
    .catch((error) => {
      console.error("Error signing out:", error);
      // Xử lý lỗi đăng xuất
    });
};

export { db, auth, googleProvider, signInWithPopup, logOut };
