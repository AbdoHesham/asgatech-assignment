import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  { path: 'products', loadChildren: () => import('./layout/features/products/products.module').then(m => m.ProductsModule) },
  { path: 'orders', loadChildren: () => import('./layout/features/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'order-details/:id', loadChildren: () => import('./layout/features/order-details/order-details.module').then(m => m.OrderDetailsModule) },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
