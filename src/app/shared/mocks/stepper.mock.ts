import {
  Step,
  Task,
  TaskStatus,
  TaskType,
} from '../types/view-models/step.model';

// TODO: replace with this the mock below
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

export const mockTasks: Task[] = [
  {
    label: 'Create Your Deal',
    taskType: TaskType.PlanSelection,
    status: TaskStatus.Pristine,
    optional: false,
    availableOnCashDeal: true,
  },
  {
    label: 'Profile',
    taskType: TaskType.Profile,
    status: TaskStatus.Pristine,
    optional: false,
    availableOnCashDeal: true,
  },
  {
    label: 'Trade-in',
    taskType: TaskType.TradeIn,
    status: TaskStatus.Pristine,
    optional: true,
    availableOnCashDeal: true,
  },
  {
    label: 'Accessories',
    taskType: TaskType.Accessories,
    status: TaskStatus.Pristine,
    optional: true,
    availableOnCashDeal: true,
  },
  {
    label: 'F&I Products',
    taskType: TaskType.FIProducts,
    status: TaskStatus.Pristine,
    optional: true,
    availableOnCashDeal: false,
  },
  {
    label: 'Credit Application',
    taskType: TaskType.CreditApp,
    status: TaskStatus.Pristine,
    optional: true,
    availableOnCashDeal: false,
  },
  {
    label: 'Documents',
    taskType: TaskType.DocumentUpload,
    status: TaskStatus.Pristine,
    optional: true,
    availableOnCashDeal: true,
  },
  {
    label: 'Schedule Delivery',
    taskType: TaskType.ScheduleDelivery,
    status: TaskStatus.Pristine,
    optional: false,
    availableOnCashDeal: true,
  },
];
