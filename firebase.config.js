import firebase from 'firebase'

var config = {

};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();
export const lightsRef = db.ref('lights');
export const randomRef = lightsRef.child('random');


