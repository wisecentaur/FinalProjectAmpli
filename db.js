// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app") ;
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGBP2X_OYbiJFE7FN36oPgbRirTiKsjdY",
  authDomain: "uacriticsdb.firebaseapp.com",
  projectId: "uacriticsdb",
  storageBucket: "uacriticsdb.appspot.com",
  messagingSenderId: "131481258658",
  appId: "1:131481258658:web:408259ddfc012b8aac65fb",
  measurementId: "G-V47GHC6HVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCollection(name) {
  const citiesCol = collection(db, name);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

async function getUsers(){
  return getCollection('users')
}

async function getFilms(){
  return getCollection('films')
}


module.exports.getFilms=getFilms;