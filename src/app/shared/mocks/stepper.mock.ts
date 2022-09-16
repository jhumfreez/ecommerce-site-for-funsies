import { Step } from '../types/view-models/step.model';

export const mockSteps: Step[] = [
  {
    label: 'Payment Plan',
    isOptional: false,
    isLocked: false,
  },
  {
    label: 'Profile',
    isOptional: false,
    isLocked: false,
  },
  {
    label: 'Trade-in',
    isOptional: true,
    isLocked: false,
  },
  {
    label: 'Accessories',
    isOptional: true,
    isLocked: false,
  },
  {
    label: 'Insurance Products',
    isOptional: true,
    isLocked: false,
  },
  {
    label: 'Credit Application',
    isOptional: true,
    isLocked: false,
  },
  {
    label: 'Documents',
    isOptional: true,
    isLocked: false,
  },
  {
    label: 'Schedule Pick-up',
    isOptional: false,
    isLocked: false,
  },
];
