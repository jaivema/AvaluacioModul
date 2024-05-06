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
* **MVC (Modelo-Vista-Controlador)** : Spring Boot proporciona soporte para el patrón arquitectónico MVC, que separa la aplicación en tres capas: el modelo (datos), la vista (presentación) y el controlador (lógica). Comprender cómo funciona MVC en Spring Boot puede ayudarlo a estructurar su aplicación de manera efectiva. Separa la lógica de la aplicación en tres componentes: **Modelo-Vista-Controlador**.
* **REST (Transferencia de estado representacional)** : Spring Boot brinda soporte para crear servicios web RESTful. Comprender los principios de REST y cómo crear servicios web RESTful utilizando Spring Boot puede ayudarle a utilizar el marco de forma eficaz.

    En general, Spring Boot funciona proporcionando un conjunto de opciones y valores predeterminados preconfigurados, así como un conjunto de herramientas para crear y ejecutar rápidamente una aplicación utilizando Spring Framework.

    Utiliza conceptos como beans, inyección de dependencia y programación orientada a objetos para facilitar la creación y ejecución de una aplicación basada en Spring, con una configuración mínima requerida.

# Concepto de anotaciones como estereotipos

    Un estereotipo extiende de @Component. Un @Repository es un estereotipo de @Component, que es usado dentro del marco Spring.

+ `@Component` : Es el padre, del que heredan `service`, `@Repository` y `@Controller`, llamados elementos de estereotipo.

+ `@Repository` : Es el estereotipo que se encarga de dar alta un bean para que implemente el patrón repositorio. Al marcar el bean con esa anotación, Sprinng aporta servicio de conversión de JDBC a JPA.

+ `@Controller` : Es el estereotipo que recibe las peticiones del cliente que realiza las tareas de control y gestión de la comunicación entre el usuario y el aplicativo. Se ubica entre el `View` y el `@Service`.

+ Un bean es un componente o elemento de Spring, fabricado en el core o contexto del contenedor Spring.

+ `@Autowired` : Permite inyectar dependencias con otras dentro del marco de Spring. Desde *Controller* se utiliza un servicio mediante *Autowired* y desde *Service* se utiliza un repositorio mediante el *Autowired*.

# Spring MVC - Características

    **Spring MVC** es un framework construido sobre Java Servlet y mejora el desarrollo de aplicaciones web que se ejecutan en contenedores de servlets como Apache Tomcat y es parte de **Spring Framework Core**.

    Se puede usar para derrollo web para el modelo `solicitud/respuesta síncrono y asíncrono`, servicios `RESTful` y `API REST`.

+ Patrones de diseño **Dispatcher Servlet** (controlador frontal) y **Model View Controller**.

+ Asignaciones de controladores y controladores anotados

+ Manejo y validación de formularios

+ Integración con Spring Security, Servlet Async API y tecnologías de visualización como Thymeleaf, FreeMarker, JSP, STL, PDF, Excel, etc.

## Modelo - `model`

    Representa los datos y la lógica empresarial de la aplicación. Gestiona el estado de la aplicación y la comunicación con otros componentes, como la base de datos o servicios externos.

*Ciclo de solicitud-respuesta de Spring Boot*

![](/home/jaime/Documentos/AvaluacioModul/Spring/SpringBoot/assets/ArquitecturaModel.jpg)

    En Spring Boot se llama *modelo* a una clase Java. Define la estructura de los datos que se pasarán entre las diferentes capas de la aplicación y se suelen anotar como @Entiry o @Data como estereotipo del modelo de datos.

```java
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name= "tbl_personas")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
}
```

    El modelo define qué datos debe contener la aplicación. Si el estado de estos datos cambia, entonces el modelo generalmente notificará a la vista (para que la pantalla pueda cambiar según sea necesario) y, a veces, al controlador (si se necesita una lógica diferente para controlar la vista actualizada).

    Volviendo a nuestra aplicación de listados, el modelo especificaría qué datos deben contener los elementos de la lista (artículo, descripción, precio, etc.) y qué elementos de la lista ya están presentes.

*Flujo del Modelo Vista Controlador*

```mermaid
flowchart TD
    A(MODEL define la estructura) -->  
    |Actualiza los datos de entrada si cambian| C(VISTA Define la visualización UI)

    B(CONTROLLER Contiene la lógica) --> 
    |Actualiza las vistas del cliente| C
    B --> 
    |Manipula los valores dentro de la estructura|A
    C --> 
    |Envia las entradas del usuario| B
```

## Repositorios de Spring Data

    `Spring Data Repositories` proporciona una abstracción genérica de alto nivel para el acceso a datos que permite a los desarrolladores trabajar con datos de diversas fuentes de datos, incluidas bases de datos relacionales, bases de datos NoSQL y otros almacenes de datos, utilizando una API consistente y simplificada.

```java
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;
//@Repository
public interface BookRepository extends CrudRepository <Book, Long> {
    // custom query methods defined here
    Optional<Book> findBookByTitle(String title);
    Optional<Book> deleteBookByTitle(String title);
}
```

    Los repositorios eliminan la necesidad de código repetitivo y permiten a los desarrolladores definir métodos de consulta y consultas dinámicas de una manera sencilla.

    **Spring Data Repositories** también brinda soporte para paginación, clasificación y auditoría, así como integración con otras tecnologías Spring, como **Spring MVC y Spring Security**.

Spring Data Repositories **simplifica** el acceso a los datos y permite el rápido desarrollo de aplicaciones basadas en datos.

### Usando la interfaz del CrudRepository

[CrudRepository](https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html)

    `CrudRepository` es una interfaz proporcionada por Spring Data que define un conjunto estándar de métodos para realizar operaciones *CRUD (Crear, Leer, Actualizar y Eliminar)* en entidades. *La interfaz* proporciona una funcionalidad básica de acceso a datos y se puede ampliar para proporcionar funcionalidad adicional según sea necesario.

En el ejemplo - repositorio de libros:

```java
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;
//@Repository
public interface BookRepository extends CrudRepository <Book, Long> {
    // custom query methods defined here
    Optional<Book> findBookByTitle(String title);
    Optional<Book> deleteBookByTitle(String title);
}
```

    Usamos `@Autowired` para inyectar una instancia de `BookRepository`en nuestra aplicación Spring, el contenedor de inyección de dependencias de Spring creará automáticamente una instancia de una implementación concreta de la interfaz `BookRepository` y la inyectará en el objeto de nuestra aplicación `bookRepository`. Esta implementación suele ser un **objeto proxy** que proporciona la funcionalidad necesaria para el acceso a datos.

Servicio de libros:

```java
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public Iterable<Book> getAllBooks() {
        return bookRepository.findAll();
    }
```

Con este objeto, podemos usar los métodos definidos en la interfaz `CrudRepository` como `save()`, `findOne()`, `findAll()`y `delete()`, para realizar operaciones CRUD en entidades de Libro.

## Métodos CRUD en Spring MVC

    Funciones o procedimientos definidos en los controladores que manejan las solicitudes HTTP y coordinan la lógica de negocio del aplicativo.

`@RequestMapping` : Indica que tipo de método se utilizará e indica el endpoint al controller *("/mostrarMensage")* .

### Anotaciones usadas en el CRUD

| Anotación        | Operación | SQL    | HTTP   |
| ---------------- | --------- | ------ | ------ |
| `@GetMapping`    | Read      | SELECT | GET    |
| `@PostMapping`   | Create    | INSERT | POST   |
| `@PutMapping`    | Update    | UPDATE | PUT    |
| `@DeleteMapping` | Delete    | DELETE | DELETE |

## Spring Data JPA

    Es un starter dentro del ecosistema de proyectos *Spring* que simplifica el acceso a bases de datos y la persistencia en general. No es una implementación de JPA; es una capa de abstracción adicional que trabaja junto a *JPA* y otras tecnologías de <u>persistencia</u>.

    Spring Data propociona repositorios *CRUD* predefinidos y soporte para tecnologías de almacenamiento como JPA, MongoDB y Redis

> Spring Data JPA es un proyecto dentro de Spring Data que se centra en facilitar el uso de **JPA**.

### Especificación JPA

**Java Persistence API** Es desarrolla para la plataforma Java EE.

    Las *especificaciones* de JPA permiten definir entidades, clases, relaciones y en definitiva el comportamiento :

+ Define entidades.

+ Definde relaciones.

+ Define el comportamiento.

>     JPA es una especificación y ORM es la implementación. La entidad `Student` está especificado por JPA y ORM implementa hacia la base de datos. Hibernate es la herramienta para llevar todos los datos a la table.

## Técnica de programación ORM

    **Object-Relational Mapping** es utilizada para el desarrollo de aplicaciones para <u>mapear objetos de lenguaje de programación orientada a objetos a tablas de bases de datos relacionales</u>, que se interactuan utilizando objetos y métodos en lugar de escribiendo consultas.

    Interviene entre una clase y una tabla relacional. Por ejemplo, guardando un `Student class` con su id, nombre, apellido, contacto.

<img src="assets/ORM.png" title="" alt="ORM.png" data-align="center">

Algunas herramientas que ofrecen **implementaciones** de ORM :

+ Hibernate

+ EclipseLink

+ Spring Data JPA

+ MyBatis

+ TopLink

+ Active JDBC

+ Query DSL

+ Cayenne

### Hibernate

        Hibernate Se usa ampliamente en aplicaciones Spring Boot para simplificar el acceso y la administración de la base de datos. Utiliza anotaciones y configuraciones XML para asignar objetos Java a tablas de bases de datos y proporciona varias funciones para simplificar `CRUD`las operaciones (Crear, Leer, Actualizar y Eliminar) en la base de datos.

    Es la herramienta de mapeo objeto-relacionel (ORM), para plataforma Java - también disponible para .Net con el nombre NHibeanate - que facilita el mapeo de atributos entre una base de datos relacional tradicional y el model de objetos de una aplicación; mediante archivos declarativos (XML) o anotaciones (@) en los *beans* de las entidades que lo permitan.

+ Clases

+ Interfaces

+ Anotaciones

+ XML

    **Hibernate y Spring Data JPA** son dos tecnologías relacionadas pero distintas en el ecosistema de Java para trabajar con bases de datos.

+ **Hibernate:** Es un framework de mapeo objeto-relacional (ORM) que facilita el mapeo de objetos Java a tablas de bases de datos relacionales y viceversa. Hibernate simplifica las operaciones de bases de datos al permitir que los desarrolladores interactúen con objetos Java en lugar de escribir consultas SQL directamente. Es potente y flexible, pero puede requerir más configuración y manejo manual.

+ **Spring Data JPA:** Es parte del conjunto de proyectos Spring Data, que proporciona una capa de abstracción adicional sobre Hibernate (o cualquier otra implementación JPA) para simplificar el acceso a datos en aplicaciones Spring. Spring Data JPA permite reducir la cantidad de código necesario para interactuar con una base de datos al proporcionar repositorios CRUD (crear, leer, actualizar, eliminar) predefinidos basados en interfaces, consultas personalizadas mediante el uso de convenciones de nombres y soporte para consultas nativas.

    En resumen, Hibernate es una implementación de JPA que proporciona funcionalidades ORM, mientras que Spring Data JPA simplifica el uso de JPA en aplicaciones Spring al proporcionar una capa de abstracción adicional y facilitar el desarrollo de repositorios de datos. En muchos casos, Spring Data JPA se utiliza junto con Hibernate para aprovechar las ventajas de ambas tecnologías.

---

> **ORM** -> Mapeo relacional de objetos, una técnica de programación para convertir datos entre sistemas de tipos incompatibles en lenguajes de programación orientados a objetos y bases de datos relacionales.
> 
> **DAO** -> Objeto de acceso a datos, un patrón de diseño que proporciona una interfaz abstracta para acceder a datos desde una base de datos u otro mecanismo de almacenamiento persistente.
> 
> **APP** -> Java Persistence API, una especificación para el mapeo relacional de objetos en Java que proporciona una forma estándar de mapear objetos Java a bases de datos relacionales.

# DIP - Principio de Inversión de Dependencia

    Es un principio de diseño de software que establece que los módulos de alto nivel no deben depender de los módulos de bajo nivel, sino que ambos deben depender de abstracciones.

    La anotación `@Repository` sigue este principio al permitir que la capa *DAO* dependa de una interfaz ( por medio de la abstracción) en lugar de depender directamente de una implementación concreta. Esto permite un mantenimiento, pruebas y flexibilidad más fáciles para cambiar la implementación de la capa *DAO*.

## DI - Inyección de Dependencia y repositorio

    Es un patrón de software que describe el conjunto de técnicas destinadas a disminuir el acoplamiento entre los componentes y es uno de los principios SOLID. Implementa *DIP* inyectando dependencias (objetos o interfaces) en una clase en tiempo de ejecución.

    En el caso de la anotación `@Repository`, la dependencia es el objeto *EntityManager*, que se inyecta en la clase *DAO* mediante la anotación `@PersistenceContext`. Esto permite desacoplarlo de la implementación de *EntityManager* y proporciona flexibilidad para usar diferentes implementaciones de *EntityManager*.

> Recursos : [Dependency Inversion Principle](https://www.tutorialsteacher.com/ioc/dependency-inversion-principle)

    La anotación `@Repository` es un ejemplo de un contenedor de IoC porque está administrado por el marco Spring. El marco maneja la creación de instancias y la inyección de dependencias, como *EntityManager*, en las clases *DAO*. En este caso, los módulos de orden superior son la capa de lógica empresarial y los módulos de orden inferior son la capa de acceso a datos. La capa de lógica empresarial depende de la capa de acceso a datos a través de una abstracción y la capa de acceso a datos depende de la implementación de EntityManager mediante inyección por parte del contenedor IoC. Esto permite separar las preocupaciones y facilitar el mantenimiento y las pruebas de cada capa de forma independiente.

## Spring Boot JPA e [I]njección de [D]ependencias

### JPA - Java Persistence API

    És una <mark>especificación</mark> de Java para gestionar, conservar y acceder a datos relacionales (en una base de datos) en aplicaciones Java y una API estándar para ORM (tecnología **de Mapeo relacional de objetos**) y proporciona una forma de asignar objetos Java a bases de datos relacionales.

    En resumido, JPA se utiliza para interactuar con bases de datos, que proporciona una forma cómoda y potente de realizar operaciones *CRUD* con funciones útiles como almacenamiento en caché, carga diferida y gestión automática de transiciones.

*Ciclo de solicitud-respuesta de Spring Boot*

<img title="" src="file:///home/jaime/Documentos/AvaluacioModul/Spring/SpringBoot/assets/jpa_di.svg" alt="jpa_di.svg" width="607" data-align="center">

> Datos de interés y guía
> 
> + [JPA de datos en Spring](https://spring.io/projects/spring-data-jpa)
> + [Accediendo a datos con JPA](https://spring.io/guides/gs/accessing-data-jpa/)

La dependencia de *data-jpa* para el repositorio Maven tiene la siguiente pinta:

```java
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
    <version>3.0.4</version>
</dependency>
```

    Cuando se usa `JPA` en Spring Boot, puede usar la anotación @Entity para definir una clase como una entidad `JPA` y la anotación @Repository para definir una clase del repositorio `JPA`. Esto le permite utilizar el repositorio `JPA` y realizar operaciones CRUD en la tabla de base de datos correspondiente.

### Características

+ Soporte sofisticado para construir repositorios basados ​​en Spring y JPA.
+ Soporte para predicados de Querydsl y, por lo tanto, consultas de tipado seguro de JPA.
+ Auditoría transparente de la clase de dominio.
+ Soporte de paginación, ejecución dinámica de consultas, capacidad de integrar código de acceso a datos personalizado.
+ Validación de consultas anotadas `@Query` en el momento del arranque.
+ Soporte para mapeo de entidades basado en XML
+ Configuración del repositorio basada en JavaConfig introduciendo `@EnableJpaRepositories`.

### Las anotaciones usadas en JPA

+ `@Entity`
  + Especifica que la clase es una entidad y será administrada por EntityManager.
+ `@Table`
  + Especifica el nombre de la tabla de base de datos para la entidad.
+ `@Id`
  + Especifica el campo de clave principal de la entidad.
+ `@GeneratedValue`
  + Especifica cómo se debe generar la clave principal.
+ `@Column`
  + Especifica el nombre de la columna de la base de datos para un campo.
+ `@JoinColumn`
  + Especifica la columna de unión cuando se utiliza una relación.
+ `@OneToMany`
  + Define una relación de uno a muchos entre dos entidades.
+ `@ManyToOne`
  + Define una relación de muchos a uno entre dos entidades.
+ `@ManyToMany`
  + Define una relación de muchos a muchos entre dos entidades.
+ `@JoinTable`
  + Especifica la tabla de unión para una relación de muchos a muchos.
+ `@Embedded`
  + Especifica que el campo debe asignarse como un objeto incrustado.
+ `@Transient`
  + Especifica que el campo no debe persistir en la base de datos.

# Dependencias de un proyecto Spring Boot con Maven

```mermaid
flowchart TD
    A[MAIN] --> A1{SpringBootAplication}
    A1 --> B(SpringEnableAutoConfiguration)
    A1 --> C(ComponentScan)
    A1 --> D(SpringBootConfiguration)
```

**MAIN**

`@SpringBottApplication`

+ `@EnableAutoConfiguration`

+ `@ComponentScan`

+ `@SpringBootConfiguration`

POM.XML -> maven

+ **spring-boot-starter-parent** : Define valores predeterminados como la versión de Java y complementos de Maven para el desarrollo de Java Spring.

+ spring-boot-devtools

+ spring-boot-starter-thymeleaf

+ **spring-boot-dependencies** : Es la infomación de dependencias para Spring Boot, Spring Framework y bibliotecas comunes.

+ **spring-boot-maven-plugin** : Permite la creación del archivo **JAR** para ejecutar la aplicación web Java. Es independiente del servidor Tomcat.

+ **spring-boot-starter-web** : Es el Spring Boot Starter que especifica el grupo de dependencias para desarrollar Java, Spring Web MVC y el servidor Tomcat. extrae las bibliotecas de uso común para el desarrollo de aplicaciones Spring MVC; spring-webmvc, jackson.json, validation-api y tomcat.

+ **spring-boot-starter-data-jpa** incluye las dependencias necesarias para usar Spring Data JPA con las bibliotecas de Hibernate como implementación de JPA.

# Thymeleaf

    Es un motor de plantillas Java del **lado del servidor** que proporciona un <mark>*fontend* en el *backend*</mark> para entornos web e independientes. Es una tecnología que permite obtener un documento con un **modelo (*Model*)** de datos, por lo que permite que HTML se muestre correctamente en navegadores y como prototipos estáticos.

| JavaEE   | SpringBoot |
| -------- | ---------- |
| TagLib   | HTML5      |
| Scriplet | Plantillas |
| JSP      | Thymeleaf  |

### Tipos de expresiones

+ ${…} : Expresiones variables.

+ *{…} : Expresiones de selección.

+ #{…} : expresiones de mensaje (i18n).

+ @... : expresiones de enlace (URL).

+ ~{…} : expresiones de fragmentos.

+ __{...} : usa un elemento dentro de otro