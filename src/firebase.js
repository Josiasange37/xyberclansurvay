import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAieBLBXNZTSyzB5k4CcbN6e6yQv9508fY",
  authDomain: "survey-ba2d1.firebaseapp.com",
  databaseURL: "https://survey-ba2d1-default-rtdb.firebaseio.com",
  projectId: "survey-ba2d1",
  storageBucket: "survey-ba2d1.firebasestorage.app",
  messagingSenderId: "251820395570",
  appId: "1:251820395570:web:050a1ed069f20f5ac6002b",
  measurementId: "G-Z8RBNNC2TZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export async function submitToFirebase(flowType, answers) {
  const payload = {
    flowType,
    answers,
    submittedAt: serverTimestamp(),
    source: "web_survey"
  };
  const submissionsRef = ref(db, `submissions/${flowType}`);
  const result = await push(submissionsRef, payload);
  return result.key;
}

export { db };
