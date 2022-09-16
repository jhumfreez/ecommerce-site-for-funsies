import { Injectable } from '@angular/core';
import { Step } from '../../types/view-models/step.model';
import { of, Observable } from 'rxjs';
import { mockSteps } from '../../mocks/stepper.mock';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  // TODO: Move to state selector
  steps: Observable<Step[]> = of(mockSteps);
  constructor() {}
}
