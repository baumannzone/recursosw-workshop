# #3 Firebase Authentication

> Podemos ver los cambios que hemos hecho aquí:

Hemos añadido la configuración de firebase (`config/firebase.js`):

```js
export default {
  apiKey: 'AIzaSyA_pdyr1w6IeX7gVfZdWZE7YUFt6ooTcmE',
  authDomain: 'recursosw-33905.firebaseapp.com',
  databaseURL: 'https://recursosw-33905.firebaseio.com',
  projectId: 'recursosw-33905',
  storageBucket: 'recursosw-33905.appspot.com',
  messagingSenderId: '423094724158'
}
```

Hemos importado y exportado los servicios de firebase (`config/index.js`):

```js
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

## VUEX
🗃️ Centralized State Management for Vue.js. https://vuex.vuejs.org

<p align="center">
  <img width="600px" src="https://raw.githubusercontent.com/vuejs/vuex/dev/docs/.vuepress/public/vuex.png">
  <br>
  <img width="600px" src="./assets/img/vuex-in-action.gif">
</p>



## Continuamos

En este paso tenemos que hacer lo siguiente:

1. Definir las rutas `/signin` y `/signout` en `router.js`
2. Crear (en `/views`) los componentes vistas `Signin.vue` y `Signout.vue`
3. Dotar de contenido y lógica dichas vistas (*)

--- 

![firebase](./assets/img/footer.png)
