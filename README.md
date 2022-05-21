# Introducción al backend con Node, Express, y MongoDB

# Introducción

Esta es una guía de introducción para quienes deseen comenzar con estas tecnologías, usando una arquitectura limpia, escalable y fácil de mantener.  


# Requisitos necesarios

- [Node](https://nodejs.org/es/) (versión LTS)
- [Express](https://expressjs.com/es/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

# Export functions vs export Class

El pensar en un backend con export functions, supone una carga innecesaria de exportaciones e importaciones. Por otro lado, al usar clases bastaria solo una exportación e importación de la misma para tener acceso a todos sus métodos.

Veamos un ejemplo con funciones:

```jsx
// **export functions**
function SayHello () {
    console.log("Hello");
}

function SayBye () {
    console.log("Bye");
}

module.exports = { SayHello, SayBye };
```

```jsx
// **import functions**
const { SayHello, SayBye } = require('./export-function');

SayHello();
SayBye();
```

Ahora veamos un ejemplo con clases:

```jsx
// **export class**
class Say {
    async hello () {
        console.log("Hello");
    }

    async bye () {
        console.log("Bye");
    }
}

module.exports = new Say();
```

```jsx
// **import class**
const sayClass = require('./export-class');

sayClass.hello();
sayClass.bye();
```

*Si ejecutamos respectivos archivos en nuestra consola, obtendremos el mismo resultado.*

```powershell
node import-function
Hello
Bye
```
```powershell
node import-class
Hello
Bye
```

# Estructura a seguir

```markdown
**Arquitectura de 4 capas**

src
│   index.ts        # App entry point
└───controllers     # route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───models          # Database models
└───repositories    # Custom queries to database
└───services        # All the business logic is here
└───routes          # Express.js entry points to controllers
```

# Problema a resolver

Una empresa está creciendo, y necesita un sistema donde pueda tener un registro de sus productos. Dentro de las funcionalidades que pide están, crear un nuevo producto, obtener todos los productos, obtener un producto específico, editar un producto específico y eliminar un producto específico. 

En otras palabras, se pide crear un CRUD de productos con sus respectivos endpoints.

# **Conclusion**

# Agradecimientos