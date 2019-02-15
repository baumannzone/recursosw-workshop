import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import { tmpdir } from 'os'
import { join, dirname } from 'path'
const sharp = require('sharp');
const fs = require('fs-extra');

const formats: any = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/webp': 'webp'
}

const compressionOptions: any = {
  'image/png': {compressionLevel: 6},
  'image/jpeg': {quality: 60},
  'image/webp': {quality: 60}
}

const getDownloadUrl = function (bucket: any, object: any, destination: string) {
  return `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/`
    + encodeURIComponent(destination)
    + '?alt=media&token='
    + object.metadata.firebaseStorageDownloadTokens
}

export const generateThumbs = functions.storage
  .object()
  .onFinalize(async object => {
    const bucket = admin.storage().bucket(object.bucket)
    const filePath: any = object.name
    const [ref, resourceId, fileName] = filePath.split('/')
    const bucketDir = dirname(filePath)

    const workingDir = join(tmpdir(), 'thumbs')
    const tmpFilePath: any = join(workingDir, `source${new Date().getTime()}.png`)

    const contentType: any = object.contentType
    const format = formats[contentType]
    const compression = compressionOptions[contentType]

    // Para no producir un bucle infinito
    if (fileName.includes('thumb@') || !contentType.includes('image')) {
      console.log('exiting function')
      return false
    }

    // 1. Ensure thumbnail dir exists
    await fs.ensureDir(workingDir)

    // 2. Download Source File
    await bucket.file(filePath).download({
      destination: tmpFilePath
    })

    // 3. Resize the images and define an array of upload promises
    const thumbs: any = {}
    const sizes = [[128, 128], [340, 340], [640, 640]]

    const promises = sizes.map(async size => {
      const [w, h] = size
      const thumbName = `thumb@${size[0]}_${fileName}`
      const thumbPath = join(workingDir, thumbName)

      // resize image
      await sharp(tmpFilePath)
        .resize(w, h)[format](compression)
        .toFile(thumbPath)

      const destination = join(bucketDir, thumbName)
      const imgUrl = getDownloadUrl(bucket, object, destination)

      thumbs[size.join('x')] = imgUrl

      // Upload to GCS
      return bucket.upload(thumbPath, {destination})
    })

    // 4. Run the upload operations
    await Promise.all(promises)

    // 5. Cleanup remove the tmp/thumbs from the filesystem
    await fs.remove(workingDir)

    // 6. set thumbs to firestore
    thumbs.mainImg = getDownloadUrl(bucket, object, filePath)
    return admin.firestore().doc(`/${ref}/${resourceId}`).set({
      media: thumbs,
      photoRef: filePath,
    }, {merge: true})
    .catch(error => console.log({thumbs: error}))
  })