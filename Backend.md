# Backend

---

## Frameworks Backend.

> Rutas o endpoints / Middleware / Manejo de errores / Codigos de estado HTTP / Validación de datos / ORM (Object Relational Mapping) / Autenticación y autorización

### Node<mark> </mark>

    **Node.js** **framework de backend** que sólo se utiliza para construir servidores. Es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en .js haciendo alusión al lenguaje JavaScript). Este **entorno de tiempo** de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript.
    Tanto JavaScript como **Node.js** se ejecutan en el motor de tiempo de ejecución JavaScript V8 (V8 es el nombre del motor de JavaScript que alimenta Google Chrome. Es lo que toma nuestro JavaScript y lo ejecuta mientras navega con Chrome). Este motor se ocupa de convertir el código JavaScript a código máquina en tiempo real a lo que se llama JIT, o *just-in-time*.

    Creación de aplicaciones de red rápidas, ya que es capaz de manejar una gran cantidad de conexiones simultáneas con un alto nivel de rendimiento, lo que equivale a una **alta escalabilidad** y de uso altamente intensivo de operaciones I/O (Input/Output). *De naturaleza asíncrona y no bloqueante*.

### Nest<mark> </mark>

    **Nest.js framework de desarrollo web basado en Node.js** de servidor que es ideal para crear aplicaciones de *backend* que utiliza *JavaScript* y *TypeScript* para la comprobación de tipos y para proporcionar una estructura de programación sólida y altamente escalable. Se inspira en otros frameworks de desarrollo populares, como *Angular y Spring*.

### Spring boot<mark> </mark>

    **Spring boot** (Java Spring Boot) **herramienta** que acelera y simplifica el desarrollo de **microservicios** y aplicaciones web con *Spring Framework*.

---

## Desarrollo de APIs.

> Métodos de HTTP - Request y response / Cookies / GraphQL / Websockets / Axios

### Feather<mark> </mark>

    **FeatherJS framework de Node orientado a crear APIs, aplicaciones en tiempo real y recomendado para React Native (*iOS y Android*)**. Funciona sobre *Express* y *Socket io* para el *Middleware*, haciendo posible su integración con *Angular*, ***Vue o React***. Puede interactuar con cualquier tecnología backend , admite más de una docena de bases de datos y funciona con cualquier tecnología frontend como React, VueJS, Angular, React Native, Android o iOS. permite autentificación JWT, conexión, servicios y operaciones *CRUD*.

* Backend: Feathers es un marco NodeJS y manejará la mayor parte del desarrollo JS backend.

* Frontend: Usaremos Insomnia/Postman. Podemos usar cualquier framework JS frontend como React.js, Angular.js o Vue.js

* Base de datos: NeDB, la especialidad de esta base de datos es almacenar datos en la memoria . También podemos utilizar cualquier base de datos relacional como Postgres, MongoDB y no-SQL como MongoDB.

### Supabase<mark> </mark>

    **Supabase plataforma BaaS** (*Backend as a Service*) alojada en la nube que provee a los desarrolladores una amplia gama de herramientas para crear y gestionar servicios *backend*. Esto permite subcontratar funciones y desarrollar las aplicaciones de manera ágil, sin tener que preocuparse por las tareas relacionadas con el lado del servidor.

   Al estar alojada en la nube, no necesita instalaciones para poder usarla, solo requiere activar una cuenta para comenzar a desarrollar un proyecto.

* **Base de datos relacional Postgre**: utiliza (PostgreSQL), la cual es muy flexible y permite crear aplicaciones en tiempo real ofreciendo, al mismo tiempo, mayor soporte para consultas complejas y de integración de datos.

* **Integraciones**: *ReactJS* - *NextJS* - Flutter -Svelkit - SolidJS - *Vue* - Vercel

### Firebase<mark> </mark>

    **Firebase** plataforma de Google que *utiliza NoSQL*

---

## Bases de datos.

### PostgreSQL<mark> </mark>

    **PostgreSQL** ***sistema de bases de datos* de código abierto**, altamente estable, que proporciona soporte a diferentes funciones de SQL, como claves foráneas, subconsultas, disparadores y diferentes tipos y funciones definidas por el usuario. Además, aumenta el lenguaje SQL ofreciendo varias funciones que escalan y reservan meticulosamente las cargas de trabajo de datos. Se utiliza principalmente para almacenar datos para muchas aplicaciones móviles, web, geoespaciales y de análisis.

### MongoDB<mark> </mark>

    **MongoDB** base de datos **NoSQL** orientada a documentos. No se basa en tablas y columnas. Los datos se almacenan como colecciones y documentos.

### Redis<mark> </mark>

    **Redis** (**RE**mote **DI**ctionary **S**erver) almacén de pares de clave/valor NoSQL en memoria de código abierto que se utiliza principalmente como memoria caché de aplicaciones o base de datos respuesta rápida. Redis ofrece una velocidad, una fiabilidad y un rendimiento incomparables.

    Redis almacena los datos en la memoria principal del servidor, en lugar de en discos duros y unidades de estado sólido.

### Prisma<mark> </mark>

    **PrismaORM** *Object Relational Mapping* de próxima generación con soporte para TypeScript con unas herramientas para facilitarnos la vida. Simplifica el trabajo y la iteración con bases de datos.

---

## Optimizaciones de Backend.

> Unit testing / Documentación con Swagger / Redis-Caching / Seguridad

---