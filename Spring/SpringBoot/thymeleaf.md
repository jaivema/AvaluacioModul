# Thymeleaf

![ArquitecturaView.svg](/home/jaime/Documentos/AvaluacioModul/Spring/SpringBoot/assets/ArquitecturaView.svg)

    **Thymeleaf** utiliza atributos HTML para agregar funcionalidad y comportamiento dinámico a las páginas web, lo que permite **la representación del lado del servidor y el procesamiento de plantillas.**

```
<p th:text="'Thymeleaf will display this'">text</p>
```

Aquí `Thymeleaf` **procesará el texto dentro del atributo th:text** y reemplazará el contenido de la `<p>`etiqueta con él.

`Thymeleaf`funciona **reemplazando el contenido de las etiquetas** en las que están definidos sus atributos. entonces la salida final en el navegador será:

```
<p>Thymeleaf will display this</p>
```

    Observe que los atributos especiales ya no están, así como el texto "texto" que ahora se reemplaza con el contenido del atributo Thymeleaf.

Un ejemplo más complicado:

```
<tr th:each="prod : ${prods}">
    <td th:text="${prod.name}">Onions</td>
    <td th:text="${prod.price}">2.41</td>
<tr>
```

    Aquí Thymeleaf repetirá `<tr>`con la lista de productos, esto está definido por el atributo th:each, también eliminará el contenido ficticio en ambas `<td>`etiquetas y los reemplazará con el contenido que se evalúa desde `th:text="${prod.name}"`y `th:text="${prod.price}"`.

## Configuración

    Para usar thymeleaf en un proyecto, necesitamos agregar el siguiente iniciador a la dependencia:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

    El motor de arranque se `pring-boot-starter-thymeleaf`agrega al proyecto gracias al **mecanismo de configuración automática** . Los valores predeterminados incluyen:

+ `HTML`Las plantillas deben estar en el `resources/templates`directorio (este es el llamado `root`)
+ los archivos deben tener la `html`extensión (así no tendremos que duplicar esta información en el código)
+ `viewResolver`tiene una implementación adecuada ( `thymeleafViewResolver`)

## Controller y View

    @Controller retornará un objeto String que aparecerá como un HTML con el mensaje correspondiente a la URL privada `http://localhost:8080/`.

    Thymeleaf permite definir plantilla de vista como HTML.

    Para poder utilizar las funcionalidades necesitamos agregar el enlace al documento HTML.

```
<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
    <body>
        <p th:text="#{hi.msg}"></p
    </body>
</html>
```

    **Thymeleaf**, de forma predeterminada, permite definir mensajes un archivo `messages.properties`, que de forma predeterminada debe ubicarse directamente en **el directorio de recursos**. En este archivo almacenamos las claves y los valores correspondientes. En la plantilla HTML, nos referimos a la clave usando el `#` o `$` para evaluar el valor y printarlo en pantalla. En el atributo de la etiqueta se debe reemplazar con el prefijo `th:`. Este atributo `text` puede contener un texto. En el ejemplo, el valor dentro de las las llaves `#{hi.msg}` = ¡Hola!. Según el atributo utilizado de la etiqueta HTML.

> `<p th:text="#{hi.msg}"></p>`

Con clave `$` evalua el valor, a diferencia con `#` que accede directamente a los mensajes del `properties` por lo que `myCustomAttributeName` debe contener un valor dentro del contexto del modelo que estás pasando a la plantilla. De lo contrario, no se mostrará nada dentro del elemento `<p>`.

> `<p th:text="${myCustomAttributeName}"></p>`

    Para mensajes totalmente independientes que estén en otro archivo como por ejemplo `myMessages.properties` puedes especificarlo en tu archivo `application.properties` usando la propiedad `spring.messages.basename`, de esta manera : `spring.messages.basename=myMessages`.

## Configuración de idiomas

    En `application.properties`, debemos definir `locale` 

> springboot.mvc.locale='en'

    Podríamos agregar otro idioma creando un nuevo archivo llamado `messages_fr.properties`( `messages_cat.properties`, `messages_es.properties`) en el mismo directorio.

+ [recursos (ejemplos)](https://github.com/AlbertProfe/CifoJava2023/tree/master/controllerView/src/main/resources)

Este enfoque también permite implementar la **internacionalización** mediante los llamados **interceptores** :

```
@Bean
public LocaleResolver localeResolver() {
    SessionLocaleResolver resolver = new SessionLocaleResolver();
    resolver.setDefaultLocale(Locale.ENGLISH);
    return resolver;
}

@Bean
public LocaleChangeInterceptor localeChangeInterceptor() {
    LocaleChangeInterceptor interceptor = new LocaleChangeInterceptor();
    interceptor.setParamName("lang");
    return interceptor;
}

@Override
public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(localeChangeInterceptor());
}
```

## El motor templates

    La mayoría de los atributos de Thymeleaf **permiten que sus valores se establezcan como expresiones o que las contengan**, a las que llamaremos expresiones estándar debido a los dialectos en los que se utilizan. Estas pueden ser de seis tipos:

+ ${…} : Expresiones variables.
+ *{…} : Expresiones de selección.
+ #{…} : expresiones de mensaje (i18n).
+ @... : expresiones de enlace (URL).
+ ~{…} : expresiones de fragmentos.
+ __{...} : usa un elemento dentro de otro

Atributos`th:`

Estos atributos de Thyemleaf pueden ser de cinco tipos:

+ mensaje:`<p th:text="#{msg.welcome}">Welcome everyone!</p>`
+ lista:`<li th:each="book : ${books}" th:text="${book.title}">En las Orillas del Sar</li>`
+ enlace:`<form th:action="@{/createOrder}">`
+ acción:`<input type="button" th:value**="#{form.submit}" />`
+ camino:`<a th:href="@{/admin/users}">`

## Los Template Fragments

    [[Thymeleaf Views: fragments](https://education.launchcode.org/java-web-development/chapters/thymeleaf-views/template-fragments.html)](https://education.launchcode.org/java-web-development/chapters/thymeleaf-views/template-fragments.html)

    Un fragmento en Thymeleaf es una **parte reutilizable de una página web que se puede incluir en varias páginas**. Puede contener marcado HTML, expresiones de Thymeleaf y otras características de Thymeleaf.

Los *fragmentos* se definen mediante `Thymeleaf`el uso del `th:fragment`atributo, que se agrega a cualquier elemento HTML.

El valor del atributo es el nombre del *fragmento*. Por ejemplo:

```
<div th:fragment="header">
   <h1>Welcome to my website!</h1>
</div>
```

Esto define un *framento* llamado "header" que contiene un elemento de encabezado. Este fragmento luego se puede incluir en otras páginas usando los atributos `th:replace`o `th:include`.

Por ejemplo:

```
<html>
   <body>
      <div th:replace="fragments/header :: header"></div>
      <p>This is the content of my page.</p>
   </body>
</html>
```

    Este código incluye el fragmento del encbezado(header) en la página utilizando el atributo `th:replace`. La sintaxis `::` se utiliza para especificar el nombre del fragmento y el prefijo `fragments/header` especifica la ubicación del archivo del *fragmento*.

# Dialect Layout

    El Layout Dialect de Thymeleaf es una extensión que proporciona funcionalidades para la gestión de plantillas y la definición de diseños en una aplicación web. Permite crear plantillas reutilizables y definir la estructura básica de las páginas web en una aplicación de forma modular.

Algunas de las características principales del Thymeleaf Layout Dialect incluyen:

- **Plantillas reutilizables**: Permite definir plantillas base que encapsulan la estructura común de las páginas web, como encabezados, pies de página, barras laterales, etc., y luego incluir contenido específico dentro de estas plantillas.

- **Definición de bloques de contenido**: Permite definir bloques de contenido en las plantillas base que pueden ser reemplazados por contenido específico en páginas individuales.

- **Inserción de fragmentos de HTML**: Permite insertar fragmentos de HTML dentro de las plantillas base, lo que facilita la reutilización de código HTML común en múltiples páginas.

- **Configuración flexible**: Ofrece opciones de configuración para adaptarse a diferentes requerimientos y convenciones de nombres.

- **Integración con Thymeleaf**: Se integra fácilmente con el motor de plantillas Thymeleaf y se utiliza junto con las funcionalidades estándar de Thymeleaf.

    En resumen, el Thymeleaf Layout Dialect es una herramienta útil para la gestión de plantillas y la definición de diseños en aplicaciones web desarrolladas con Thymeleaf, lo que ayuda a mantener la consistencia y la modularidad en el código HTML de la aplicación.

    Para usar `Layout Dialect`, debe agregar la dependencia del dialecto (para *Maven*):

```
<dependency>
   <groupId>nz.net.ultraq.thymeleaf</groupId>
   <artifactId>thymeleaf-layout-dialect</artifactId>
   <version>2.5.1</version>
</dependency>
```

    Una vez que haya agregado la dependencia, puede usar `Layout Dialect` en las plantillas de Thymeleaf. A continuación se muestra un ejemplo de cómo definir un diseño de Layout:

```
<!DOCTYPE html>
<html>
   <head>
      <title>My Website</title>
   </head>
   <body>
      <header th:replace="fragments/header :: header"></header>
      <div layout:fragment="content"></div>
      <footer th:replace="fragments/footer :: footer"></footer>
   </body>
</html>
```

    Esta plantilla define un diseño que incluye un encabezado y un pie de página. El atributo `layout:fragment` se utiliza para definir una **sección** donde se incluirá el contenido de cada página.

    Para usar `layout` en una página, puede crear una nueva plantilla que incluya `layout:` y defina el contenido:

```
<!DOCTYPE html>
<html xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout">
   <head>
      <title>My Page</title>
   </head>
   <body>
      <div layout:decorator="layout/template">
         <div layout:fragment="content">
            <p>This is the content of my page.</p>
         </div>
      </div>
   </body>
</html>
```

    Esta página incluye atributo `layout:decorator` en la ruta de la plantilla de diseño. El contenido de la página se define dentro del `layout:fragment`.
