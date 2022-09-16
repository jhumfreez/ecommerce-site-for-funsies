import { Component, OnInit } from '@angular/core';
import { mockSeller } from '../shared/mocks/seller.mock';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css'],
})
export class HeaderPanelComponent {
  readonly sellerName: string;
  constructor() {
    this.sellerName = mockSeller.name;
  }
}
