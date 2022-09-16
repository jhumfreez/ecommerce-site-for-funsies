import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mockTaxId } from '../../shared/mocks/deal.mock';

@Component({
  selector: 'app-deal-option',
  templateUrl: './deal-option.component.html',
  styleUrls: ['./deal-option.component.css'],
})
export class DealOptionComponent implements OnInit {
  @Input() title = '';
  @Input() taxId = '';
  @Input() downPayment = 0;
  @Input() isCash = false;
  @Input() hasError = false;

  @Output() setTaxId: EventEmitter<string> = new EventEmitter();

  // TODO: Move this elsewhere.
  // Backup option: [-.\d]+
  // Based on format of Brazilian CPF
  private readonly cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;

  myForm = new FormGroup({
    taxId: new FormControl('', [
      Validators.required,
      // XXX.XXX.XXX-XX
      Validators.pattern(this.cpfRegex),
    ]),
    downPayment: new FormControl(0, [Validators.required]),
  });
  constructor() {}

  ngOnInit() {
    if (this.isCash) {
      this.myForm.get('downPayment').disable();
    }
  }

  // To make things a little easier
  autofill() {
    this.myForm.patchValue({
      taxId: mockTaxId,
      downPayment: this.isCash ? 0 : 123,
    });
  }
}
