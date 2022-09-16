import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditAppContainerComponent } from './credit-app-container/credit-app-container.component';
import { SubmissionConfirmationComponent } from './submission-confirmation/submission-confirmation.component';

const routes: Routes = [
  {
    path: '',
    component: CreditAppContainerComponent,
  },
  {
    path: 'submission-confirmation',
    component: SubmissionConfirmationComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: '',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditAppRoutingModule {}
