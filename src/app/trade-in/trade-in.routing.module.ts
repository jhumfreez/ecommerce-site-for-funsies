import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeInContainerComponent } from './trade-in.container.component';

const routes: Routes = [
  {
    path: '',
    component: TradeInContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeInRoutingModule {}
