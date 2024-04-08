# Remote Control

## Crear un repositorio remoto

Si quieres sincronizar tu versión **local** con la que está guardada GitHub.com, primero crea un nuevo repositorio **remoto (remote)** en GitHub.com.

+ Ve a [github.com](http://github.com), haz login, y haz clic en el '+' en la parte derecha arriba y después en 'Nuevo repositorio' ('New repository').
+ Dale un nombre que coincida con el nombre de tu repositorio local, 'hola-mundo', y una descripción corta.
+ Hazlo público. Esto significa que será listado en tu perfil público.
+ No inicialices con una archivo README porque ya tienes un archivo, localmente, llamado 'readme.txt'. Esta opción es una ayuda de GitHub si todavía no has creado uno local en tu ordenador.
+ Las opciones '.gitignore' and 'license' deben quedar en 'none' (ninguna). No las usaremos en este tutorial.
+ Haz clic en 'Create Repository' (crear repositorio).

## Conecta tu Local a tu remoto

Ahora que has iniciado un repositorio remoto en GitHub.com, en la parte de arriba puedes ver una 'configuración rápida' ('Quick Setup'). Asegúrate de que el botón 'HTTPS' está seleccionado y copia la dirección, que es la dirección de tu repositorio en los servidores de GitHub.

Vuelve a la terminal, y situado dentro de la carpeta 'hola-mundo' que inicializaste como repositorio de Git en el reto anterior, vas a decirle a Git que recuerde la dirección de la versión remota en los servidores GitHub. Puedes tener varios remotos configurados en tu ordenador local, por lo que el remoto necesita un nombre. El remoto principal es generalmente llamado `origin`.

Para agregar un remoto llamado 'origin' a tu repositorio:

`git remote add origin <URLDEGITHUB>`

Tu repositorio **local** ahora sabe dónde está tu repositorio **remoto**, llamado 'origin', que está ubicado en los servidores de GitHub. Piensa en esto como si añadieras un nombre y un número de teléfono en los contactos de tu teléfono móvil para llamarlos rápidamente cada vez que te haga falta.

> **Usuarios de Windows:**
> 
> Si tienes **GitHub Desktop** en tu ordenador, un remoto llamado 'origin' se crea automáticamente en tu repositorio local. En este caso, sólo necesitarás decirle qué URL asociar con 'origin'. Para esto, en vez de usar el comando 'add' mencionado anteriormente, utiliza el siguiente:
> 
> `git remote set-url origin <URLDEGITHUB>`

## Empuja (push) tu trabajo al remoto

Lo siguiente es hacer **push** (empujar) todo lo que has hecho localmente a tu repositorio remoto en GitHub. Esto es algo que harás con frecuencia para que tu versión remota esté al día y coincida con el estado tu versión local.

Git tiene un sistema de ramas (branches) para que puedas trabajar en diferentes partes del proyecto en tiempos diferentes. Aprenderemos más acerca de ello después, pero por defecto la primera branch es nombrada 'master'. Cuando empujas (push) (y más adelante tiras) desde un proyecto, le dices a Git el **nombre de la rama (branch name)** que quieres y el nombre del **remoto** en el que debe residir.

En este caso, vamos a enviar una rama llamada 'master' a nuestro remoto en GitHub llamado 'origin'.

`git push origin master`

Ahora ve a la página de tu repositorio remoto en GitHub.com y actualízala. **¡Wow!** Todo es lo mismo ahora en tu ordenador local y remotamente en GitHub. Felicitaciones, ¡has creado tu primer repositorio público!

+ **Agregar conexiones remotas**
  `git remote add <NOMBREDELREMOTO> <URL>`+ **Modificar la URL de un remoto**
  `git remote set-url <NOMBREDELREMOTO> <URL>`+ **Tirar de los cambios**
  `git pull <NOMBREDELREMOTO> <NOMBREDELBRANCH>`+ **Ver las direcciones remotas**
  `git remote -v`+ **Empujar cambios**
  `git push <NOMBREDELREMOTO> <BRANCH>`
