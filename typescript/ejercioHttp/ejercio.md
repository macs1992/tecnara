#Pruebas para conectarnos a una api rest

##Guia

##### Nueva carpeta 
#####npm init
#####tsc -init
##### npm install @types/node@8.* --save-dev
#####añadir a tsconfig.json 2 lineas : 
  + "outDir": "./out",      
  + "rootDir": "./src",
  
#####a partir de aqui tendres que intentar hacer es conectaros a vuestro restservice
###### Usaremos el modulo http de node
###### import * as http from 'http';
