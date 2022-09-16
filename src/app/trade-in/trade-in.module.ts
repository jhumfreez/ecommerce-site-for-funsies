import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TradeInRoutingModule } from './trade-in.routing.module';
import { TradeInContainerComponent } from './trade-in.container.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';
import { ProductAppraisalComponent } from './estimator/product-appraisal/product-appraisal.component';
import { ProductConditionComponent } from './estimator/product-condition/product-condition.component';
import { ProductOptionsComponent } from './estimator/product-options/product-options.component';
import { ProductSelectionComponent } from './estimator/product-selection/product-selection.component';
@NgModule({
  imports: [MatModule, TradeInRoutingModule, ReactiveFormsModule],
  declarations: [
    TradeInContainerComponent,
    ManualEntryComponent,
    ProductAppraisalComponent,
    ProductConditionComponent,
    ProductOptionsComponent,
    ProductSelectionComponent,
  ],
})
export class TradeInModule {}
