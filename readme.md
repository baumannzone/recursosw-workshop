# #4 Hosting & Deploy + Open Graph
> Netlify: Build, deploy, and manage modern web projects  
https://www.netlify.com/

![netlify](./assets/img/netlify.png)


> Open Graph: The Open Graph protocol enables any web page to become a rich object in a social graph.  
http://ogp.me/

![open-graph](./assets/img/og.png)

---

### Netlify:
- All-in-one platform for automating modern web projects. 😍
- Es como [github-pages](https://pages.github.com/), pero vitaminado 💊
  - Despligue automatico 
  - Vista previa de los cambios antes de hacer el merge a _PRO_ 🔝
  - URL personalizada 
  - Fácil de configurar (la rama, comando para hacer el _build_, etc)
  
###### Vamos a crear un proyecto y a verlo en acción:
- Lo primero es crearse una cuenta y acceder a la plataforma.
- Una vez dentro, le damos a **New site from Git** 
- Nos deja elegir entre github, gitlab o bitbucket. En este caso le damos Github.
- Le damos acceso a la app a nuestros repositorios (Esto solo se hace la primera vez que entremos)
- Elegimos el repositorio que queremos hostear y lo configuramos:

![netlify-config](./assets/img/netli-config.png)

#### ¡Fantástico!
Ya lo tienes. 👏 Espera unos instantes y tu sitio será publicado. Por defecto en una url random.    
Ahora puedes ver el log de despliegues de tu sitio y su correspondiente _commit_ y el estado de dicho despligue (_Published_ ☑ - _Failed_ 🤬) o revisar la configuración y personalizar la URL.   

Es genial, ¿Verdad? 🥰

---

### Open Graph:
Open Graph es una tecnología que introdujo Facebook (año 2010).  
Al integrar las etiquetas de Open Graph en tu sitio web puedes personalizar los elementos que se ven cuando compartes tu sitio web

Es más fácil si ves este ejemplo: 👇
![og-gif](./assets/img/opengraph.gif) 

Si no tienes estos parámetros configurados se cogerán algunos valores por defecto si es posible.

---

## Tareas 
- Agregar los meta tags necesarios para que nuestra web se vea tal y como queremos cuando compartimos nuestro enlace.
> [Documentación Oficial](http://ogp.me/#metadata)  
> [Chuleta](https://github.com/DevJourneyMadrid/june-18/blob/9cfb042919f8b9e44fb4d42b2f7106c952e0f2b7/public/index.html#L16)

¿Ya lo tienes? Puedes ir a la rama `step4.1_netlify` para ver el resultado.

---

Acabamos de añadir los metadatos y al compartir en Slack el enlace ya se puede ver el resultado:  
![og-preview](./assets/img/og-preview.png)


---
![footer](./assets/img/footer.png)
