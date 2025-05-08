import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEnRxaWT6fFDvfNQ5jQanUJd_D0xDiGmc",
    authDomain: "timetable-scheduler-c8d58.firebaseapp.com",
    projectId: "timetable-scheduler-c8d58",
    storageBucket: "timetable-scheduler-c8d58.firebasestorage.app",
    messagingSenderId: "774555386828",
    appId: "1:774555386828:web:342f846059789ff0d79369",
    measurementId: "G-94TVQ0MQR3"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);