// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCnhv5V0Yn9O6LysjiT7xwjq_C-0YdNOT4",
    authDomain: "sockettest-ee25e.firebaseapp.com",
    databaseURL: "https://sockettest-ee25e-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'edges'), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData("userId", "name", "email", "imageUrl");
