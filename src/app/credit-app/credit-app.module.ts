import { NgModule } from '@angular/core';
import { MatModule } from '../mat.module';
import { CreditAppContainerComponent } from './credit-app-container/credit-app-container.component';
import { CreditAppRoutingModule } from './credit-app.routing.module';
import { FormSectionComponent } from './form-section/form-section.component';
import { SubmissionConfirmationComponent } from './submission-confirmation/submission-confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [MatModule, CreditAppRoutingModule, ReactiveFormsModule],
  declarations: [
    CreditAppContainerComponent,
    FormSectionComponent,
    SubmissionConfirmationComponent,
  ],
})
export class CreditAppModule {}
