import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBb-Px-GEHXithUD6DSZJc2Awx9awvQn2w",
	authDomain: "house-marketplace-app-39d40.firebaseapp.com",
	projectId: "house-marketplace-app-39d40",
	storageBucket: "house-marketplace-app-39d40.appspot.com",
	messagingSenderId: "631877707411",
	appId: "1:631877707411:web:6818bf6ec2f9ac1f7acf66",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
