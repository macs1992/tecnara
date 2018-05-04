##Funciones Arrow (Flecha)
Son un tipo de funciones un poco especiales en typeScript

```typescript
//funciones flecha simple
const t = (x: number, y: number):number =>  (x + y) ;
//funciones flecha complejas
let esqueletoFuncion : (baseValue: number, increment: number)=> number;
esqueletoFuncion = (x: number, y: number): number => {
    let z = x + y;
    return z;
};
``` 