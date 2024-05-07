import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBF9dmMvsz73B0M83gsSOfgPtUjX22nXuo",
  authDomain: "movie-ba329.firebaseapp.com",
  projectId: "movie-ba329",
  storageBucket: "movie-ba329.appspot.com",
  messagingSenderId: "939596733889",
  appId: "1:939596733889:web:20d5f8ba7b497eed0e2340",
  measurementId: "G-1EEYFT10BR"
  };

const app = initializeApp(firebaseConfig);
export const authService = getAuth();