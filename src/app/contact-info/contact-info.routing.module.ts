import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info.component';
const routes: Routes = [
  {
    path: '',
    component: ContactInfoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactInfoRoutingModule {}
