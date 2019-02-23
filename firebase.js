import firebase from 'firebase/app';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyAAtu9XARnRrXsp1AftTuMrGt8imRLt3sA",
    authDomain: "tcm-app-d02a8.firebaseapp.com",
    databaseURL: "https://tcm-app-d02a8.firebaseio.com",
    projectId: "tcm-app-d02a8",
    storageBucket: "tcm-app-d02a8.appspot.com",
    messagingSenderId: "567324449433"
  };

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

export default firebase;