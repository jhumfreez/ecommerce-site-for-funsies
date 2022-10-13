import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { BUY_ROUTE_TASK_MAP } from '../app.routing.module';
import { TaskService } from '../shared/services/stepper/stepper.service';
import { TaskStatus, Task } from '../shared/types/view-models/step.model';

// TODO: Finish inserting https://stackblitz.com/edit/angular-ivy-d6ztjj

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.scss'],
})
export class ProgressStepperComponent implements OnInit {
  @Input()
  isLoading = false;

  @ViewChild('stepper')
  stepper: MatStepper;

  isLinear = false;
  isLocked = false;

  @Input() steps: Task[] = [];

  readonly taskStatus = TaskStatus;
  route_task_map = BUY_ROUTE_TASK_MAP;

  constructor(
    private stepperService: TaskService,
    // private router: Router,
    // breakpointObserver: BreakpointObserver
  ) {
    // Note: puts stepper in vertical orienation 
    // this.$stepperOrientation = breakpointObserver
    //   .observe('(min-width: 576px)')
    //   .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {}

  selectionChanged(event: StepperSelectionEvent) {
    const routeSegment = BUY_ROUTE_TASK_MAP.get(event.selectedIndex);
    this.stepperService.navigateSteps(
      event.previouslySelectedIndex,
      event.selectedIndex
    );
    // FIXME: after addressing router migration
    // this.router.navigate(['/' + routeSegment]);
  }
}
