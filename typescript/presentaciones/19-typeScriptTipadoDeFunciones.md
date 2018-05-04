##Tipado de funciones 

Tambien es posible definir "esqueletos" de funciones
```typescript
let esqueletoFuncion : (baseValue: number, increment: number)=> number;
//esto no va
esqueletoFuncion = function (x:string , y:string ):string 
{ return x + y; };
//esto tampoco va
esqueletoFuncion = function (x:number , y:number ):string 
{ return x + y; };
// esto ya si
esqueletoFuncion = function (x:number , y:number ):number 
{ return x + y; };
```