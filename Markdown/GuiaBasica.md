# Guía Básica de Markdown

## Contenidos:

1. [¿Qué son los lenguajes Markup?](https://vis4valentine.com/darkmode/guia-basica-de-markdown#qu%C3%A9-son-los-lenguajes-markup)

2. [¿Qué es Markdown?](https://vis4valentine.com/darkmode/guia-basica-de-markdown#qu%C3%A9-es-markdown)

3. [Razones para usar Markdown](https://vis4valentine.com/darkmode/guia-basica-de-markdown#razones-para-usar-markdown)

4. [Editores de Markdown](https://vis4valentine.com/darkmode/guia-basica-de-markdown#editores-de-markdown)

5. [Escribiendo en Markdown](https://vis4valentine.com/darkmode/guia-basica-de-markdown#escribiendo-en-markdown)

6. [Fuentes](https://vis4valentine.com/darkmode/guia-basica-de-markdown#fuentes)

Existen muchas formas de tomar notas en nuestros dispositivos electrónicos. Podemos tomar la vía más tradicional de abrir un procesador de textos, como MS Word y escribir, sin embargo, por eso mismo no se dan cuenta de la disposición de herramientas que les puede facilitar mucho el trabajo de crear anotaciones, documentos, clasificar información, o hacer materiales didácticos propios de formas sencillas y convenientes, es por eso que en esta guía, vamos a dar una introducción al lenguaje Markdown, y cómo puedes usarlo para tu beneficio.

## ¿Qué son los lenguajes Markup?

Son una serie de lenguajes con una sintaxis basada en etiquetas y símbolos, mediante los cuales dan formato, estructura y a los documentos y otros elementos adjuntos, sin interrumpir el proceso de escritura en sí. Son fácilmente legibles, escalables, flexibles y pueden editarse en cualquier aplicación que permita editar textos.

Los lenguajes Markup dominan internet, siendo el principal de estos HTML (***Hypertext Markup Language***), este es la base de sobre la cual se construyen el 94% de los sitios web existentes actualmente, muchas veces complementándose con *CSS*, un lenguaje de hojas de estilo que a menudo se combinan para mejorar su la apariencia del documento y crear estilos personalizados.

Existe una amplia variedad de lenguajes Markup, algunos se remotan tan atrás como finales de los 60's y principios de los 70's, como es el caso de **SGML** (*Standard Generalized Markup Language*), y hay quienes han desarrolado los suyos propios, como el caso de “*Wikitext*”, lenguaje utilizado en todos los artículos de Wikipedia; sin embargo, en la sección de “Herramientas para la educación digital” nos centraremos en Markdown por lo fácil y sencillo que es, y en un futuro, iniciaremos una guía de LaTex, el cual es un lenguaje de Markup mucho más complejo, pero ofrece muchas más posibilidades a nivel profesional y académico.

## ¿Qué es Markdown?

Es un lenguaje de Markup ligero creado por [John Gruber](https://en.wikipedia.org/wiki/John_Gruber "John Gruber") and [Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz "Aaron Swartz") en el año 2004. Está diseñado para ser fácilmente legible por seres humanos, con unos símbolos muy sencillos, los cuales permiten dar formato sin interrumpir el proceso de escritura.

Se puede pensar en Markdown como una radical simplificación de *HTML*, siendo a su vez fácilmente convertible y compatible con este, también tiene características en común con otros lenguajes como *AsciiDoc* y *Wikitext*.

## Razones para usar Markdown:

- **Flexibilidad:** Markdown puede utilizarse para múltiples propósitos: construir sitios web, hacer anotaciones, redactar documentos, correos electrónicos, libros y documentación técnica, incluso crear diapositivas de forma sencilla.

- **Universalidad:** Los archivos de Markdown pueden abrirse en cualquier editor de texto, en cualquier sistema operativo. Si bien hay aplicaciones especializadas, existe una amplia variedad, y si una aplicación no te gusta, puedes mover tus archivos a otra distinta libremente, a diferencia de los formatos de documentos propietarios, como los de MS Word o Apple Pages.

- **Durabilidad:** Debido a que los archivos de Markdown son libres y pueden abrirse en una amplia variedad de aplicaciones, es duradero en el tiempo, sin importar si la aplicación donde se creó originalmente ya no existe o ya no recibe actualizaciones. Esto lo hace muy útil en entornos académicos, donde los documentos debes ser capaces de conservarse durante muchos años..

- **Uso Web:** Una gran cantidad de sitios web y aplicaciones soportan el formato Markdown, como por ejemplo Reddit, Github, Gitlab, Telegram, Discord, Trello, Stack, Todoist, Notion. También puede usarse en Wordpress, Jerkyll, Ghost, SquareSpace, Hugo y Writefreely, y numerosas aplicaciones de toma de notas, las cuales veremos a continuación.

## Editores de Markdown:

Existe una amplia variedad de editores especializados en Markdown. Estos no solo te facilitan la redacción, sino que también te permiten previsualizar, guardar, y exportar tus escritos. Aquí podemos ver una tabla con algunos editores recomendados:

| Aplicación                                                                                | Plataformas                             | Licencia  | Coste                                        |
| ----------------------------------------------------------------------------------------- | --------------------------------------- | --------- | -------------------------------------------- |
| [Joplin](https://joplinapp.org/)                                                          | Android, MacOS, Windows, GNU/Linux, iOS | Libre     | Gratuita (Servicio de nube de pago opcional) |
| [Quillnote](https://play.google.com/store/apps/details?id=org.qosp.notes&hl=en&gl=US)     | Android                                 | Libre     | Gratuita                                     |
| [Ghostwriter](https://wereturtle.github.io/ghostwriter/)                                  | GNU/Linux, Windows                      | Libre     | Gratuita                                     |
| [MarkText](https://github.com/marktext/marktext/blob/develop/docs/i18n/spanish.md#readme) | GNU/Linux, Windows, MacOS               | Libre     | Gratuita                                     |
| [Stackedit](https://stackedit.io/)                                                        | Navegador Web                           | Libre     | Gratuita (Características Premium)           |
| [Dillinger.io](https://dillinger.io/)                                                     | Navegador Web                           | Libre     | Gratuita                                     |
| [Obsidian](https://obsidian.md/)                                                          | Windows, MacOS, GNU/Linux               | Privativa | Gratuito                                     |

En los sitios web de cada uno de estos hay instrucciones para descargar e instalarlos. Si utilizas GNU/Linux puedes encontrarlos en los repositorios de tu distribución. No son los únicos editores que existen, existen decenas de editores de Markdown, pero estos son los que más recomiendo, sobretodo para principiantes.

### Editores WYSIWYG:

La mayoría de procesadores de textos que conocemos, trabajan con lo que se conoce como **WYSIWYG** (*What you see is what you get*) que en inglés significa “*Lo que ves es lo que obtienes*” eso significa que da una visualización fiel de cómo se verá el documento final una vez sea exportado a un formato fácilmente legible. Sin embargo, la mayoría de editores de Markdown no trabajan de esa forma, sino que se dividen en 2 paneles: El panel de código, donde vez el formato crudo de lo que escribes, y el panel de previsualización, donde puedes apreciar el resultado final. La razón es que la aplicación debe renderizar el documento en tiempo real mientras vas escribiendo.

![Interfaz de Joplin con ambos paneles](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Joplin_accueil.png/640px-Joplin_accueil.png)

De los editores presentados en la tabla de arriba, el único que se clasifica como un **WYSIWYG** es Marktext, el cual te muestra en tiempo real cómo se verá el resultado final, manteniendo el minimalismo y la sencillez. Joplin y Obsidian también tienen un modo **WYSIWYG**, aunque este debe ser activado manualmente por el usuario.

![](https://github.com/marktext/marktext/raw/develop/docs/marktext.png?raw=true)

## Escribiendo en Markdown:

Ahora que has escogido e instalado un editor (o si decidiste practicar en texto plano), vamos a ver los comandos básicos:

### Títulos:

Para insertar un título, simplemente necesitas poner un `#` antes del mismo. Automáticamente ajustará al formato.

```markdown
# Título 1:
```

### Subtítulos:

Para los subtítulos sólo necesitas añadir 2 o más `#` según la jerarquía del título. Por ejemplo:

```markdown
## Subtítulo 1:
### Subtítulo 2:
#### Subtítulo 3:
##### Subtítulo 4:
###### Subtítulo 5:
```

Esto te ayudará a mantener una jerarquía y orden temático mientras escribes.

### Formatos de texto:

En Markdown puedes crear un texto en negrita simplemente añadiendo `**` justo antes y después de la palabra que quieras resaltar.

```markdown
Este **texto** debe estar en **negrita**.
```

Y el resultado final se verá como:

> “Este **texto** debe estar en **negrita**.”

De igual forma puedes hacer un texto en cursiva escribiendo `*` o alternativamente puedes usar un `_` antes y después de la palabra o el texto.

```markdown
Este *texto* debe estar en _cursiva_.
```

> “Este *texto* debe estar en *cursiva*.”

Para tachar un texto, debes colocar doble `~` antes y después del mismo.

```markdown
~~Este texto debe estar tachado~~
```

> “~~Este texto debe estar tachado~~“

Para colocar una línea por debajo, debes usar una expresión propia de *HTML* la cual es `<u> </u>`.

```markdown
<u>Este texto debe tener una línea por debajo</u>.
```

> “<u>Este texto debe tener una línea por debajo</u>.”

### Listas:

Existen 2 tipos de listas que puedes hacer: Numeradas y no numeradas.

#### Listas numeradas:

Simplemente añade un número `1` seguido de un punto y comienza a escribir los contenidos. Tan pronto presiones la tecla `ENTER` se añadirá la siguiente.

```markdown
1. Elemento 1
2. Elemento 2
3. Elemento 3
```

El resultado final es el siguiente:

1. Elemento 1
2. Elemento 2
3. Elemento 3

#### Listas no numeradas:

Puedes crearlas escribiendo un `-` o alternativamente un `*` al principio de una nueva línea, y cuando escribas los contenidos y presiones `ENTER`, se añadirá la siguiente automáticamente.

```markdown
- Elemento no numerado.
- Otro elemento no numerado.
- Otro elemento no numerado más.
```

El resultado final es el siguiente:

- Elemento no numerado.
- Otro elemento no numerado.
- Otro elemento no numerado más.

### Separadores:

Para añadir un separador en la página, debes utilizar `___`, o alternativamente `***`. El resultado final se ve así:

---

Estos separadores son esenciales a la hora de crear diapositivas, pues marcan la separación entre una lámina y la siguiente.

En el futuro cercano, realizaremos una guía para crear diapositivas en MD.

### Tablas:

Las tablas son muy sencillas de crear y expandir en MD. Es esencial el uso de `|` pues marca la separación entre las celdas. Cuando creas una tabla en MD, puedes convertirla fácilmente a un formato *CSV*, permitiendo ser importado fácilmente en editores de hojas de cálculo como MS Excel.

Para crear una tabla, primero necesitas un encabezado:

```markdown
|Columna 1|Columna 2|Columna 2|
```

Luego necesitamos un separador debajo del encabezado:

```markdown
|Columna 1|Columna 2|Columna 2|
|---------|---------|---------|
```

Los `-` que sirven como separación no necesitan ser de la longitud exacta del encabezado, pero ayudan a mantener un orden visual mientras escribes.

Luego, puedes seguir construyendo las filas hacia abajo añadiendo elementos a tu tabla.

```markdown
|Columna 1|Columna 2|Columna 2|
|---------|---------|---------|
|Elemento 1|Contenido 1|Datos 1|
|Elemento 2|Contenido 2|Datos 2|
|Elemento 3|Contenido 3|Datos 3|
```

El resultado final debería verse así:

| Columna 1  | Columna 2   | Columna 2 |
| ---------- | ----------- | --------- |
| Elemento 1 | Contenido 1 | Datos 1   |
| Elemento 2 | Contenido 2 | Datos 2   |
| Elemento 3 | Contenido 3 | Datos 3   |

También puedes añadir `:` entre los separadores para establecer la alineación del texto.

```markdown
|Columna 1|Columna 2|Columna 2|
|:---------|:---------:|---------:|
|Izquierda|Centro|Derecha|
```

El resultado final se ve así:

| Columna 1 | Columna 2 | Columna 2 |
| --------- | --------- | --------- |
| Izquierda | Centro    | Derecha   |

### Enlaces:

Los enlaces se pueden insertar simplemente pegándolos en el texto, pero, si quieres escribir un texto que contenga el enlace, puedes escribirlo dentro de los `[]`, de forma que se vería así:

```markdown
[Sitio web de DarkMode.](https://vis4valentine.com/darkmode)
```

Y el resultado final sería:

> [Sitio web de DarkMode.](https://vis4valentine.com/darkmode)

Es una forma sencilla y didáctica de llevar a tus lectores a otros sitios de tu web, o guiarlos directamente a tus fuentes.

### Imágenes:

Insertar imágenes es similar a insertar un enlace, con la diferencia de que se necesita incluir con `!` al principio:

`![Texto de la imagen opcional](Link a la imagen)`

Si la imagen que necesitas se ubica en la misma carpeta donde guardas tu proyecto en Markdown, solo necesitas escribir el nombre del archivo. También puedes colocar el link de una imagen obtenida de internet.

`![Logo Oficial de MD](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Markdown-blue-solid.svg/640px-Markdown-blue-solid.svg.png)`

El resultado es el siguiente:

`![Logo Oficial de MD](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Markdown-blue-solid.svg/640px-Markdown-blue-solid.svg.png)

### Citas en texto:

Para crear una cita de texto, necesitas poner `>` al inicio de la línea.

```markdown
> "Texto Citado"
```

Y el resultado final es:

> “Texto Citado”

### Bloques de código:

Si estás realizando una guía técnica (como yo en estoy precisos momentos), vas a necesitar un bloque de código especial dónde poner los comandos, sin que entre en conflicto con el resto del formato de tu documento. Puedes hacerlo añadiendo 3 acentos graves ``` antes y después de tu segmento de código. Vamos a hacer un ejemplo mostrando un “Hola Mundo” en Python.

```python

```

print('Hola Mundo')

```

```

Ahora, el resultado se vería así:

```python
print('Hola Mundo')
```

Claro que, hasta ahora has visto muchos de estos durante esta guía, de no ser así, no sería capaz de mostrarte la sintaxis cruda de MD.

También puedes especificar el lenguaje de programación al cual estás referenciando, poniendo el nombre justo después de los 3 acentos graves iniciales:

```markdown
```python
```

Dependiendo de tu editor, puede asignar una paleta de colores a la sintaxis del código.

Si quieres insertar código dentro de una línea de texto, puedes colocar un único acento grave antes de después del código.

Estos han sido los comandos básicos y esenciales para empezar a trabajar en Markdown. Las posibilidades pueden expandirse enormemente si se combina con *HTML*, e incluso *CSS*, pero eso ya queda para usuarios avanzados. En próximas entradas veremos los usos que se le puede dar a través de sus aplicaciones especializadas.

## Fuentes:

1. [Blog oficial de Josh Gruber](https://daringfireball.net/projects/markdown/)

2. [The Markdown Guide](https://www.markdownguide.org/)

Licencia: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es)