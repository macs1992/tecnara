Podemos llamarlo desde el html de la siguiente forma:

```html
<a routerLink="/route2/{{param}}"></a>
```


```typescript
//import 
import { ActivatedRoute } from '@angular/router';
//constructor de componente
constructor(private route: ActivatedRoute) {}
//acceder a la variable
const id = this.route.snapshot.paramMap.get('param');
```