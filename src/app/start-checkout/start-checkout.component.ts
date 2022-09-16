import { Component, OnInit } from '@angular/core';
import { mockPurchasePlans } from '../shared/mocks/deal.mock';
import { PurchasePlanView } from '../shared/types/view-models/deal.model';

@Component({
  selector: 'app-start-checkout',
  templateUrl: './start-checkout.component.html',
  styleUrls: ['./start-checkout.component.scss'],
})
export class StartCheckoutComponent implements OnInit {
  purchasePlans: PurchasePlanView[] = mockPurchasePlans;

  constructor() {}

  ngOnInit() {}

  onTaxIdChange(taxId: string) {}
}
