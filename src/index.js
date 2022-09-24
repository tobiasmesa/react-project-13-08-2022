import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZoLGl0JcDmlAAIXVEgZFunMnXdB_gOFM",
  authDomain: "letcommerce-coderhouse.firebaseapp.com",
  projectId: "letcommerce-coderhouse",
  storageBucket: "letcommerce-coderhouse.appspot.com",
  messagingSenderId: "116526249948",
  appId: "1:116526249948:web:b5d7355f7de692f10b8119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
