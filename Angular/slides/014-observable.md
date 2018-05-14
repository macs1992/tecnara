# Observable 

```typescript
//Uso simple 
import { Observable, of } from 'rxjs';

let personas:Persona=[...];
getPersona(): Observable<Persona[]> {
  return of(personas);
}
```
```typescript
personas:Persona[];
//Recoger info
onInit(){
    getPersona().subscribe(personas => this.personas = personas);
}
```