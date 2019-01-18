# #7 Testing (Jest & Cypress) 
Testing software. Seguro que conoces varias razones para hacerlo. Estas dos son importantes para nosotros:

> - Nos ayuda a garantizar que no rompemos cosas al realizar cambios
> - _(Por lo tanto)_ Desarrollamos más rapido

## Cypress.io: 
JavaScript End to End (E2E) Testing Framework - https://www.cypress.io/  
![cypress](./assets/img/cypress.png)


## Jest: 
🃏 Delightful JavaScript Testing - https://jestjs.io/  
![jest](./assets/img/jest.png)

---

Al instalar el proyecto, unas de las opciones que elegimos fue la de testing (Unit y E2E):
```
? Check the features needed for your project:  
  ◉ Babel  
  ◯ TypeScript  
  ◯ Progressive Web App (PWA) Support  
  ◉ Router  
  ◉ Vuex  
  ◉ CSS Pre-processors  
  ◉ Linter / Formatter  
  ◉ Unit Testing  
  ◉ E2E Testing  
```

Vamos a ver con unos ejemplos básicos que fácil es testear nuestra app

Empezamos con Cypress, **tests de integración**.  
Con esta herramienta (que nos encanta 😍) podemos simular el flujo completo de uso de una app en un escenario "real". Es decir, vista de los datos, conexiones con la base de datos, etc,   

Por ejemplo, en nuestro caso podríamos hacer lo siguiente:
- Iniciar sesión
- Navegar por la app  
- Crear un recurso
- Comprobar que el recurso ha sido creado
- Cerrar sesión 

---

![footer](./assets/img/footer.png)
