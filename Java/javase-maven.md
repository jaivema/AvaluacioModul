# Java SE: Maven

## Qué es Maven y cómo funciona

    Apache Maven es una herramienta de comprensión y gestión de proyectos de software. Basado en el concepto de modelo de objetos de proyecto (POM) , Maven puede gestionar la construcción, los informes y la documentación de un proyecto desde una pieza de información central.

    Estas herramientas permiten a los desarrolladores especificar las dependencias de su proyecto en un archivo y luego manejar automáticamente el proceso de descarga e instalación de esas dependencias. Esto puede ahorrar mucho tiempo y esfuerzo a los desarrolladores y ayuda a garantizar que todas las dependencias necesarias estén presentes y actualizadas en un proyecto.

>     Maven también se puede utilizar para crear y gestionar proyectos escritos en C#, Ruby, Scala y otros lenguajes. El proyecto Maven está alojado en la **Apache Software Foundation** , donde anteriormente formaba parte del Proyecto Yakarta.

## Repositorio central de Maven

    El repositorio de Maven es un directorio donde se almacenan todas las dependencias, como archivos jar, archivos de biblioteca, complementos u otros artefactos que necesitarán los proyectos. [Reposritorio central de Maven](https://mvnrepository.com/)

    Estos repositorios nos ayudan a almacenar y mantener recursos útiles para que puedan usarse en nuestros proyectos de Maven mientras construimos e implementamos los artefactos.

    Todo el diseño y la estructura de los repositorios subyacentes de maven de cualquier tipo están **completamente ocultos para los usuarios de maven**.

## Ciclo de vida de Maven

    Como **herramienta de automatización de compilación para proyectos Java**, se utiliza para gestionar la construcción, los informes y la documentación de un proyecto. Maven tiene un ciclo de vida definido que describe los pasos necesarios para construir y distribuir un proyecto.

    El **ciclo de vida de Maven** tiene tres fases principales:

* `clean`: Esta fase se utiliza para limpiar cualquier artefacto de compilación anterior.
* `default`: Esta es la fase principal del ciclo de vida, donde se construye, prueba y empaqueta el proyecto.
* `site`: Esta fase se utiliza para generar la documentación del proyecto y la información del sitio.

    Cada fase del ciclo de vida de Maven consta de un conjunto de fases de construcción, que se ejecutan en un orden específico.

    Cada fase de construcción consta de un conjunto de objetivos de construcción, que son las tareas específicas que se ejecutan para lograr los objetivos de la fase. Por ejemplo, la fase de compilación tiene un objetivo de compilación llamado compilador: compilar que es responsable de compilar el código fuente del proyecto.

* `validate`: Validar la configuración y las dependencias del proyecto.
* `compile`: compila el código fuente del proyecto.
* `test`: Ejecute las pruebas del proyecto.
* `package`: empaquete el código compilado en un formato distribuible (por ejemplo, un archivo JAR).
* `install`: instale el código empaquetado en el repositorio local.
* `deploy`: implemente el código empaquetado en un repositorio remoto para que otros lo utilicen.

    Siguiendo el **ciclo de vida definido de Maven** , los desarrolladores pueden **crear, probar y distribuir fácilmente sus proyectos Java de manera consistente y repetible** .

## Archetype, GroupId, ArtifactId

      Un **arquetipo es una plantilla para un proyecto** . Proporciona una **estructura y archivos** predefinidos para un proyecto, de modo que no tenga que crearlos manualmente.

    GroupId y ArtifactId son dos elementos importantes de un proyecto Maven.

* El **GroupId** es un identificador único para un proyecto y normalmente se utiliza para agrupar proyectos relacionados.
* El **ArtifactId** es el identificador único de un proyecto específico y se utiliza para identificar el proyecto dentro del grupo.

Juntos, groupId y artifactId ayudan a identificar de forma única un proyecto dentro del ecosistema Maven.

```java
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.2</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.18.32</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>
```

## Dependencias, complemento y biblioteca

    En los proyectos **Maven** , los términos "complemento", "dependencia" y "biblioteca" (*“plugin,” “dependency,” and “library”*) se refieren a diferentes conceptos relacionados con **la configuración del proyecto, los procesos de compilación y las dependencias externas** (project configuration, build processes, and external dependencies).

#### Plug-in

* Un complemento (*plugin*) de Maven es un conjunto de objetivos (tareas) y configuraciones que se pueden ejecutar dentro del ciclo de vida de compilación de Maven.

* Los complementos (*plugin*s) amplían o modifican el comportamiento del proceso de compilación de Maven. Pueden realizar tareas como compilar código, empaquetar artefactos, ejecutar pruebas, generar documentación y más.

* Los complementos se especifican en elsección de la ficha del proyecto `pom.xml`. Son responsables de ejecutar varias tareas relacionadas con la construcción durante diferentes fases del ciclo de vida de la construcción.

```java
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
            <configuration>
                <!-- Plugin configuration options go here -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### Dependency

* Una dependencia de Maven es una biblioteca o módulo externo en el que se basa su proyecto.
* Las dependencias se especifican en elsección de la ficha del proyecto `pom.xml`. Maven descargará y administrará automáticamente estas dependencias desde un repositorio central durante el proceso de compilación.
* Las dependencias pueden incluir bibliotecas, marcos y otros artefactos que su proyecto necesita para compilar, ejecutar o probar.

```java
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>example-library</artifactId>
        <version>1.0.0</version>
    </dependency>
</dependencies>
```

#### Library

* En el contexto de Maven, una biblioteca es una colección de código y recursos precompilados que proporcionan una funcionalidad específica.
* Las bibliotecas normalmente se empaquetan como archivos JAR (Java Archive) y se distribuyen a través de repositorios de Maven.
* Cuando declaras una dependencia de una biblioteca en tu proyecto `pom.xml`, Maven descargará e incluirá los archivos JAR necesarios durante el proceso de compilación.

## JDK, SKD y nivel de idioma

* **SDK (Software Development Kit)** es un término más amplio que abarca herramientas y bibliotecas para el desarrollo de software.

* **JDK (Java Development Kit)** se refiere específicamente al SDK de Java, que proporciona herramientas y recursos para el desarrollo de Java, incluido **Java Runtime Environment (JRE)** , compilador y bibliotecas.

    SDK (Software Development Kit) representa la versión de Java utilizada para la compilación y ejecución, determinando las bibliotecas y funciones disponibles. El **nivel de idioma** , por otro lado, especifica las características del idioma y el nivel de sintaxis dentro de ese SDK.

    Si bien el SDK establece la compatibilidad general, el nivel de idioma refina la configuración específica del idioma.

>     Por ejemplo, usar JDK 11 como SDK con nivel de lenguaje 8 significa aprovechar las capacidades de JDK 11 y al mismo tiempo restringir las características del lenguaje a aquellas compatibles con la sintaxis de Java 8.

    La alineación adecuada entre el SDK y el nivel de idioma garantiza tanto la compatibilidad de la versión de Java como la disponibilidad de las funciones del idioma.