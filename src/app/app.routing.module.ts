import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskType } from './shared/types/view-models/step.model';

/**
 * Step 1: Start Checkout
 * Step 2: Contact Info
 * Step 3: Trade-in
 * Step 4: Accessories
 * Step 5: Financing Application
 * Step 6: Documents
 * Step 7: Final Review
 *
 * Post-submit: Purchase Review
 */

export enum RoutePath {
  PlanSelection = 'start-checkout',
  Profile = 'profile',
  TradeIn = 'trade-in',
  Accessories = 'accessories',
  FIProducts = 'insurance',
  CreditApp = 'credit-application',
  DocumentUpload = 'documents',
  ScheduleDelivery = 'schedule-delivery',
}

export const BUY_ROUTE_TASK_MAP = new Map([
  [TaskType.PlanSelection, RoutePath.PlanSelection],
  [TaskType.Profile, RoutePath.Profile],
  [TaskType.TradeIn, RoutePath.TradeIn],
  [TaskType.Accessories, RoutePath.Accessories],
  [TaskType.FIProducts, RoutePath.FIProducts],
  [TaskType.CreditApp, RoutePath.CreditApp],
  [TaskType.DocumentUpload, RoutePath.DocumentUpload],
  [TaskType.ScheduleDelivery, RoutePath.ScheduleDelivery],
]);

// TODO: migrate routes to this config
// TODO (progress stepper): Guard finance/lease-only routes

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: RoutePath.PlanSelection,
//         title: 'Create Your Deal',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.Profile,
//         title: 'Profile',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.TradeIn,
//         title: 'Trade-in',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.Accessories,
//         title: 'Accessories',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.FIProducts,
//         title: 'F&I Products',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.CreditApp,
//         title: 'Credit App',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.DocumentUpload,
//         title: 'Documents',
//         component: ExampleComponent,
//       },
//       {
//         path: RoutePath.ScheduleDelivery,
//         title: 'Schedule Delivery',
//         component: ExampleComponent,
//       },
//       {
//         path: '**',
//         redirectTo: 'start-checkout',
//       },
//     ],
//   },
//   {
//     path: '**',
//     redirectTo: '',
//   },
// ];

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
          import('./trade-in/trade-in.module').then((m) => m.TradeInModule),
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
