import { Component, OnInit } from '@angular/core';
import {
  mockMonthlyPayment,
  mockPreTaxItems,
} from '../shared/mocks/price-summary.mock';
import { PriceItem } from '../shared/types/view-models/price-item.model';

@Component({
  selector: 'app-price-summary',
  templateUrl: './price-summary.component.html',
  styleUrls: ['./price-summary.component.css'],
})
export class PriceSummaryComponent implements OnInit {
  // TODO: Move to state selector
  preTaxItems: PriceItem[] = mockPreTaxItems;
  monthlyPayment: PriceItem = mockMonthlyPayment;
  constructor() {}

  ngOnInit() {}
}
