# Tutorial tres en raya

[Tutorial: Tic-Tac-Toe – React](https://react.dev/learn/tutorial-tic-tac-toe)

## App.js

    El código `App.js`crea un *componente* . En React, un componente es una pieza de código reutilizable que representa una parte de una interfaz de usuario. Los componentes se utilizan para representar, administrar y actualizar los elementos de la interfaz de usuario en su aplicación.

```javascript
export default function Board() {
  return <button className="square">X</button>;
}
```

    La primera línea define una función llamada `Board`. La palabra clave `export` de  JavaScript hace que esta función sea accesible fuera de este archivo. La palabra clave `default` le dice a otros archivos que usan su código que es la función principal de su archivo.

    La segunda línea devuelve un botón. La palabra clave `return` de JavaScript significa que todo lo que viene después se devuelve como un valor al llamador de la función. `<button>`es un *elemento JSX* . 

    **Un elemento JSX** es una combinación de código JavaScript y etiquetas HTML que describe lo que le gustaría mostrar. 

    `className="square"`es una propiedad o *accesorio* de botón que le dice a CSS cómo darle estilo al botón.

    `X`es el texto que se muestra dentro del botón y `</button>`cierra el elemento JSX para indicar que el siguiente contenido no debe colocarse dentro del botón.

## index.css

    Este archivo define los estilos para su aplicación React. Los dos primeros *selectores CSS* ( `*`y `body`) definen el estilo de grandes partes de su aplicación, mientras que el `.square`selector define el estilo de cualquier componente donde `className`se establece la propiedad `square`. En su código, eso coincidiría con el botón de su componente Square en el archivo `App.js`.

## index.js

    No editará este archivo durante el tutorial, pero es el puente entre el componente que creó en el archivo `App.js` y el navegador web.

```javascript
import { StrictMode } from 'react';            //React
import { createRoot } from 'react-dom/client'; //Biblioteca de React para hablar con navegadores web,
import './index.css';                          //Los estilos para sus componentes
import App from './App';                       //El componente que creó en App.js
```

    El resto del archivo reúne todas las piezas e inyecta el producto final `index.html`en la carpeta `public`.

## Construyendo el tablero de juego

    Los componentes de React deben devolver un único elemento JSX y no varios elementos JSX adyacentes como dos botones. Para solucionar este problema, puede usar *Fragmentos* ( `<>`y `</>`) para envolver múltiples elementos JSX adyacentes de esta manera:

```javascript
export default function Board() {
  return (
    <>
      <button className="square">X</button>
      <button className="square">X</button>
    </>
  );
}
```

    Necesitarás agrupar tus cuadrados en filas con `div`'s y agregar algunas clases de CSS. Mientras lo haces, le dará a cada cuadrado un número para asegurarse de saber dónde se muestra cada cuadrado.

```javascript
export default function Board() {
  return (
    <>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
      </div>
    </>
  );
}
```

### Pasar datos a través de accesorios.

    La arquitectura de componentes de React le permite crear un componente reutilizable para evitar código duplicado y desordenado. Primero, copiará la línea que define su primer cuadrado ( `<button className="square">1</button>`) de su componente `Board` a un nuevo componente `Square`.

    Querías representar la variable JavaScript llamada `value`desde tu componente, no la palabra "valor". Para "escapar a JavaScript" desde JSX, necesita llaves `{}`. Agregue llaves `value`en JSX así:

```javascript
function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  // ...
}
```

    El componente `Board` aún no ha pasado la propiedad `value` a cada componente `Square` que representa. Para solucionarlo, agregará el accesorio `value` a cada componente `Square` **representado** por el componente `Board`:

```javascript
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
```

### Hacer un componente interactivo

    Llenemos el componente `Square` con una `X` cuando hagas clic en él. Declare una función llamada `handleClick` dentro del componente `Square`. Luego, agregue la función `onClick` a los accesorios del elemento JSX del botón devuelto desde el componente `Square`:

```javascript
function Square({ value }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
```

    Si hace clic en un cuadrado ahora, debería ver un registro que dice `clicked!`en la pestaña *Consola* en la parte inferior de la sección *Navegador*. Los registros repetidos de la consola con el mismo mensaje no crearán más líneas en la consola. En su lugar, verá un contador incremental junto a su primer `clicked!`.

    Como siguiente paso, desea que el componente Square "recuerde" que se hizo clic en él y lo rellene con una marca "X". Para "recordar" cosas, los componentes usan *state* .

    React proporciona una función especial llamada `useState`que puedes llamar desde tu componente para permitirle "recordar" cosas. Almacenemos el valor actual del estado `Square`  y cambiémoslo cuando se haga click en el componente `Square`.

    Importar `useState`en la parte superior del archivo. Retire el accesorio `value` del componente `Square`. En su lugar, agregue una nueva línea al comienzo lamada `useState`. Haga que devuelva una variable de estado llamada `value`:

```javascript
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    //...
```

    El valor del dato `value` almacena el valor y `setValue` es una función que se puede utilizar para cambiar el valor. El valor `null` pasado a `useState` se utiliza como valor inicial para esta variable de estado, por lo que `value` aquí comienza igual a `null`.

    Dado que el componente `Square` ya no acepta accesorios, eliminará el atributo `value` de los nueve componentes 'Square' creados por el componente 'Board' y reemplace el `console.log("clicked!");` por el controlador de eventos `setValue('X');`

    Al llamar a esta `set`función desde un controlador de eventos `onClick`, le estás diciendo a React que vuelva a renderizar el `Square`cada vez que se haga clic en `<button>`. Después de la actualización, el valor de `Square`'s `value` será `'X'`, por lo que verás la "X" en el tablero de juego. Cada cuadrado tiene su propio estado: lo almacenado en cada `value` de cada cuadrado es completamente independiente de los demás. Cuando llamas a la función `set` en un componente, React actualiza automáticamente los componentes secundarios internos también.

```javascript
import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
```

## Completando el juego

    En este punto, ya tienes todos los elementos básicos para tu juego de tres en raya. Para tener un juego completo, ahora debes alternar la colocación de “X” y “O” en el tablero, y necesitas una forma de determinar un ganador.

### Elevando el estado

    Actualmente, cada componente `Square` mantiene una parte del estado del juego. Para comprobar si hay un ganador, sería necesario conocer de alguna manera el estado de cada uno de los 9 componentes `Square`. El mejor enfoque es almacenar el estado del juego en el componente principal, `Board`, en lugar de en cada cuadrado. El `Board` puede decirle a cada cuadrado qué mostrar, pasando un accesorio, como lo hizo cuando pasó un número a cada cuadrado. **El componente principal puede transmitir ese estado a los secundarios mediante accesorios.** Esto mantiene los componentes secundarios sincronizados entre sí y con sus componentes principales.

    **Elevar el estado a un componente principal** es común cuando se refactorizan los componentes de React. Esto se puede abordar con una matriz de nueve valores nulos.

```javascript
// ...
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    // ...
  );
}
```

    El *hook* `useState()` declara una varible de estado `squares` que inicialmente está configurada para cada cuadrado de esa matriz.

    Ahora su componente principal `Board` necesita pasar el accesorio `value` a cada `Square` que representa:

```javascript
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
```

A continuación, cada componente debe recibir el `value` del componente `Board`. Esto requerirá eliminar el hook `useState` del componente `Square` y el accesorio `onClick`  del botón:

```javascript
function Square({value}) {
  return <button className="square">{value}</button>;
}
```

    Ahora cada cuadrado recibirá un `value` que será `'X'`, `'O'`o `null`.

    A continuación, debe cambiar lo que sucede cuando se hace click en cada componente `Square`. El componente `Board` ahora recuerda qué cuadrados están llenos. Deberá crear una forma para que `Square` actualize el estado en `Board`. Dado que el estado es privado para un componente que lo define, no puede actualizar el estado en `Board` directamente.

    En su lugar, pasarás una función del `Board` al `Square` y tendrás que llamar a esa función cuando se haga clic en un cuadrado. Llamarás a esa función `onSquareClick` y agregará la función `onSquareClick` a los accesorios del componente `Square`:

```javascript
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
```

    Ahora conectará `onSquareClick` a una función en `Board`, que se nombrará `handleClick`.

```javascript
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick} />
        //...
  );
}
```

    Por último, definirá la función `handleClick` dentro del componente `Board` para actualizar la matriz de `squares` que contiene el estado del tablero:

```javascript
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    // ...
  );
}
```

    La función `handleClick` crea una copia de la matriz `squares` llamada `nextSquares` con el método de array `slice()` de JavaScript. Luego, `handleClick`actualiza `nextSquares` para agregar `X` al primer cuadrado con el índice `[0]`.

    Llamar a la función `setSquares` le permite a React saber que el estado del componente ha cambiado. Esto activará una nueva representación de la variable `squares`  que usan el estado dentro de `Board`, así como de sus componentes secundarios (los `Square` que componen el tablero).

    Ahora, actualicemos `handleClick` para poder actualizar cualquier cuadrado. Agrega un argumento `i` a `handleClick` que toma el índice del cuadrado a actualizar:

```javascript
export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {                    //argumento i
    const nextSquares = squares.slice();
    nextSquares[i] = "X";                      //nextSquares utiliza el argumento
    setSquares(nextSquares);
  }

  return (
    // ...
  );
}
```

    De momento el juego no funcionará porque se crea un bucle infinito al alterar el estado con `handleClick(0)` modificar con `setSquares` llamando a la fucnión de inmediato y ejecuta demasiado pronto.

    La función flecha con sintaxis `() =>` es una manera más corta de definir funciones. Cuando se hace clic en el cuadrado, se ejecutará el código después de la "flecha", llamando a `handleClick(0)`.

```javascript
<div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
</div>
<div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
</div>
<div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
</div>
```

    Ahora mismo ya deberían quedar marcadas las casillas con una X al hacer click

    Recapitulemos lo que sucede cuando un usuario hace clic en el cuadrado superior izquierdo de su tablero para agregarle un `X`:

1. Al hacer clic en el cuadrado superior izquierdo se ejecuta la función que `button` recibió como `onClick` del `Square`. El `Square` recibió esa función como `onSquareClick` del `Board`. El `Board` definió esa función directamente en JSX. Llama a `handleClick`con un argumento de `0`.
2. `handleClick`utiliza el argumento  `0` para actualizar el primer elemento de la matriz `squares` de `null` a `X`.
3. El estado `squares` del `Board` se actualizó, por lo que todos sus elementos secundarios se vuelven a renderizar. Esto hace que la propiedad `value` del `Square` con índice `0`cambie de `null`a `X`.

    Al final, el usuario ve que el cuadrado superior izquierdo ha cambiado de vacío a tener un `X`después de hacer clic en él.

>     En React, es convencional usar nombre como `onSomething` para los accesorios que representan eventos y `handleSomething` para las definiciones de funciones que manejan esos eventos.

### Por qué la inmutabilidad es importante

    La inmutabilidad hace que las funciones complejas sean mucho más fáciles de implementar.

    Observe cómo en `handleClick`, llama `.slice()` para crear una copia de la la matriz `squares` en lugar de modificar la matriz existente.

    Si se *muta* la matriz directamente no quedaría reflejado en el renderizado actual.

    Reemplazar los datos con una nueva copia que tenga los cambios deseados es la causa principal del **funcionamiento de React**. Por eso se necesita el `nextSquares`.

```javascript
const squares = [null, null, null, null, null, null, null, null, null];

const nextSquares = ['X', null, null, null, null, null, null, null, null]; 
```

    De forma predeterminada, todos los componentes secundarios se vuelven a representar automáticamente cuando cambia el estado de un componente principal. Esto incluye incluso los componentes secundarios que no se vieron afectados por el cambio. Aunque la nueva renderización no es perceptible para el usuario. La inmutabilidad hace que sea muy económico para los componentes comparar si sus datos han cambiado o no.

### Escogiendo turnos

    Cada vez que un jugador se mueve, `xIsNext`se invertirá (booleano) para determinar qué jugador sigue y se guardará el estado del juego. Actualizará la función `handleClick` del `Board` para invertir el valor de `xIsNext`:

```javascript
export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    //...
  );
}
```

    Ahora, al hacer clic en diferentes cuadrados, se alternarán entre `X`y `O` pero todavía queda fuera de control el click en la misma casilla varias veces, cambiando de `X` a `O` según el turno (gracias al booleano).

    Verificarás si el cuadrado ya tiene un `X` o un `O`. Si el cuadrado ya está lleno, entrará `return`en la función `handleClick`, antes de que intente actualizar el estado del tablero.

```javascript
function handleClick(i) {
  if (squares[i]) {
    return;
  }
  const nextSquares = squares.slice();
  //...
}
```

    Como punto final puedes colocar texto con el siguiente turno:

```javascript
return (
    <>
      <p className="player"><b>Turn for: {(xIsNext ? 'X' : 'O')}</b></p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        //...
    );
}
```

    El código completo se verá así:

```javascript
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <p className="player"><b>Player game: {(xIsNext ? 'X' : 'O')}</b></p>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
```