## Campos

La tabla **Cookies** contiene los siguientes campos:

+ **Nombre**: El nombre de la cookie.
+ **Valor** Indica el valor de la cookie.
+ **Dominio**. Los hosts que pueden recibir la cookie
+ **Ruta de acceso**. La URL que debe existir en la URL solicitada para enviar el encabezado `Cookie`.
+ **Vence / Edad máxima**. La fecha de vencimiento o la antigüedad máxima de la cookie. Para las [cookies de sesión](https://developer.mozilla.org/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie), este valor es siempre `Session`.
+ **Size (Tamaño)**. El tamaño de la cookie, en bytes.
+ **HttpOnly**. Si es verdadero, este campo indica que la cookie solo debe usarse a través de HTTP y que no se permite la modificación de JavaScript.
+ **Seguridad**. Si es verdadero, este campo indica que la cookie solo se puede enviar al servidor a través de una conexión HTTPS segura.
+ **SameSite**. Contiene `Strict` o `Lax` si la cookie usa el atributo experimental `SameSite`.
+ **Clave de partición**. Para las [cookies con estado de partición independiente](https://developer.chrome.com/docs/privacy-sandbox/chips?hl=es-419), la clave de partición es el sitio de la URL de nivel superior que el navegador estaba visitando al inicio de la solicitud al extremo que configuró la cookie.
+ **Priority**. Contiene `Low`, `Medium` (predeterminado) o `High` si se usa el atributo obsoleto [prioridad de cookies](https://bugs.chromium.org/p/chromium/issues/detail?id=232693).

Para ver el valor de una cookie, selecciónala en la tabla. Para ver el valor sin codificación porcentual, marca check_box **Mostrar valores decodificados de URL**.
