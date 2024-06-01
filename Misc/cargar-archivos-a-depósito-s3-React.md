Amazon Simple Storage Solution (S3) es una solución de almacenamiento basada en la nube para desarrolladores que les permite almacenar y recuperar volúmenes masivos de datos. Es altamente escalable y duradero, lo que lo convierte en una excelente opción para almacenar y administrar archivos en una aplicación web. En este tutorial, veremos cómo usar React JS para cargar archivos en un depósito de S3.

# Requisitos

+ [**aws-sdk**](https://www.npmjs.com/package/aws-sdk)

**Paso 1:** configurar un depósito S3

Primero debe crear un depósito de S3 en su cuenta de AWS para poder utilizar Amazon S3. Al ingresar a la Consola de administración de AWS y acceder al servicio S3, puede lograr esto. Para crear un nuevo depósito, haga clic en el botón " **Crear depósito** ". Elija la región donde desea guardar sus datos y asígnele un nombre único. Además, puede modificar la configuración del depósito, como los permisos de acceso y el control de versiones.

![](https://miro.medium.com/v2/resize:fit:700/1*Cu_V3kxYHXDPURXOn0isFQ.png)

**Paso 2:** hacer público el depósito

Ahora necesitamos editar la política del depósito para que nuestro archivo sea accesible públicamente. Abra su depósito, vaya a la pestaña **de permisos** , haga clic en el botón editar de la política del depósito y pegue el siguiente JSON en él.

![](https://miro.medium.com/v2/resize:fit:700/1*vkezAut0z23LX4Xn4UTe-w.png)

`Note: Replace **bucket-name** with the name of your bucket.`

**Paso 3:** editar la política CORS

Justo en la parte inferior de la pestaña **de permisos** , encontrará el **uso compartido de recursos entre orígenes (CORS)** . Pegue el siguiente JSON para permitir la carga de archivos desde la interfaz o recibirá un error de CORS al cargar archivos.

**Paso 4:** Instale el SDK de AWS para JavaScript

La instalación de AWS SDK para JavaScript permitirá que su aplicación React JS se comunique con S3.

npm instala aws-sdk

**Paso 5:** crea un cargador de archivos en React JS

Para permitir que los usuarios carguen archivos en S3, debe agregar una entrada de archivo a su aplicación React JS. Pegue el siguiente código en su aplicación.

En el código anterior, seleccionamos el archivo y **handleFileChange** básicamente almacena el archivo en nuestro estado **de archivo** que creamos usando el gancho **useState** .

**Paso 6:** importar aws-sdk

Importe aws-sdk en la parte superior de su código.

importar  AWS  desde  'aws-sdk' ;

**Paso 7:** configurar las credenciales de AWS y cargar el archivo en S3

Ahora crearemos una función que contenga nuestras credenciales de AWS y cargaremos el archivo en S3. El nombre de la función es **uploadFile** que se activa cuando hacemos clic en el botón **de carga** que se crea en el código anterior.

Necesitas reemplazar estas cadenas

+ **nombre-depósito:** nombre de su depósito
+ **región:** Región del cubo
+ **tu clave de acceso aquí:** Tu clave de acceso
+ **yoursecretaccesskeyaquí:** Tu clave de acceso secreta

Así que aquí está el código final.

`Note: I have added the secret key and access key in the code but it’s not a good idea to include them in the code. You should store them in a .env file and then access them.`

A continuación puede encontrar el repositorio de GitHub de muestra y una demostración en codesandbox.

[GitHub - Manntrix/react-s3-upload: How to upload files on an s3 bucket in React js](https://github.com/Manntrix/react-s3-upload?source=post_page-----97a3ccd519d1--------------------------------)
