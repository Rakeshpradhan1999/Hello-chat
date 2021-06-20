import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp ({
    apiKey: 'AIzaSyAllz_fIZvJ46iQePQpV8dsKsEQ8oF4KYc',
    authDomain: 'hello-chat-95296.firebaseapp.com',
    projectId: 'hello-chat-95296',
    storageBucket: 'hello-chat-95296.appspot.com',
    messagingSenderId: '496261808979',
    appId: '1:496261808979:web:19a6e081e4286b409f97a6',
  })
  .auth ();
