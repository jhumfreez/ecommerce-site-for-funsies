import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'scrollToError, [scrollToError]',
})
export class ScrollErrorDirective {
  constructor(private el: ElementRef) {}

  // FIXME: Currently requires button to be part of form, which emits Submit Event. Find an alternative.
  // Reference: https://stackblitz.com/edit/angular-ivy-j4eqml
  @HostListener('submit', ['$event.target'])
  scrollToError() {
    const invalidElem = Array.from(
      (this.el.nativeElement as HTMLElement).children
    ).find((x) => x.classList.contains('ng-invalid'));

    if (invalidElem) {
      invalidElem.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
}
