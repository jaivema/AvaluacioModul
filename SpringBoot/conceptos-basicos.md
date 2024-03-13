# Conceptos básicos de Spring Boot

    Spring Boot es un marco para crear aplicaciones basadas en *Spring Framework*. Su objetivo es simplificar el proceso de desarrollo proporcionando un conjunto de opciones y valores predeterminados preconfigurados, así como un conjunto de herramientas para crear y ejecutar rápidamente una aplicación. Algunos conceptos clave de Spring Boot incluyen:

* **Configuración automática** : Configura automáticamente su aplicación en función de las dependencias que haya agregado, eliminando la necesidad de configuración manual.
* **Iniciadores** : Spring Boot proporciona un conjunto de "iniciadores" que son dependencias preconfiguradas para funciones comunes, como desarrollo web, acceso a datos y seguridad.
* **Actuador** : Incluye un "Actuador" que proporciona puntos finales (*endpoints*) para monitorear y administrar su aplicación, como controles de estado, métricas e información de seguimiento.
* **Interfaz de línea de comandos** : Spring Boot proporciona una interfaz de línea de comandos (CLI) para crear y ejecutar aplicaciones rápidamente.
* **Spring Initializer** : Spring Initializer es un servicio web que proporciona una forma sencilla de generar una estructura básica para una aplicación Spring Boot.

    Todos estos conceptos están diseñados para facilitar la creación y ejecución de una aplicación basada en Spring, con una configuración mínima requerida.

## Fundamentos

    Algunos de los conceptos clave de Spring Boot y su funcionamiento incluyen:

* **Beans** : en Spring, un bean es un objeto Java administrado por el contenedor Spring. Los beans generalmente se definen en archivos de configuración y el contenedor Spring es responsable de crear instancias, configurar y administrar el ciclo de vida de estos beans.
* **Inyección de dependencia** : Spring utiliza la inyección de dependencia para gestionar las dependencias entre beans. Esto significa que en lugar de crear instancias y configurar dependencias manualmente, puede usar anotaciones o archivos de configuración para indicarle al contenedor Spring qué dependencias tiene un bean y cómo se deben crear instancias.
* **Programación orientada a objetos** : Spring se basa en principios de programación orientada a objetos y utiliza interfaces y herencia para crear una base de código modular y reutilizable.
* **Programación orientada a aspectos** : Spring también brinda soporte para la programación orientada a aspectos (*AOP*), que le permite separar preocupaciones transversales como el *registro, la seguridad y la gestión de transacciones de la lógica* empresarial central de su aplicación.
* **Acceso a datos** : Spring Boot proporciona un conjunto de iniciadores y bibliotecas para conectarse a bases de datos y realizar operaciones de acceso a datos. También proporciona soporte para marcos de mapeo relacional de objetos (*ORM*) como Hibernate y *JPA*.
* **Desarrollo web** : Spring Boot proporciona un conjunto de iniciadores y bibliotecas para crear aplicaciones web y servicios web *RESTful*. También proporciona soporte para tecnologías web como *Spring MVC y Thymeleaf*.
* **Anotaciones** : Spring Boot utiliza ampliamente anotaciones para configurar beans y administrar dependencias. Comprender las diferentes anotaciones disponibles en Spring, como `@Bean`, `@Autowired`y `@Component`, puede ayudarle a utilizar el marco de forma eficaz.
* **MVC (Modelo-Vista-Controlador)** : Spring Boot proporciona soporte para el patrón arquitectónico MVC, que separa la aplicación en tres capas: el modelo (datos), la vista (presentación) y el controlador (lógica). Comprender cómo funciona MVC en Spring Boot puede ayudarlo a estructurar su aplicación de manera efectiva.
* **REST (Transferencia de estado representacional)** : Spring Boot brinda soporte para crear servicios web RESTful. Comprender los principios de REST y cómo crear servicios web RESTful utilizando Spring Boot puede ayudarle a utilizar el marco de forma eficaz.

    En general, Spring Boot funciona proporcionando un conjunto de opciones y valores predeterminados preconfigurados, así como un conjunto de herramientas para crear y ejecutar rápidamente una aplicación utilizando Spring Framework.

    Utiliza conceptos como beans, inyección de dependencia y programación orientada a objetos para facilitar la creación y ejecución de una aplicación basada en Spring, con una configuración mínima requerida.