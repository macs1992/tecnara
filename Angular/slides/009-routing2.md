# Angular 6 Routing

Variables en routing y redirecciones:
```typescript
const routes: Routes = [  
  { path: 'route1', component: Route1Component },
  { path: 'route2/:id', component: Route2Component },
  { path: '', redirectTo: '/route1', pathMatch: 'full' }
];
```