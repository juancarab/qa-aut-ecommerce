# Cypress Automation Test - E2E - Front

## Instalacion
1. Clonar o descargar repositorio.
2. Para instalar las dependencias ejecutar ```npm install``` dentro del proyecto.

## Algunas configuraciones extra:
1. En la carpeta ``/fixtures/fixtures-data`` encontraremos un archivo llamado data_to_signin.json donde se encuentran los datos a completar para el registro y para el login. 
El json tiene un campo ```"newEmail": "ejemplo@mail.com"``` donde debemos completarlo con un mail que aun no exista en el ecommerce, para que podamos registrar un nuevo usuario.

Como correr los tests?
Dentro del archivo package.json podemos ver los siguientes comandos:

```"cy:run": "cypress run"``` -> con cypress run podremos ejecutar la suite entera desde la terminal, donde los generara un reporte html dentro de la carpeta report y algunos videos de la ejecucion dentro de la carpeta videos. Ademas desde la terminal nos informara el estado de cada test.


```"cy:open": "./node_modules/.bin/cypress open"``` -> con este comando se abrira la UI de cypress donde podremos seleccionar que test correr y lo visualizaremos en tiempo real desde el browser que elijamos. Por defecto se usa google chrome.

## Versiones utilizadas
- node v16.13.2
- npm 8.1.2
