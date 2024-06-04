# Mostrar u ocultar otro componente al hacer clic en React.

> [Borislav Hadzhiev](https://bobbyhadz.com/about)
> 
> 7 de abril de 2024

## Tabla de contenido.

1. [Mostrar u ocultar otro componente al hacer clic en React](https://bobbyhadz.com/blog/react-onclick-show-component#show-or-hide-another-component-on-click-in-react)
2. [Mostrar u ocultar otro componente al hacer clic usando el operador ternario](https://bobbyhadz.com/blog/react-onclick-show-component#show-or-hide-another-component-on-click-using-the-ternary-operator)
3. [Establecer visualización CSS: ninguna condicionalmente en React](https://bobbyhadz.com/blog/react-onclick-show-component#set-css-display-none-conditionally-in-react)
4. [Establecer visibilidad de CSS: oculto condicionalmente en React](https://bobbyhadz.com/blog/react-onclick-show-component#set-css-visibility-hidden-conditionally-in-react)

## Mostrar u ocultar otro componente al hacer clic en React.

**Para mostrar u ocultar otro componente al hacer clic en React:**

1. Establece el `onClick`accesorio en un elemento.
2. Cuando se hace clic en el elemento, alterna una variable de estado que rastrea si se muestra el componente.
3. Representa condicionalmente el componente según la variable de estado.

```js
import {useState} from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <h2>Some content here</h2>
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
```

    Usamos el gancho [useState](https://react.dev/reference/react/useState) para realizar un seguimiento de una variable de estado booleana que determina si el componente debe mostrarse u ocultarse. El gancho devuelve una matriz que contiene un valor y una función que se utiliza para actualizar el valor.

    Pasamos una función `setState`porque se garantiza que la función se invocará con el estado actual (más actualizado).

```js
const handleClick = event => {
  // 👇️ toggle shown state
  setIsShown(current => !current);
};
```

    Cuando la `setIsShown`variable de estado se establece explícitamente en `true`, el otro componente se muestra sin importar cuántas veces hagamos clic en el botón.

Usamos el operador [lógico AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) para representar condicionalmente el componente según la variable de estado.

> El operador lógico AND (&&) devuelve el valor de la derecha si el valor de la izquierda es verdadero.

    Podemos utilizar este enfoque porque [se ignoran los valores booleanos, nulos e indefinidos](https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored) . Simplemente no rinden.

Las siguientes expresiones JSX no representan nada.

```js
<div />
<div></div>
<div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div>{true}</div>
```

## Mostrar u ocultar otro componente al hacer clic usando el operador ternario.

    También puede utilizar el operador ternario para mostrar u ocultar otro componente al hacer clic.

```js
import {useState} from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {/* 👇️ show elements on click */}
      {isShown ? (
        <div>
          <h2>bobbyhadz.com</h2>
        </div>
      ) : null}

      {/* 👇️ show component on click */}
      {isShown ? <Box /> : null}
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
```

> Si la expresión a la izquierda del signo de interrogación es verdadera, el operador devuelve el valor a la izquierda de los dos puntos; de lo contrario, se devuelve el valor a la derecha de los dos puntos.
> 
> Representar un `null`valor en su código JSX equivale a representar nada.

    Si la `isShown`variable almacena un `true`valor, entonces se devuelve el componente; en caso contrario, `null`se devuelve. Puedes imaginar que el valor antes de los dos puntos es el `if`bloque y el valor después de los dos puntos es el `else`bloque.

## Establecer visualización CSS: ninguna condicionalmente en React.

Para establecer la propiedad de visualización CSS de `none`forma condicional:

1. Almacena un booleano en el estado que indica si el elemento debe mostrarse.
2. Establece condicionalmente la `display`propiedad en la propiedad del elemento `style`

```js
import {useState} from 'react';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle visibility</button>

      <div style={{display: isShown ? 'block' : 'none'}}>
        <h2>Some content here</h2>
      </div>
    </div>
  );
}
```

    Si el nuevo estado se calcula utilizando el estado anterior, puede pasarle una función `setState()`.

    La `display`propiedad del `style`accesorio del `div`elemento se [establece condicionalmente](https://bobbyhadz.com/blog/react-inline-styles) mediante un [operador ternario](https://bobbyhadz.com/blog/javascript-use-shorthand-for-if-else-statement). El operador ternario es muy similar a una `if/else`declaración. Si el valor a la izquierda del signo de interrogación es verdadero, el operador devuelve el valor a la izquierda de los dos puntos; de lo contrario, se devuelve el valor a la derecha de los dos puntos.

```js
const result1 = 5 === 5 ? 'yes' : 'no';
console.log(result1); // 👉️ "yes"

const result2 = 5 === 10 ? 'yes' : 'no';
console.log(result2); // 👉️ "no"
```

## Establecer visualización CSS: ninguna usando clases condicionalmente.

    También se puede utilizar el mismo enfoque si confía en establecer nombres de clases para su estilo.

```js
import {useState} from 'react';

// 👇️ import css file
import './App.css';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  // 👇️ using classes
  return (
    <div>
      <button onClick={handleClick}>Toggle visibility</button>

      <div className={isShown ? 'display-block' : 'display-none'}>
        <h2>Some content here</h2>
      </div>
    </div>
  );
}
```

    Y aquí está el `css`que define las clases `display-block`y `display-none` .

```css
.display-block {
  display: block;
}

.display-none {
  display: none;
}
```

    El fragmento de código logra el mismo resultado usando clases en lugar del `style` accesorio. Si el elemento en el que está configurando la clase también tiene clases diferentes, use una cadena de plantilla.

```js
import {useState} from 'react';
import './App.css';

export default function App() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle visibility</button>

      <div className={
            `my-class ${isShown ? 'display-block' : 'display-none'}`
      }>
        <h2>Some content here</h2>
      </div>
    </div>
  );
}
```

    La sintaxis de llaves del signo de dólar nos permite evaluar una expresión directamente en la [cadena de plantilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) .

> He escrito una guía detallada sobre cómo [agregar o eliminar una clase al hacer clic](https://bobbyhadz.com/blog/react-add-remove-class-on-click) .

## Establecer visibilidad de CSS: oculto condicionalmente en React.

Para establecer la propiedad de visibilidad de CSS en oculta:

1. Almacene un booleano en el estado que indica si el elemento debe ser visible.
2. Establece condicionalmente la `visibility`propiedad en la propiedad del elemento `style`.

```js
import {useState} from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  return (
    <div>
      <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <h2>Some content here</h2>
      </div>

      <button onClick={handleClick}>Toggle visibility</button>
    </div>
  );
}
```

    Usamos el gancho [useState](https://react.dev/reference/react/useState) para almacenar un valor booleano que indica si un elemento debe ser visible o no. Cada vez que se hace clic en el elemento del botón, `isVisible` [se alterna el valor booleano](https://bobbyhadz.com/blog/react-toggle-boolean-state) , pero esto podría activarse de cualquier otra manera.

> Tenga en cuenta que le pasamos una función a `setIsVisible`. Esto es importante porque se garantiza que la función a la que pasamos `setIsVisible`se invocará con el valor actual (más actualizado) del booleano. `isVisible`

    Si el nuevo estado se calcula [utilizando el estado anterior](https://reactjs.org/docs/hooks-reference.html#functional-updates) , puede pasarle una función `setState()`.

La propiedad [de visibilidad](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)`style` de la propiedad del `div`elemento se establece condicionalmente mediante un [operador ternario](https://bobbyhadz.com/blog/javascript-use-shorthand-for-if-else-statement) .

    Si la `isVisible`variable de estado almacena un valor verdadero, configuramos la `visibility` propiedad en `visible`. De lo contrario, está configurado en `hidden`.

## Establecer visibilidad de CSS: oculto condicionalmente usando clases.

También se puede utilizar el mismo enfoque si confía en establecer nombres de clases para su estilo.

```js
import {useState} from 'react';

// 👇️ import css file
import './App.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  return (
    <div>
      <div className={isVisible ? 'visible' : 'hidden'}>
        <h2>Some content here</h2>
      </div>

      <button onClick={handleClick}>Toggle visibility</button>
    </div>
  );
}
```

Y aquí está el `css`que define las clases `visible`y `hidden`.

```js
.visible {
  visibility: visible;
}

.hidden {
  visibility: hidden;
}
```

E    l fragmento de código anterior logra el mismo resultado usando clases en lugar del `style`accesorio. Si el elemento en el que está configurando la clase también tiene clases diferentes, use una cadena de plantilla.

```js
import {useState} from 'react';

// 👇️ import css file
import './App.css';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsVisible(current => !current);
  };

  return (
    <div>
      <div className={`my-class ${isVisible ? 'visible' : 'hidden'}`}>
        <h2>Some content here</h2>
      </div>

      <button onClick={handleClick}>Toggle visibility</button>
    </div>
  );
}
```
