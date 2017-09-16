Preact Acme
===================
Sitio construido con la PreactJS para firebase functions &amp; hosting 

### Requisitos
* yarn o npm
* firebase-tools

### Instalación
1. Clonar el repositorio
2. Instalar las siguientes herramientas:
- **Yarn:** ```yarn o yarn install```
- **NPM:** ```npm i```
	
3. Correr los siguientes comandos, sin sobre escribir el archivo 'package.json':
```firebase init hosting```
```firebase init functions```
	
> **Nota:** Si sobreescribio el archivo package.json debe instalar las siguientes dependencias:
- **Yarn:** ```yarn add express preact preact-render-to-string```
- **NPM:** ```npm i -S express preact preact-render-to-string```


### USO

* Para poder arrangar el servidor del lado del cliente:
- **Yarn:** ```yarn run dev```
- **NPM:** ```npm run dev```
* Para generar los bundles tanto del lado del cliente:
- **Yarn:** ```yarn run build```
- **NPM:** ```npm run build```
* Para generar los bundles tanto del lado del servidor:
- **Yarn:** ```yarn run server```
- **NPM:** ```npm run server```
* Para poder probar las funciones creadas en firebase debe correr el siguiente comando:
	```firebase serve --only functions,hosting```

### Estructura

```
config
│   webpack.common.js
│   webpack.dev.js
│   webpack.prod.js
│   webpack.serve.js
│
functions
│   index.js
│   package.json
|
public
│   404.html
│   index.html
|
app
└───src
│	│
└───|───client
│   │   │   index.js
│   │   │   Page.js
└───|───server
│   │   │   index.js
│   │   │   Page.js
│
package.json
```
