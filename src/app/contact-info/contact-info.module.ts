import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { ContactInfoComponent } from './contact-info.component';
import { ContactInfoRoutingModule } from './contact-info.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    ContactInfoRoutingModule,
    MatModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [ContactInfoComponent],
  exports: [ContactInfoComponent],
})
export class ContactInfoModule {}
