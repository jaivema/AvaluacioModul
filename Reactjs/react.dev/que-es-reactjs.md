# **Que és Reactjs**

>     **React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario.** Desarrollada por un tipo que trabajaba en Amazon y entró a trabajar en Facebook se utiliza para construir interfaces de usuario interactivas y de una sola página (Single Page Applications - SPAs). Es especialmente popular para la creación de aplicaciones web complejas y dinámicas.
> 
>     El objetivo es proporcionar una forma más eficiente y elegante de manipular la interfaz de usuario para crear una experiencia de usuario más intuitiva y fluida.Una página muy interesante -> [¿Qué es React?](https://www.reactjs.wiki/que-es-react)Una página muy interesante -> [¿Qué es React?](https://www.reactjs.wiki/que-es-react)

#### Crear un rpoyecto de React - [Instalación](instalacion.md).

    React no se considera un framework (marco de trabajo), sino **una biblioteca de JavaScript para representar interfaces de usuario (UI)** y se considera el `view`del patrón `MVC`. La interfaz de usuario se construye a partir de unidades pequeñas como botones, texto e imágenes. React te permite combinarlos en componentes encajables y reutilizables.

    Desde sitios web hasta aplicaciones telefónicas, todo lo que aparece en la pantalla se puede dividir en componentes. 

*-Las características principales de ReactJS incluyen:*

- *<mark>Componentización</mark>*: ReactJS permite dividir la interfaz de usuario en componentes reutilizables y modulares, lo que facilita el desarrollo, mantenimiento y reutilización del código. 
  
  > [Componentes de Reactjs](Componentes de React.md).

- *<mark>Virtual DOM (Document Object Model)</mark>*: ReactJS utiliza un DOM virtual para representar los cambios en la interfaz de usuario, lo que permite actualizar eficientemente solo los componentes necesarios en lugar de volver a renderizar toda la página, lo que mejora el rendimiento.
  
  > [Renderizar DOM virtual](Renderizar DOM virtual.md).

- *<mark>JSX (JavaScript XML)</mark>*: JSX es una extensión de JavaScript que permite escribir HTML dentro del código JavaScript. Esto facilita la creación de componentes React y mejora la legibilidad del código.

- *<mark>Unidireccionalidad de datos (One-way data binding)</mark>*: ReactJS sigue el principio de unidireccionalidad de datos, lo que significa que los datos fluyen en una sola dirección, desde los componentes principales hacia los secundarios. Esto simplifica el seguimiento de los cambios y reduce la posibilidad de errores.

- *<mark>Reactividad</mark>*: ReactJS actualiza automáticamente la interfaz de usuario en función de los cambios en los datos, lo que significa que los desarrolladores no necesitan preocuparse por manipular el DOM directamente.

- *<mark>Ecosistema robusto</mark>*: ReactJS cuenta con una amplia comunidad de desarrolladores y una gran cantidad de bibliotecas y herramientas complementarias, como React Router para el enrutamiento, Redux para la gestión del estado, y muchas otras.

    En resumen, ReactJS es una biblioteca poderosa y flexible que facilita el desarrollo de interfaces de usuario interactivas y eficientes para aplicaciones web modernas.

- Ejemplo de componente de listado a partir de unos datos JSON:

```javascript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map((person, i) =>
    <li>{i++} {person}</li>
  );
  return <ul>{listItems}</ul>;
}
```

- Otro ejemplo:

```javascript
import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}
```

*-Otras características a reseñar en React son:*

- <mark>*State*</mark>: Los componentes de React tienen un objeto de estado incorporado que almacena los datos locales de un componente. El estado de un componente se puede actualizar en respuesta a acciones del usuario u otros eventos, y el estado actualizado se reflejará automáticamente en la interfaz de usuario.
  
      El estado es un objeto que contiene información que puede cambiar durante la vida útil del componente. Lo que significa que es solo la instantánea actual de los datos almacenados en los accesorios de un componente. Los datos pueden cambiar con el tiempo, por lo que se necesitan técnicas para gestionar la forma en que cambian los datos para garantizar que el componente tenga el aspecto que los ingenieros desean, en el momento justo; esto se denomina gestión de estado.
  
  - La adición de estados debe realizarse a través de contenedores de estado, como Redux y MobX, o un componente contenedor/envoltorio. Redux es un sistema de gestión de estado popular para otros marcos reactivos. Implementa una máquina de estado centralizada impulsada por acciones.
  
  >     **Introducción a [Redux y reducer](Redux y reducer.md).**
* <mark>*Props*</mark>: Los componentes pueden recibir datos de sus componentes principales a través de accesorios, que son esencialmente parámetros de entrada que permiten personalizar y reutilizar los componentes y hacen referencia a los datos internos de un componente. Se escriben dentro de las llamadas de componentes y se pasan a los componentes.
  
  * Los accesorios (props) se pueden utilizar para pasar datos, funciones o cualquier otro tipo de información a un componente secundario. También utilizan la misma sintaxis que los atributos HTML, por `ejemplo_ prop="valor"`. En primer lugar, determinamos el valor de un accesorio y lo utilizamos como parte del plano antes de construir el componente. En segundo lugar, el valor de un accesorio nunca cambiará, es decir, los accesorios son de solo lectura una vez que se pasan a los componentes. La forma de acceder a un accesorio es haciendo referencia a él a través de la propiedad `this.props` a la que todos los componentes tienen acceso.
- <mark>*Routing*</mark>: `react-router-dom` es una biblioteca popular que proporciona capacidades de enrutamiento a aplicaciones React. Permite a los desarrolladores definir las diferentes rutas de la aplicación y asignar cada ruta a un componente específico. Esto hace posible crear una aplicación de una sola página con múltiples páginas y vistas, sin recargar la página.
  
  >     **Mas sobre la dependencia [React Router](https://reactrouter.com/en/main).**

#### React Hooks

    Los Hooks son una nueva característica introducida en [React 16.8](https://legacy.reactjs.org/docs/hooks-intro.html) que permite a los desarrolladores usar el estado y otras características de React sin escribir una clase.. Están diseñados para facilitar la reutilización de la lógica con estado entre componentes y para gestionar mejor los efectos secundarios en los componentes funcionales.

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

    En este ejemplo, el hook `useState` se utiliza para agregar estado al componente de ejemplo. La función `useState` devuelve un par de valores: el estado actual y una función que se puede utilizar para actualizar el estado. El estado actual se almacena en la variable `count` y la función para actualizar el estado se almacena en la variable `setCount`.

    Usar hooks es una herramienta poderosa y flexible que puede ayudar a    El DOM virtual VDOMes una representación ligera en memoria del DOM real, con una estructura en forma de árbol y una jerarquía de objetos de nodo que corresponde a la estructura del DOM. <mark>Simplificar y mejorar la forma en que escribe componentes de React</mark>. Permite usar el estado y otras características de React sin la sobrecarga de los componentes basados ​​en clases y facilitan la reutilización de la lógica con estado entre componentes, por ejemplo, para combinar *HTML, CSS, lógica de negocios, modelo y código de navegación* de un componente en una unidad única y cohesiva.

```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function ExampleComponent(props) {
  const { data } = props;
  const [count, setCount] = useState(0);

  return (
    <div className="example-component">
      <h1>Example Component</h1>
      <p>{data.description}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ExampleComponent;
```

#### Importación y exportación de componentes.

* [Definir la exportación de un componente.](Definir la exportacion.md)

    Se puede *exportar* un componente a su propio archivo y luego *importar* ese componente desde otro archivo. Este modo hace mas fácil navegar por archivos grandes.

    La magia de los componentes reside en su reutilización: puedes crear componentes que estén compuestos de otros componentes. Pero a medida que anida más y más componentes, a menudo tiene sentido empezar a dividirlos en diferentes archivos. Esto permite mantener sus archivos fáciles de escanear y reutilizar componentes en más lugares.

***Gallery.js***

```javascript
import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```

***Profile.js***

```javascript
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}
```

**Amazing scientists**

![Alan L. Hart](https://i.imgur.com/QIrZWGIs.jpg)![Alan L. Hart](https://i.imgur.com/QIrZWGIs.jpg)![Alan L. Hart](https://i.imgur.com/QIrZWGIs.jpg)

1. <mark>**Cree**</mark> un nuevo archivo JS para colocar los componentes.
2. **<mark>Exporte</mark>** su componente de función desde ese archivo (usando exportaciones [predeterminadas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_the_default_export) o [con nombre](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/export#using_named_exports) ).
3. **<mark>Importarlo</mark>** en el archivo donde usará el componente (usando la técnica correspondiente para importar exportaciones [predeterminadas](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#importing_defaults) o [con nombre](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import#import_a_single_export_from_a_module) ).