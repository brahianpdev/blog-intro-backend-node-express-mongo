# Introducción al backend con Node, Express, y MongoDB

# Introducción

Esta es una guía de introducción para quienes deseen comenzar con estas tecnologías, usando una arquitectura limpia, escalable y fácil de mantener.  


# Requisitos necesarios

- [Node](https://nodejs.org/es/) (versión LTS)
- [Express](https://expressjs.com/es/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)

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

# Resolucion

En el **[blog](https://brahianpdev.rocks/)** está la resolución paso a paso, desde la creación de la base de datos hasta la construcción y test de los endpoints correspondientes.

# Agradecimientos

Un especial agradecimiento a [Scorpion](https://www.linkedin.com/in/perez-alan/) y [Franco ](https://www.linkedin.com/in/francogrecco/), que siempre están ofreciendo su ayuda.