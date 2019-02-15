# #3 Firebase Authentication



> Podemos ver los cambios aqui

---

Añadimos la configuración de firebase (config/firebase.js):

```
export default {
  apiKey: 'AIzaSyA_pdyr1w6IeX7gVfZdWZE7YUFt6ooTcmE',
  authDomain: 'recursosw-33905.firebaseapp.com',
  databaseURL: 'https://recursosw-33905.firebaseio.com',
  projectId: 'recursosw-33905',
  storageBucket: 'recursosw-33905.appspot.com',
  messagingSenderId: '423094724158'
}
```

Importamos y exportamos los servicios de firebase (config/index.js):

```
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
db.settings({ timestampsInSnapshots: true })

```




--- 

![firebase](./assets/img/footer.png)
