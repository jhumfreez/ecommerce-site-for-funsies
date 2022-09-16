import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Step 1: Start Checkout
 * \-- Jump ahead to Trade-in
 * \-- Jump ahead to accessories
 * Step 2: Contact Info
 * Step 3: Trade-in
 * Step 4: Accessories
 * Step 5: Financing Application
 * Step 6: Documents
 * Step 7: Final Review
 *
 * Post-submit: Purchase Review
 */

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'start-checkout',
        loadChildren: () =>
          import('./start-checkout/start-checkout.module').then(
            (m) => m.StartCheckoutModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./contact-info/contact-info.module').then(
            (m) => m.ContactInfoModule
          ),
      },
      {
        path: 'trade-in',
        loadChildren: () =>
          import('./trade-in/trade-in.module').then(
            (m) => m.TradeInModule
          ),
      },
      {
        path: 'credit-application',
        loadChildren: () =>
          import('./credit-app/credit-app.module').then(
            (m) => m.CreditAppModule
          ),
      },
      {
        path: '**',
        redirectTo: 'start-checkout',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
