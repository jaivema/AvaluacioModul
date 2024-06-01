# Obetos JSON

    JSON significa "JavaScript Object Notation" (Notación de Objetos JavaScript). Es un formato de intercambio de datos ligero y fácil de leer que se utiliza comúnmente para transmitir datos entre un servidor y un cliente web, y también entre diferentes partes de una aplicación. JSON se deriva de la sintaxis de objetos literales de JavaScript, pero es independiente de cualquier lenguaje y se utiliza ampliamente en muchos contextos más allá de JavaScript.

    JSON está compuesto por pares de clave-valor. Una clave es siempre una cadena de texto, seguida de dos puntos, y luego el valor correspondiente. El valor puede ser un string, un número, un booleano, un array, un objeto JSON anidado, o null. Los pares de clave-valor están separados por comas y los objetos JSON se delimitan con llaves {}. Los arrays JSON se delimitan con corchetes [].

Ejemplo simple de un objeto JSON:

```
{
 "nombre": "Juan",
 "edad": 30,
 "casado": false,
 "hobbies": ["leer", "correr", "jugar videojuegos"],
 "dirección": {
 "calle": "Calle Principal",
 "ciudad": "Ciudad Capital",
 "códigoPostal": "12345"
 }
}
```

En este ejemplo:

- "nombre", "edad" y "casado" son pares de clave-valor con valores de cadena, número y booleano respectivamente. 

- "hobbies" es un array que contiene strings. 

- "dirección" es un objeto JSON anidado que a su vez contiene pares de clave-valor.

    JSON es ampliamente utilizado en aplicaciones web para enviar datos entre el servidor y el cliente, almacenar configuraciones, y comunicarse entre diferentes servicios. Es fácil de leer y escribir para los humanos, y también es fácil de procesar para las máquinas, lo que lo convierte en un formato de intercambio de datos muy popular.
