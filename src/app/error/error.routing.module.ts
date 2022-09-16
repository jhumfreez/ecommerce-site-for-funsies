import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInvalidComponent } from './product-invalid/product-invalid.component';
import { SellerInvalidComponent } from './seller-invalid/seller-invalid.component';

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: 'product-invalid',
    component: ProductInvalidComponent,
  },
  {
    path: 'seller-invalid',
    component: SellerInvalidComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
