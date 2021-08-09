import { config } from "./config";
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(config);

// export const auth = firebase.auth();

// export const fireauth = firebase.auth;

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const firebasestore = firebase.firestore;
