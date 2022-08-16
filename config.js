import firebase from 'firebase';

// adicione SDK do Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBbwBZdWkf0Y6M860OQLG3bTTcjrbDI5-4",
        authDomain: "pro67-3cd3a.firebaseapp.com",
        projectId: "pro67-3cd3a",
        storageBucket: "pro67-3cd3a.appspot.com",
        messagingSenderId: "840024799048",
        appId: "1:840024799048:web:c02789aaf4766d47d4257d"
      };

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();