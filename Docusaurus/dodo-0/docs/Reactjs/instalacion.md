# Instalar `nvm`: Administrador de versiones de node

`nvm`es un **administrador de versiones para node.js, diseñado para instalarse por usuario e invocarse por shell** .

`nvm`funciona en cualquier shell compatible con POSIX (sh, dash, ksh, zsh, bash), en particular en estas plataformas: Unix, macOS y Windows WSL.

Para instalar o actualizar nvm, debe ejecutar el script de instalación. Para hacerlo, puede descargar y ejecutar el script manualmente o **usar el siguiente comando cURL** :

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`

[![](https://albertprofe.dev/images/reactjs/nvm1.png)](https://albertprofe.dev/images/reactjs/nvm1.png)

[![](https://albertprofe.dev/images/reactjs/nvm2.png)](https://albertprofe.dev/images/reactjs/nvm2.png)

[![](https://albertprofe.dev/images/reactjs/nvm3.png)](https://albertprofe.dev/images/reactjs/nvm3.png)

Figura 1: Utilice el comando cURL con bash para instalar NVM

`nvm install node # "node" is an alias for the latest version`

[![](https://albertprofe.dev/images/reactjs/nvm4.png)](https://albertprofe.dev/images/reactjs/nvm4.png)

[![](https://albertprofe.dev/images/reactjs/nvm5.png)](https://albertprofe.dev/images/reactjs/nvm5.png)

* [Instalación y actualización de nvm](https://github.com/nvm-sh/nvm?ref=softhints.com#install--update-script)

# 2 Inicio de ReactJS

## 2.1 [React directamente en HTML](https://albertprofe.dev/reactjs/reactjs-what-create.html#react-directly-in-html)

Empezamos incluyendo tres scripts, los dos primeros nos permiten escribir código React en nuestros JavaScripts, y el tercero, Babel, nos permite escribir sintaxis JSX y ES6 en navegadores más antiguos.

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin>
    </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      ReactDOM.render(<Hello />, document.getElementById('mydiv'))
    </script>

  </body>
</html>
```

## 2.2 [Instalar Nodejs y npm](https://albertprofe.dev/reactjs/reactjs-what-create.html#install-nodejs-and-npm)

Para crear un nuevo `React app`, necesitarás tener instalado el siguiente software en tu computadora:

1. `Node.js`: Este es un tiempo de ejecución de JavaScript que se utiliza para ejecutar código JavaScript fuera de un navegador web. Puede descargar la última versión desde `Node.js`el sitio web oficial (https://nodejs) o mediante un administrador de paquetes como Homebrew (Mac) o Chocolatey (Windows).
2. `npm`: este es el administrador de paquetes de `Node.js`, que se utiliza para administrar las bibliotecas y dependencias que usa su aplicación. npm se incluye con `Node.js`, por lo que no es necesario instalarlo por separado.

Consejo

`npx`es una herramienta que se incluye con npm, el administrador de paquetes para `Node.js`. Le permite ejecutar paquetes que están instalados local o globalmente en el directorio node_modules de su proyecto.

## 2.3 [`npx create-react-app`](https://albertprofe.dev/reactjs/reactjs-what-create.html#create-react-app)

Ya sea que estés usando React u otra biblioteca, [Create React App](https://create-react-app.dev/) te permite concentrarte en el código, no en crear herramientas.

Para crear un proyecto llamado my-app, ejecute este comando:

```
npx create-react-app my-app
```

## 2.4 [Instalar`create-react-app`](https://albertprofe.dev/reactjs/reactjs-what-create.html#install-create-react-app)

Actualizar sus herramientas de construcción suele ser una tarea desalentadora y que requiere mucho tiempo. Cuando se lanzan nuevas versiones de la aplicación Create React, puede actualizar con un solo comando:

```
npm install react-scripts@latest 
```

## 2.5 [React herramientas de desarrollo](https://albertprofe.dev/reactjs/reactjs-what-create.html#react-developer-tools)

La forma más sencilla de depurar sitios web creados con React es instalar la extensión del navegador React Developer Tools.

Utilice las herramientas de desarrollo de React para inspeccionar los componentes de React, editar accesorios y estados e identificar problemas de rendimiento.

* [Instalar para Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Instalar para Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* [Instalar para Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

Para otros navegadores (por ejemplo, Safari), instale el paquete npm react-devtools:

```
# Yarn
yarn global add react-devtools

# Npm
npm install -g react-devtools
```

## 2.6 [Carpeta de árbol](https://albertprofe.dev/reactjs/reactjs-what-create.html#tree-folder)

Crea automáticamente `React application`la carpeta de árbol básica, [de la siguiente manera](https://www.c-sharpcorner.com/article/folder-structure-in-react/) :

[![Carpeta de árbol inicial](https://albertprofe.dev/images/reactjs/tree-folder-example.png)](https://albertprofe.dev/images/reactjs/tree-folder-example.png "Carpeta de árbol inicial")

Carpeta de árbol inicial

* `.gitignore`: este archivo es el archivo estándar que utiliza la herramienta de control de código fuente git para identificar qué archivos y carpetas deben ignorarse al enviar el código. Hasta que este archivo exista, el comando create-react-app no ​​creará un repositorio de git en esta carpeta.
* `package.json`: este archivo contiene dependencias y scripts necesarios para el proyecto.
  * `name`- señala el nombre de tu aplicación.
  * `version`- se refiere a la versión actual que está utilizando la aplicación.
  * `private`: verdadero: es una configuración infalible que evita la publicación accidental de su aplicación de reacción como un paquete público en el ecosistema npm.
  * `dependencies`contendrá todos los módulos de nodo necesarios y las versiones necesarias para la aplicación. De forma predeterminada, se agregan 2 dependencias que incluyen React y React-Dom que permiten usar JavaScript. En nuestra demostración, utilizamos React versión 16.8.
  * `Scripts`especifique alias que se pueden usar para acceder a algún comando de React de una manera más eficiente.
* `package-lock.json`contiene un árbol de dependencia exacto que se instalará en /node_modules. Mientras un equipo trabaja en aplicaciones privadas, es útil asegurarse de que estén trabajando en la misma versión de dependencias y subdependencias. También mantiene un historial de cambios realizados en package.json para que, en cualquier momento, cuando sea necesario, se puedan consultar los cambios anteriores en el archivo package-lock.json.
* `node_modules`- Esta carpeta contiene todas las dependencias y subdependencias especificadas en package.json utilizado por la aplicación React. Contiene más de 800 subcarpetas, esta carpeta se agrega automáticamente en el archivo .gitignore.
* `public`- Esta carpeta contiene archivos que no requieren procesamiento adicional por parte del paquete web. El archivo index.html se considera un punto de entrada para la aplicación web. Aquí, el favicon es un ícono de encabezado y el archivo manifest.xml contiene la configuración cuando su aplicación se usa para Android.
* `src`- Esta carpeta es el corazón de la aplicación React, ya que contiene JavaScript que debe ser procesado por webpack. En esta carpeta, hay un componente principal App.js, sus estilos relacionados (App.css), conjunto de pruebas (App.test.js). index.js y su estilo (index.css); que proporcionan un punto de entrada a la aplicación. Por último, contiene RegisterServiceWorker.js que se encarga del almacenamiento en caché y la actualización de archivos para el usuario final. Ayuda a la capacidad fuera de línea y a una carga más rápida de la página después de la primera visita.

## 2.7 [Estructura del proyecto ReactJs](https://albertprofe.dev/reactjs/reactjs-what-create.html#reactjs-project-structure)

La estructura de carpetas se ve [así](https://www.xenonstack.com/insights/reactjs-project-structure) .

[![Estructura del proyecto ReactJs](https://albertprofe.dev/images/reactjs/react-directory-structure.png)](https://albertprofe.dev/images/reactjs/react-directory-structure.png "Estructura del proyecto ReactJs")

Estructura del proyecto ReactJs

* `Assets`: Como su nombre lo dice, contiene activos de nuestro proyecto. **Consiste en imágenes y archivos de estilo. Aquí podemos almacenar nuestros estilos globales.** Estamos centralizando el proyecto para poder almacenar los estilos basados ​​en páginas o componentes aquí. Pero incluso podemos mantener el estilo según la carpeta de páginas o la carpeta de componentes. Pero eso depende de la comodidad del desarrollador.
* `Layouts`: Como su nombre lo indica, **contiene diseños disponibles para todo el proyecto, como encabezado, pie de página,** etc. Podemos almacenar aquí el encabezado, pie de página o código de barra lateral y llamarlo.
* `Components`: Los componentes son los componentes básicos de cualquier proyecto de reacción. Esta carpeta consta de una colección de **componentes de la interfaz de usuario, como botones, modales, entradas, cargador, etc., que se pueden utilizar en varios archivos** del proyecto. Cada componente debe constar de un archivo de prueba para realizar una prueba unitaria, ya que será ampliamente utilizado en el proyecto.
* `Pages`: Los archivos en la carpeta de páginas indican la ruta de la aplicación de reacción. Cada archivo en esta carpeta contiene su ruta. Una página puede contener su subcarpeta. **Cada página tiene su estado y generalmente se usa para llamar a una operación asíncrona** . Suele estar formado por varios componentes agrupados.
* `Middleware`: Esta carpeta consta de middleware que **permite efectos secundarios en la aplicación** . Se usa cuando usamos **redux** con él. Aquí guardamos todo nuestro middleware personalizado.
* `Routes`: Esta carpeta consta **de todas las rutas de la aplicación. Consta de** rutas privadas, protegidas y de todo tipo. Aquí incluso podemos llamar a nuestra subruta.
* `Config`: Esta carpeta consta de un **archivo de configuración donde almacenamos las variables de entorno** en config.js. Usaremos este archivo para configurar configuraciones multientorno en su aplicación.
* `Services`: Esta carpeta se agregará **si usamos redux en su proyecto** . Dentro de él, hay 3 carpetas llamadas acciones, reductores y subcarpetas constantes para administrar estados. Las acciones y reductores se llamarán en casi todas las páginas, así que cree acciones, reductores y constantes según el nombre de las páginas.
* `Utils`: La carpeta Utils consta de algunas funciones utilizadas repetidamente que se utilizan comúnmente en el proyecto. Debe contener solo funciones y objetos js comunes, como opciones desplegables, condiciones de expresiones regulares, formato de datos, etc.

## 2.8 [Depuración de ReactJS](https://albertprofe.dev/reactjs/reactjs-what-create.html#debugging-reactjs)

Hay varios pasos que puedes seguir para hacerlo más `debugging process`fácil:

1. **Verifique la consola** : abra la consola del navegador y busque cualquier mensaje de error. A menudo, los errores se registrarán en la consola, lo que le dará una idea de dónde empezar a depurar. Puede obtener más información sobre el uso de la consola del navegador para depurar JavaScript aquí:`[MDN Web Docs - Console](https://developer.mozilla.org/en-US/docs/Web/API/Console)`

2. **Utilice React Developer Tools** : React Developer Tools es una extensión de navegador que proporciona un conjunto de herramientas para depurar y crear perfiles de componentes de React. Le permite inspeccionar las jerarquías de componentes de React y rastrear el flujo de datos entre componentes. Puede obtener más información sobre el uso de React Developer Tools aquí:`[React Developer Tools](https://github.com/facebook/react-devtools)`

3. **Utilice Console.log()** : coloque `console.log()`declaraciones en todo el código para imprimir variables y ver cómo cambian a medida que se ejecuta el código. Puede obtener más información sobre el uso `console.log()`para la depuración aquí:`[MDN Web Docs - Debugging JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript/Reference/Statements/console)`

4. **Puntos de interrupción** : establezca puntos de interrupción en su código utilizando las herramientas de desarrollo del navegador o un entorno de desarrollo integrado (IDE) como Visual Studio Code. Esto le permite pausar la ejecución de su código y recorrerlo línea por línea, inspeccionando las variables y el estado de sus componentes. Puede obtener más información sobre el uso de puntos de interrupción para la depuración aquí:`[Chrome DevTools - Debugging JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript)`

Instalar nvm: 
https://github.com/nvm-sh/nvm

curl -o- 
https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh
 | bash 
Instalar NodeJS:

nvm install node
comprobar instalación de NodeJS:

nodejs --version
comprobar instalación de npm:

npm --version
Añadir extensión: VS Code ES7+ React/Redux/React-Native/JS snippets

Crear aplicación de React:

npx create-react-app my-app .

cd my-app
npm start
Corre en puerto 3000

Limpiar aplicación: eliminar, setupTests.js, reportWebVitals.js, App.test.js y en index.js eliminar lo que no se use.