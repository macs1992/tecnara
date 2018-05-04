##Herencia en TypeScript

+ extends (para extender de otras clases)

+ implements (para extender de interfaces)

```typescript
interface Person{
    name:string;
}
class PersonQueSeSaluda implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return "Hello, " + this.name;
    }
}

let persona = new PersonQueSeSaluda("luis");
console.log(persona.greet);
```