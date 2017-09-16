# Preact Acme
Sitio construido con la PreactJS para firebase functions &amp; hosting 

## Requisitos

* yarn o npm
* firebase-tools

## Instalación

1. Clonar el repositorio
2. Yarn: yarn o yarn install
   NPM: npm i
3. correr el comando: firebase init functions,hosting
4. instalar dentro de la carpeta funcions:
	Yarn: yarn add preact-render-to-string
	NPM: npm i -S preact-render-to-string

## USO

* Para poder arrangar el lado del cliente solo debe correr el siguiente comando
	Yarn: yarn start
	NPM: npm start

* Para generar los bundles tanto del lado del cliente como del servidor debe correr el siguiente commando
	Yarn: yarn run build
	NPM: npm run build

* Para poder probar las funciones creadas en firebase cloud debe correr el siguiente comando
	firebase serve --only functions,hosting

## Estructura

-config
---webpack.common.js
---webpack.dev.js
---webpack.prod.js
---webpack.serve.js
-functions
---index.js
---package.json
-public
---404.html
---index.html
-src
---client
------index.js
------page.js
---server
------index.js
------page.js
-package.json
