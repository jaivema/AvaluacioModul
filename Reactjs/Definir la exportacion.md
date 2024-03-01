# Definir un componente

 Existen dos tipos diferentes de `default` y `named`:

    a)    Default    

```javascript
// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
```

    b)    Named    

```javascript
// export features declared elsewhere
export { myFunction2, myVariable2 };

// export individual features (can export var, let, const, function, class)
export let myVariable = Math.sqrt(2);
export function myFunction() {
// …
}
```

1. <mark>`export default function ComponentName`() {}</mark>

    Esta opción utiliza la sintaxis de declaración de función para definir el componente  y lo exporta inmediatamente como exportación predeterminada. Esta sintaxis es más familiar para los desarrolladores que tienen experiencia con módulos ES6.

```javascript
export default function ComponentName() { 
  return ( 
    <div> 
      <h1>Header List</h1>
        <ul> 
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
        </ul>
    </div>
  ); 
}
```

2. <mark>`const ComponentName = () => {}`</mark>

    Esta opción utiliza la sintaxis de la función de flecha para definir el componente como una constante. Las funciones de flecha tienen una sintaxis concisa y pueden vincularla automáticamente al alcance actual, lo que puede resultar útil cuando se trabaja con componentes de React.

```javascript
const ComponentName = () => {
   return ( 
    <div> 
      <h1>Header List</h1>
        <ul> 
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
        </ul>
    </div>
  ); 
}
```

3. <mark>`function ComponentBame() {} export default ComponentName;`</mark>

    Esta opción utiliza una declaración de función para definir el componente y luego lo exporta como exportación predeterminada en una línea separada. Esta sintaxis es similar a la opción 1, pero separa la declaración de función de la declaración de exportación.

```javascript
function ComponentName() {
 return ( 
    <div> 
      <h1>List Header</h1>
        <ul> 
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
        </ul>
    </div>
  ); 
}
export default ComponentName;
```

>     En términos de comportamiento, las tres opciones crearán una función que se puede utilizar como componente de React. Sin embargo, la sintaxis de la función de flecha en la opción 2 puede proporcionar algunos beneficios adicionales en términos de rendimiento y legibilidad, especialmente para componentes más pequeños.

4. <mark>`export default`</mark>

    En JavaScript, `export`es una palabra clave que se utiliza para exportar funciones, objetos o valores de un módulo para que puedan usarse en otro módulo.

> Cuando un módulo exporta una función u objeto usando la palabra clave export, se puede importar en otro módulo usando la palabra clave import.

Cuando la palabra clave `default` se usa con la palabra clave `export`, permite que un módulo exporte solo un elemento como exportación "predeterminada".

> Esto significa que cuando otro módulo importe desde este módulo sin especificar un nombre de importación específico, recibirá el elemento exportado predeterminado.