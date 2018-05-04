##Interfaces


###Pametros opcionales
```typescript
interface Person{
    name: string;
    hijos?: Array<Person>;
    dni: number;
}
interface FutbolPlayer extends Person{
    team:string;
}
```