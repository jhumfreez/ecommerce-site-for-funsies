import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
@NgModule({
  imports: [CommonModule, InsuranceRoutingModule],
  declarations: [InsuranceComponent],
})
export class InsuranceModuleModule {}
