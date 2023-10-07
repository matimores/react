import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGpKgSnlssmgKbOkyrDdmuY0s5iO8u_tM",
  authDomain: "prueba-tienda-moressecurity.firebaseapp.com",
  projectId: "prueba-tienda-moressecurity",
  storageBucket: "prueba-tienda-moressecurity.appspot.com",
  messagingSenderId: "805701437139",
  appId: "1:805701437139:web:543c10e3c3666113f67626",
  measurementId: "G-1G46WP85EX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
