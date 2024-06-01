# Comandos básicos

A continuación están los comandos de consola (terminal, shell) y Git usados en los retos de Git-it.

## Comandos básico Bash/Terminal

+ **Crear nueva carpeta (crear nuevo directorio)**
  `mkdir <NOMBREDELDIRECTORIO>`+ **Navegar hacia una carpeta (directorio) existente**
  `cd <NOMBREDELDIRECTORIO>`+ **Listar los elementos que hay dentro de una carpeta**
  `ls`

## Configuración de Git

+ **Verificar la versión de Git**
  `git --version`+ **Establecer tu nombre**
  `git config --global user.name "Your Name"`+ **Establecer tu email**
  `git config --global user.email youremail@example.com`+ **Establecer tu cuenta de Github (sensitivo a mayúsculas y minúsculas)**
  `git config --global user.username uSeRnAmE`

## Comandos básicos de Git

+ **Iniciar Git dentro de una carpeta**
  `git init`+ **Verificar el estado de los cambios**
  `git status`+ **Ver los cambios dentro de los archivos**
  `git diff`+ **Agregar los cambios de un archivo para crear un commit**
  `git add <NOMBREDEARCHIVO>`+ **Agregar todos los cambios en todos los archivos**
  `git add .`+ **Crear un commit (guardar) los cambios que agregaste con un corto mensaje descriptivo de los cambios**
  `git commit -m "mensaje descriptivo"`+ **Copiar un repositorio a tu computadora**
  `git clone <URL>`

## Ramas (branches) de Git

+ **Crear una nueva rama (branch)**
  `git branch <NOMBREDELARAMA>`+ **Moverse a una rama**
  `git checkout <NOMBREDELARAMA>`+ **Crear una rama nueva y moverse inmediatamente a la misma**
  `git checkout -b <NOMBREDELARAMA>`+ **Listado de las ramas**
  `git branch`+ **Renombrar la rama en la cual estás ubicado**
  `git branch -m <NUEVONOMBREDELARAMA>`

## Conexiones a repositorios remotos en Git (Git Remotes)

+ **Agregar una conexión remota**
  `git remote add <NOMBREDELREMOTO> <URLDELREMOTO>`+ **Agregar o cambiar la url de un remoto**
  `git remote set-url <NOMBREDELREMOTO> <NUEVAURLDELREMOTO>`+ **Ver las conexiones remotas**
  `git remote -v`

## Subir (pull) los cambios en Git

+ **Halar (pull in) cambios**
  `git pull`+ **Halar (pull in) los cambios desde una rama remota**
  `git pull <NOMBREDELREMOTO> <NOMBRERAMAREMOTA>`+ **Ver cambios remotos antes de halar**
  `git fetch --dry-run`

## Empujar (push) & en Git

+ **Empujar (push) cambios**
  `git push <NOMBREDELREMOTO> <NOMBREDELARAMA>`+ **Fucionar (merge) una rama a la rama actual**
  `git merge <NOMBREDELARAMA>`

## Borrar conexiones remotas y ramas en Git

+ **Borrar una rama local**
  `git branch -D <NOMBREDELARAMA>`+ **Borrar una rama remota**
  `git push <NOMBREREMOTO> --delete <NOMBREDELARAMA>`

---

#### Guías, libros y trucos

+ [Introducción a Git](http://git-scm.com/docs/gittutorial) por Git
+ [Pro Git Book](http://git-scm.com/book/en/v2) por Scott Shacon
+ [Simple Guide](http://rogerdudler.github.io/git-guide/) por Roger Dudler
+ [Github Help](https://help.github.com/) por GitHub
+ [Git Immersion](http://gitimmersion.com/) por Neo
+ [Git Cheatsheet](https://training.github.com/kit/) por GitHub
+ [GitHub Guides](https://guides.github.com) por GitHub
+ [GitHub Kaigi](https://speakerdeck.com/yunico/20140601-github-kaigi-yunico?slide=16) por Yunico Nagata

---

Fuente:

> [Git-it Guide](https://jlord.us/git-it/)
