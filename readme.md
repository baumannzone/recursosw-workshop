# #3 Firebase Auth + Vuex
> Firebase utiliza la infraestructura de Google y se escala automáticamente con tu aplicación  

![firebase](./assets/img/firebase.png)

**Firebase Authentication** proporciona servicios de backend, SDK fáciles de usar y bibliotecas de IU ya elaboradas para autenticar a los usuarios en tu aplicación.  
Admite la autenticación mediante contraseñas, números de teléfono, proveedores de identidad federados populares, como Google, Facebook y Twitter, y mucho más.

Más info: [Firebase Auth Docs](https://firebase.google.com/docs/auth/?gclid=CjwKCAiA45njBRBwEiwASnZT56aBRLGJrDu6aELp22XPwlXfE6ckFVB6-AlLFoLedkXtlZBp2Vih0xoC4UkQAvD_BwE)

## Empezamos
#### #1
Creamos un proyecto desde la consola de firebase.
Necesitamos tener una cuenta de firebase (google) para ello. 
- Ir a https://firebase.google.com/ y entrar en la consola:

![firebase_console](./assets/img/firebase_console.png)

- Creamos un nuevo proyecto, por ejemplo `RecursosW`:
<p align="center">
  <img src="./assets/img/firebase_name.png" height="500px" />
</p>

- Si todo ha ido bien, veremos la siguiente pantalla:

<p align="center">
  <img src="./assets/img/firebase_done.png" height="500px" />
</p>

- Dentro de la consola de firebase, vamos a la pestaña de **Authentication**.

- En ella vamos a la pestaña de **Método de acceso** y habilitamos **Github**

- El siguiente paso es crear una _OAuth App_ desde el panel de configuración 
de Github: https://github.com/settings/developers

- Click en el botón 'New OAuth App' y rellenar los datos, similar a la imagen...

<p align="center">
  <img src="./assets/img/github_developer.png" height="500px" />
</p>

- Copiamos el *Client ID* y *Client Secret* y, de vuelta a Firebase, lo pegamos en los campos correspondientes

<p align="center">
  <img src="./assets/img/firebase_sign_in.png" height="500px" />
</p>

- De vuelta al proyecto, editamos el archivo `/src/config/firebase.js` 
y añadimos la configuración del proyecto que acabamos de crear 😉.

<p align="center">
  <img src="./assets/img/firebase_config.png" height="500px" />
</p>

## Congrats!
👏 😊 🎊 Ya lo has configurado. ¡Es momento de ponerse manos a la obra! 💪 

---

Para continuar, pasamos a la rama `step3.1_auth`

---

![footer](./assets/img/footer.png)
