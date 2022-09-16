import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { DealOptionComponent } from './deal-option/deal-option.component';
import { StartCheckoutComponent } from './start-checkout.component';
import { StartCheckoutRoutingModule } from './start-checkout.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    StartCheckoutRoutingModule,
    MatModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [StartCheckoutComponent, DealOptionComponent],
})
export class StartCheckoutModule {}
