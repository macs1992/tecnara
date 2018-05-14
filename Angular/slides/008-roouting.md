# Routing basico

Generar un modulo nuevo
```
ng generate module app-routing --flat --module=app
```
Y generamos un modulo de la siguiente forma: 
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Ruta1Component} from './ruta1/ruta1.component';
import {Ruta2Component} from './ruta2/ruta2.component';
const routes:Routes=[
  { path: 'ruta1', component: Ruta1Component }, //component es el componente que construye en la ruta
  { path: 'ruta2', component: Ruta2Component }
]

@NgModule({
  imports:   [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
```
Y en el html usamos 
```html
<router-outlet></router-outlet> <!--Aqui se construye el componente que se monta en la ruta-->
<a router-link="/ruta1">Click me</a><!-- Asi seria un enlace a una ruta -->
```