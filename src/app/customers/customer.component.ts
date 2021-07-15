import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor() {}

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),
    });
  }

  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
  populateTestDataSet(): void {
    this.customerForm.setValue({
      firstName: 'Shreyas',
      lastName: 'Prabhakar',
      email: 'Shreyas@gmail.com',
      sendCatalog: true,
    });
  }
  populateTestDataPatch(): void {
    this.customerForm.patchValue({
      firstName: 'Shreyas',
      email: 'pshreyasgowda@gmail.com',
      sendCatalog: false,
    });
  }
}
