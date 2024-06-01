# Crear repositorio Git

#### Cree repositorios locales/remotos y confirme/envíe

*En estos seis pasos, configurará y enviará un proyecto a un repositorio remoto de GitHub.*

+ En primer lugar , inicializa un repositorio Git local con git init , creando un sistema de control de versiones.

+ Luego, preparas todos los cambios con git add –all , preparándolos para su confirmación.

+ En el paso 3, utiliza elCLI de GitHub para crear un nuevo repositorio público en GitHub.

+ El paso 4 implica confirmar los cambios con git commit –all , acompañado de un mensaje de confirmación.

+ En el paso 5, configura una conexión al repositorio remoto usando git remoto add origin .

+ Finalmente , envía sus cambios locales a GitHub con git push origin master, sincronizando efectivamente sus repositorios locales y remotos.
1. Inicializa el repositorio Git local
   
   Abrir el terminal y llegar a la carpeta donde se necesita crear con git init.

2. Agregar archivos En este paso, utilizará el comando git add –all para preparar todos los cambios en su directorio de trabajo para la siguiente confirmación.
   
   La preparación significa que le estás diciendo a Git qué archivos deseas incluir en la próxima confirmación.
   
   Al utilizar la opción –all , agrega todos los cambios, incluidos archivos nuevos, modificaciones y eliminaciones, al área de preparación.

3. Crear repositorio remoto de GitHub origin El comando `gh repo create testcli –public` inicia el proceso de creación del repositorio.
   
   Después de una ejecución exitosa, recibirá un mensaje de confirmación de que se ha creado el repositorio "*username*/testcli" en GitHub.

4. Commit Con este paso, ha confirmado sus cambios en el repositorio Git local.
   
   El comando git commit –all ha confirmado los cambios preparados con un mensaje de confirmación "hola".
   
   La respuesta de Git muestra qué archivos se cambiarán, se agregaron inserciones y/o se crearán.

5. Vincular local a remoto.
   
   git remote add origin *https://github.com/testcli.git*
   
   Configura el repositorio remoto para tu repositorio Git local. El comando asocia su repositorio Git local con el repositorio GitHub que creó anteriormente. Esto le permite enviar sus confirmaciones locales al repositorio remoto en GitHub.

6. Empujar `git push origin master`. En el paso final, estás enviando tus confirmaciones locales al repositorio remoto en GitHub. El comando git push origin master envía sus cambios a la rama "master" del repositorio remoto. Git enumera los objetos, los cuenta y los escribe en el repositorio remoto, actualizando efectivamente el repositorio de GitHub con sus cambios locales.
   
   El resultado muestra el progreso y confirma que la rama "maestra" en GitHub se ha actualizado con los cambios de su repositorio local.

# Cómo eliminar archivos de un repositorio Git después de ignorarlos

Afortunadamente, Git ofrece una solución para esto: la capacidad de [ignorar archivos con .gitignore](https://www.arsys.es/blog/git-gitignore) y, posteriormente, eliminarlos del repositorio de manera efectiva. En este artículo, explicaremos **cómo eliminar archivos después de haberlos ignorado** previamente. Aprenderás cómo limpiar tu repositorio de manera eficiente y mantenerlo limpio, lo que es esencial para un flujo de trabajo de desarrollo efectivo.

Como ya vimos, con el archivo *.gitignore*, configuramos las carpetas y archivos que se tienen que ignorar al añadir un repositorio. Si se gestiona correctamente, todo debería funcionar; pero si se agrega material al repositorio que no deseamos, podemos encontrarnos con un par de situaciones:

+ El archivo se ha añadido al staging area, pero que no se ha hecho commit a los archivos
+ El archivo o carpeta ya existe en el repositorio porque previamente se hizo commit

## Suprimir el seguimiento de archivos que están sólo en Staging Area

El **Staging Area** es una parte fundamental del flujo de trabajo que **actúa como un área intermedia** entre tu directorio de trabajo local y el repositorio Git. También se le conoce como «index». Su **función principal** es permitirte **seleccionar y preparar los cambios** que deseas incluir en tu próxima confirmación (commit) antes de enviarlos al repositorio.

Eliminarlos es sencillo con el siguiente comando:

**git reset HEAD nombre_de_archivo**

Si deseas eliminar todos los ficheros del directorio donde te encuentras, el comando sería el siguiente:

**git reset HEAD**

Con el comando *git status* se comprueba que los archivos ya no están en seguimiento.

## Suprimir del repositorio archivos ya confirmados (commit)

El principal problema podría venir si quieres eliminar un archivo ya confirmado, o una carpeta con archivos que no corresponden estar en el repositorio. Los archivos a los que hemos realizado commit por primera vez forman parte del repositorio, por lo que quitarlos de ahí, requiere de un paso adicional.

**Nota importante**: Antes de realizar estos pasos, asegúrate de haber hecho una [copia de seguridad de tus datos importantes, ya que este proceso puede ser irreversible.

### Eliminar los archivos del repositorio

Con el comando *rm* podremos borrar los archivos del repositorio, pero si lo ejecutamos tal cual nos eliminará también el archivo de nuestro directorio de trabajo.

Si queremos conservarlo tendríamos que poner lo siguiente:

git rm --cached nombre_archivo

Y si queremos eliminar el directorio y su contenido haríamos esto:

git rm -r --cached nombre_directorio

Con *–cached* mantenemos los ficheros en nuestro directorio de trabajo.

### Verificar que estamos ignorando los archivos con .gitignore

Debemos asegurarnos de que los archivos están siendo ignorados de manera correcta, y esto lo haremos revisando el archivo *.gitignor*e.

### Commit para validar los cambios

Ya con los archivos que no queremos y por tanto ignorados, deberemos confirmar estos cambios. Esto lo haremos situándonos en la carpeta en cuestión e introduciremos el siguiente comando:

git commit -m 'Eliminados archivos no deseados'

### Enviar los cambios al repositorio remoto

El último paso, si tienes un repositorio remoto donde envías código, es trasladar los datos allí y esto lo hacemos con el comando *push*.

git push

Y si tenemos que especificar el repositorio remoto y la rama, sería así:

git push origin master

> Aunque quites los archivos del repositorio se podrán seguir viendo en el histórico, y aunque se pueden quitar del histórico de commits, requiere de otros pasos de mayor complejidad.

# Sufrimiento y dolor

+ Actualizar el `origin` sin tener el repositorio en local:
  
  1. Crear en local una carpeta de trabajo, por ejemplo 'gitrepo' y entrar con `cd gitrepo`. No es necesario el git init.
  
  2. git clone del repositorio `myapp` ubicado en la url `https://github.com/jaivema/Reactjs.git` : el clon crea un directorio nombrado como el repositorio clon, `myapp`.
     
     1. A veces es necesario indicar la rama >git clone --branch ordersMapping `url`
  
  3. `cd myapp` y editar los ficheros.
  
  4. `git add .`para subirlos al stagging area.
  
  5. `git commit` para comitearlos al repositorio local.
  
  6. `git status` (opcional) Verificar el estado de los cambios.
  
  7. `git push` para finalizar.

**(Opcional) Si tengo ramas adicionales y deseo obtenerlas localmente:**

+ `git fetch origin`
  
  + Esto traerá todas las ramas remotas a tu repositorio local. Luego, puedes crear ramas locales que sigan a las ramas remotas utilizando:

+ `git checkout -b <nombre_de_la_rama_local> origin/<nombre_de_la_rama_remota>`
  
  + Esto creará una nueva rama local que rastree a la rama remota correspondiente.

+ El repositorio local estará actualizado con los cambios más recientes del repositorio remoto.
