import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import fbSetttings from './firebase'

const firebaseApp = firebase.initializeApp(fbSetttings)

export const auth = firebaseApp.auth()
export const db = firebaseApp.firestore()
export const storage = firebaseApp.storage()
export const ghProvider = new firebase.auth.GithubAuthProvider()
// db.settings({ timestampsInSnapshots: true })
