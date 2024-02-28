# Redux y reducer

| Funcionamiento <u>sin Redux</u>:                                                                                                                                  | Funcionamiento <u>con Redux</u>:                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cada componente tiene su propio State y requiere de una lógica extra para pasar los datos fuera de su componente.                                                 | Todos los componentes se refieren al estado centralizado. Cada componente solo maneja su presentación en función de un estado específico, pero no el manejo de datos lógicos. (Similar a la vista en un marco MVC) |
| <img title="" src="file:///home/jaime/MyProjects/Documents/DAW/Reactjs/assets/Flujo%20sin%20Redux.png" alt="Flujo sin Redux.png" width="308" data-align="center"> | <img title="" src="file:///home/jaime/MyProjects/Documents/DAW/Reactjs/assets/Flujo%20con%20Redux.png" alt="Flujo con Redux.png" width="376" data-align="center">                                                  |

    Reducer surgió para resolver problemas con los datos. Tanto los objetos JSON (*JavaScript Object Notation*) como los objetos literales en JavaScript son estructuras de datos que permiten almacenar información en formato clave-valor. Sin embargo, existen algunas diferencias clave entre ellos:

1. <u>Sintaxis</u>:
       Los objetos JSON siguen una sintaxis específica definida por el formato JSON, que requiere que las claves estén entre comillas dobles y que los valores puedan ser solo tipos de datos primitivos (como cadenas, números, booleanos, null), arrays o objetos anidados.
       Los objetos literales en JavaScript se definen utilizando una sintaxis similar, pero las claves pueden estar sin comillas (si son identificadores válidos de JavaScript) y los valores pueden ser cualquier tipo de dato válido en JavaScript, incluyendo funciones, expresiones regulares y otros objetos.
   
   * *Ejemplo de objeto JSON*:
   
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
   
   * *Ejemplo de objeto literal json en JavaScript*:
   
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

    Los objetos JSON se utilizan principalmente para el intercambio de datos entre sistemas o para almacenar datos de forma persistente en archivos o bases de datos.
    Los objetos literales en JavaScript se utilizan para representar datos dentro del código de JavaScript, como variables, propiedades de objetos, parámetros de funciones, etc.

3. <u>Evaluación</u>:

    Los objetos JSON se interpretan como cadenas de texto en JavaScript y deben ser parseados para poder ser utilizados como objetos JavaScript válidos.
    Los objetos literales en JavaScript se interpretan directamente como objetos en el momento de la ejecución del código.
    En resumen, aunque ambos son estructuras de datos similares en su apariencia y función, los objetos JSON siguen una sintaxis más estricta y se utilizan principalmente para la interoperabilidad de datos, mientras que los objetos literales en JavaScript son parte del propio lenguaje y se utilizan para representar datos en el código.
