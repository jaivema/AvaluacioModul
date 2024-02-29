## > En busca del entorno perfecto.

Backend

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

# Frontend

> El desarrollo de front-end aborda la parte creativa orientada al uso e interactividad del usuario-web. Estas tecnologías incluyen lenguajes informáticos como **JavaScript, CSS y HTML**. Priorizando el web responsive.
> 
> SEO / Optimización de carga / Desarrollo rápido de código / Contenido personalizable y accesibilidad / AI chatbot

---

### React

    **React.js** biblioteca de JavaScript de código abierto para construir interfaces de usuario. El objetivo es proporcionar una forma más eficiente y elegante de manipular la interfaz de usuario para crear una experiencia de usuario más intuitiva y fluida.

### Next

    **Next.js framework *frontend*** ultra rápido para utilizar JavaScript ligero y de código abierto creado sobre React.js, que permite desarrollar aplicaciones y sitios web muy rápidos y fáciles de usar. Se basa en *Babel* y *NodeJS*, integrándose con ReactJS para desarrollar aplicaciones.

    Con NextJS, el servidor se encarga del proceso de renderizado de cada página, en lugar del navegador del usuario. Como resultado, después de realizar una solicitud, el usuario recibe mucho más rápido una página completamente renderizada.

    NextJS utiliza el **Renderizado del Lado del Servidor (SSR)**, donde se genera el HTML en cada solicitud al servidor, o la Generación de Sitios Estáticos (SSG), donde el HTML se genera durante la compilación.

    Al poder utilizar SSR y SSG indistintamente, **NextJS permite renderizar páginas al momento de su solicitud o al momento de su creación**. Esta flexibilidad ofrece gran rendimiento en la carga de las páginas, al igual que para la obtención de datos.

    Además, NextJS permite acoplar SSG/SSR con el Renderizado del Lado del Cliente (CSR), convirtiéndolo también en una arquitectura de página única (SPA). Esta es una combinación muy potente para hacer que cualquier aplicación web compleja y muy interactiva se ejecute increíblemente rápido.

* Las páginas web estáticas creadas con NextJS no tienen acceso directo a bases de datos  o datos de usuarios, garantizando así la seguridad de los datos.

### Nuxt

    **NuxtJS es el framework Vue** más intuitivo disponible en la actualidad. Combina la potencia de VueJS con las características de **renderizado del lado del servidor** para hacerlo más potente. Puedes construir una aplicación completa de renderizado del lado del cliente de VueJS, una aplicación completa generada estáticamente y una aplicación monolítica. Viene con una arquitectura de desarrollo ***frontend*** preparada para la empresa.

* Páginas generadas estáticamente. Este tipo de sitio web no requiere ninguna fuente de contenido externa: el contenido ya está incrustado en el *HTML*. *Ejemplos de este tipo de sitios web son los sitios web de portafolio, de demostración y de tutoriales*.
  
* Aplicaciones de una sola página (**SPA**). Este enfoque de desarrollo del frontend obtiene el contenido dinámico de una API externa y lo muestra en el lado del cliente. La mayoría de los framewoks de JavaScript, como ***Vue.js, React.js*, Angular y Ember.js, son frameworks de aplicaciones de una sola página.**
  

### Tailwind

    **Taliwind framework CSS** que permite un desarrollo ágil, basado en clases de utilidad que se pueden aplicar con facilidad en el código HTML y unos flujos de desarrollo que permiten optimizar mucho el peso del código CSS.

    Es una potente herramienta para el desarrollo frontend.

Remix

Shade UI

# Despliege - Cloud Computing

> API Gateways / Función Serverless / Paas, Iaas, Faas / Micorservicios para métodos de pago / Message queuing

---

### Open Stack

    **OpenStack infraestructura en la nube para máquinas virtuales**, bare metal y contenedores Openstack controla grandes grupos de recursos informáticos, de almacenamiento y de red, todos administrados a través de API o un panel.

    Más allá de la funcionalidad estándar de infraestructura como servicio, los componentes adicionales brindan orquestación, gestión de fallas y gestión de servicios, entre otros servicios, para garantizar una alta disponibilidad de las aplicaciones de usuario.

### Digital Ocean

    **DigitalOcean plataforma de alojamiento en la nube, servidor cloud**. Aumenta o reduce la capacidad de tu Servidor Cloud cuando quieras.

    Implementación y escalado de aplicaciones. La plataforma es mejor conocida por su estructura de precios flexible y centros de datos globales, así como por un panel de control intuitivo y fácil de usar.

AWS

---

## > La estrategia

---

### La importancia de crear una estrategia.

* Aspiración ganadora.
  * Una gran estrategia es tomar decisiones claras y difíciles.
  * Tener un propósito declarado y conocer mis aspiraciones a largo plazo.
  * Es imposible ganar a menos que te lo propongas *explícitamente*.
  * Motivación. Tu aspiración describe qué o quién pretendes ser en el futuro.
* Dónde.
  * Mantener abiertas mis opciones ya que tomar una decisión fuerza y encadena a situaciones incómodas, de alguna manera *inmoviliza*.
* Cómo lo conseguiré, cuál es mi estrategia.
* Qué capacidades básicas necesito para tal propósito.
  * Sistemas de gestión que se requieren para respaldar y defender mis capacidades.
  * Habilidades y recursos clave importantes como aplicaciones de productos, de marketing o de innovación.
* Qué sistemas de gestión se requieren.
  * Medir la estrategia mediante métricas específicas.
  * Crear, revisar y comunicar.
