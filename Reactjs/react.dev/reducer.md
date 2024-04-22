# Reducer

     **Reducer** es un hook de React que permite agregar `reducer()` al componente. Es una función que **toma el estado actual de una aplicación y una acción**, y devuelve un nuevo estado . Los "reducers", se utilizan a menudo junto con una biblioteca de gestión de estado como `redux()`, que ayuda a gestionar el estado de una aplicación React.

   Aunque los `reducer()` pueden reducir la cantidad de código dentro de su componente, en realidad reciben el nombre de la operación `reduce()` que pueden realizar en las matrices.

    La operación `reducer()` le permite tomar una matriz y *acumular* un valor único entre muchos:

**aplication.js**

```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(
  (result, number) => result + number, 0
); // sum(1 + 2 + 3 + 4 + 5) = 15
```

    La función que pasas para reducir se conoce como `reducer()`.

    Toma el resultado hasta el momento y el elemento actual, luego devuelve el siguiente resultado. Los *reducers* de React es un ejemplo de la misma idea: toman el estado hasta el momento y la acción, y devuelven el siguiente estado.

> **De esta manera, acumulan acciones a lo largo del tiempo en estados**.

    **Reducer** surgió para resolver problemas con los datos. Tanto los objetos JSON (*JavaScript Object Notation*) como los objetos literales en JavaScript son estructuras de datos que permiten almacenar información en formato clave-valor. Sin embargo, existen algunas diferencias clave entre ellos:

1. <u>Sintaxis</u>:
       Los objetos JSON siguen una sintaxis específica definida por el formato JSON, que requiere que las claves estén entre comillas dobles y que los valores puedan ser solo tipos de datos primitivos (como cadenas, números, booleanos, null), arrays o objetos anidados.
       Los objetos literales en JavaScript se definen utilizando una sintaxis similar, pero las claves pueden estar sin comillas (si son identificadores válidos de JavaScript) y los valores pueden ser cualquier tipo de dato válido en JavaScript, incluyendo funciones, expresiones regulares y otros objetos.
   
   + *Ejemplo de objeto JSON*:
   
   ```json
   {
   "nombre": "Juan",
   "edad": 30,
   "activo": true,
   "dirección": {
      "calle": "123 Calle Principal",
      "ciudad": "Ciudad Ejemplo"
   }
   }
   ```
   
   + *Ejemplo de objeto literal json en JavaScript*:
   
   ```javascript
   const persona = {
   nombre: "Juan",
   edad: 30,
   activo: true,
   dirección: {
     calle: "123 Calle Principal",
     ciudad: "Ciudad Ejemplo"
   }
   };
   ```

2. <u>Uso</u>:

    **Los objetos JSON** se utilizan principalmente para el intercambio de datos entre sistemas o para almacenar datos de forma persistente en archivos o bases de datos.
    **Los objetos literales en JavaScript** se utilizan para representar datos dentro del código de JavaScript, como variables, propiedades de objetos, parámetros de funciones, etc.

3. <u>Evaluación</u>:
   
   + **Los objetos JSON** se interpretan como cadenas de texto en JavaScript y deben ser parseados para poder ser utilizados como objetos JavaScript válidos.
   
   + **Los objetos literales en JavaScript** se interpretan directamente como objetos en el momento de la ejecución del código.
   
   **En resumen**, aunque ambos son estructuras de datos similares en su apariencia y función, *los objetos JSON* siguen una sintaxis más estricta y se utilizan principalmente para la interoperabilidad de datos, *mientras que los objetos literales en JavaScript* son parte del propio lenguaje y se utilizan para representar datos en el código.

    En el siguiente ejemplo, la función `reducer`  toma un objeto de estado y un objeto de acción y **devuelve un nuevo estado según el tipo de acción**.

+ *Si el tipo de acción* es `INCREMENT`, el `reducer()` incrementa la propiedad de recuento del estado y devuelve el nuevo estado.
+ *Si el tipo de acción* es `DECREMENT`, el `reducer()` disminuye la propiedad de recuento y devuelve el nuevo estado.
+ *Si no se reconoce el tipo de acción*, el `reducer()` devuelve el estado actual sin realizar ningún cambio.

**aplication.js**

```javascript
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

| Funcionamiento <u>sin Redux</u>:                                                                                  | Funcionamiento <u>con Redux</u>:                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cada componente tiene su propio State y requiere de una lógica extra para pasar los datos fuera de su componente. | Todos los componentes se refieren al estado centralizado. Cada componente solo maneja su presentación en función de un estado específico, pero no el manejo de datos lógicos. (Similar a la vista en un marco MVC) |
| <img title="" src="assets/Flujo sin Redux.png" alt="Flujo sin Redux.png" width="308" data-align="center">         | <img title="" src="assets/Flujo con Redux.png" alt="Flujo con Redux.png" width="376" data-align="center">                                                                                                          |

## {useReducer}

    La sintaxis básica es **useReducer(reducer, initialArg, init?)** siendo `init?` una operacion opcional.

**App.js**

```javascript
import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```

### Parámetros

+ `reducer` : La función que especifica cómo se actualiza el estado. Debe ser puro, debe tomar el estado y la acción como argumentos y debe devolver el siguiente estado. El estado y la acción pueden ser de cualquier tipo.

+ `initialArg` : El avalor a partir del cual se calcula el estado inicial. Puede ser un valor de cualquier tipo. La forma en que se calcula el estado inicial depende del siguiente argumento `init`.

+ `init` : La función inicializadora que especifica cómo se calcula el estado inicial. Si no se especifica, el estado inicial se establece en `initialArg`. De lo contrario, el estado inicial se establece en el resultado de llamar a `init`(`initialArg`).

## Las funciones 'dispatch'

    El `useReducer` devuelve una matriz con dos valores:

1. El estado actual. Durante el primer renderizado, se establece en `init(initialArg)`o `initialArg`(si no hay inicio).

2. La función `dispatch` que le permite *actualizar el estado* a un valor diferente y activar una nueva representación.

    La función `dispatch` devuelta por `useReducer` le permite actualizar el estado a un valor diferente y activar una nueva representación. Debe pasar la acción como único argumento de la función `dispatch` :

**aplicación.js**

```js
const [state, dispatch] = useReducer(reducer, { age: 42 });

function handleClick() {
  dispatch({ type: 'incremented_age' });
  // ...
```

+ Las funciones `dispatch` no tienen un valor de retorno.