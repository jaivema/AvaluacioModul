# Almacenamiento local en react

## TABLA DE CONTENIDO

+ [Almacenamiento local en JavaScript](https://www.robinwieruch.de/local-storage-react/#local-storage-in-javascript)
+ [Almacenamiento local en reaccionar](https://www.robinwieruch.de/local-storage-react/#local-storage-in-react)
+ [Reaccionar gancho de almacenamiento local](https://www.robinwieruch.de/local-storage-react/#react-local-storage-hook)
+ [Almacenamiento de sesiones en React](https://www.robinwieruch.de/local-storage-react/#session-storage-in-react)
+ [Cómo almacenar en caché datos en React](https://www.robinwieruch.de/local-storage-react/#how-to-cache-data-in-react)

## ALMACENAMIENTO LOCAL EN JAVASCRIPT

> https://www.robinwieruch.de/local-storage-react/

El almacenamiento local es compatible con los navegadores modernos. Puedes comprobar la [compatibilidad del navegador](https://caniuse.com/?search=localstorage) y leer aún más al respecto en [la documentación oficial](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) .

¿Cómo utilizar el almacenamiento local en JavaScript? En su JavaScript del lado del cliente, ejecutándose en el navegador y, por lo tanto, teniendo acceso a la API del navegador, debe tener acceso a la `localStorage`instancia que tiene métodos setter y getter para escribir y leer datos hacia y desde el almacenamiento local:

```js
const textForStorage = 'Hello World.'

// setter
localStorage.setItem('my-key', textForStorage);

// getter
const textFromStorage = localStorage.getItem('my-key');
```

Ambos métodos requieren que pase una cadena (aquí: `'my-key'`) que identifica el valor almacenado en el almacenamiento local. Con esta clave, puede configurar u obtener un artículo hacia o desde el almacenamiento local. En otras palabras, mientras que el primer parámetro es la clave para escribir/leer los datos, el segundo parámetro (al almacenar los datos) son los datos reales.

También existen métodos en el almacenamiento local para eliminar elementos individuales y borrar todos los elementos:

```js
// remove
localStorage.removeItem('my-key');

// remove all
localStorage.clear();
```

Los datos en el almacenamiento local persisten durante las sesiones del navegador, lo que significa que incluso cerrar y abrir el navegador mantiene vivos estos datos.

Lo importante a tener en cuenta es que los datos almacenados en el almacenamiento local deben estar en formato de cadena JavaScript. Por ejemplo, si desea escribir y leer un objeto hacia y desde el almacenamiento local, necesitará usar la API JSON para transformarlo ( `JSON.stringify()`) de objeto JavaScript a cadena JavaScript (para escribir) y transformarlo ( `JSON.parse()`) nuevamente desde Cadena de JavaScript a objeto de JavaScript (para leer):

```js
const person = { firstName: 'Robin', lastName: 'Wieruch' };

localStorage.setItem('user', JSON.stringify(person));

const stringifiedPerson = localStorage.getItem('user');
const personAsObjectAgain = JSON.parse(stringifiedPerson);
```

Tener una tienda persistente en el lado del cliente permite a los desarrolladores desbloquear mucha UX para los usuarios de sus aplicaciones. Por ejemplo, se podrían almacenar las preferencias del usuario, como el modo claro/oscuro y la configuración de idioma, de modo que el usuario mantenga esta configuración de forma semipersistente en el navegador sin tener que lidiar con una API de backend y su base de datos.

## ALMACENAMIENTO LOCAL EN REACT

> https://www.robinwieruch.de/local-storage-react/#local-storage-in-react

A continuación centraremos nuestra atención en el uso del almacenamiento local en React. En el ejemplo, tenemos un [componente de función React](https://www.robinwieruch.de/react-function-component/) que utiliza [useState Hook de React](https://www.robinwieruch.de/react-usestate-hook/) para administrar el [estado](https://www.robinwieruch.de/react-state/) de una primitiva booleana de JavaScript. Este booleano se alterna con un elemento HTML de botón y un [controlador de eventos de React](https://www.robinwieruch.de/react-event-handler/) . Con la ayuda de este booleano, renderizamos texto [condicionalmente :](https://www.robinwieruch.de/conditional-rendering-react/)

```js
import * as React from 'react';

const App = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;
```

|Toggle|

---

Puede activar y desactivar el contenido haciendo clic en el botón. Sin embargo, si actualiza el navegador (o lo cierra y lo abre nuevamente), comenzará con `false`el estado inicial, porque useState Hook de React lo está implementando de esta manera. Entonces, ¿qué pasa con el uso del almacenamiento local como caché entre sesiones del navegador? Una solución podría ser similar a la siguiente:

```js
const App = () => {
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem('is-open')) || false
  );

  const handleToggle = () => {
    localStorage.setItem('is-open', JSON.stringify(!isOpen));

    setOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;
```

|Toggle|

'Content'

> Para acceder desde la consola en la herramienta de desarrollador del navegador.

```
localStorage.getItem('is-open')
//true
```

---

En dos lugares establecimos métodos de lectura y escritura del almacenamiento local. Mientras almacenamos el nuevo estado booleano como valor encadenado en el almacenamiento local en el controlador de eventos de React, leemos el valor analizado de cadena a booleano del almacenamiento local para el estado inicial utilizado en useState Hook de React. Si no hay ningún valor en el almacenamiento local, utilizamos de forma predeterminada `false`el estado inicial.

La solución propuesta funciona si hay almacenamiento local disponible en su navegador. Intente cambiar el estado abierto a `true`o `false`y actualice el navegador. El estado debe permanecer intacto, porque se almacena con cada interacción del usuario y se recupera para el estado inicial cuando se renderiza el componente por primera vez y, por lo tanto, se inicializan sus enlaces.

Sin embargo, la solución propuesta no es una mejor práctica para lidiar con este tipo de situaciones (llamadas efectos secundarios) en React. Por ejemplo, ¿qué pasa si la `setOpen`función de actualización de estado se llama en otro lugar? Romperíamos la funcionalidad, porque es posible que no podamos implementar la escritura en el almacenamiento local allí también. Podríamos mejorar la implementación configurando reactivamente el `isOpen`estado en el almacenamiento local cada vez que cambie usando [el gancho useEffect de React](https://www.robinwieruch.de/react-useeffect-hook/) :

```js
import * as React from 'react';

const App = () => {
  const [isOpen, setOpen] = React.useState(
    JSON.parse(localStorage.getItem('is-open')) || false
  );

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  React.useEffect(() => {
    localStorage.setItem('is-open', JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;
```

Ahora, cada vez que `isOpen`se cambie, el gancho para el efecto secundario se ejecutará y hará su trabajo (aquí: guardarlo en el almacenamiento local).

## REACT GANCHO DE ALMACENAMIENTO LOCAL

> https://www.robinwieruch.de/local-storage-react/#react-local-storage-hook

Por último, pero no menos importante, puede extraer la funcionalidad como [un gancho de React personalizado](https://www.robinwieruch.de/react-custom-hook/) y reutilizable que sincroniza el almacenamiento local con el estado de React:

```js
import * as React from 'react';

const useLocalStorage = (storageKey, fallbackState) => {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

const App = () => {
  const [isOpen, setOpen] = useLocalStorage('is-open', false);

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default App;
```

Al extraer la función como un gancho reutilizable, puede usarla en más de un componente de React. Cada componente solo necesita usar un único `storageKey`para no colisionar con los almacenamientos de otros componentes.

De todos modos, aunque este gancho personalizado le muestra la idea de cómo funciona, debe confiar en una variante de código abierto para su aplicación de producción React. Lea en este [artículo](https://www.robinwieruch.de/react-uselocalstorage-hook/) qué gancho de almacenamiento local prefiero usar en mis proyectos.

## ALMACENAMIENTO DE SESIONES EN REACT

> https://www.robinwieruch.de/local-storage-react/#session-storage-in-react

A veces desea almacenar en caché/persistir datos **solo en la sesión actual de su navegador** . Al cerrar el navegador, desea que el caché vuelva a quedar vacío, pero cuando actualiza la pestaña del navegador, desea mantener el caché intacto.

Por ejemplo, cuando se maneja [la autenticación en React](https://www.robinwieruch.de/react-router-authentication/) , la sesión del usuario se puede guardar en el almacenamiento de la sesión hasta que se cierre el navegador. Por lo tanto, deberías utilizar el almacenamiento de sesión del navegador en lugar del almacenamiento local:

```js
const textForStorage = 'Hello World.'

// setter
sessionStorage.setItem('my-key', textForStorage);

// getter
const textFromStorage = sessionStorage.getItem('my-key');
```

Como puede ver, el [almacenamiento de sesión](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) se usa de la misma manera que el almacenamiento local, solo que se comporta de manera diferente al no conservar el almacenamiento en las sesiones del navegador.

## CÓMO ALMACENAR EN CACHÉ DATOS EN REACT

> https://www.robinwieruch.de/local-storage-react/#how-to-cache-data-in-react

Llevemos el uso del almacenamiento local en React un paso más allá usándolo como caché para datos remotos que persisten durante las sesiones del navegador. Por lo tanto, en el siguiente ejemplo, obtendrá datos de una [API](https://www.robinwieruch.de/what-is-an-api-javascript/) remota y los almacenará en el estado de su componente React.

*Continuar leyendo: [Cómo recuperar datos en React](https://www.robinwieruch.de/react-hooks-fetch-data/)*

Comenzaremos con un componente que recupera datos de una [API popular](https://hn.algolia.com/) :

```js
import * as React from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const INITIAL_QUERY = 'react';

const App = () => {
  const [data, setData] = React.useState({ hits: [] });
  const [query, setQuery] = React.useState(INITIAL_QUERY);
  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${INITIAL_QUERY}`
  );

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setData({ hits: result.data.hits });
    };

    fetchData();
  }, [url]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() => setUrl(`${API_ENDPOINT}${query}`)}
      >
        Search
      </button>

      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
```

A continuación, también almacenará los datos en el almacenamiento local. Al utilizar los aprendizajes anteriores sobre cómo usar el almacenamiento local en React, podemos almacenar el resultado con un par clave/valor en la tienda del navegador, mientras que la clave es la URL del punto final de la API y el valor es el resultado real:

```js
const App = () => {
  ...

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      localStorage.setItem(url, JSON.stringify(result));

      setData({ hits: result.data.hits });
    };

    fetchData();
  }, [url]);

  return (
    ...
  );
};
```

El último paso nos permite utilizar el almacenamiento local como caché cada vez que el usuario realiza una solicitud de búsqueda a la API. Si busca una palabra clave y el resultado de esta palabra clave ya se ha guardado (léase: almacenado en caché) en el almacenamiento local, leeremos desde el almacenamiento local en lugar de ejecutar otra llamada API. Si no hay ningún resultado en el almacenamiento local, haremos la solicitud API habitual:

```js
const App = () => {
  ...

  React.useEffect(() => {
    const fetchData = async () => {
      const cachedResult = JSON.parse(localStorage.getItem(url));

      let result;

      if (cachedResult) {
        result = cachedResult;
      } else {
        result = await axios(url);
        localStorage.setItem(url, JSON.stringify(result));
      }

      setData({ hits: result.data.hits });
    };

    fetchData();
  }, [url]);

  return (
    ...
  );
};
```

Con esta implementación implementada, no debería realizarse una solicitud de API dos veces para la misma consulta, porque el resultado debe almacenarse en caché en el almacenamiento local. Si hay un `cachedResult`en la `localStorage`instancia, el resultado almacenado en caché se establece como estado y no se realiza ninguna solicitud de API. Sin embargo, tenga esto en cuenta como ejercicio de aprendizaje, porque en las bibliotecas modernas de recuperación de datos de React, como [React Query,](https://www.robinwieruch.de/react-libraries/) se encargan de dichos mecanismos de almacenamiento en caché por usted.
