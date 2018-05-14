# Servicios y Observables

Observables (rxjs)
``` typescript
//cuidado con importar rxjs entera que pesa mucho

import { Observable } from 'rxjs';

//mejor importar
import { Observable } from 'rxjs/Observable';
```

Es un tipo de objeto que puede ser usado como promesas en Angular 6. Te tienes que 'suscribir' a ellos.