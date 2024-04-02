# COMANDOS TERMINAL LINUX

## Concepto de permisos

| Lectura | Escritura | Ejecución | Usuario     |
| ------- | --------- | --------- | ----------- |
| r       | w         | x         | privilegios |
| 0       | 0         | 0         | 0           |
| 0       | 0         | 1         | 1           |
| 0       | 1         | 0         | 2           |
| 0       | 1         | 1         | 3           |
| 1       | 0         | 0         | 4           |
| 1       | 0         | 1         | 5           |
| 1       | 1         | 0         | 6           |
| 1       | 1         | 1         | 7           |

| tipo | grupo propietario | grupo usuario | resto de usuarios | tipo       |
| ---- | ----------------- | ------------- | ----------------- | ---------- |
| d    | rwx               | rwx           | rwx               | directorio |
| -    | rwx               | rwx           | rwx               | archivo    |

```
ls -lsha
4,0K drwxrwxr-x 10 jaime jaime 4,0K mar 24 21:56 .
4,0K drwxrwxr-x  6 jaime jaime 4,0K mar 24 21:40 ..
4,0K drwxrwxr-x  8 jaime jaime 4,0K mar 25 08:42 .git
4,0K drwxrwxr-x  2 jaime jaime 4,0K mar 23 09:19 GIT
 36K -rw-rw-r--  1 jaime jaime  33K mar 13 10:16 IFCD0210_ficha.pdf
4,0K drwxrwxr-x  4 jaime jaime 4,0K mar 24 21:57 JavaSE
4,0K drwxrwxr-x  3 jaime jaime 4,0K feb 29 20:06 JS
4,0K drwxrwxr-x  3 jaime jaime 4,0K feb 29 20:06 LinuxMint
4,0K drwxrwxr-x  2 jaime jaime 4,0K feb 29 20:06 Markdown
4,0K drwxrwxr-x  6 jaime jaime 4,0K mar 20 12:20 Reactjs
4,0K -rw-rw-r--  1 jaime jaime 3,5K mar 17 11:20 README.md
4,0K drwxrwxr-x  4 jaime jaime 4,0K mar 23 09:20 Spring
```

---

## Comandos en linea básicos

- Fuentes: [Comandos - Guía Ubuntu](https://www.guia-ubuntu.com/index.php/Comandos)

**-–help** Sirve para todos los comandos, indica todas las variantes

**./nombredDelBashScrip** Ejecutar el programa

**addgroup nombre_grupo** Se utiliza para crear un grupo nuevo

> addgroup Pepito

**adduser --ingroup grupo nuevo_usuario** Añade nuevo usuario al grupo

**adduser nombre_usuario nombre_grupo** No solo se creará la cuenta del usuario sino también su directorio de trabajo, un nuevo grupo de trabajo que se llamará igual que el usuario y añadirá una serie de ficheros de configuración al directorio de trabajo del nuevo usuario

> adduser Pepito Invitados.

**cal mm/aaaa** Calendario. Muestra los días de la semana en filas

**cat archivo** Muestra el contenido de un fichero

**ls** Lista los directorios y archivos del directorio actual

> **ls -lsah** Listado completo del directorio actual con detalles en formato humano. Incluyendo los archivos ocultos

**cd ..** Para volver al directorio superior del sistema de carpetas

**cd carpeta** Accede a cualquier carpeta dentro del sistema de capetas actual

> **cd home**
> 
> **cd Documentos**

**cd /** Lleva al directorio raíz del sistema de archivos.

**chgrp nom_grupo nom_archivo** Cambia el grupo al que pertenece el archivo

**whoami** devuelve su nombre de usuario en la máquina actual

**chmod 777 nombre_del_script** Habilita los permisos para la ejecución del archivo

**chown nom_propietario nom_archivo** Cambia el propietario de un archivo

**ls -la ~/.config** Enumerará un listado del propietario actual y los permisos (si existen)

**chown -R u+w** Cambia el propietario de todo en el directorio de forma recursiva dando permisos de escritura

> chmod -R u+w ~/.config

**clear**: limpia la pantalla, y coloca el prompt al principio de la misma

**cp archivo /directorio** Copia archivo en el directorio manteniendo

**cp archivo1 archivo2** Copia archivo1 como archivo2 (nuevo nombre) manteniendo el original

**date** Muestra fecha actual

**delgroup [nom_grupo]** Elimina un grupo

**deluser --remove-home [Usuario]** fuerza a eliminar el directorio del usuario

**deluser [Usuario]** Elimina una cuenta de usuario. La pega de este comando es que no elimina automáticamente el directorio de trabajo del usuario

**usermod -a -G [grupo][usuario]**: Añade el usuario al [grupo]

**usermod -g [grupo][usuario]** Asigna grupo primario para el usuario

**df** Muestra información sobre el sistema de ficheros en el que reside cada FICHERO,
o por omisión sobre todos los sistemas de ficheros

```
S.ficheros     bloques de 1K   Usados Disponibles Uso% Montado en
tmpfs                 812812     1200      811612   1% /run
/dev/sda3          308001632 86694884   205588144  30% /
tmpfs                4064040        0     4064040   0% /dev/shm
tmpfs                   5120        4        5116   1% /run/lock
/dev/sda2             524252     6220      518032   2% /boot/efi
tmpfs                 812808      848      811960   1% /run/user/1000
```

**exit** Cerrar los procesos del teminal y cerrar la ventana del terminal

**find nom_directorio o nom_archivo condición** Busca los archivos que satisfacen la condición en el directorio indicado

> find . -name nom_archivo busca en la carpeta en la que estás trabajando actualmente (directorio actual).
> 
> [referencias "find"](./herramienta-find.md)

**locate nom_archivo** Es más rápido que *find* para realizar búsquedas. Eso se debe a que sólo escanea tu base de datos de Linux en lugar de todo el sistema.

```
  -b, --basename         busca la parte del nombre de archivo de nombres de ruta
  -c, --count            Muestra el número de coincidencias
```

> [referencias "locate"](./herramienta-locate.md)

**free** Muestra el estado de memoria RAM

**fsck** Revisa estado de disco

**gpasswd** Herramienta que gestiona el GRUPO de trabajo

```
Modo de uso: gpasswd [opciones] GRUPO

Opciones:
  -a, --add USUARIO             añade USUARIO al GRUPO
  -d, --delete USUARIO          elimina USUARIO del GRUPO
  -h, --help                    muestra este mensaje de ayuda y termina
  -Q, --root CHROOT_DIR         directory to chroot into
  -r, --remove-password         elimina la contraseña de GRUPO
  -R, --restrict                restringe el acceso a GRUPO a sus miembros
  -M, --members USUARIO,...     establece la lista de miembros de GRUPO
      --extrausers              use the extra users database
  -A, --administrators ADMIN,...
                                establece la lista de administradores de GRUPO
Excepto las opciones -A y -M, las opciones no se pueden combinar.
```

> gpasswd -d [Usuario][Grupo] Elimina el usuario del grupo

**groups [Usuario]** Muestra todos los grupos en los que está *[Usuario]*

**history** Muestra historial de comandos ejecutados

```
    Muestra o manipula la lista de la historia.

    Muestra la lista de la historia con números de línea, mostrando
    cada línea modificada con un `*' como prefijo.  El argumento N
    muestra solamente las últimas N entradas.

    Opciones:
      -c    borra la lista de historia eliminando todas las entradas
      -d despl    borra la entrada de la historia en la posición DESPL. Los
            desplazamientos negativos se cuentan hacia atrás desde el final de
            la lista de historia

      -a    agrega las líneas de historia de esta sesión al fichero de historia
      -n    lee todas las líneas de historia que no se han leído del fichero
        de historia
      -r    lee el fichero de historia y agrega el contenido al fichero
        de historia
      -w    escribe la historia actual en el fichero de historia

      -p    hace expansión de historia en cada ARGumento y muestra el
        resultado, sin guardarlo en la lista de historia
      -s    agrega los ARGumentos a la lista de historia como
        una sola entrada
```

> **history -c** Borra el Historial de Comandos

**id** Numero id de un usuario en todos los grupos del usuario

**ifconfig** Obtener información de la configuración de red

**kill** Permite interactuar con cualquier proceso mandando señales

    Kill es una orden interna del shell que permite: 

- Que se puedan utilizar IDs de trabajo en lugar de IDs de proceso 

- Permite matar procesos si se ha alcanzado el límite de procesos que se pueden
   crear

```
kill: kill [-s id_señal | -n num_señal | -id_señal] pid | idtrabajo ... o kill -l [id_señal]
    Envía una señal a una trabajo.

    Envía a los procesos nombrados por PID (o IDTRABAJO) la señal ID_SEÑAL
    o NUM_SEÑAL. Si no están presentes ni ID_SEÑAL o NUM_SEÑAL, se asume
    SIGTERM.

    Opciones:
      -s sig    SIG es un nombre de señal
      -n sig    SIG es un número de señal
      -l    lista los nombres de señales; si hay argumentos a continuación
            de `-l', se asume que son números de señal para las cuales se debe
    mostrar el nombre.

    Estado de Salida:
    Devuelve correcto a menos que se dé una opción inválida o suceda un error.
```

> kill (pid) termina un proceso
> 
> kill -9 (pid) fuerza a terminar un proceso en caso de que la anterior opción falle

**ls** Muestra el contenido de un determinado directorio

> ls -a Lista todos los archivos, incluidos los ocultos y los del sistema
> 
> ls -l Lista también las propiedades y atributos
> 
> ls -lh Búsqueda de información de todas las carpetas, incluye el tamaño del archivo

**man [comando]** Abre el manual de uso para un comando determinado

> man ls Muestra los usos para el comando ls
> 
> man man Muestra todos los comandos

**mkdir** Crear uno o varios directorios

> mkdir [nombre_carpeta] crear la carpeta

**mv** Herramienta para gestionar archivos

> mv [archivo /directorio] Mueve el archivo dentro de directorio
> 
> mv [archivo1] [archivo2] Renombra archivo1 en archivo2

**rm [nombre_archivo o directorio]** Borra (desenlaza) los fichero(s)

> Por omisión, rm no borra directorios. Utilice la opción --recursive (-r o -R)
> para borrar también cada directorio listado, junto con todo su contenido

**nano** Invoca el editor de texto nativo (sucesor de *Vim*)

> nano [archivo] Invoca el editor de texto para el archivo existene o crea nuevo

**ncal** Una pequeña aplicación que printa un calendario en el terminal

```
ncal
        Marzo 2024        
lu     4 11 18 25   
ma     5 12 19 26   
mi     6 13 20 27   
ju     7 14 21 28   
vi  1  8 15 22 29   
sá  2  9 16 23 30   
do  3 10 17 24 31   
```

```
ncal -C
     Marzo 2024       
do lu ma mi ju vi sá  
                1  2  
 3  4  5  6  7  8  9  
10 11 12 13 14 15 16  
17 18 19 20 21 22 23  
24 25 26 27 28 29 30  
31                    
```

**ping** El comando ping se utiliza generalmente para testear aspectos de la red, útil para verificar instalaciones TCP/IP

**ps** Muestra una instantánea de los procesos en ejecución actualies con su PID (Process IDentifier)

> Para ver todos los proceso del sistema en sintaxis standard
> 
>  ps -e
>  ps -ef
>  ps -eF
>  ps -ely
> 
> Para ver todos los proceso del sistema en sintaxis BSD
> 
>  ps ax
>  ps axu
> 
> Mostrar el árbol de porcesos
>  ps -ejH
>  ps axjf

**pwd** Ruta actual

**reboot** Reinicia sistema operativo

**jobs** muestra los procesos detenidos o suspendidos por la herramienta Ctr+z y el comando fg lo pone en primer plano

> [1] - Detenido    vim admin_template.pl
> 
> [2] + Detenido   vim admin_template.pl

**route** Muestra la tabla de enrutamiento del núcleo

```
Tabla de rutas IP del núcleo
Destino         Pasarela        Genmask         Indic Métric Ref    Uso Interfaz
default         _gateway        0.0.0.0         UG    100    0        0 enp0s3
10.0.2.0        0.0.0.0         255.255.255.0   U     100    0        0 enp0s3
link-local      0.0.0.0         255.255.0.0     U     1000   0        0 enp0s3
```

**top** Visor del administrador de sistema y árbol de porcesos en tiempo real

**traceroute [opciones] host [tamaño del paquete] U** Permite determinar la ruta tomada por un paquete para alcanzar su destino en Internet

> traceroute dirección_ip_o_nombre_de_host
> 
> traceroute google.com
> 
> **tracert** En algunos sistemas tienen instalado el *tracert* en lugar de **traceroute** (la funcionalidad es la misma) y es posible que se necesite privilegios de superusuario a traves de 'sudo'

**uname -r** lista las versiones del kernel instaladas en el sistema. 

> 5.15.0-92-generic

---

## SuperUser Do (sudo)

    **Se utiliza para ejecutar comandos con los privilegios de superusuario de forma temporal y controlada.**

    Cuando se utiliza el comando *sudo*, se le solicitará al usuario que ingrese su contraseña, y si tiene los permisos adecuados, el comando especificado después de "sudo" se ejecutará con privilegios de superusuario. Esto permite realizar tareas administrativas sin necesidad de iniciar sesión directamente como el usuario root.

### Advanced Package Tool (apt)

    **Es una herramienta poderosa y útil para la gestión de paquetes en sistemas basados en Debian.**

Proporciona una interfaz fácil de usar para instalar, actualizar, eliminar y administrar paquetes de software en el sistema operativo.

#### Listado de operaciones y herramientas del sistema con privilegios necesarios

**sudo apt install tree** Herramienta que permite ver el árbol de directorios y ficheros.

> Esta herramienta no viene por defecto con la instalación por defecto del terminal y necesita ser instalada

```
(...)
│   ├── javase-maven.md
│   ├── mooc java1 progress
│   │   ├── assets
│   │   │   ├── Part1.png
│   │   │   ├── Part2.png
│   │   │   ├── Part3.png
│   │   │   ├── Part4.png
│   │   │   ├── Part5.png
│   │   │   └── Part6.png
│   │   └── Index java exercises.md
│   └── Programacion Java.md
├── JS
│   └── lista-de-tareas
│       ├── index.html
│       ├── main.js
│       └── styles.css
├── LinuxMint
│   ├── assets
│   │   └── gparted-main-window.png
│   ├── Comandos terminal.md
│   └── LinuxMint.md
├── Markdown
│   └── GuiaBasica.md
(...)
```

**sudo apt search [palabra_clave]** Busca coincidencias por [palabra_clave] de los paquetes instalados en el sistema

**sudo apt update** Actualiza el sistema

**sudo apt upgrade** Instalar la mejora de los paquetes instalados

**sudo apt list --upgradable** Lista los paquetes disponibles para mejorar

**sudo apt-get autoclean** Limpia el sistema de aplicaciones no instaladas y elimina del cache los paquetes .deb con versiones anteriores a los de los programas que hay instalados.

**sudo apt autopurge** Borra los archivos de configuración de todo el sistema que dejaron los paquetes eliminados

**sudo apt autoremove** Elimina paquetes de dependencia que ya no son necesarios

**sudo apt remove --purge $(deborphan)** Cuando instalamos un paquete en las distribuciones Linux (en las que yo conozco), se instalan otros paquetes (dependencias). Si en el futuro desinstalas ese paquete, esas dependencias pueden quedar instaladas en el sistema, aunque no serán usadas por nadie, simplemente ocuparán espacio en disco. Estas dependencias son llamadas paquetes huérfanos.

**sudo update-java-alternatives --list** Lista las versiones del java instaladas.

> java-1.11.0-openjdk-amd64      1111       /usr/lib/jvm/java-1.11.0-openjdk-amd64
> java-1.17.0-openjdk-amd64      1711       /usr/lib/jvm/java-1.17.0-openjdk-amd64

**sudo update-alternatives --config java** Muestra una el listado de versiones java para seleccionar

> ```
> Existen 2 opciones para la alternativa java (que provee /usr/bin/java).
> 
>   Selección   Ruta                                         Prioridad  Estado
> ------------------------------------------------------------
> * 0            /usr/lib/jvm/java-17-openjdk-amd64/bin/java   1711      modo automático
>   1            /usr/lib/jvm/java-11-openjdk-amd64/bin/java   1111      modo manual
>   2            /usr/lib/jvm/java-17-openjdk-amd64/bin/java   1711      modo manual
> 
> Pulse <Intro> para mantener el valor por omisión [*] o pulse un número de selección:
> ```

**sudo apt purge [nombre-del-paquete]** Esta acción es más completa que simplemente eliminar el paquete con `apt remove`, ya que también *elimina cualquier archivo de configuración asociado al paquete*.

**sudo apt install [nombre_de_aplicación]** Instalar aplicaciones desde script

**sudo apt install linux-headers-$(uname -r)** Instala las dependencias necesarias para nuestro kernel instalado.

---

## Instalación de aplicaciones

### Qué es un paquete roto

    En el momento de instalar un paquete puede darse el caso que no se instale correctamente o que no sea compatible con el resto de paquetes. Si esto pasa es posible que no podamos actualizar, instalar ni desinstalar ningún paquete de nuestro sistema operativo. El paquete responsable de que no podamos instalar y desinstalar paquetes es un paquete roto.

Los paquetes acostumbran a romperse en los siguientes casos:

1. Al instalar programas externos a los repositorios oficiales de nuestra distribución.

2. Si se interrumpe accidentalmente la instalación de un programa.

3. Si se interrumpe accidentalmente la actualización del sistema operativo.

4. Etc.

#### Qué son las dependencias incumplidas

[Reparar paquetes rotos y dependencias incumplidas en Debian y Ubuntu](https://geekland.eu/reparar-paquetes-rotos-linux/)

    Al instalar un programa como LibreOffice se instalan multitud de paquetes, pero nosotros solo damos orden de instalar el paquete libreoffice. Esto es así por las dependencias de los paquetes. Es decir:

1. Damos la orden de instalar el paquete libreoffice.

2. El paquete libreoffice trae asociada la información que para funcionar correctamente tienen que instalarse una serie de paquetes adicionales. Estos paquetes adicionales se llaman dependencias. Obviamente, los paquetes adicionales o dependencias se instalarán de forma automática.

3. Las dependencias del paquete libreoffice también pueden tener nuevas dependencias y así sucesivamente.

    Por lo tanto, en el momento que se haya instalado el paquete libreoffice y todas las dependencias podremos usar LibreOffice.

    En el momento que un paquete requiere una dependencia que no está presente en los repositorios de nuestra distribución se generará una dependencia incumplida y por lo tanto no podremos instalar y usar el programa que estamos instalando. En el caso que tangamos paquetes rotos también se generarán dependencias incumplidas o errores de dependencias.

## Pasos a seguir para reparar paquetes rotos y solucionar dependencias incumplidas en Linux

    En el caso que tengan paquetes rotos les propongo aplicar alguna de las soluciones que detallaré a continuación.

> Nota: Al intentar reparar paquetes rotos se nos puede proponer eliminar una gran cantidad de paquetes para solucionar dependencias incumplidas. Por lo tanto, antes de aceptar alguna de las soluciones propuestas lean detenidamente lo que se realizará en el equipo.

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

    En el caso que sigan los problemas borraremos los archivos lock de apt y dpkg. Para ello ejecutaremos el siguiente comando en la terminal:

**sudo rm /var/lib/apt/lists/lock && sudo rm /var/cache/apt/archives/lock && sudo rm /var/lib/dpkg/lock**

> Nota: Las lock files tienen la función de evitar que 2 o más procesos accedan a los mismos datos.

    Después de ejecutar este último comando vuelvan a repetir la totalidad de comandos citados en este apartado.

### Reparar paquetes rotos y dependencias con la terminal y dpkg

    En el caso que la solución anterior no haya funcionado intentaremos eliminar el paquete roto que está generando problemas. Para ello ejecutaremos el siguiente comando:

**sudo apt-get remove**

    En el caso que no tengamos éxito averiguaremos el paquete que está generando problemas ejecutando el siguiente comando:

**sudo dpkg -l | grep ^..r**

    Acto seguido ejecutaremos el siguiente comando para intentar forzar la desinstalación del paquete que presenta problemas:

**sudo dpkg --remove --force-remove--reinstreq nombre_paquete**

> Nota: Deben remplazar nombre_paquete por el paquete roto o que está generando problemas.

    A continuación limpiaremos la cache local de nuestro repositorios ejecutando el siguiente comando:

**sudo apt-get clean && sudo apt-get autoclean**

    Finalmente intentaremos actualizar nuestro sistema operativo ejecutando el siguiente comando en la terminal:

**sudo apt-get update && sudo apt-get dist-upgrade**

    Si el sistema se actualiza sin problema habremos resuelto el problema de dependencias y paquetes rotos.