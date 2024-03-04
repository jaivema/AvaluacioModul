[Linux Mint Installation Guide &mdash; Linux Mint Installation Guide documentation](https://linuxmint-installation-guide.readthedocs.io/en/latest/index.html)

Linux Mint viene en forma de una imagen ISO (un archivo .iso) que se puede usar para crear un DVD de arranque o una memoria USB de arranque.

Elige la edición correcta

Puede descargar Linux Mint desde el [sitio web de Linux Mint](https://linuxmint.com/download.php) .

## ¿Canela, MATE o Xfce?[](https://linuxmint-installation-guide.readthedocs.io/en/latest/choose.html#cinnamon-mate-or-xfce "Enlace permanente a este encabezado")

Linux Mint viene en 3 versiones diferentes, cada una con un entorno de escritorio diferente.

|          |                                                                |
| -------- | -------------------------------------------------------------- |
| Cinnamon | El escritorio más moderno, innovador y con todas las funciones |
| MATE     | Un escritorio más tradicional y más rápido                     |
| Xfce     | El escritorio más liviano                                      |

La versión más popular de Linux Mint es la edición Cinnamon. Cinnamon está desarrollado principalmente para y por Linux Mint. Es elegante, hermoso y está lleno de nuevas funciones.

Linux Mint también participa en el desarrollo de MATE, un entorno de escritorio clásico que es la continuación de GNOME 2, el escritorio predeterminado de Linux Mint entre 2006 y 2011. Aunque echa de menos algunas características y su desarrollo es más lento que el de Cinnamon, MATE utiliza menos recursos. y puede ejecutarse más rápido en computadoras más antiguas.

Xfce es un entorno de escritorio liviano. No admite tantas funciones como Cinnamon o MATE, pero es extremadamente estable y muy ligero en el uso de recursos.

Si no está seguro de qué escritorio elegir, comience con la edición Cinnamon. Pruébalos todos cuando tengas tiempo. Los tres tienen su propia audiencia dentro de la comunidad Linux Mint y todos son muy populares.

Crear el medio de arranque

La forma más sencilla de instalar Linux Mint es con una memoria USB.

Si no puede iniciar desde USB, puede utilizar un DVD en blanco.

Haga clic derecho en el archivo ISO y seleccione Crear memoria USB de arranque , o inicie Menú ‣ Accesorios ‣ Grabador de imágenes USB .

Seleccione su dispositivo USB y haga clic en Write .

Postinstalación

- [Controladores de hardware](https://linuxmint-installation-guide.readthedocs.io/en/latest/drivers.html)
- [Códecs multimedia](https://linuxmint-installation-guide.readthedocs.io/en/latest/codecs.html)
- [Ayuda de idioma](https://linuxmint-installation-guide.readthedocs.io/en/latest/locales.html)
- [Instantáneas del sistema](https://linuxmint-installation-guide.readthedocs.io/en/latest/timeshift.html)

**GParted: una potente herramienta de partición de discos para Linux**

[GParted](https://gparted.org/) se erige como una formidable herramienta de partición de discos en el ecosistema Linux y ofrece a los usuarios una solución sólida y fácil de usar para administrar particiones de discos en sus sistemas. Con su naturaleza de código abierto y una amplia gama de funciones, GParted se ha convertido en una herramienta de referencia tanto para principiantes como para usuarios experimentados que buscan una gestión eficiente del disco.

![gparted-main-window.png](assets/gparted-main-window.png)

Características de GParted:

1. **Cambio de tamaño y movimiento de particiones**
   - GParted permite a los usuarios cambiar el tamaño, mover y manipular particiones sin esfuerzo. Ya sea que necesite expandir una partición para acomodar más datos o reorganizar particiones existentes, GParted proporciona una interfaz sencilla para llevar a cabo estas tareas.
2. **Soporte del sistema de archivos**
   - La herramienta admite una variedad de sistemas de archivos, incluidos ext2, ext3, ext4, FAT16, FAT32, NTFS y más. Esta amplia compatibilidad garantiza que GParted se pueda utilizar en una amplia gama de dispositivos y sistemas de almacenamiento.
3. **Crear y eliminar particiones**
   - Los usuarios pueden crear nuevas particiones o eliminar las existentes según sea necesario. Esta flexibilidad es especialmente valiosa al configurar nuevas unidades, sistemas de arranque dual o reorganizar configuraciones de almacenamiento.
4. **Verificar y reparar sistemas de archivos**
   - GParted incluye herramientas para verificar y reparar sistemas de archivos, asegurando la integridad de los datos en las particiones. Esta característica es esencial para mantener un entorno de almacenamiento saludable y prevenir la corrupción de datos.

Usando GParted:

1. **Instalación**
   
   - GParted suele estar disponible en los repositorios de software de las principales distribuciones de Linux. Los usuarios pueden instalarlo usando su administrador de paquetes. Para sistemas basados ​​en Ubuntu, el comando es:
     
     ```
     sudo apt-get install gparted
     ```

2. **Lanzando GParted**
   
   - Después de la instalación, GParted se puede iniciar desde el menú de la aplicación o ejecutando el comando `gparted`en la terminal.

3. **Interfaz gráfica de usuario**
   
   - GParted proporciona una interfaz gráfica de usuario que muestra una representación visual de las particiones del disco, lo que facilita a los usuarios comprender y administrar su configuración de almacenamiento.

Comunidad y soporte

GParted cuenta con una comunidad activa y solidaria, y los usuarios pueden encontrar documentación, tutoriales y foros en el [sitio web oficial de GParted](https://gparted.org/) . El sitio web sirve como un recurso valioso tanto para usuarios nuevos como para usuarios experimentados, ofreciendo orientación sobre el uso eficaz de la herramienta y la solución de problemas comunes.

Mantener Linux actualizado

Ejecutando los siguientes comandos en el terminal:

- sudo apt-get update
- sudo apt-get upgrade
- sudo apt-get dist-upgrade
- sudo apt-get autoremove