# #6 Cloud Functions


## Cloud Functions para Firebase
Cloud Functions para Firebase te permite ejecutar de forma automática el código de backend en respuesta a eventos activados por las funciones de Firebase y las solicitudes HTTPS.

https://firebase.google.com/docs/functions/?hl=es-419

---

### Instalamos

```
$ npm i -g firebase-tools
$ firebase login
$ firebase init

? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, 
then Enter to confirm your choices. 
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
❯◉ Functions: Configure and deploy Cloud Functions
 ◯ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
```

### Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

```
? Select a default Firebase project for this directory: 
  [don't setup a default project] 
  hamelin-1fa2c (hamelin) 
  hamelin-91968 (hamelin-dev) 
  natura-19a4a (Natura) 
❯ recursosw-33905 (RecursosW) 
  recursosw-cbe9e (recursosw) 
  [create a new project] 
```

### Functions Setup

A functions directory will be created in your project with a Node.js
package pre-configured. Functions can be deployed with firebase deploy.

```
? What language would you like to use to write Cloud Functions? 
  JavaScript 
❯ TypeScript 
```

```
? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use TSLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/tslint.json
✔  Wrote functions/tsconfig.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes
npm notice created a lockfile as package-lock.json. You should commit this file.
audited 982 packages in 2.553s
found 0 vulnerabilities
```

i  Writing configuration info to firebase.json...

i  Writing project information to .firebaserc...

✔  Firebase initialization complete!

---

En el proyecto de **recursosw** usamos las funciones, entre otras cosas, para generar imagenes de distintos tamaños, guardarlas en el storage y asociar dichas imagenes al recurso que acabamos de crear. 


###### Tu turno..
- Ahora completa la función para redimensionar las imágenes

```js

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import { tmpdir } from 'os'
import { join, dirname } from 'path'
const sharp = require('sharp');
const fs = require('fs-extra');

admin.initializeApp()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
//  response.end();
// });


export const generateThumbs = functions.storage
  .object()
  .onFinalize(async object => {
    const bucket = admin.storage().bucket(object.bucket)
    const filePath: any = object.name
    const [ref, resourceId, fileName] = filePath.split('/')
    const bucketDir = dirname(filePath)

    const workingDir = join(tmpdir(), 'thumbs')
    const tmpFilePath: any = join(workingDir, `source${new Date().getTime()}.png`)

    // const contentType: any = object.contentType
    // const format = formats[contentType]
    // const compression = compressionOptions[contentType]

    // 0. Avoid infinite loop

    // 1. Ensure thumbnail dir exists

    // 2. Download Source File

    // 3. Resize the images and define an array of upload promises

    // 4. Run the upload operations

    // 5. Cleanup remove the tmp/thumbs from the filesystem

    // 6. set thumbs to firestore
  })

