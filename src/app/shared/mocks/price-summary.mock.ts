import { PriceItem } from '../types/view-models/price-item.model';

export const mockPreTaxItems: PriceItem[] = [
  {
    label: 'MSRP',
    value: 1000,
  },
  {
    label: 'Discount',
    value: -100,
  },
  {
    label: 'Trade-in',
    value: -300,
    isRemovable: true,
  },
  {
    label: 'Cool Accessory',
    value: 85,
    isRemovable: true,
  },
  {
    label: 'Insurance',
    value: 120,
    isRemovable: true,
  },
  {
    label: 'Tax Amount',
    value: 300,
  },
];

export const mockMonthlyPayment: PriceItem = {
  label: 'Monthly Payment',
  value: 215,
};
