# Actualización de objetos en estado

    El estado en React puede contener cualquier tipo de valor JavaScript que no se deben cambiar directamente. Cuando es necesario actualizar un objeto se debe crear uno nuevo o hacer una copia de uno existente y configurar el estado para usar esa copia.

- *Mutable*: es algo que se puede **cambiar** o agregar. 

- *Inmutable*: es algo que no puede cambiar ni agregar por lo que solo se pueden **reasignar**. Los valores primitivos en js son algo agregado donde solo se pueden reasignar y por lo tanto, todos estos valores son inmutables.

    El valor que contiene el estado en el siguiente ejemplo contiene un cero `useState(0)`:

```javascript
const [x, setX] = useState(0);
```

    Los valores primitivos (booleanos, números y cadenas) son inmutables (sólo de lectura).

    El `setX` del ejemplo activa una nueva representación para *reemplazar* el valor. Por ejemplo `setX(5);`

    Ejemplo de un objeto en el *estado*:

```javascript
const [position, setPosition] = useState({ x: 0, y: 0 });
```

    Técnicamente se puede mutar sin usar `setPosition`, con `position.x = 5;` y React no funciona así. Se debe tratar el objeto como `inmutable`, reemplazando los valores.

## Tratar el estado como solo de lectura

```javascript
onPointerMove={e => {
  position.x = e.clientX;
  position.y = e.clientY;
}}
```

    Este código modifica el objeto asignado `position` **desde** el render anterior (`State as Snapshot`), y si no se usa la *función de estado*, React no tiene idea de que el objeto ha cambiado por lo que no hace nada. Debes tratar el valor de estado al que tienes acceso en un renderizado como de solo lectura.

    Para activar una `nueva renderización` se utiliza la función de configuración de estado `setPosition`:

```javascript
onPointerMove={e => {
  setPosition({
    x: e.clientX,
    y: e.clientY
  });
}}
```

    Con `setPosition`, le estás diciendo a React:

* Reemplazar `position`con este nuevo objeto.
* Y renderice este componente nuevamente.

    Un ejemplo de mutación local se entiende de la siguiente manera:

```javascript
const nextPosition = {};
nextPosition.x = e.clientX;
nextPosition.y = e.clientY;
setPosition(nextPosition);
```

    *Se está mutando un objeto nuevo después de crearlo.*

    El verdadero problema de la mutación es cuando se intenta cambiar un objeto que ya está en `estado`.

    Mutar un objeto que acabas de crear está bien porque *ningún otro código hace referencia a él todavía.* Cambiarlo no afectará accidentalmente algo que depende de él. A esto se le llama "mutación local". Incluso puedes realizar una mutación local *mientras renderizas* (*el pequeño secreto de tu componente*). 

## Copiar objetos con la sintaxis extendida

    Es posible actualizar solo un campo de un formulario conservando los valores anteriores de los demás campos. 

    Los controladores `onChange` *mutan* el estado:

```javascript
function handleFirstNameChange(e) {
    person.firstName = e.target.value;
  }
(...)
<>
    <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
    </label>
</>
```

    Esta línea muta el estado de un renderizado anterior:

```javascript
person.firstName = e.target.value;
```

    Pero el código no funciona.

    Una manera confiable sería creando un objeto y pasárselo a setPerson:

```javascript
setPerson({
  firstName: e.target.value, // New first name from the input
  lastName: person.lastName,
  email: person.email
});
```

    Si trabajamos como en el ejemplo anterior, solo sería posible cambiar uno de los campos. 

    Se puede utilizar una sintaxis conocida como `operator spread` que se escribe con tres puntos `...` para copiar todo el objeto y luego reemplazarlo en el render:

```javascript
setPerson({
  ...person, // Copy the old fields
  firstName: e.target.value // But override this one
});
```

###### Usar un único controlador de eventos para múltiples campos:

    Puede utilizar las llaves `[`y `]`dentro de la definición de su objeto para especificar una propiedad con nombre dinámico.

```javascript
function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
(...)
    <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
     </label>
```

`e.target.name`se refiere a la propiedad `name` otorgada al elemento DOM `<input>`.

> Nota: Hay que tener en cuenta que el operador spread solo es superficial y copia en un nivel de profundidad. Significa que no puede copiar un nivel anidado.

## Actualizar un objeto anidado

```javascript
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
// Written as a single function call:
setPerson({
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
});
```

###### Los objetos no están realmente anidados.

    "Anidar" es una forma inexacta de pensar en cómo se comportan los objetos. Cuando se ejecuta el código, no existe un objeto "anidado". En realidad estás mirando dos objetos diferentes.

    Estos dos objetos:

```javascript
let obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
  image: 'https://i.imgur.com/Sd1AgUOm.jpg',
};

let obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1
};
```

    Es lo mismo que este:

```javascript
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```

## Una lógica de actualización concisa con Immer

    Immer es una biblioteca popular que te permite escribir usando la sintaxis conveniente pero cambiante y se encarga de producir las copias por ti. Con Immer, el código que escribes parece como si estuvieras "rompiendo las reglas" y mutando un objeto:

```javascript
updatePerson(draft => {
  draft.artwork.city = 'Lagos';
});
```

    Pero a diferencia de una mutación normal, no sobrescribe el estado pasado.

    El `draft`proporcionado por Immer es un tipo especial de objeto, llamado *proxy*, que "registra" lo que haces con él. Immer descubre qué partes del archivo `draft` se han cambiado y produce un objeto completamente nuevo que contiene sus ediciones.

1. Para usar Immer es necesario realizar una instalación como dependencia con `npm install use-immer`.

2. Luego es necesario reemplazar el `import { useState } from react` por `import { useImmer } from 'use-immer`.

> Echa un vistazo al [código de ejemplo en Sandbox](https://codesandbox.io/p/sandbox/optimistic-panna-522ghd?file=%2Fsrc%2FApp.js&utm_medium=sandpack)

    Immer es una excelente manera de mantener concisos los controladores de actualizaciones, especialmente si hay anidamiento en su estado y copiar objetos genera código repetitivo.

    En la práctica, a menudo puedes “salirte con la tuya” con el estado mutante en React, pero te recomendamos encarecidamente que no lo hagas para que puedas utilizar las nuevas funciones de React desarrolladas con este enfoque en mente. ¡Los futuros contribuyentes y quizás incluso tu yo futuro te lo agradecerán!.

## Resumen

* Trate todos los estados en React <mark>como inmutables</mark>.
* Cuando almacena objetos en estado, <mark>mutarlos no activará renderizados</mark> y cambiará el estado en “instantáneas” de renderizado anteriores.
* En lugar de mutar un objeto, cree una *nueva* versión del mismo y active una nueva representación estableciéndole el estado.
* Puede utilizar la `{...obj, something: 'newValue'}`sintaxis de distribución de objetos para crear copias de objetos.
* La sintaxis extendida es superficial: solo copia un nivel de profundidad.
* Para actualizar un objeto anidado, necesita crear copias desde el lugar donde está actualizando.
* Para reducir la copia repetitiva de código, utilice Immer.