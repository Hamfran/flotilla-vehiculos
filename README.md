# Flotilla vehiculos

## Este proyecto es una aplicación de gestión de vehículos de flotilla, desarrollada con Node.js y una base de datos MySQL.

Requisitos previos
Para levantar el ambiente local de desarrollo, asegúrate de tener instalados los siguientes programas:

Node.js (versión 20.x o superior) 
MySQL (o MySQL Workbench)
Instalación
Sigue los pasos a continuación para configurar el entorno de desarrollo local:

descarga este repositorio en tu máquina local usando el siguiente comando:
https://github.com/Hamfran/flotilla-vehiculos.git
descomprimelo 
importalo a tu Visual Code

Instalar dependencias:

instala las dependencias necesarias ejecutando:
npm install

Configurar las variables de entorno:

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_DATABASE=flotilla_vehiculos
Asegúrate de reemplazar tu_usuario_mysql y tu_contraseña_mysql con tus credenciales correctas de MySQL.


##Configurar la base de datos:

Importa el esquema de la base de datos a tu instalación de MySQL. Puedes hacerlo desde MySQL Workbench o línea de comandos. El archivo SQL con la estructura de la base de datos debe estar en tu repositorio, llamado flotilla_vehiculos.sql. Para importarlo desde MySQL Workbench:

Abre MySQL Workbench.
Selecciona tu servidor MySQL.
Haz clic en "File" > "Run SQL Script..." y selecciona el archivo flotilla_vehiculos.sql.
Ejecuta el script para crear la base de datos


Iniciar la aplicación:

Una vez configurada la base de datos, puedes iniciar la aplicación en modo desarrollo con el siguiente comando:
npm start
Esto ejecutará la aplicación utilizando nodemon, que reiniciará automáticamente el servidor cuando haya cambios en el código.

Acceder a la aplicación:

La aplicación estará corriendo en http://localhost:3000. El login principal se encuentra en:
http://localhost:3000/login.html
puedes ingresar usando 
el usuario admin y su contraseña 1234
o el usuario user y su contraseña 1234
el usuario admin tiene algunos modulos que el user no tiene, como crear usuarios, eliminar y actualizar datos 
