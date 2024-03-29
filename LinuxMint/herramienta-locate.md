## Usando el comando locate en Linux

Fuente: [hostingers](https://www.hostinger.es/tutoriales/como-usar-comando-find-locate-en-linux/)

El comando **locate** es una alternativa útil, ya que es más rápido que **find** para realizar búsquedas. Eso se debe a que sólo escanea tu base de datos de Linux en lugar de todo el sistema. Además, la sintaxis es más fácil de escribir.

### La sintaxis básica

Ahora puedes usar el comando para buscar archivos usando esta sintaxis:

```
locate [my-file]
```

El comando **locate** estándar a veces puede mostrar archivos que han sido eliminados, si la base de datos no fue actualizada. La mejor solución es actualizar manualmente la base de datos ejecutando lo siguiente:

```
sudo updatedb
```

### Cómo usar el comando locate de Linux

Te compartiremos a continuación las aplicaciones más comunes del comando **locate** de Linux.

### Buscar por el nombre exacto del archivo

La sintaxis básica sólo te permite buscar archivos que contengan el término de búsqueda. Si quieres obtener el archivo con el nombre exacto, puedes utilizar la opción **-r** y añadir el símbolo de dólar (**$**) al final del término de búsqueda, por ejemplo:

```
locate -r my-file$
```

### Contar el número de archivos

Para saber cuántos archivos aparecen en el resultado de la búsqueda, introduce **-c** después del comando locate.

```
locate -c my-file
```

En lugar de listar todos los archivos, te dará el número total de ellos.

### Ignorar distinción entre mayúsculas y minúsculas

Usa **-i** en tu comando **locate** para ignorar la distinción entre mayúsculas y minúsculas. Por ejemplo:

```
locate -i my-file
```

Se mostrarán todos los archivos con este nombre, independientemente de las mayúsculas o minúsculas que se encuentren.

### Mostrar archivos existentes

Como hemos mencionado, el comando **locate** de Linux puede incluso mostrarte un archivo eliminado si no has actualizado la base de datos. Afortunadamente, puedes resolver esto usando la opción **-e**, así:

```
locate -e my-file
```

Al hacer esto, sólo obtendrás los archivos que existen en el momento de ejecutar el comando **locate**.

### Desactiva los errores durante la búsqueda

La opción **-q** evitará que cualquier error aparezca cuando se procese la búsqueda. Para hacer esto, simplemente introduce:

```
locate -q my-file
```

### Limitar el número de resultados de búsqueda

Si quieres limitar el número de resultados de la búsqueda, **-n <number>** funcionará. Sin embargo, recuerda que debes poner la opción al final de la línea de comandos. Echa un vistazo a este ejemplo:

```
locate my-file n 10
```

El script sólo mostrará los primeros 10 archivos que encuentre, incluso aunque haya más.