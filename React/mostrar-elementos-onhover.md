# Mostrar un elemento o texto al pasar el mouse en React

> [Borislav Hadzhiev](https://bobbyhadz.com/about)
> 
> 7 de abril de 2024

## Para mostrar un elemento o texto al pasar el mouse en React:

1. Establezca los accesorios `onMouseOver`y `onMouseOut`en el elemento.
2. Realice un seguimiento de si el usuario pasa el cursor sobre el elemento en una variable de estado.
3. Representa condicionalmente el otro elemento según la variable de estado.

```js
import {useState} from 'react';

const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover over me
        </div>

        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
            <h2>bobbyhadz.com</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
```



![mostrar elemento al pasar el mouse](https://bobbyhadz.com/images/blog/react-show-element-on-hover/show-element-on-hover.gif)



El ejemplo de código muestra cómo mostrar un elemento mientras se desplaza sobre otro elemento.

Configuramos el `onMouseOver`accesorio en el `div`elemento, de modo que cada vez que el usuario pasa el cursor sobre el elemento, `handleMouseOver`se invoca la función.



```js

<div
  onMouseOver={handleMouseOver}
  onMouseOut={handleMouseOut}
>
  Hover over me
</div>

```

El evento [de mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) se activa cuando el usuario mueve el cursor sobre el elemento o uno de sus elementos secundarios.

En nuestra `handleMouseOver`función, simplemente configuramos la variable de estado en . `isHovering``true`

```js
const handleMouseOver = () => {
  setIsHovering(true);
};
```

Por el contrario, en nuestra `handleMouseOut`función, configuramos la `state`variable en `false`.

```js
const handleMouseOut = () => {
  setIsHovering(false);
};
```

El evento [mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) se activa cuando el cursor del usuario ya no está contenido dentro del elemento o uno de sus hijos.

Usamos el operador lógico AND (&&) para representar condicionalmente el otro `div` elemento.

El operador [lógico AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) devuelve el valor de la izquierda si es falso; de lo contrario, se devuelve el valor de la derecha.

Si la variable de estado almacena un `false`valor, el operador lógico AND (&&) regresaría `false`y no se representaría nada.

[Se ignoran los valores booleanos, nulos e indefinidos](https://reactjs.org/docs/jsx-in-depth.html#booleans-null-and-undefined-are-ignored) . Simplemente no rinden.

Cuando el usuario pasa el cursor sobre el `div`elemento:

1. `handleMouseOver`Se invoca la función.
2. La `isHovering`variable de estado se establece en `true`.
3. El otro `div`elemento se renderiza.

Por el contrario, cuando el usuario mueve el cursor fuera del `div`elemento:

1. `handleMouseOut`Se invoca la función.
2. La `isHovering`variable de estado se establece en `false`.
3. El otro `div`elemento ya no se muestra.

También escribí una guía detallada sobre [cómo cambiar el estilo de un elemento al pasar el mouse](https://bobbyhadz.com/blog/react-inline-style-hover) .

## Mostrar un componente al pasar el mouse en React

Se puede utilizar el mismo enfoque para mostrar un componente mientras se pasa el cursor sobre otro elemento.

aplicación.js

```js
import {useState} from 'react';

function Heading() {
  return (
    <div>
      <h2>bobbyhadz.com</h2>
    </div>
  );
}

const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <div
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Hover over me
        </div>

        {isHovering && <Heading />}
      </div>
    </div>
  );
};

export default App;

```



![reaccionar mostrar componente al pasar el mouse](https://bobbyhadz.com/images/blog/react-show-element-on-hover/react-show-component-on-hover.gif)

El ejemplo de código muestra un componente cuando pasamos el cursor sobre un `div`elemento.

Extrajimos a `div`y an `h2`en un `Heading`componente.

Cada vez que el usuario pasa el cursor sobre el `div`que tiene los accesorios `onMouseOver`y `onMouseOut`configurados, `Heading`se muestra el componente.

Cuando el usuario saca el mouse del div, el `Heading`componente se desmonta y ya no se representa.


