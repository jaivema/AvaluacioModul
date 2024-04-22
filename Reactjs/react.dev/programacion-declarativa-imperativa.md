# React y Input state

    React proporciona una forma declarativa de manipular la interfaz de usuario. En lugar de manipular partes individuales de la interfaz de usuario directamente, usted describe los diferentes estados en los que puede estar su componente y cambia entre ellos en respuesta a la entrada del usuario. Esto es similar a cómo piensan los diseñadores sobre la interfaz de usuario.

## Comparación de la interfaz de usuario declarativa con la imperativa

    Cuando diseña interacciones de interfaz de usuario, probablemente piense en cómo *cambia* la interfaz de usuario en respuesta a las acciones del usuario. Considere un formulario que permita al usuario enviar una respuesta:

+ Cuando escribe algo en el formulario, el botón "Enviar" **se habilita.**
+ Cuando presiona "Enviar", tanto el formulario como el botón **se desactivan y** **aparece** una rueda giratoria .
+ Si la solicitud de red tiene éxito, el formulario **se oculta y** **aparece** el mensaje "Gracias" .
+ Si la solicitud de red falla, **aparece** un mensaje de error y el formulario **se habilita** nuevamente.

    En **programación imperativa,** lo anterior corresponde directamente a *cómo implementa la interacción*. Tienes que **escribir las instrucciones exactas** para manipular la interfaz de usuario dependiendo de lo que acaba de suceder. Aquí hay otra forma de pensar en esto: imagina viajar al lado de alguien en un automóvil y decirle paso a paso adónde ir.

    Se llama *imperativo* porque tienes que “ordenar” cada elemento, desde la rueda giratoria hasta el botón, diciéndole a la computadora *cómo* actualizar la interfaz de usuario.

    Manipular la interfaz de usuario de manera imperativa funciona bastante bien para ejemplos aislados, pero se vuelve exponencialmente más difícil de administrar en sistemas más complejos.

    En React, no manipulas directamente la interfaz de usuario, lo que significa que no habilitas, deshabilitas, muestras ni ocultas componentes directamente. En lugar de eso, **declaras lo que quieres mostrar** y React descubre cómo actualizar la interfaz de usuario.

## Pensando en la interfaz de usuario de forma declarativa

    Para comprender mejor cómo pensar en React, explicaremos cómo reimplementar esta interfaz de usuario en React a continuación:

1. **Identifique** los diferentes estados visuales de su componente
   + **Vacío** : el formulario tiene un botón "Enviar" deshabilitado.
   + **Escribiendo** : El formulario tiene un botón "Enviar" habilitado.
   + **Enviando** : El formulario está completamente deshabilitado. Se muestra la ruleta.
   + **Éxito** : se muestra el mensaje "Gracias" en lugar de un formulario.
   + **Error** : Igual que el estado de escritura, pero con un mensaje de error adicional.
2. **Determinar** qué desencadena esos cambios de estado.
   * Puede activar actualizaciones de estado en respuesta a dos tipos de entradas:
     
     + **Entradas humanas,** como hacer clic en un botón, escribir en un campo, navegar por un enlace.
     
     + **Entradas de computadora,** como la llegada de una respuesta de red, la finalización de un tiempo de espera, la carga de una imagen.
   
   + En ambos casos, **debe configurar <u>variables de estado</u> para actualizar la interfaz de usuario.** Para el formulario que estás desarrollando, necesitarás cambiar el estado en respuesta a algunas entradas diferentes:
     
     + **Cambiar la entrada de texto** (humano) debería cambiarlo del estado *Vacío* al estado *Escribiendo* o viceversa, dependiendo de si el cuadro de texto está vacío o no.
     + **Al hacer clic en el botón Enviar** (humano), debería cambiarse al estado *Enviando* .
     + **La respuesta de red exitosa** (computadora) debería cambiarla al estado *de Éxito* .
     + **La respuesta fallida de la red** (computadora) debería cambiarla al estado *de Error* con el mensaje de error correspondiente.

3. **Representar** el estado en la memoria usando`useState`.
   
   + A continuación necesitarás representar los estados visuales de tu componente en la memoria con `useState`. La simplicidad es clave: cada pieza del estado es una “pieza móvil”, y **usted quiere la menor cantidad posible de “piezas móviles”.** ¡Más complejidad conduce a más errores!
   
   + Luego, necesitará una variable de estado que represente cuál de los estados visuales desea mostrar. Generalmente hay más de una forma de representar eso en la memoria, por lo que tendrás que experimentar con ello.
4. **Eliminar** cualquier variable de estado no esencial.
   + Desea evitar la duplicación en el contenido del estado, por lo que solo realiza un seguimiento de lo que es esencial. Dedicar un poco de tiempo a refactorizar la estructura de su estado hará que sus componentes sean más fáciles de entender, reducirá la duplicación y evitará significados no deseados.
5. **Conecte** los controladores de eventos para establecer el estado
   + Por último, cree controladores de eventos que actualicen el estado.


