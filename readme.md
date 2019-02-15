# #3 Firebase Authentication
> Firebase utiliza la infraestructura de Google y se escala automáticamente con tu aplicación  

![firebase](./assets/img/firebase.png)

## Empezamos
#### #1
Creamos un proyecto desde la consola de firebase.
Necesitamos tener una cuenta de firebase (google) para ello. 
- Ir a https://firebase.google.com/ y entrar en la consola:

![firebase_console](./assets/img/firebase_console.png)

- Creamos un nuevo proyecto, por ejemplo `RecursosW`:

<img src="./assets/img/firebase_name.png" height="500px" />

- Si todo ha ido bien, veremos la siguiente pantalla:

<img src="./assets/img/firebase_done.png" height="500px" />

- Dentro de la consola de firebase, vamos a la pestaña de **Authentication**.

- En ella vamos a la pestaña de **Método de acceso** y habilitamos **Github**

- El siguiente paso es crear una _OAuth App_ desde el panel de configuración 
de Github: https://github.com/settings/developers

- Click en el botón 'New OAuth App' y rellenar los datos, similar a la imagen...

<img src="./assets/img/github_developer.png" height="500px" />

- Copiamos el *Client ID* y *Client Secret* y, 
de vuelta a Firebase, lo pegamos en los campos correspondientes

<img src="./assets/img/firebase_sign_in.png" height="500px" />

- De vuelta al proyecto, editamos el archivo `/src/config/firebase.js` 
y añadimos la configuración del proyecto que acabamos de crear 😉.

## 👏 😊 🎊 
Congrats! Ya lo has configurado. ¡Es momento de ponerse manos a la obra! 💪 


---

![footer](./assets/img/footer.png)
