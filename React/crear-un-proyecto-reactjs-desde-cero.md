# Crear un proyecto React desde cero.

1. Si aún no has creado un proyecto de **Node.js**, puedes iniciar uno utilizando `npm init`. Abre tu terminal, navega al directorio donde deseas crear tu proyecto y ejecuta el siguiente comando:
   
   `npm init -y`
   
   Este comando creará un archivo `package.json` con la configuración predeterminada en el directorio actual.

2. **Instala React y ReactDOM:**
   
   A continuación, necesitas instalar React y ReactDOM. Puedes hacerlo ejecutando el siguiente comando en tu terminal:
   
   `npm install react react-dom`

3. **Crea un archivo HTML:**
   
   Crea un archivo HTML en el directorio de tu proyecto. Puedes nombrarlo como quieras, por ejemplo, `index.html`. Aquí tienes un ejemplo básico de `index.html`:
   
   ```html
   <!DOCTYPE html> 
   <html lang="en"> 
   <head> 
       <meta charset="UTF-8"> 
       <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
       <title>React App</title> 
   </head> 
   <body> 
       <div id="root"></div> 
       <script src="main.js"></script> 
   </body> 
   </html>
   ```
   
   En este archivo HTML, hemos creado un div con el id "root" donde se montará nuestra aplicación de React. También hemos incluido un script que apunta a un archivo JavaScript llamado `main.js`.

4. **Crea archivos JavaScript para tu aplicación de React:**
   
   Crea tus componentes y lógica de React en archivos JavaScript o TypeScript dentro del directorio de tu proyecto. Por ejemplo, puedes tener un archivo `App.js` que contenga tu componente principal de React.

5. **Compila tu aplicación de React:**
   
   Utiliza un bundler como Webpack o Parcel para compilar tu aplicación de React en un solo archivo JavaScript que puedas incluir en tu HTML. Configura tu bundler para que compile tu código fuente de React y lo guarde en un archivo `bundle.js` en el directorio de tu proyecto.

6. **Abre tu archivo HTML en un navegador:**
   
   Abre tu archivo HTML en un navegador web para ver tu aplicación de React en acción.

Siguiendo estos pasos, podrás crear una instalación básica de React sin la página de inicio predeterminada proporcionada por Create React App. Esto te dará más control sobre la configuración y la estructura de tu proyecto de React.

Instalación de react y react-dom:

`npm install react react-dom`

Este comando instalará las bibliotecas principales de React (`react`) y ReactDOM (`react-dom`). `react-dom` <mark>es necesario para la renderización de React en el navegador web</mark>.

Después de ejecutar este comando, las bibliotecas de React estarán disponibles en tu proyecto y podrás comenzar a desarrollar tu aplicación utilizando React.

Una vez que hayas creado tu aplicación de React utilizando `npm init` y hayas instalado React y ReactDOM, el siguiente paso típico es configurar un entorno de desarrollo utilizando React Scripts. Aquí te muestro cómo proceder:

1. **Instala React Scripts:**
   
   React Scripts es un conjunto de scripts preconfigurados que te ayudan a iniciar y desarrollar tu aplicación de React. Puedes instalarlo ejecutando el siguiente comando en tu terminal, en el directorio de tu proyecto:
   
   Copy code
   
   `npm install react-scripts`

2. **Crea tu aplicación de React:**
   
   Puedes comenzar a desarrollar tu aplicación de React escribiendo código en archivos JavaScript o TypeScript en el directorio de tu proyecto. Normalmente, el punto de entrada para tu aplicación de React es un archivo llamado `index.js` o `App.js`, donde creas y renderizas tus componentes de React.

3. **Configura scripts en tu archivo `package.json`:**
   
   Una vez que hayas instalado React Scripts, puedes configurar los scripts de npm en tu archivo `package.json` para facilitar el desarrollo. Por ejemplo, puedes configurar un script para iniciar tu aplicación de desarrollo localmente.
   
   En tu archivo `package.json`, puedes agregar algo como esto:
   
   `"scripts": {   "start": "react-scripts start" }`
   
   El script `"start"` ejecutará `react-scripts start`, que iniciará un servidor de desarrollo local para tu aplicación de React.

4. **Inicia tu aplicación:**
   
   Ahora puedes iniciar tu aplicación de React ejecutando el siguiente comando en tu terminal:
   
   `npm start`
   
   Esto iniciará un servidor de desarrollo local y abrirá tu aplicación en tu navegador web predeterminado. Cualquier cambio que realices en tus archivos se reflejará automáticamente en el navegador sin necesidad de recargar la página.

Con estos pasos, habrás configurado un entorno de desarrollo básico para tu aplicación de React utilizando React Scripts. A partir de aquí, puedes comenzar a desarrollar tu aplicación, escribir componentes, estilos y lógica de aplicación según sea necesario.