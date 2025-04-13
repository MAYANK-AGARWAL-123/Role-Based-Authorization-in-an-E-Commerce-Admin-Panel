const firebaseConfig = {
    apiKey: "AIzaSyAjunMtwUFdlHndDPmCqhtt85vItoeKHcc",
    authDomain: "authenticate-29781.firebaseapp.com",
    databaseURL: "https://authenticate-29781-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "authenticate-29781",
    storageBucket: "authenticate-29781.firebasestorage.app",
    messagingSenderId: "524907524109",
    appId: "1:524907524109:web:b13e4bca25ea58862be544"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();