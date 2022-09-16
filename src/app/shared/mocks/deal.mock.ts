import { PurchasePlanView } from '../types/view-models/deal.model';

export const mockTaxId = '012.345.678-90';

export const mockPurchasePlans: PurchasePlanView[] = [
  {
    title: 'Finance Plan',
    taxId: mockTaxId,
    downPayment: 555,
    idPrefix: 'finance-plan-',
  },
  {
    title: 'Lease Plan',
    taxId: mockTaxId,
    downPayment: 125,
    idPrefix: 'lease-plan-',
  },
  {
    title: 'Invalid Plan',
    taxId: mockTaxId,
    downPayment: -1,
    idPrefix: 'invalid-plan-',
  },
  {
    title: 'Cash Plan',
    taxId: mockTaxId,
    isCash: true,
    idPrefix: 'cash-plan-',
  },
];
