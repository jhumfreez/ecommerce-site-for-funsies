import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartCheckoutComponent } from './start-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: StartCheckoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartCheckoutRoutingModule {}
