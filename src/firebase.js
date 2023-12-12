import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyBKzU1xmzslI2uWtYdZe8uFyGXmPKFpN6o",
  authDomain: "phoneauthentcationreact.firebaseapp.com",
  projectId: "phoneauthentcationreact",
  storageBucket: "phoneauthentcationreact.appspot.com",
  messagingSenderId: "967837982255",
  appId: "1:967837982255:web:789bf92a111ea60d79b0da",
  measurementId: "G-X56T4LM39C"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);