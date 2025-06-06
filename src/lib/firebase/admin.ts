import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_JSON as string);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

export const db = getFirestore();
