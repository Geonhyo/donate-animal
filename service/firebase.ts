// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWObWznruD0klBpDC_cOhl6H-8ji_ksRI",
  authDomain: "donate-animal.firebaseapp.com",
  projectId: "donate-animal",
  storageBucket: "donate-animal.appspot.com",
  messagingSenderId: "239149214161",
  appId: "1:239149214161:web:c96cf5a3435d516baed8f0",
};

const firebaseApp = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
