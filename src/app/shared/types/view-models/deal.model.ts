// TODO: Probably want to rename this file.
export interface PurchasePlanView {
  // Label for deal, might not be needed.
  title: string;
  // Filler
  taxId: string;
  // Optional because downpayment not anticipated when final payment isn't deferred (Cash)
  downPayment?: number;
  // Whether final payment is not deferred, so related fields are not needed.
  isCash?: boolean;
  // Element ID prefix -- not displayed
  idPrefix: string;
  // Indicates view cannot be rendered.
  // TODO: Move this somewhere else.
  hasError?: boolean;
}
