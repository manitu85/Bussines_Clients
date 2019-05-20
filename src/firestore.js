import { createStore, combineReducers, compose } from 'redux'
import firebase from 'firebase'
import 'firebase/firestore'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todos

const firebaseConfig = {
  apiKey: 'AIzaSyB4mZwqJdRsNBB6MzPPgGqyLsr8F1uGgg4',
  authDomain: 'bussinesclientspanel.firebaseapp.com',
  databaseURL: 'https://bussinesclientspanel.firebaseio.com',
  projectId: 'bussinesclientspanel',
  storageBucket: 'bussinesclientspanel.appspot.com',
  messagingSenderId: '483123519354',
  appId: '1:483123519354:web:23624c6021ba0b52'
};


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize firestore
// const firestore = firebase.firestore() 


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
  reduxFirestore(firebase) 
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
})

// Create store with reducers and initial state
const initialState = {}
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;