import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInvalidComponent } from './product-invalid/product-invalid.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    ProductInvalidComponent,
    SellerInvalidComponent,
  ],
  exports: [NotFoundComponent, ProductInvalidComponent, SellerInvalidComponent],
})
export class ErrorModule {}
