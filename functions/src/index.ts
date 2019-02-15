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
