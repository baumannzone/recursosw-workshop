# #3 Firebase Authentication

![firebase](./assets/img/firebase.png)

## Empezamos
#### #1
- ir a ![https://firebase.google.com/](https://firebase.google.com/) y entrar en la consola.

![firebase_console](./assets/img/firebase_console.png)

- Creamos un nuevo proyecto, p.ej RecursosW

![firebase_name](./assets/img/firebase_name.png)

- ✅ Si todo ha ido bien, veremos la siguiente pantalla...

![firebase_done](./assets/img/firebase_done.png)

- Dentro de la consola de firebase, vamos a la pestaña de 'authentication'.

- En ella vamos a la pestaña de Sign-in method y elegimos Github

- A continuación vamos la página de configuración de github
  
![Developer settings](https://github.com/settings/developers)

- Click en el botón 'New OAuth App' y rellenar los datos, similar a la imagen...

![github_developer](./assets/img/github_developer.png)

copiamos el Client ID & Client Secret y lo ponemos en firebase.

- Ahora en el directorio del proyecto, editar el archivo recursosw/src/config/firebase.js y añadir la configuración del proyecto recién creado.

- Saltar a la siguiente rama si no se ha realizado los pasos anteriores