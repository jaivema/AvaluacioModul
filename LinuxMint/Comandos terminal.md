COMANDOS LINUX

permisos

Lectura        Escritura        Ejecución

    r            w                x

    0            0                0            0

    0            0                1            1

    0            1                0            2

    0            1                1            3

    1            0                0            4

    1            0                1            5

    1            1                0            6

    1            1                1            7        superusuario

drwxrwxrwx    'd' directorio

-rwxrwxrwx    '-' archivo

1er bloque de 3 -> grupo propietario

2o bloque 3     -> grupo usuario

3er bloque de 3 -> resto de usuarios

*Los archivos creados en Linux p  or defecto no tienen permiso de ejecutar

-–help Sirve para todos los comandos, indica todas las variantes

./[programa bash]: para ejecutar el programa

./nombre del script Sirve para ejecutar el programa

addgroup nombre_grupo    Se utiliza para crear un grupo nuevo.    addgroup Pepito

adduser --ingroup [grupo][nuevo usuario]: agregar nuevo usuario al grupo

adduser nombre_usuario [nombre_grupo]:    Se utiliza para añadir un usuario. En ese momento, no solo se creará la cuenta del usuario sino también su directorio de trabajo, un nuevo grupo de trabajo que se llamará igual que el usuario y añadirá una serie de ficheros de configuración al directorio de trabajo del nuevo usuario.    adduser Pepito Invitados.

cal mm/aaaa: calendario, después de cal añadir mes y año. Muestra los días de la semana en filas

cat [archivo]: muestra el contenido de un fichero

cd .. Para volver al directorio anterior

cd /home/ nos dirige al directorio home dónde dentro deben aparecer todas las carpetas

cd más el nombre de la carpeta: para acceder a cualquier carpeta

cd: retroceder al inicio del terminal

chgrp: Cambia el grupo al que pertenece el archivo. || Sintaxis: chgrp nom_grupo nom_archivo.

chmod 777 + nombre del script Habilita los permisos para la ejecución del archivo

chown: Cambia el propietario de un archivo. || Sintaxis: chown nom_propietario nom_archivo.

clear: limpia la pantalla, y coloca el prompt al principio de la misma

cp archivo /directorio Copia archivo en directorio manteniendo nombre y el original

cp archivo1 archivo2 Copia archivo1 como archivo2 (nuevo nombre) manteniendo el original

date: muestra fecha actual

delgroup [nom_grupo]: Se utiliza para eliminar un grupo

deluser --remove-home [Usuario]: fuerza a eliminar el directorio del usuario

deluser [Usuario]: Elimina una cuenta de usuario. La pega de este comando es que no elimina automáticamente el directorio de trabajo del usuario. || Sintaxis: deluser nom_usuario.

df: mirar disco

exit: Salir y cerrar los procesos del teminal

find nom_directorio o nom_archivo condición: Busca los archivos que satisfacen la condición en el directorio indicado

find: buscador archivos, después de find añadir nombre archivo que quieres buscar

free: muestra estado de memoria RAM

fsck: revisa estado de disco

gpasswd -d [Usuario][Grupo]: elimina el usuario del grupo

groups [Usuario]: muestra todos los grupos en los que está [Usuario]

history -c:    Es Utilizado para Borra el Historial de Comandos

history: muestra historial de comandos ejecutados

id: Numero id de un usuario

sudo update-java-alternatives --list

> java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64

ifconfig: obtener información de la configuración de red

kill: Permite interactuar con cualquier proceso mandando señales.Kill (pid) termina un proceso y Kill -9 (pid) fuerza a terminar un proceso en caso de que la anterior opción falle. || Sintaxis: kill [opciones] PID

ls -a    Lista todos los archivos, incluidos los ocultos y los del sistema

ls -l:     Lista también las propiedades y atributos

ls -lh: búsqueda de información de todas las carpetas, incluye tamaño del archivo

ls: lista los archivos de un determinado directorio

ls: mostrar el contenido de la carpeta

ls -la ~/.config enumerará el propietario actual y los permisos

 ~/.config(si existen)

man + nombre comando  Sirve para ayudarnos en cuanto a la utilidad del comando

man ls: muestra el help, aplicable a todos

man man: muestra todos los comandos

mkdir Para crear uno o varios directorios

mkdir y nombre del archivo: crear carpeta

mv archivo /directorio Mueve archivo dentro de directorio

mv archivo /directorio: Mueve archivo dentro de directorio

mv archivo1 archivo2 Renombra archivo1 en archivo2

mv archivo1 archivo2: Renombra archivo1 en archivo2

nano + nombre del script  Sirve para la creacion de un pequeño programa

nano [archivo]: invoca el editor de texto para el archivo existene o nuevo

nautilus: explorador de archivos

ncal: Muestra los días de la semana por columna

ping: El comando ping se utiliza generalmente para testear aspectos de la red, útil para verificar instalaciones TCP/IP

ps -aux: Lista de los programas que se están ejecutando actualmente con su PID (Process IDentifier)

ps -ef: Lista los procesos que se estén ejecutando con que contengan la cadena nombre_proceso procesos e identificadores

pwd: ruta actual

reboot: reinicia sistema

rm --help l: información de todos los comandos de borrar, se aplica a cualquier comando

rm -R Para borrar un directorio y sus contenidos de forma recursiva

rm -R y nombre del archivo: borrar carpeta

rm -R*: borrar todas las carpeta que incluya el nombre que queremos borrar

route : se utiliza para visualizar y modificar la tabla de enrutamiento

shutdown -h now: para parar Ubuntu

shutdown -r now: reiniciar Ubuntu

sudo apt search java

sudo apt install tree: instalar tree para ver todo el diagrama

sudo apt update: para actualizar

sudo apt upgrade: para instalar la actualización

sudo nautilus: acceso al navegador de archivos con privilegios de root (requiere contraseña)

top: cómo está funcionando el ordenador

traceroute [opciones] host [tamaño del paquete] U: permite determinar la ruta tomada por un paquete para alcanzar su destino en Internet

tree se debe instalar primero con sudo apt install tree, a continuación ya se puede utilizar y muestra todo el árbol al igual que en windows

usermod -a -G [grupo][usuario]: añade el usuario al grupo

usermod -g [grupo][usuario]: asigna grupo primario

sudo apt purge <nombre-del-paquete>

sudo apt-get remove --purge $(deborphan): Cuando instalamos un paquete en las distribuciones Linux (en las que yo conozco), se instalan otros paquetes (dependencias). Si en el futuro desinstalas ese paquete, esas dependencias pueden quedar instaladas en el sistema, aunque no serán usadas por nadie, simplemente ocuparán espacio en disco. Estas dependencias son llamadas paquetes huérfanos.

sudo apt-get autoclean: Limpia el sistema de aplicaciones no instaladas y elimina del cache los paquetes .deb con versiones anteriores a los de los programas que hay instalados.

jobs muestra los procesos detenidos o suspendidos por la herramienta Ctr+z y el comando fg lo pone en primer plano

    ejemplo

    [1] - Detenido    vim admin_template.pl (dir ahora: ~/Templates)

    [2] + Detenido    vim admin_template.pl (dir ahora: ~/Templates)

**

sudo apt update:para actualizar

sudo apt upgrade:para instalar la actualización 

s: guardar cambios

reboot: inicia el proceso de reinicio

cd /home/: encontrar tu usuario

ls: mostrar el contenido de la carpeta

mkdir y nombre del archivo: crear carpeta

rm -R y nombre del archivo: borrar carpeta

rm -R*: borrar todas las carpeta que incluya el nombre que queremos borrar

sudo apt install tree: instalar tree para ver todo el diagrama

rm --help l: información de todos los comandos de borrar, se aplica a cualquier comando

ls -lh: búsqueda de información de todas las carpetas, incluye tamaño del archivo

ls -l: búsqueda de información de todas las carpetas

cd ..: retroceder un paso

exit: salir del terminal

cd: retroceder al inicio del terminal

cd más el nombre de la carpeta: para acceder a cualquier carpeta

pwd: ruta actual

history: muestra historial de comandos ejecutados

df: mirar disco

top: cómo está funcionando el ordenador

reboot: reinicia sistema

shutdown -h now: para parar Ubuntu

shutdown -r now: reiniciar Ubuntu

ps ef: muestra todos los procesos e identificadores

kill número de proceso: elimina el proceso

ps -ef: muestra estado del proceso

man ls: muestra el help, aplicable a todos

man man: muestra todos los comandos

Instalar tree

sudo apt install tree

Crear archivo

nano nombre del archivo.txt: para crear archivo de texto, depende de la extensión creará uno o otro

Ctrl x: para guardar cambios

s

enter

Crear script

nano programa: crear programa

echo ‘hola mundo’: editar un texto

Ctrl X: guardar cambios

s

enter

./programa: para ejecutar el programa

Permisos

chmod 770 nombre del programa: para cambiar permisos

El primer dígito define el primer bloque, que corresponde a R (lectura)

El segundo dígito define el segundo bloque, que corresponde a W (escritura)

El tercer dígito define el tercer bloque, que corresponde a X (ejecutar)

enter

ls -l

./programa

enter

Añadir usuario

sudo adduser nombre usuario

pregunta contraseña

rellenar datos

s

Cambiar usuario

su nombre usuario

*Los archivos creados en Linux por defecto no tienen permiso de ejecutar

script bash: todos los comandos se ejecutan en un sólo script

ejemplo: 

nano programa 3

mkdir ejemplo 3

cd ejemplo 3

mkdir a b c

Ctrl x

chmod 777 programa 3

ls

./programa 3

ls

ls -l

Cambiar nombre de archivo

mv nombre archivo espacio más nombre nuevo

Instalar aplicaciones desde script

sudo apt install nombre de aplicación -s

**

Permisos situación rara de gh auth (permiso denegado) - resuelto : desinstalar firefox del snap

ls -la ~/.config enumerará el propietario actual y los permisos

 ~/.config(si existen)

El propietario (tercera columna) debe ser su usuario.

Si no es así, hágalo chown -R `whoami` ~/.config

(explicación: whoami devuelve su nombre de usuario en

la máquina actual y -Rcambia todo en el directorio de forma

 recursiva)

Luego, asegúrese de que su usuario pueda escribir

 en los archivos: chmod -R u+w ~/.config

(explicación: u+w significa "dar permisos de escritura a

mi usuario")

Si chown aparece chmodun mensaje de error que indica

 que no tiene permisos, ante ponga el mismo comando con sudo.

Link comando Ubuntu

https://www.guia-ubuntu.com/index.php/Comandos

[Reparar paquetes rotos y dependencias incumplidas en Debian y Ubuntu](https://geekland.eu/reparar-paquetes-rotos-linux/)

## ¿QUÉ ES UN PAQUETE ROTO?

En el momento de instalar un paquete puede darse el caso que no se instale correctamente o que no sea compatible con el resto de paquetes. Si esto pasa es posible que no podamos actualizar, instalar ni desinstalar ningún paquete de nuestro sistema operativo. El paquete responsable de que no podamos instalar y desinstalar paquetes es un paquete roto.

Los paquetes acostumbran a romperse en los siguientes casos:

1. Al instalar programas externos a los repositorios oficiales de nuestra distribución.

2. Si se interrumpe accidentalmente la instalación de un programa.

3. Si se interrumpe accidentalmente la actualización del sistema operativo.

4. Etc.

## ¿QUÉ SON LAS DEPENDENCIAS INCUMPLIDAS?

Al instalar un programa como LibreOffice se instalan multitud de paquetes, pero nosotros solo damos orden de instalar el paquete libreoffice. Esto es así por las dependencias de los paquetes. Es decir:

1. Damos la orden de instalar el paquete libreoffice.

2. El paquete libreoffice trae asociada la información que para funcionar correctamente tienen que instalarse una serie de paquetes adicionales. Estos paquetes adicionales se llaman dependencias. Obviamente, los paquetes adicionales o dependencias se instalarán de forma automática.

3. Las dependencias del paquete libreoffice también pueden tener nuevas dependencias y así sucesivamente.

Por lo tanto, en el momento que se haya instalado el paquete libreoffice y todas las dependencias podremos usar LibreOffice.

En el momento que un paquete requiere una dependencia que no está presente en los repositorios de nuestra distribución se generará una dependencia incumplida y por lo tanto no podremos instalar y usar el programa que estamos instalando. En el caso que tangamos paquetes rotos también se generarán dependencias incumplidas o errores de dependencias.

## PASOS A SEGUIR PARA REPARAR PAQUETES ROTOS Y SOLUCIONAR DEPENDENCIAS INCUMPLIDAS EN LINUX

En el caso que tengan paquetes rotos les propongo aplicar alguna de las soluciones que detallaré a continuación.

###### Nota: Al intentar reparar paquetes rotos se nos puede proponer eliminar una gran cantidad de paquetes para solucionar dependencias incumplidas. Por lo tanto, antes de aceptar alguna de las soluciones propuestas lean detenidamente lo que se realizará en el equipo.

### Reparar paquetes rotos con dpkg y el gestor de paquetes apt

Lo primero que haremos es intentar configurar paquetes que han sido desempaquetados, pero no configurados. Para ello ejecutaremos el siguiente comando en la terminal:

> **sudo dpkg --configure -a**

Si no se soluciona el problema limpiaremos la cache local de paquetes .deb ejecutando los siguiente comando en la terminal:

> **sudo apt-get clean && sudo apt-get autoclean**

Acto seguido regeneraremos la cache de los repositorios con el parámetro –fix-missing. De este modo intentaremos detectar y reparar problemas de dependencias en nuestro sistema operativo. Por lo tanto en la terminal ejecutamos el siguiente comando:

> **sudo apt-get update --fix-missing**

Seguidamente usaremos apt para intentar corregir las dependencias rotas. Para ello ejecutaremos el siguiente comando en la terminal:

> **sudo apt-get install -f**

Después de ejecutar el comando se intentará buscar una solución para solucionar nuestro problema de dependencias incumplidas y paquetes rotos.

En el caso que sigan los problemas borraremos las lock files de apt y dpkg. Para ello ejecutaremos el siguiente comando en la terminal:

> **sudo rm /var/lib/apt/lists/lock && sudo rm /var/cache/apt/archives/lock && sudo rm /var/lib/dpkg/lock**

###### Nota: Las lock files tienen la función de evitar que 2 o más procesos accedan a los mismos datos.

Después de ejecutar este último comando vuelvan a repetir la totalidad de comandos citados en este apartado.

### Reparar paquetes rotos y dependencias con la terminal y dpkg

En el caso que la solución anterior no haya funcionado intentaremos eliminar el paquete roto que está generando problemas. Para ello ejecutaremos el siguiente comando:

> **sudo apt-get remove**

En el caso que no tengamos éxito averiguaremos el paquete que está generando problemas ejecutando el siguiente comando:

> **sudo dpkg -l | grep ^..r**

Acto seguido ejecutaremos el siguiente comando para intentar forzar la desinstalación del paquete que presenta problemas:

> **sudo dpkg --remove --force-remove--reinstreq nombre_paquete**

###### Nota: Deben remplazar nombre_paquete por el paquete roto o que está generando problemas.

A continuación limpiaremos la cache local de nuestro repositorios ejecutando el siguiente comando:

> **sudo apt-get clean && sudo apt-get autoclean**

Finalmente intentaremos actualizar nuestro sistema operativo ejecutando el siguiente comando en la terminal:

> **sudo apt-get update && sudo apt-get dist-upgrade**

Si el sistema se actualiza sin problema habremos resuelto el problema de dependencias y paquetes rotos.
