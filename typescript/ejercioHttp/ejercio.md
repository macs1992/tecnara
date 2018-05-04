# Pruebas para conectarnos a una api rest

## Guia

##### Nueva carpeta 
##### npm init
##### tsc -init
##### npm install @types/node@8.* --save-dev
##### añadir a tsconfig.json 2 lineas : 
  + "outDir": "./out",      
  + "rootDir": "./src",
  
##### a partir de aqui tendres que intentar hacer es conectaros a vuestro restservice
###### Usaremos el modulo http de node
###### import * as http from 'http';


```typescript
import * as http from 'http';
import * as https from 'https';

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

console.log("Hola");
```
