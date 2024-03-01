# Componentes de Reactjs

Un componente de React es una función de JavaScript que puedes agregarle marcado. Los componentes pueden ser tan pequeños como un botón o tan grandes como una página completa.

*Los componentes* son uno de los conceptos centrales de React. Son la base sobre la que construyes interfaces de usuario (UI).

Tradicionalmente, al crear páginas web, los desarrolladores web marcaban su contenido y luego agregaban interacción agregando algo de JavaScript. Ahora se espera que funcione en muchos sitios y en todas las aplicaciones y Reactjs da prioridad a la interactividad sin dejar de utilizar la misma tecnología.

- **Cómo construir un componente:**
  
  ```javascript
  export default function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    )
  }
  ```
1. Exportar el componente
   
   El prefijo `export default` es una [sintaxis estándar de JavaScript](https://developer.mozilla.org/docs/web/javascript/reference/statements/export) (no específica de React). Te permite marcar la función principal en un archivo para luego poder importarla desde otros archivos.

2. Definir la función
   
   Con `function Profile() { }` se define una función de JavaScript con el nombre `Profile`. Los componentes de React son funciones normales de JavaScript, pero sus nombres deben comenzar con una letra mayúscula o no funcionarán.

3. Agregar marcado
   
   El componente devuelve una `<img />`etiqueta con atributos `src`y `alt`. `<img />`está escrito como HTML. Ojo! en realidad, JavaScript está actuando por debajo. Esta sintaxis se llama [JSX](https://react.dev/learn/writing-markup-with-jsx) y le permite incrustar marcado dentro de JavaScript.
   
   Las declaraciones de devolución se pueden escribir todas en una línea, como en este componente:
   
   ```javascript
   return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
   ```
   
   Pero si su marcado no está todo en la misma línea que la `return`palabra clave, debe envolverlo entre paréntesis:
   
   ```javascript
   return (<div><img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" /></div>);
   ```

`return` Sin paréntesis se ignorará cualquier código en las líneas posteriores

#### Usando un componente

    Usando el ejemplo anterior, ahora que el componente `Profile` queda definido, se puede anidar dentro de otros componentes. Por ejemplo, exportar un componente `Gallery` que utilice varios `Profile`.

```javascript
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

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

- Esto es lo que vé el navegador:

```html
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

- y lo que vemos nosotros:

#### Amazing scientists

![Katherine Johnson](https://i.imgur.com/MK3eW3As.jpg)![Katherine Johnson](https://i.imgur.com/MK3eW3As.jpg)![Katherine Johnson](https://i.imgur.com/MK3eW3As.jpg)

    Para definir componentes hay varias soluciones. Un archivo **no puede tener más de una exportación predeterminada** , pero puede tener **tantas exportaciones con nombre como desee.**

**Puntos clave:**

- React te permite crear componentes, **elementos de interfaz de usuario reutilizables para tu aplicación.**

- En una aplicación React, cada parte de la interfaz de usuario es un componente.

- Los componentes de React son funciones regulares de JavaScript excepto:
  
  1. Sus nombres siempre comienzan con mayúscula.
  2. Devuelven el marcado JSX.

**Ejercicios a modo desafío:**

1. Este entorno limitado no funciona porque el componente raíz no se exporta.
   
   - [Exportar el componente.](https://codesandbox.io/p/sandbox/react-dev-3kp7gh?file=%2Fsrc%2FApp.js%3A9%2C1&utm_medium=sandpack)

2. Algo no está bien en esta afirmación `return`. ¿Puedes arreglarlo?.
   
   - [Arreglar la declaración de devolución](https://codesandbox.io/p/sandbox/react-dev-5kvyr2?file=%2Fsrc%2FApp.js&utm_medium=sandpack).

3. Algo anda mal con la forma en que `Profile`se declara y utiliza el componente. ¿Puedes detectar el error? (¡Intente recordar cómo React distingue los componentes de las etiquetas HTML normales!)
   
   - [Detectar el error](https://codesandbox.io/p/sandbox/react-dev-pgtl25?file=%2Fsrc%2FApp.js&utm_medium=sandpack).

4. Escribe un componente desde cero. Puede darle cualquier nombre válido y devolver cualquier marcado. Si no tiene ideas, puede escribir un `Congratulations`componente que muestre `<h1>Good job!</h1>`. ¡No olvides exportarlo!
   
   - [Tu propio componente](https://codesandbox.io/p/sandbox/react-dev-skm6kx?file=%2Fsrc%2FApp.js&utm_medium=sandpack).